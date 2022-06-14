const consonantsFormatted = {
	'nasal' : {
		labial : {
			bilabial : {
				voiceless: {
					symbol: 'm̥',
					sound: '',
					file: '',
					occurrence: {
						french: {
							word: 'prisme',
							wordFormatted: 'pris<b>m</b>e',
							IPA: '[pχis̪m̥]',
							meaning: 'prism',
						},
					}
				},
				voiced: {
					symbol: 'm',
					sound: '',
					file: 'Bilabial_nasal.ogg',
					varieties: {
						plain : 'm',
						palatalised: 'mʲ',
						velarised: 'mˠ', 	
						pharyngealized: 'mˤ', 	
					},
					occurrence: {
						english: {
							word: 'him',
							wordFormatted: 'hi<b>m</b>',
							IPA: '[hɪm]',
							meaning: 'him',
						},
						spanish: {
							word: 'grumete',
							wordFormatted: 'gru<b>m</b>ete',
							IPA: '[ɡɾuˈme̞te̞]',
							meaning: 'cabin boy',
						},
						french: {
							word: 'manger',
							wordFormatted: '<b>m</b>anger',
							IPA: '[mɑ̃ʒe]',
							meaning: 'to eat',
						},
						japanese: {
							word: '乾杯 / kampai',
							wordFormatted: '乾杯 / ka<b>m</b>pai',
							IPA: '[kampai]',
							meaning: 'cheers',
						},
					},
				},
			}, 
			labiodental : {
				voiced: {
					symbol: 'ɱ',
					alternatives: ['m̪'],
					sound: '',
					file: 'Labiodental_nasal.ogg',
					occurrence: {
						english: {
							word: 'symphony',
							wordFormatted: 'sy<b>m</b>phony',
							IPA: '[ˈsɪɱfəni]',
							meaning: 'symphony',
						},
						spanish: {
							word: 'influir',
							wordFormatted: 'i<b>n</b>fluir',
							IPA: ' 	[iɱfluˈiɾ]',
							meaning: 'to have influence',
						},
					},
				},
			}, 
			linguolabial : {
				voiced: {
					symbol: 'n̼',
					alternatives: ['m̺'],
					sound: '',
					file: 'Linguolabial_nasal.ogg',
				},
			},
		}, 
		coronal: {
			alveolar : {
				voiceless: {
					symbol: 'n̥',
					sound: '',
					file: '',
				},
				voiced: {
					symbol: 'n',
					sound: '',
					file: 'Alveolar_nasal.ogg',
					occurrence: {
						english: {
							word: ' 	nice',
							wordFormatted: '<b>n</b>ice',
							IPA: '[naɪs]',
							meaning: 'nice',
						},
						french: {
							word: 'connexion',
							wordFormatted: 'co<b>nn</b>exion',
							IPA: '[kɔn̻ɛksjɔ̃]',
							meaning: 'connection',
						},
						japanese: {
							word: '反対 / hantai',
							wordFormatted: '反対 / ha<b>n</b>tai',
							IPA: '[hantai]',
							meaning: 'opposite',
						},
						spanish: {
							word: 'nada',
							wordFormatted: '<b>n</b>nada',
							IPA: ' 	[ˈnäð̞ä]',
							meaning: 'nothing',
						},
					},
				},
			},
			retroflex : {
				voiceless: {
					symbol: 'ɳ̊',
					sound: '',
					file: '',
				},
				voiced: {
					symbol: 'ɳ',
					sound: '',
					file: 'Retroflex_nasal.ogg',
				},
			},
		}, 
		dorsal: {
			palatal : {
				voiceless: {
					symbol: 'ɲ̊',
					sound: '',
					file: '',
				},
				voiced: {
					symbol: 'ɲ',
					sound: '',
					file: '',
				},
			}, 
			velar : {
				voiceless: {
					symbol: 'ŋ̊',
					sound: '',
					file: '',
				},
				voiced: {
					symbol: 'ŋ',
					sound: '',
					file: '',
				},
			},
			uvular : {
				voiced: {
					symbol: 'ɴ',
					sound: '',
					file: '',
				},
			},
		}, 
	},
	'plosive': {
		labial : {
			bilabial : {
				voiceless: {
					symbol: 'p',
					sound: '',
					file: 'Voiceless_bilabial_plosive.ogg',
				},
				voiced: {
					symbol: 'b',
					sound: '',
					file: 'Voiced_bilabial_plosive.ogg',
				},
			}, labiodental : {
				voiceless: {
					symbol: 'p̪',
					sound: '',
					file: '',
				},
				voiced: {
					symbol: 'b̪',
					sound: '',
					file: '',
				},
			}, linguolabial : {
				voiceless: {
					symbol: 't̼',
					sound: '',
					file: 'Voiceless_linguolabial_stop.ogg',
				}, voiced: {
					symbol: 'd̼',
					sound: '',
					file: 'Voiced_linguolabial_stop.ogg',
				},
			},
		}, coronal: {
			dental : {
				voiceless: {
					symbol: 't̪',
					sound: '',
					file: 'Voiceless_dental_stop.ogg',
				},
				voiced: {
					symbol: 'd̪',
					sound: '',
					file: 'Voiced_dental_stop.ogg',
				},
			},
			alveolar : {
				voiceless: {
					symbol: 't',
					sound: '',
					file: 'Voiceless_alveolar_plosive.ogg',
				},
				voiced: {
					symbol: 'd',
					sound: '',
					file: 'Voiced_alveolar_plosive.ogg',
				},
			},
			retroflex : {
				voiceless: {
					symbol: 'ʈ',
					sound: '',
					file: 'Voiceless_retroflex_stop.oga',
				},
				voiced: {
					symbol: 'ɖ',
					sound: '',
					file: 'Voiced_retroflex_stop.oga',
				},
			},
		}, dorsal: {
			palatal : {
				voiceless: {
					symbol: 'c',
					sound: '',
					file: 'Voiceless_palatal_plosive.ogg',
				},
				voiced: {
					symbol: 'ɟ',
					sound: '',
					file: 'Voiced_palatal_plosive.ogg',
				},
			}, velar : {
				voiceless: {
					symbol: 'k',
					sound: '',
					file: 'Voiceless_velar_plosive.ogg',
				},
				voiced: {
					symbol: 'ɡ',
					sound: '',
					file: 'Voiced_velar_plosive_02.ogg',
				},
			}, uvular : {
				voiceless: {
					symbol: 'q',
					sound: '',
					file: 'Voiceless_uvular_plosive.ogg',
				}, voiced: {
					symbol: 'ɢ',
					sound: '',
					file: 'Voiced_uvular_stop.oga',
				},
			},
		}, laryngeal: {
			epiglottal : {
				voiceless: {
					symbol: 'ʡ',
					sound: '',
					file: 'Epiglottal_stop.ogg',
				},
			},
			glottal : {
				voiceless: {
					symbol: 'ʔ',
					sound: '',
					file: 'Glottal_stop.ogg',
				},
			},
		},
	},
	'sibilant-affricate': {
		coronal: {
			dental : {
				voiceless: {
					symbol: 't̪s̪',
					sound: '',
					file: 'Voiceless_dental_sibilant_affricate.oga',
				},
				voiced: {
					symbol: 'd̪z̪',
					sound: '',
					file: 'Voiced_dental_sibilant_affricate.oga',
				},
			},
			alveolar : {
				voiceless: {
					symbol: 'ts',
					sound: '',
					file: 'Voiceless_alveolar_sibilant_affricate.oga',
				},
				voiced: {
					symbol: 'dz',
					sound: '',
					file: 'Voiced_alveolar_sibilant_affricate.oga',
				},
			}, 
			postalveolar : {
				voiceless: {
					symbol: 't̠ʃ',
					sound: '',
					file: 'Voiceless_palato-alveolar_affricate.ogg',
				},
				voiced: {
					symbol: 'd̠ʒ',
					sound: '',
					file: 'Voiced_palato-alveolar_affricate.ogg',
				},
			}, 
			retroflex : {
				voiceless: {
					symbol: 'ʈʂ',
					sound: '',
					file: 'Voiceless_retroflex_affricate.ogg',
				},
				voiced: {
					symbol: 'ɖʐ',
					sound: '',
					file: 'Voiced_retroflex_affricate.ogg',
				},
			},
		}, dorsal: {
			palatal : {
				voiceless: {
					symbol: 'tɕ',
					sound: '',
					file: 'Voiceless_alveolo-palatal_affricate.ogg',
				},
				voiced: {
					symbol: 'dʑ',
					sound: '',
					file: 'Voiced_alveolo-palatal_affricate.ogg',
				},
			}, 
		},
	},
	'non-sibilant-affricate': {
		labial : {
			bilabial : {
				voiceless: {
					symbol: 'pɸ',
					sound: '',
					file: 'Voiceless_bilabial_affricate.ogg',
				},
				voiced: {
					symbol: 'bβ',
					sound: '',
					file: '',
				},
			}, labiodental : {
				voiceless: {
					symbol: 'p̪f',
					sound: '',
					file: 'Voiceless_labiodental_affricate.ogg',
				},
				voiced: {
					symbol: 'b̪v',
					sound: '',
					file: 'Voiced_labiodental_affricate.ogg',
				},
			},
		}, 
		coronal: {
			dental : {
				voiceless: {
					symbol: 't̪θ',
					sound: '',
					file: 'Voiceless_dental_non-sibilant_affricate.oga',
				},
				voiced: {
					symbol: 'd̪ð',
					sound: '',
					file: 'Voiced_dental_non-sibilant_affricate.oga',
				},
			}, alveolar : {
				voiceless: {
					symbol: 'tɹ̝̊',
					sound: '',
					file: '',
				},
				voiced: {
					symbol: 'dɹ̝',
					sound: '',
					file: '',
				},
			},  postalveolar : {
				voiceless: {
					symbol: 't̠ɹ̠̊˔',
					sound: '',
					file: 'Voiceless_postalveolar_non-sibilant_affricate.ogg',
				},
				voiced: {
					symbol: 'd̠ɹ̠˔',
					sound: '',
					file: 'Voiced_postalveolar_non-sibilant_affricate.ogg',
				},
			},
		}, 
		dorsal: {
			palatal : {
				voiceless: {
					symbol: 'cç',
					sound: '',
					file: 'Voiceless_palatal_affricate.ogg',
				},
				voiced: {
					symbol: 'ɟʝ',
					sound: '',
					file: 'Voiced_palatal_affricate.ogg',
				},
			}, velar : {
				voiceless: {
					symbol: 'kx',
					sound: '',
					file: 'Voiceless_velar_affricate.ogg',
				},
				voiced: {
					symbol: 'ɡɣ',
					sound: '',
					file: 'Voiced_velar_affricate.ogg',
				},
			}, uvular : {
				voiceless: {
					symbol: 'qχ',
					sound: '',
					file: 'Voiceless_uvular_affricate.ogg',
				}, voiced: {
					symbol: 'ɢʁ',
					sound: '',
					file: 'Voiced_uvular_affricate.ogg',
				},
			},
		}, 
		laryngeal: {
			epiglottal : {
				voiced: {
					symbol: 'ʡʢ',
					sound: '',
					file: 'Voiced_epiglottal_affricate.ogg',
				},
			}, glottal : {
				voiceless: {
					symbol: 'ʔh',
					sound: '',
					file: 'Voiceless_glottal_affricate.ogg',
				},
			},
		},
	},
	'sibilant-fricative': {
		coronal: {
			alveolar : {
				voiceless: {
					symbol: 's',
					sound: '',
					file: 'Voiceless_alveolar_sibilant.ogg',
				},
				voiced: {
					symbol: 'z',
					sound: '',
					file: 'Voiced_alveolar_sibilant.ogg',
				},
			}, 
			postalveolar : {
				voiceless: {
					symbol: 'ʃ',
					sound: '',
					file: 'Voiceless_palato-alveolar_sibilant.ogg',
				},
				voiced: {
					symbol: 'ʒ',
					sound: '',
					file: 'Voiced_palato-alveolar_sibilant.ogg',
				},
			}, 
			retroflex : {
				voiceless: {
					symbol: 'ʂ',
					sound: '',
					file: 'Voiceless_retroflex_sibilant.ogg',
				},
				voiced: {
					symbol: 'ʐ',
					sound: '',
					file: 'Voiced_retroflex_sibilant.ogg',
				},
			},
		}, 
		dorsal: {
			palatal : {
				voiceless: {
					symbol: 'ɕ',
					sound: '',
					file: 'Voiceless_alveolo-palatal_sibilant.ogg',
				},
				voiced: {
					symbol: 'ʑ',
					sound: '',
					file: 'Voiced_alveolo-palatal_sibilant.ogg',
				},
			}, 
		},
	},
	'non-sibilant-fricative': {
		labial : {
			bilabial : {
				voiceless: {
					symbol: 'ɸ',
					sound: '',
					file: 'Voiceless_bilabial_fricative.ogg',
				},
				voiced: {
					symbol: 'β',
					sound: '',
					file: 'Voiced_bilabial_fricative.ogg',
				},
			}, 
			labiodental : {
				voiceless: {
					symbol: 'f',
					sound: '',
					file: 'Voiceless_labio-dental_fricative.ogg',
				},
				voiced: {
					symbol: 'v',
					sound: '',
					file: 'Voiced_labio-dental_fricative.ogg',
				},
			}, 
			linguolabial : {
				voiceless: {
					symbol: 'θ̼',
					sound: '',
					file: '',
				}, voiced: {
					symbol: 'ð̼',
					sound: '',
					file: '',
				},
			},
		}, 
		coronal: {
			dental : {
				voiceless: {
					symbol: 'θ',
					sound: '',
					file: 'Voiceless_dental_fricative.ogg',
				},
				voiced: {
					symbol: 'ð',
					sound: '',
					file: 'Voiced_dental_fricative.ogg',
				},
			}, alveolar : {
				voiceless: {
					symbol: 'θ̠',
					sound: '',
					file: 'Voiceless_alveolar_non-sibilant_fricative.ogg',
				},
				voiced: {
					symbol: 'ð̠',
					sound: '',
					file: 'Voiced_alveolar_non-sibilant_fricative.ogg',
				},
			},  postalveolar : {
				voiceless: {
					symbol: 'ɹ̠̊˔',
					sound: '',
					file: 'Voiceless_postalveolar_non-sibilant_fricative.ogg',
				},
				voiced: {
					symbol: 'ɹ̠˔',
					sound: '',
					file: 'Voiced_postalveolar_non-sibilant_fricative.ogg',
				},
			}, retroflex : {
				voiced: {
					symbol: 'ɻ˔',
					sound: '',
					file: '',
				},
			},
		}, 
		dorsal: {
			palatal : {
				voiceless: {
					symbol: 'ç',
					sound: '',
					file: 'Voiceless_palatal_fricative.ogg',
				},
				voiced: {
					symbol: 'ʝ',
					sound: '',
					file: 'Voiced_palatal_fricative.ogg',
				},
			}, 
			velar : {
				voiceless: {
					symbol: 'x',
					sound: '',
					file: 'Voiceless_velar_fricative.ogg',
				},
				voiced: {
					symbol: 'ɣ',
					sound: '',
					file: 'Voiced_velar_fricative.ogg',
				},
			}, 
			uvular : {
				voiceless: {
					symbol: 'χ',
					sound: '',
					file: 'Voiceless_uvular_fricative.ogg',
				}, voiced: {
					symbol: 'ʁ',
					sound: '',
					file: 'Voiced_uvular_fricative.ogg',
				},
			},
		}, 
		laryngeal: {
			epiglottal : {
				voiceless: {
					symbol: 'ħ',
					sound: '',
					file: 'Voiceless_pharyngeal_fricative.ogg',
				}, 
				voiced: {
					symbol: 'ʕ',
					sound: '',
					file: 'Voiced_pharyngeal_fricative.ogg',
				},
			}, 
			glottal : {
				voiceless: {
					symbol: 'h',
					sound: '',
					file: 'Voiceless_glottal_fricative.ogg',
				}, 
				voiced: {
					symbol: 'ɦ',
					sound: '',
					file: 'Voiced_glottal_fricative.ogg',
				},
			},
		},
	},
	'approximant': {
		labial : {
			bilabial : {
				voiced: {
					symbol: 'β̞',
					sound: '',
					file: 'Bilabial_approximant.ogg',
				},
			},
			labiodental : {
				voiced: {
					symbol: 'ʋ',
					sound: '',
					file: 'Labiodental_approximant.ogg',
				},
			},
		}, 
		coronal: {
			dental : {
				voiced: {
					symbol: 'ð̞',
					sound: '',
					file: 'Voiced_dental_approximant.ogg',
				},
			}, 
			alveolar : {
				voiced: {
					symbol: 'ɹ',
					sound: '',
					file: 'Alveolar_approximant.ogg',
				},
			},  
			postalveolar : {
				voiced: {
					symbol: 'ɹ̠',
					sound: '',
					file: 'Postalveolar_approximant.ogg',
				},
			},
			retroflex : {
				voiced: {
					symbol: 'ɻ',
					sound: '',
					file: 'Retroflex_Approximant2.oga',
				},
			},
		},
		dorsal: {
			palatal : {
				voiced: {
					symbol: 'j',
					sound: '',
					file: 'Palatal_approximant.ogg',
				},
			}, 
			velar : {
				voiced: {
					symbol: 'ɰ',
					alternatives: 'w',
					sound: '',
					file: 'Voiced_velar_approximant.ogg',
				},
			}, 
			uvular : {
				 voiced: {
					symbol: 'ɰ',
					sound: '',
					file: 'Voiced_Uvular_Approximant.ogg',
				},
			},
		}, 
		laryngeal: {
			glottal : {
				voiced: {
					symbol: 'ʔ̞',
					sound: '',
					file: '',
				},
			},
		},
	},
	'tap-flap': {
		labial : {
			bilabial : {
				voiced: {
					symbol: 'ⱱ̟',
					sound: '',
					file: '',
				},
			}, labiodental : {
				voiced: {
					symbol: 'ⱱ',
					sound: '',
					file: 'Labiodental_flap.ogg',
				},
			}, linguolabial : {
				voiced: {
					symbol: 'ɾ̼',
					sound: '',
					file: '',
				},
			},
		}, 
		coronal: {
			 alveolar : {
				voiceless: {
					symbol: 'ɾ̥',
					sound: '',
					file: '',
				},
				voiced: {
					symbol: 'ɾ',
					sound: '',
					file: 'Alveolar_tap.ogg',
				},
			}, retroflex : {
				voiceless: {
					symbol: 'ɽ̊',
					sound: '',
					file: '',
				},
				voiced: {
					symbol: 'ɽ',
					sound: '',
					file: '',
				},
			},
		}, 
		dorsal: {
			uvular : {
				voiced: {
					symbol: 'ɢ̆',
					sound: '',
					file: '',
				},
			},
		}, 
		laryngeal: {
			epiglottal : {
				voiced: {
					symbol: 'ʡ̆',
					sound: '',
					file: 'Epiglottal_flap.oga',
				},
			}, 
		},
	},
	'trill': {
		labial : {
			bilabial : {
				voiceless: {
					symbol: 'ʙ̥',
					sound: '',
					file: 'Voiceless_bilabial_trill_with_aspiration.ogg',
				},
				voiced: {
					symbol: 'ʙ',
					sound: '',
					file: 'Bilabial_trill.ogg',
				},
			}, 
		}, 
		coronal: {
			alveolar : {
				voiceless: {
					symbol: 'r̥',
					sound: '',
					file: 'Voiceless_alveolar_trill.ogg',
				},
				voiced: {
					symbol: 'r',
					sound: '',
					file: 'Alveolar_trill.ogg',
				},
			},
			postalveolar : {
				voiced: {
					symbol: 'r̠',
					sound: '',
					file: 'Voiced_postalveolar_trill.ogg',
				},
			}, 
			retroflex : {
				voiceless: {
					symbol: 'ɽ̊r̥',
					sound: '',
					file: '',
				},
				voiced: {
					symbol: 'ɽr',
					sound: '',
					file: 'Voiced_retroflex_trill.ogg',
				},
			},
		}, 
		dorsal: {
			uvular : {
				voiceless: {
					symbol: 'ʀ̥',
					sound: '',
					file: 'Voiceless_uvular_trill.ogg',
				}, 
				voiced: {
					symbol: 'ʀ',
					sound: '',
					file: 'Uvular_trill.ogg',
				},
			},
		}, 
		laryngeal: {
			epiglottal : {
				voiceless: {
					symbol: 'ʜ',
					sound: '',
					file: 'Voiceless_epiglottal_trill.ogg',
				}, voiced: {
					symbol: 'ʢ',
					sound: '',
					file: 'Voiced_epiglottal_trill_2.ogg',
				},
			}, 
		},
	},
	'lateral-affricate ': {
		coronal: {
			alveolar : {
				voiceless: {
					symbol: 'tɬ',
					sound: '',
					file: 'Voiceless_alveolar_lateral_affricate.ogg',
				},
				voiced: {
					symbol: 'dɮ',
					sound: '',
					file: 'Voiced_alveolar_lateral_affricate.ogg',
				},
			},  retroflex : {
				voiceless: {
					symbol: 'ʈɭ̊˔',
					sound: '',
					file: '',
				},
				voiced: {
					symbol: 'ɖɭ˔',
					sound: '',
					file: '',
				},
			},
		}, 
		dorsal: {
			palatal : {
				voiceless: {
					symbol: 'cʎ̝̊',
					sound: '',
					file: 'Voiceless_palatal_lateral_affricate.ogg',
				},
				voiced: {
					symbol: 'ɟʎ̝',
					sound: '',
					file: '',
				},
			}, velar : {
				voiceless: {
					symbol: 'kʟ̝̊',
					sound: '',
					file: 'Voiceless_velar_lateral_affricate.ogg',
				},
				voiced: {
					symbol: 'ɡʟ̝',
					sound: '',
					file: 'Voiced_velar_lateral_affricate.ogg',
				},
			},
		}, 
	},
	'lateral-fricative': {
		coronal: {
			alveolar : {
				voiceless: {
					symbol: 'ɬ',
					sound: '',
					file: 'Voiceless_alveolar_lateral_fricative.ogg',
				},
				voiced: {
					symbol: 'ɮ',
					sound: '',
					file: 'Voiced_alveolar_lateral_fricative.ogg',
				},
			},  
			retroflex : {
				voiceless: {
					symbol: 'ɭ̊˔',
					sound: '',
					file: 'Voiceless_retroflex_lateral_fricative.ogg',
				},
				voiced: {
					symbol: 'ɭ˔',
					sound: '',
					file: '',
				},
			},
		}, 
		dorsal: {
			palatal : {
				voiceless: {
					symbol: 'ʎ̝̊',
					sound: '',
					file: 'Voiceless_palatal_lateral_fricative.ogg',
				},
				voiced: {
					symbol: 'ʎ̝',
					sound: '',
					file: '',
				},
			}, 
			velar : {
				voiceless: {
					symbol: 'ʟ̝̊',
					sound: '',
					file: 'Voiceless_velar_lateral_fricative.ogg',
				},
				voiced: {
					symbol: 'ʟ̝',
					sound: '',
					file: 'Voiced_velar_lateral_fricative.ogg',
				},
			},
		}, 
	},
	'lateral-approximant': {
		coronal: {
			dental : {
				voiced: {
					symbol: 'l̪',
					sound: '',
					file: 'Voiced_dental_lateral_approximant.ogg',
				},
			},
			alveolar : {
				voiced: {
					symbol: 'l',
					sound: '',
					file: 'Alveolar_lateral_approximant.ogg',
				},
			}, 
			postalveolar : {
				voiced: {
					symbol: 'l̠',
					sound: '',
					file: 'Voiced_postalveolar_lateral_approximant.ogg',
				},
			},
			retroflex : {
				voiced: {
					symbol: 'ɭ',
					sound: '',
					file: 'Retroflex_lateral_approximant.ogg',
				},
			},
		}, 
		dorsal: {
			palatal : {
				voiced: {
					symbol: 'ʎ',
					sound: '',
					file: 'Palatal_lateral_approximant.ogg',
				},
			}, velar : {
				voiced: {
					symbol: 'ʟ',
					sound: '',
					file: 'Velar_lateral_approximant.ogg',
				},
			}, uvular : {
				voiced: {
					symbol: 'ʟ̠',
					sound: '',
					file: 'Uvular_lateral_approximant.ogg',
				},
			},
		}, 
	},
	'lateral-tap-flap': {
		coronal: {
			alveolar : {
				voiceless: {
					symbol: 'ɺ̥',
					sound: '',
					file: '',
				},
				voiced: {
					symbol: 'ɺ',
					sound: '',
					file: '',
				},
			},  retroflex : {
				voiceless: {
					symbol: 'ɭ̥̆',
					sound: '',
					file: '',
				},
				voiced: {
					symbol: 'ɭ̆',
					sound: '',
					file: '',
				},
			},
		}, 
		dorsal: {
			palatal : {
				voiced: {
					symbol: 'ʎ̆ 	',
					sound: '',
					file: '',
				},
			}, velar : {
				voiced: {
					symbol: 'ʟ̆',
					sound: '',
					file: '',
				},
			}, 
		}, 
	},
}
exports.consonantsFormatted = consonantsFormatted
exports.consonants = Object.values(
	Object.entries(consonantsFormatted).reduce( (list1, [manner, places]) => 
		Object.entries(places).reduce( (list2, [place, subPlaces]) => 
			Object.entries(subPlaces).reduce( (list3, [subPlace, voices]) => 
				Object.entries(voices).reduce( (list4, [voice, {symbol, sound, file}]) => 
					({
						...list4, 
						[symbol] : {
							symbol, 
							sound, 
							file,
							place,
							subPlace, 
							manner,
							voice,
							type:'consonant'
						}
					})
				, {...list3})
			,{...list2})
		, {...list1})
	, {})
)
exports.consonantsPlaces = {
	labial: ['bilabial', 'labiodental','linguolabial'],
	coronal: ['dental', 'alveolar', 'postalveolar', 'retroflex'],
	dorsal: ['palatal', 'velar', 'uvular'],
	laryngeal: ['epiglottal', 'glottal'],
}
exports.consonantsManner = [
	'nasal', 'plosive', 
	'sibilant-affricate', 'non-sibilant-affricate', 
	'sibilant-fricative', 'non-sibilant-fricative', 
	'approximant', 'tap-flap', 'trill', 
	'lateral-affricate', 'lateral-fricative', 'lateral-approximant', 'lateral-tap-flap'
]

