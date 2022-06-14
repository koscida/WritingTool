import React, { useState } from "react"
const fantasy = require('./IPA/fantasyLang')

const {
	fantasyLanguageMaps,
	fantasyLanguageWritten,
} = fantasy
const dwarven = fantasyLanguageMaps.Dwarven


const Dictionary = (props) => {
	const [randomDictionary, setRandomDictionary] = useState([])
	// randomDictionary = [
	// 	{
	// 		word, 
	// 		IPA,
	// 		rule,
	// 	}
	// ]
	
	const handleGenerateRandomDictionary = (e) => {
		const newDictionary = [...Array(20).keys()].map( i => {
			const numConsonants = dwarven.consonants.length
			const numVowels = dwarven.vowels.length
			
			const maxStartConsonant = 3
			const maxEndConsonant = 2
			const maxSyllables = 3
			
			// build word of random length
			const newIPASyllables = [...Array(Math.floor(Math.random()*maxSyllables)+1).keys()].map( i => {
				// get num of consonants on on either side of vowel
				const numCStart = Math.floor(Math.random()*maxStartConsonant)+1
				const numCEnd = Math.floor(Math.random()*maxEndConsonant)
				
				// build new IPA
				const startConsonants = [...Array(numCStart).keys()].map(i => 
						dwarven.consonants[Math.floor(Math.random()*numConsonants)]
					)
				const endConsonants = [...Array(numCEnd).keys()].map(i => 
						dwarven.consonants[Math.floor(Math.random()*numConsonants)]
					)
				const vowel = dwarven.vowels[Math.floor(Math.random()*numVowels)]
				const newIPASyllable = [...startConsonants, vowel, ...endConsonants]
				
				return newIPASyllable
			})
			console.log("newIPASyllables", newIPASyllables)
			const newIPA = "/" + newIPASyllables.map(s=>s.join("")).join(" · ") + "/"
			console.log("newIPA", newIPA)
			
			// build english lettering version
			const newWord = newIPASyllables.reduce( (newWord, syllable) => 
				[...newWord, ...syllable.map( letter => fantasyLanguageWritten[letter] ? fantasyLanguageWritten[letter] : '?' )]
			, []).join("")
			console.log("newWord", newWord)
			
			
			return ({
				word: newWord,
				IPA: newIPA,
				rule: '',
			})
		})
		setRandomDictionary(newDictionary)
	}
	
	return <>
			<div>
				<h1>Dictionary</h1>
			</div>
			<div className="dictionary d-grid" style={{'gridTemplateColumns': 'repeat(4, 1fr)'}}>
				<p>Word</p>
				<p>Pronunciation</p>
				<p>Pronunciation</p>
				<p>Definition</p>
			</div>
			<div>
				<button onClick={handleGenerateRandomDictionary} className="btn btn-outline-primary">Generate Random Dictionary</button>
				<div className="dictionary d-grid" style={{'gridTemplateColumns': 'repeat(4, 1fr)'}}>
					{randomDictionary
						? randomDictionary.map( ({word, IPA, rule}) => <>
							<p key={word+"word"} className="border m-0">{word}</p>
							<p key={word+"ipa"} className="border m-0">{IPA}</p>
							<p key={word+"pro"} className="border m-0">{rule}</p>
							<p key={word+"def"} className="border m-0"></p>
						</>)
						: <></>}
				</div>
			</div>
		</>
}

export default Dictionary;