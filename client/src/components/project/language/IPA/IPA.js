import React, { useState } from "react"
const langauges = require('./languages')
const fantasy = require('./fantasyLang')

const {
	languageMaps,
	consonants,
	consonantsPlaces,
	consonantsManner,
	vowels,
	vowelsPlaces,
	vowelsManner,
} = langauges
const {
	fantasyLanguageMaps
} = fantasy
 
const int_to_string = (num) => {
	// console.log(num)
	var hex = ''
	// console.log("not string")
	hex = Math.round(num).toString(16);
	if (hex.length === 1)
		hex = '0' + hex;
	// console.log(hex)
	return hex;
}
const hex_to_string = (num) => {
	// console.log(num)
	var hex = ''
	// console.log("string")
	if(num.slice(0,1)==="#") 
	{
		num = num.slice(1,)
		// console.log(num)
	}
	hex = num
	// console.log(hex)
	return hex;
}
const blendAllColors = (colorsHex) => {
	// console.log('colorsHex', colorsHex)
	if(colorsHex.length > 1) {
		// adapted from: https://coderwall.com/p/z8uxzw/javascript-color-blender
		const colors = colorsHex.map(c => hex_to_string(c))
		// console.log('colors: ' + colors)
		
		// 3: convert colors to rgb
		const colorRGB = colors.map(c => 
			[
				parseInt(c[0] + c[1], 16), 
				parseInt(c[2] + c[3], 16), 
				parseInt(c[4] + c[5], 16)
			]
		)
		// console.log('colorRGB: ' + colorRGB)
	
		// 4: blend
		const colorBlendRGB = [ 
			colorRGB.reduce((r,c)=>r+c[0],0) / colorRGB.length, 
			colorRGB.reduce((g,c)=>g+c[1],0) / colorRGB.length, 
			colorRGB.reduce((b,c)=>b+c[2],0) / colorRGB.length,
		];
		// console.log('colorBlendRGB: ' + colorBlendRGB)
		
		// 5: convert to hex
		const colorBlendHex = '#' + 
			int_to_string(colorBlendRGB[0]) + 
			int_to_string(colorBlendRGB[1]) + 
			int_to_string(colorBlendRGB[2]);
		// console.log('colorBlendHex: ' + colorBlendHex)
		
		// return hex
		return colorBlendHex;
	} else {
		return colorsHex
	}
}