const vowelsFormatted = {
	'close': {
		'front': {
			unrounded: {
				symbol: 'i',
				sound: '',
				file: 'Close_front_unrounded_vowel.ogg',
			},
			rounded: {
				symbol: 'y',
				sound: '',
				file: 'Close_front_rounded_vowel.ogg',
			},
		}, 
		'central': {
			unrounded: {
				symbol: 'ɨ',
				sound: '',
				file: 'Close_central_unrounded_vowel.ogg',
			},
			rounded: {
				symbol: 'ʉ',
				sound: '',
				file: 'Close_central_rounded_vowel.ogg',
			},
		}, 
		'back': {
			unrounded: {
				symbol: 'ɯ',
				sound: '',
				file: 'Close_back_unrounded_vowel.ogg',
			},
			rounded: {
				symbol: 'u',
				sound: '',
				file: 'Close_back_rounded_vowel.ogg',
			},
		},
	}, 
	'near-close': {
		'front': {
			unrounded: {
				symbol: 'ɪ',
				sound: '',
				file: 'Near-close_near-front_unrounded_vowel.ogg',
			},
			rounded: {
				symbol: 'ʏ',
				sound: '',
				file: 'Near-close_near-front_rounded_vowel.ogg',
			},
		},  
		'back': {
			rounded: {
				symbol: 'ʊ',
				sound: '',
				file: 'Near-close_near-back_rounded_vowel.ogg',
			},
		},
	},
	'close-mid': {
		'front': {
			unrounded: {
				symbol: 'e',
				sound: '',
				file: 'Close-mid_front_unrounded_vowel.ogg',
			},
			rounded: {
				symbol: 'ø',
				sound: '',
				file: 'Close-mid_front_unrounded_vowel.ogg',
			},
		}, 
		'central': {
			unrounded: {
				symbol: 'ɘ',
				sound: '',
				file: 'Close-mid_front_unrounded_vowel.ogg',
			},
			rounded: {
				symbol: 'ɵ',
				sound: '',
				file: 'Close-mid_front_unrounded_vowel.ogg',
			},
		}, 
		'back': {
			unrounded: {
				symbol: 'ɤ',
				sound: '',
				file: 'Close-mid_front_unrounded_vowel.ogg',
			},
			rounded: {
				symbol: 'o',
				sound: '',
				file: 'Close-mid_front_unrounded_vowel.ogg',
			},
		},
	},
	'mid': {
		'front': {
			unrounded: {
				symbol: 'e̞',
				sound: '',
				file: 'Mid_front_unrounded_vowel.ogg',
			},
			rounded: {
				symbol: 'ø̞',
				sound: '',
				file: 'Mid_front_rounded_vowel.ogg',
			},
		}, 
		'central': {
			unrounded: {
				symbol: 'ə',
				sound: '',
				file: 'Mid-central_vowel.ogg',
			},
		}, 
		'back': {
			unrounded: {
				symbol: 'ɤ̞',
				sound: '',
				file: '',
			},
			rounded: {
				symbol: 'o̞',
				sound: '',
				file: 'Mid_back_rounded_vowel.ogg',
			},
		},
	},
	'open-mid': {
		'front': {
			unrounded: {
				symbol: 'ɛ',
				sound: '',
				file: 'Open-mid_front_unrounded_vowel.ogg',
			},
			rounded: {
				symbol: 'œ',
				sound: '',
				file: 'Open-mid_front_rounded_vowel.ogg',
			},
		}, 
		'central': {
			unrounded: {
				symbol: 'ɜ',
				sound: '',
				file: 'Open-mid_central_unrounded_vowel.ogg',
			},
			rounded: {
				symbol: 'ɞ',
				sound: '',
				file: 'Open-mid_central_rounded_vowel.ogg',
			},
		}, 
		'back': {
			unrounded: {
				symbol: 'ʌ',
				sound: '',
				file: 'PR-open-mid_back_unrounded_vowel2.ogg',
			},
			rounded: {
				symbol: 'ɔ',
				sound: '',
				file: 'PR-open-mid_back_rounded_vowel.ogg',
			},
		},
	},
	'near-open': {
		'front': {
			unrounded: {
				symbol: 'æ',
				sound: '',
				file: 'Near-open_front_unrounded_vowel.ogg',
			},
		}, 
		'central': {
			unrounded: {
				symbol: 'ɐ',
				sound: '',
				file: 'Near-open_central_unrounded_vowel.ogg',
			},
		}, 
	},
	'open': {
		'front': {
			unrounded: {
				symbol: 'a',
				sound: '',
				file: 'PR-open_front_unrounded_vowel.ogg',
			},
			rounded: {
				symbol: 'ɶ',
				sound: '',
				file: 'Open_front_rounded_vowel.ogg',
			},
		}, 
		'central': {
			unrounded: {
				symbol: 'ä',
				sound: '',
				file: 'Open_central_unrounded_vowel.ogg',
			},
		}, 
		'back': {
			unrounded: {
				symbol: 'ɑ',
				sound: '',
				file: 'Open_back_unrounded_vowel.ogg',
			},
			rounded: {
				symbol: 'ɒ',
				sound: '',
				file: 'PR-open_back_rounded_vowel.ogg',
			},
		},
	},
}
exports.vowelsFormatted = vowelsFormatted
exports.vowels = Object.values(
	Object.entries(vowelsFormatted).reduce( (vowels1, [manner, places]) => 
		Object.entries(places).reduce( (vowels2, [place, rounds]) => 
			Object.entries(rounds).reduce( (vowels3, [round, {symbol, sound, file}]) => 
				({
					...vowels3, 
					[symbol] : {
						symbol, 
						sound, 
						file,
						round,
						place, 
						manner,
						type:'vowel'
					}
				})
			, {...vowels2})
		,{...vowels1})
	, {})
)
exports.vowelsPlaces = ['front', 'central', 'back']
exports.vowelsManner = ['close', 'near-close', 'close-mid', 'mid', 'open-mid', 'near-open', 'open']


