import React, { useState } from "react"
const langauges = require('./languages')

const {
	languageMaps,
	consonants,
	consonantsPlaces,
	consonantsManner,
	vowels,
	vowelsPlaces,
	vowelsManner,
} = langauges

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
const blendTwoColors = (color1Hex, color2Hex) => {
	// adapted from: https://coderwall.com/p/z8uxzw/javascript-color-blender
	// console.log('color1Hex: ' + color1Hex + ', color2Hex: ' + color2Hex)
	const color1 = hex_to_string(color1Hex)
	const color2 = hex_to_string(color2Hex)
	// console.log('color1: ' + color1 + ', color2: ' + color2)
	
	// 3: we have valid input, convert colors to rgb
	const color1RGB = [parseInt(color1[0] + color1[1], 16), parseInt(color1[2] + color1[3], 16), parseInt(color1[4] + color1[5], 16)];
	const color2RGB = [parseInt(color2[0] + color2[1], 16), parseInt(color2[2] + color2[3], 16), parseInt(color2[4] + color2[5], 16)];
	// console.log('color1RGB: ' + color1RGB + ', color2RGB: ' + color2RGB)
	
	// 4: blend
	const color3RGB = [ 
		(color1RGB[0] + color2RGB[0]) / 2, 
		(color1RGB[1] + color2RGB[1]) / 2, 
		(color1RGB[2] + color2RGB[2]) / 2,
	];
	// console.log('color3RGB: ' + color3RGB)
	
	// 5: convert to hex
	const color3Hex = '#' + int_to_string(color3RGB[0]) + int_to_string(color3RGB[1]) + int_to_string(color3RGB[2]);
	// console.log('color3Hex: ' + color3Hex)
	
	// return hex
	return color3Hex;
}
const blendAllColors = (colors) => {
		if(colors.length > 1) {
			const blended = [...Array(colors.length-1)].reduce( (blend, color, i) => {
				return [...blend, blendTwoColors(colors[i], colors[i+1])]
			}, [])
			return blendAllColors(blended)
		}
		else {
			return colors[0]
		}
	}

const defaultColors = ['#0080ff', '#ff00ff', '#00ff40', '#ffff00']

const IPA = (props) => {
	const [appliedMaps, setAppliedMaps] = useState({
		consonants: Object.keys(languageMaps).reduce((m,l) => ({...m,[l]:{}}),{}),
		vowels: Object.keys(languageMaps).reduce((m,l) => ({...m,[l]:{}}),{}),
	})
	// appliedMaps = {
	// 	'consonants': {
	// 		'english': {
	// 			color: color,
	// 			map: map
	// 		}
	// 	}
	// }
	
	
	const handleApplyMap = (type, lang) => {
		setAppliedMaps({
			...appliedMaps, 
			[type]: {
				...appliedMaps[type],
				[lang]: (Object.keys(appliedMaps[type][lang]).length > 0 
					? {}
					: {color: defaultColors[Object.values(appliedMaps[type]).reduce((c,m)=>c+(Object.keys(m).length>0?1:0), 0)], map: languageMaps[lang][type]}
				)
			}
		})
	}
	
	const handleColorChange = (type, lang, color) => {
		setAppliedMaps({
			...appliedMaps, 
			[type]: {
				...appliedMaps[type],
				[lang]: {
					...appliedMaps[type][lang],
					color
				}
			}
		})
	}
	
	const BlendedColors = ({type}) => {
		const active = Object.entries(appliedMaps[type]).filter( ([l, m]) => Object.keys(m).length > 0 )
		// console.log(consonantsActive)
		return (
			active.length > 1
				? <div className="ms-auto d-flex flex-row align-items-center">
						<p className="my-0 mx-1">Blended Colors</p>
						{[...Array(active.length).keys()].map( i => {
							return [...Array(active.length-1).keys()].map( j => {
								if(i < j+1) {
									const bgColor = blendTwoColors(active[i][1].color, active[j+1][1].color)
									return <div style={{background: bgColor}} key={i+" "+j} className="my-0 mx-1 py-1 px-2">{active[i][0] + " + " + active[j+1][0]}</div>
								} else 
									return ''
							})
						})}
						{active.length > 2
							? <div 
								style={{background: blendAllColors(active.reduce((c,[l,m])=>[...c,m.color],[]))}} 
								className="my-0 mx-1 py-1 px-2">All</div>
							: <></>}
					</div>
				: <></>
		)
	}
	
	const TableHeaderAndOptions = ({type}) => {
		return <div>
			<h2>{type}</h2>
			<div className="d-flex flex-row align-items-center">
				<span className="me-2">Show: </span>
				{Object.keys(languageMaps).map(language => 
					<div className="d-flex flex-row align-items-center" key={language}>
						<button 
							className={"btn me-2 " + (Object.keys(appliedMaps[type][language]).length > 0 ? 'btn-primary' : 'btn-outline-primary')} 
							onClick={(e) => handleApplyMap(type, e.target.value)} 
							type='submit'
							name='map' 
							value={language}
							>
							{language}
						</button>
						{Object.keys(appliedMaps[type][language]).length > 0 ? 
							<input 
								type="color" 
								className="form-control form-control-color me-2" 
								onChange={(e) => handleColorChange(type, e.target.name, e.target.value)}
								name={language}
								value={appliedMaps[type][language].color} 
								/>
						:''}
					</div>
				)}
				<BlendedColors type={type} />
			</div>
		</div>
	}
	
	return (<>
		<TableHeaderAndOptions type="consonants" />
		<table className="wikitable nowrap">
			<thead>
				<tr>
					<td></td>
					{Object.entries(consonantsPlaces).map(([key,value])=>
					<th scope="col" colSpan={value.length*2} key={key}>
						{key}
					</th>)}
				</tr>
				<tr>
					<td></td>
					{Object.entries(consonantsPlaces).map(([key,value])=>
						value.map(place => 
							<th scope="col" colSpan={2} key={place}>
								{place}
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
									const appearsIPA = consonants[manner] && 
													consonants[manner][place] && 
													consonants[manner][place][subPlace] &&
													consonants[manner][place][subPlace][voice]
									const text = appearsIPA ? consonants[manner][place][subPlace][voice].symbol : ''
									
									const bgColor = !appearsIPA 
										? '#eee' 
										: blendAllColors(
											Object.entries(appliedMaps['consonants'])
												.filter( ([l, m]) => Object.keys(m).length > 0 && m.map.includes(text) )
												.reduce( (c, [l, m]) => [...c,m.color], [] )
										)
									const styles = {background: bgColor}
									return (
										<td key={place+subPlace+manner+voice} style={styles} >
											{text}
										</td>
									)
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
					</th>)}
				</tr>
			</thead>
			<tbody>
				{vowelsManner.map(manner => 
					<tr key={manner}>
						<th scope="row">{manner}</th>
						{vowelsPlaces.map(place =>
							['unrounded', 'rounded'].map(round => {
								const appearsIPA = vowels[manner] && 
												vowels[manner][place] && 
												vowels[manner][place][round]
								const text = appearsIPA ? vowels[manner][place][round].symbol : ''
								
								const bgColor = !appearsIPA 
									? '#eee' 
									: blendAllColors(
										Object.entries(appliedMaps['vowels'])
											.filter( ([l, m]) => Object.keys(m).length > 0 && m.map.includes(text) )
											.reduce( (c, [l, m]) => [...c,m.color], [] )
									)
								const styles = {background: bgColor}
								return (
									<td key={place+manner+round} style={styles} >
										{text}
									</td>
								)
							})
						)}
					</tr>
				)}
			</tbody>
		</table>
	</>)
}

export default IPA