const IPA = (props) => {
	const [appliedConsonantMaps, setAppliedConsonantMaps] = useState({})
	const [consonantColors, setConsonantColors] = useState([])
	const [appliedVowelsMaps, setAppliedVowelsMaps] = useState({})
	const [vowelColors, setVowelColors] = useState([])
	// appliedConsonantMaps = {
	// 	'english' : {
	// 		color: color,
	// 		map: map
	// 	}
	// }
	// consonantColors = [
	// 	{
	// 		color: color,
	// 		languages: languages
	// 	}
	// ]
	
	
	const handleApplyMap = (type, lang) => {
		const appliedMaps = (type === 'consonants') ? appliedConsonantMaps : appliedVowelsMaps
		const setAppliedMaps = (type === 'consonants') ? setAppliedConsonantMaps : setAppliedVowelsMaps
		const setColors = (type === 'consonants') ? setConsonantColors : setVowelColors
		
		// set default map to current map
		let newMap = appliedMaps
		
		// if lang in map
		if(appliedMaps[lang]) {
			// remove lang from map
			newMap = Object.entries(appliedMaps).reduce( (newMap, [newLang, newData]) => {
				if(newLang !== lang)
					newMap[newLang] = newData
				return newMap
			}, {})
			
		} else {
			// add lang to map
			newMap = {
				...appliedMaps,
				[lang]: {
					color: "#" + Math.floor(Math.random()*16777215).toString(16), 
					map: languageMaps[lang] ? languageMaps[lang][type] : fantasyLanguageMaps[lang][type] 
				}
			}
		}
		// if the map was updated
		if(newMap !== appliedMaps)
		{
			// compute the blended colors
			computeBlendedColors(newMap, setColors)
			// set the new map
			setAppliedMaps(newMap)
		}
	}
	
	const handleColorChange = (type, lang, color) => {
		const appliedMaps = (type === 'consonants') ? appliedConsonantMaps : appliedVowelsMaps
		const setAppliedMaps = (type === 'consonants') ? setAppliedConsonantMaps : setAppliedVowelsMaps
		const setColors = (type === 'consonants') ? setConsonantColors : setVowelColors
		
		// set the color in the map
		const newMap = {
			...appliedMaps, 
			[lang]: {
				...appliedMaps[lang],
				color
			}
		}
		// set the new map
		setAppliedMaps(newMap)
		// update blended colors
		computeBlendedColors(newMap, setColors)
	}
	
	const computeBlendedColors = (appliedMaps, setColors) => {
		const activeMaps = Object.entries(appliedMaps)
		// if there are more than 2 colors
		if(activeMaps.length > 1) {
			// unique letters
			const uniqueLetters = [
				...new Set(activeMaps.reduce( (letters, [lang, {color, map}]) => 
					[...letters, ...map]
				, []))
			]
			console.log(uniqueLetters)
			
			// create a new color array
			//	first reduce to create list of all possible blended colors
			//	second reduce to create unique list of blended colors
			const newColors = uniqueLetters
				.reduce( (newColors, letter) => {
					// get the colors that will show on the letter
					const letterColorsAll = activeMaps.reduce( (letterColors, [lang, {color, map}]) => 
						map.includes(letter) ? [...letterColors, {color, lang}] : letterColors
					, [])
					
					// more than 1 color found for letter
					if(letterColorsAll.length > 1) {
						const letterColors = {
							color: blendAllColors(letterColorsAll.map(({color}) => color)),
							languages: letterColorsAll.map(({lang}) => lang).join(", ")
						}
						return [...newColors, letterColors]
					} else {
						// return same colors
						return newColors
					}
				}, [])
				.reduce( (newColors, {color, languages}) => 
					newColors.length === 0 
						? [{color, languages}]
						: newColors.reduce((r,{color})=>[...r, color],[]).includes(color)
							? newColors
							: [...newColors, {color, languages}]
				, [])
			console.log(newColors)
			
			// // set colors
			setColors(newColors)
		} else {
			// reset
			setColors([])
		}
		//console.log(appliedMaps, setColors)
	}
	
	
	const BlendedColors = ({colors}) => {
		// console.log(appliedMaps, active)
		return <div className="ms-auto d-flex flex-row align-items-center text-center">
			<p className="my-1 mx-1 py-1 px-2">Blended Colors: </p>
			{colors.map( ({color, languages}, i) => 
				<div style={{background: color, fontSize: '0.8em'}} key={i} className="my-1 mx-1 py-1 px-2">
					{languages}
				</div>
			)}
		</div>
	}
	const TableHeaderAndOptions = ({type}) => {
		const appliedMaps = type === 'consonants' ? appliedConsonantMaps : appliedVowelsMaps
		const colors = type === 'consonants' ? consonantColors : vowelColors
		return <div>
			<h2>{type}</h2>
			<div className="d-flex flex-row align-items-center flex-wrap">
				<span className="me-2">Show: </span>
				{[languageMaps, fantasyLanguageMaps].map(langMap=> Object.keys(langMap).map(language => {
					const appliedLangMap = appliedMaps[language]
					const className = appliedLangMap
						? 'btn-primary' 
						: 'btn-outline-primary'
					return (<div className="d-flex flex-row align-items-center" key={language}>
						<button 
							className={"btn me-2 " + className} 
							onClick={(e) => handleApplyMap(type, e.target.value)} 
							type='submit'
							name='map' 
							value={language}
							>
							{language}
						</button>
						{appliedLangMap
							? <input 
								type="color" 
								className="form-control form-control-color me-2" 
								onChange={(e) => handleColorChange(type, e.target.name, e.target.value)}
								name={language}
								value={appliedLangMap.color} 
								/>
							:''
						}
					</div>)}
				))}
				<BlendedColors colors={colors} />
			</div>
		</div>
	}
	
	const IPACell = ({letter, appliedMaps}) => {
		const text = letter 
				? letter.symbol 
				: ''
		
		const bgColor = letter 
			? blendAllColors(Object.values(appliedMaps)
				.reduce( (colors, {color, map}) => 
					map.includes(text)
						? [...colors, color]
						: colors
				, []))
			: '#eee' 
		const styles = {background: bgColor}
		
		return (
			<td style={styles} >
				{text}
			</td>
		)
	}
	
	return (<>
		<TableHeaderAndOptions type="consonants" />
		<table className="wikitable nowrap">
			<thead>
				<tr>
					<td></td>
					{Object.entries(consonantsPlaces).map(([place,subPlaces])=>
						<th scope="col" colSpan={subPlaces.length*2} key={place}>
							{place}
						</th>
					)}
				</tr>
				<tr>
					<td></td>
					{Object.entries(consonantsPlaces).map(([place,subPlaces])=>
						subPlaces.map(subPlace => 
							<th scope="col" colSpan={2} key={subPlace}>
								{subPlace}
							</th>
						)
					)}
				</tr>	
			</thead>
			<tbody>
				{consonantsManner.map(manner => 
					<tr key={manner}>
						<th scope="row">{manner}</th>
						{Object.entries(consonantsPlaces).map(([place,subPlaces])=>
							subPlaces.map(subPlace => 
								['voiceless', 'voiced'].map(voice => {
									let letter = consonants.filter( c => (manner === c.manner && place === c.place && subPlace === c.subPlace && voice === c.voice ) )[0]
									//if(letter) letter = letter[0]
									return <IPACell 
										letter={letter} 
										appliedMaps={appliedConsonantMaps}
										key={place+subPlace+manner+voice} />
								})
							)
						)}
					</tr>
				)}
			</tbody>
		</table>
		
		<TableHeaderAndOptions type="vowels" />
		<table className="wikitable nowrap">
			<thead>
				<tr>
					<td></td>
					{vowelsPlaces.map((place) =>
						<th scope="col" colSpan='2' key={place}>
							{place}
						</th>
					)}
				</tr>
			</thead>
			<tbody>
				{vowelsManner.map(manner => 
					<tr key={manner}>
						<th scope="row">{manner}</th>
						{vowelsPlaces.map(place =>
							['unrounded', 'rounded'].map(round => {
								let letter = vowels.filter( c => (manner === c.manner && place === c.place && round === c.round ) )[0]
								//if(letter) letter = letter[0]
								return <IPACell 
									letter={letter} 
									appliedMaps={appliedVowelsMaps}
									key={place+manner+round} />
							})
						)}
					</tr>
				)}
			</tbody>
		</table>
	</>)
}

export default IPA