const englishConsonants = ['m', 'n', 'ŋ', 'p', 'b', 't', 'd', 'k', 'ɡ', 't̠ʃ', 'd̠ʒ', 'f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', 'h', 'l', 'ɹ', 'j', 'ɰ']
const englishVowels = ['i','iː','ɪ','e', 'ɛ', 'æ', 'ɑː', 'ɑ', 'ɒ', 'ɔ', 'ɑ', 'ɔː', 'uː', 'u', 'ʊ', 'ʌ', 'ɜː', 'ɜɹ', 'ə',]

const frenchConsonants = ['m', 'n', 'ɲ', 'ŋ', 'p', 't', 'k', 'b', 'd', 'ɡ', 'f', 's', 'ʃ', 'ʁ', 'v', 'z', 'ʒ', 'l', 'j', 'ɥ', 'w']
const frenchVowels = ['e', 'i', 'y', 'u', 'e', 'ø', 'ə', 'o', 'ɛ', 'ɛː', 'œ', 'ɔ', 'a', 'ɑ', 'ɛ̃', 'œ̃', 'ɔ', 'ɑ̃']

const spanishConsonants = ['m', 'n', 'ɲ', 'p', 'b', 't', 'd', 'tʃ', 'ʝ', 'k', 'ɡ', 'f', 'θ', 's', 'ʃ', 'x', 'l', 'ʎ', 'ɾ', 'r']
const spanishVowels = ['a', 'e', 'i', 'o', 'u']

const japaneseConsonants = ['m', 'n', 'ɲ', 'ŋ', 'ɴ', 'p', 'b', 't', 'd', 'k', 'ɡ', 't͡s', 'd͡z', 't͡ɕ', 'd͡ʑ', 'ɸ', 's', 'z', 'ɕ', 'ʑ', 'ç', 'h', 'r', 'j', 'w', ]
const japaneseVowels = ['i', 'u', 'e', 'o', 'a', ]

exports.languageMaps = {
	'English': {
		consonants: englishConsonants,
		vowels: englishVowels,
	}, 
	'French': {
		consonants: frenchConsonants,
		vowels: frenchVowels,
	},
	'Spanish': {
		consonants: spanishConsonants,
		vowels: spanishVowels,
	},
	'Japanese': {
		consonants: japaneseConsonants,
		vowels: japaneseVowels,
	},
}