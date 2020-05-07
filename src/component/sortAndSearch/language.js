const languages = [
    {
        value: "xx",
        key: "No Language",
        "name": "No Language"
    },
    {
        value: "aa",
        key: "Afar",
        "name": ""
    },
    {
        value: "af",
        key: "Afrikaans",
        "name": "Afrikaans"
    },
    {
        value: "ak",
        key: "Akan",
        "name": ""
    },
    {
        value: "an",
        key: "Aragonese",
        "name": ""
    },
    {
        value: "as",
        key: "Assamese",
        "name": ""
    },
    {
        value: "av",
        key: "Avaric",
        "name": ""
    },
    {
        value: "ae",
        key: "Avestan",
        "name": ""
    },
    {
        value: "ay",
        key: "Aymara",
        "name": ""
    },
    {
        value: "az",
        key: "Azerbaijani",
        "name": "Azərbaycan"
    },
    {
        value: "ba",
        key: "Bashkir",
        "name": ""
    },
    {
        value: "bm",
        key: "Bambara",
        "name": "Bamanankan"
    },
    {
        value: "bi",
        key: "Bislama",
        "name": ""
    },
    {
        value: "bo",
        key: "Tibetan",
        "name": ""
    },
    {
        value: "br",
        key: "Breton",
        "name": ""
    },
    {
        value: "ca",
        key: "Catalan",
        "name": "Català"
    },
    {
        value: "cs",
        key: "Czech",
        "name": "Český"
    },
    {
        value: "ce",
        key: "Chechen",
        "name": ""
    },
    {
        value: "cu",
        key: "Slavic",
        "name": ""
    },
    {
        value: "cv",
        key: "Chuvash",
        "name": ""
    },
    {
        value: "kw",
        key: "Cornish",
        "name": ""
    },
    {
        value: "co",
        key: "Corsican",
        "name": ""
    },
    {
        value: "cr",
        key: "Cree",
        "name": ""
    },
    {
        value: "cy",
        key: "Welsh",
        "name": "Cymraeg"
    },
    {
        value: "da",
        key: "Danish",
        "name": "Dansk"
    },
    {
        value: "de",
        key: "German",
        "name": "Deutsch"
    },
    {
        value: "dv",
        key: "Divehi",
        "name": ""
    },
    {
        value: "dz",
        key: "Dzongkha",
        "name": ""
    },
    {
        value: "eo",
        key: "Esperanto",
        "name": "Esperanto"
    },
    {
        value: "et",
        key: "Estonian",
        "name": "Eesti"
    },
    {
        value: "eu",
        key: "Basque",
        "name": "euskera"
    },
    {
        value: "fo",
        key: "Faroese",
        "name": ""
    },
    {
        value: "fj",
        key: "Fijian",
        "name": ""
    },
    {
        value: "fi",
        key: "Finnish",
        "name": "suomi"
    },
    {
        value: "fr",
        key: "French",
        "name": "Français"
    },
    {
        value: "fy",
        key: "Frisian",
        "name": ""
    },
    {
        value: "ff",
        key: "Fulah",
        "name": "Fulfulde"
    },
    {
        value: "gd",
        key: "Gaelic",
        "name": ""
    },
    {
        value: "ga",
        key: "Irish",
        "name": "Gaeilge"
    },
    {
        value: "gl",
        key: "Galician",
        "name": "Galego"
    },
    {
        value: "gv",
        key: "Manx",
        "name": ""
    },
    {
        value: "gn",
        key: "Guarani",
        "name": ""
    },
    {
        value: "gu",
        key: "Gujarati",
        "name": ""
    },
    {
        value: "ht",
        key: "Haitian; Haitian Creole",
        "name": ""
    },
    {
        value: "ha",
        key: "Hausa",
        "name": "Hausa"
    },
    {
        value: "sh",
        key: "Serbo-Croatian",
        "name": ""
    },
    {
        value: "hz",
        key: "Herero",
        "name": ""
    },
    {
        value: "ho",
        key: "Hiri Motu",
        "name": ""
    },
    {
        value: "hr",
        key: "Croatian",
        "name": "Hrvatski"
    },
    {
        value: "hu",
        key: "Hungarian",
        "name": "Magyar"
    },
    {
        value: "ig",
        key: "Igbo",
        "name": ""
    },
    {
        value: "io",
        key: "Ido",
        "name": ""
    },
    {
        value: "ii",
        key: "Yi",
        "name": ""
    },
    {
        value: "iu",
        key: "Inuktitut",
        "name": ""
    },
    {
        value: "ie",
        key: "Interlingue",
        "name": ""
    },
    {
        value: "ia",
        key: "Interlingua",
        "name": ""
    },
    {
        value: "id",
        key: "Indonesian",
        "name": "Bahasa indonesia"
    },
    {
        value: "ik",
        key: "Inupiaq",
        "name": ""
    },
    {
        value: "is",
        key: "Icelandic",
        "name": "Íslenska"
    },
    {
        value: "it",
        key: "Italian",
        "name": "Italiano"
    },
    {
        value: "jv",
        key: "Javanese",
        "name": ""
    },
    {
        value: "ja",
        key: "Japanese",
        "name": "日本語"
    },
    {
        value: "kl",
        key: "Kalaallisut",
        "name": ""
    },
    {
        value: "kn",
        key: "Kannada",
        "name": "?????"
    },
    {
        value: "ks",
        key: "Kashmiri",
        "name": ""
    },
    {
        value: "kr",
        key: "Kanuri",
        "name": ""
    },
    {
        value: "kk",
        key: "Kazakh",
        "name": "қазақ"
    },
    {
        value: "km",
        key: "Khmer",
        "name": ""
    },
    {
        value: "ki",
        key: "Kikuyu",
        "name": ""
    },
    {
        value: "rw",
        key: "Kinyarwanda",
        "name": "Kinyarwanda"
    },
    {
        value: "ky",
        key: "Kirghiz",
        "name": "??????"
    },
    {
        value: "kv",
        key: "Komi",
        "name": ""
    },
    {
        value: "kg",
        key: "Kongo",
        "name": ""
    },
    {
        value: "ko",
        key: "Korean",
        "name": "한국어/조선말"
    },
    {
        value: "kj",
        key: "Kuanyama",
        "name": ""
    },
    {
        value: "ku",
        key: "Kurdish",
        "name": ""
    },
    {
        value: "lo",
        key: "Lao",
        "name": ""
    },
    {
        value: "la",
        key: "Latin",
        "name": "Latin"
    },
    {
        value: "lv",
        key: "Latvian",
        "name": "Latviešu"
    },
    {
        value: "li",
        key: "Limburgish",
        "name": ""
    },
    {
        value: "ln",
        key: "Lingala",
        "name": ""
    },
    {
        value: "lt",
        key: "Lithuanian",
        "name": "Lietuvių"
    },
    {
        value: "lb",
        key: "Letzeburgesch",
        "name": ""
    },
    {
        value: "lu",
        key: "Luba-Katanga",
        "name": ""
    },
    {
        value: "lg",
        key: "Ganda",
        "name": ""
    },
    {
        value: "mh",
        key: "Marshall",
        "name": ""
    },
    {
        value: "ml",
        key: "Malayalam",
        "name": ""
    },
    {
        value: "mr",
        key: "Marathi",
        "name": ""
    },
    {
        value: "mg",
        key: "Malagasy",
        "name": ""
    },
    {
        value: "mt",
        key: "Maltese",
        "name": "Malti"
    },
    {
        value: "mo",
        key: "Moldavian",
        "name": ""
    },
    {
        value: "mn",
        key: "Mongolian",
        "name": ""
    },
    {
        value: "mi",
        key: "Maori",
        "name": ""
    },
    {
        value: "ms",
        key: "Malay",
        "name": "Bahasa melayu"
    },
    {
        value: "my",
        key: "Burmese",
        "name": ""
    },
    {
        value: "na",
        key: "Nauru",
        "name": ""
    },
    {
        value: "nv",
        key: "Navajo",
        "name": ""
    },
    {
        value: "nr",
        key: "Ndebele",
        "name": ""
    },
    {
        value: "nd",
        key: "Ndebele",
        "name": ""
    },
    {
        value: "ng",
        key: "Ndonga",
        "name": ""
    },
    {
        value: "ne",
        key: "Nepali",
        "name": ""
    },
    {
        value: "nl",
        key: "Dutch",
        "name": "Nederlands"
    },
    {
        value: "nn",
        key: "Norwegian Nynorsk",
        "name": ""
    },
    {
        value: "nb",
        key: "Norwegian Bokmål",
        "name": "Bokmål"
    },
    {
        value: "no",
        key: "Norwegian",
        "name": "Norsk"
    },
    {
        value: "ny",
        key: "Chichewa; Nyanja",
        "name": ""
    },
    {
        value: "oc",
        key: "Occitan",
        "name": ""
    },
    {
        value: "oj",
        key: "Ojibwa",
        "name": ""
    },
    {
        value: "or",
        key: "Oriya",
        "name": ""
    },
    {
        value: "om",
        key: "Oromo",
        "name": ""
    },
    {
        value: "os",
        key: "Ossetian; Ossetic",
        "name": ""
    },
    {
        value: "pi",
        key: "Pali",
        "name": ""
    },
    {
        value: "pl",
        key: "Polish",
        "name": "Polski"
    },
    {
        value: "pt",
        key: "Portuguese",
        "name": "Português"
    },
    {
        value: "qu",
        key: "Quechua",
        "name": ""
    },
    {
        value: "rm",
        key: "Raeto-Romance",
        "name": ""
    },
    {
        value: "ro",
        key: "Romanian",
        "name": "Română"
    },
    {
        value: "rn",
        key: "Rundi",
        "name": "Kirundi"
    },
    {
        value: "ru",
        key: "Russian",
        "name": "Pусский"
    },
    {
        value: "sg",
        key: "Sango",
        "name": ""
    },
    {
        value: "sa",
        key: "Sanskrit",
        "name": ""
    },
    {
        value: "si",
        key: "Sinhalese",
        "name": "සිංහල"
    },
    {
        value: "sk",
        key: "Slovak",
        "name": "Slovenčina"
    },
    {
        value: "sl",
        key: "Slovenian",
        "name": "Slovenščina"
    },
    {
        value: "se",
        key: "Northern Sami",
        "name": ""
    },
    {
        value: "sm",
        key: "Samoan",
        "name": ""
    },
    {
        value: "sn",
        key: "Shona",
        "name": ""
    },
    {
        value: "sd",
        key: "Sindhi",
        "name": ""
    },
    {
        value: "so",
        key: "Somali",
        "name": "Somali"
    },
    {
        value: "st",
        key: "Sotho",
        "name": ""
    },
    {
        value: "es",
        key: "Spanish",
        "name": "Español"
    },
    {
        value: "sq",
        key: "Albanian",
        "name": "shqip"
    },
    {
        value: "sc",
        key: "Sardinian",
        "name": ""
    },
    {
        value: "sr",
        key: "Serbian",
        "name": "Srpski"
    },
    {
        value: "ss",
        key: "Swati",
        "name": ""
    },
    {
        value: "su",
        key: "Sundanese",
        "name": ""
    },
    {
        value: "sw",
        key: "Swahili",
        "name": "Kiswahili"
    },
    {
        value: "sv",
        key: "Swedish",
        "name": "svenska"
    },
    {
        value: "ty",
        key: "Tahitian",
        "name": ""
    },
    {
        value: "ta",
        key: "Tamil",
        "name": "தமிழ்"
    },
    {
        value: "tt",
        key: "Tatar",
        "name": ""
    },
    {
        value: "te",
        key: "Telugu",
        "name": "తెలుగు"
    },
    {
        value: "tg",
        key: "Tajik",
        "name": ""
    },
    {
        value: "tl",
        key: "Tagalog",
        "name": ""
    },
    {
        value: "th",
        key: "Thai",
        "name": "ภาษาไทย"
    },
    {
        value: "ti",
        key: "Tigrinya",
        "name": ""
    },
    {
        value: "to",
        key: "Tonga",
        "name": ""
    },
    {
        value: "tn",
        key: "Tswana",
        "name": ""
    },
    {
        value: "ts",
        key: "Tsonga",
        "name": ""
    },
    {
        value: "tk",
        key: "Turkmen",
        "name": ""
    },
    {
        value: "tr",
        key: "Turkish",
        "name": "Türkçe"
    },
    {
        value: "tw",
        key: "Twi",
        "name": ""
    },
    {
        value: "ug",
        key: "Uighur",
        "name": ""
    },
    {
        value: "uk",
        key: "Ukrainian",
        "name": "Український"
    },
    {
        value: "ur",
        key: "Urdu",
        "name": "اردو"
    },
    {
        value: "uz",
        key: "Uzbek",
        "name": "ozbek"
    },
    {
        value: "ve",
        key: "Venda",
        "name": ""
    },
    {
        value: "vi",
        key: "Vietnamese",
        "name": "Tiếng Việt"
    },
    {
        value: "vo",
        key: "Volapük",
        "name": ""
    },
    {
        value: "wa",
        key: "Walloon",
        "name": ""
    },
    {
        value: "wo",
        key: "Wolof",
        "name": "Wolof"
    },
    {
        value: "xh",
        key: "Xhosa",
        "name": ""
    },
    {
        value: "yi",
        key: "Yiddish",
        "name": ""
    },
    {
        value: "za",
        key: "Zhuang",
        "name": ""
    },
    {
        value: "zu",
        key: "Zulu",
        "name": "isiZulu"
    },
    {
        value: "ab",
        key: "Abkhazian",
        "name": ""
    },
    {
        value: "zh",
        key: "Mandarin",
        "name": "普通话"
    },
    {
        value: "ps",
        key: "Pushto",
        "name": "پښتو"
    },
    {
        value: "am",
        key: "Amharic",
        "name": ""
    },
    {
        value: "ar",
        key: "Arabic",
        "name": "العربية"
    },
    {
        value: "bg",
        key: "Bulgarian",
        "name": "български език"
    },
    {
        value: "cn",
        key: "Cantonese",
        "name": "广州话 / 廣州話"
    },
    {
        value: "mk",
        key: "Macedonian",
        "name": ""
    },
    {
        value: "el",
        key: "Greek",
        "name": "ελληνικά"
    },
    {
        value: "fa",
        key: "Persian",
        "name": "فارسی"
    },
    {
        value: "he",
        key: "Hebrew",
        "name": "עִבְרִית"
    },
    {
        value: "hi",
        key: "Hindi",
        "name": "हिन्दी"
    },
    {
        value: "hy",
        key: "Armenian",
        "name": ""
    },
    {
        value: "en",
        key: "English",
        "name": "English"
    },
    {
        value: "ee",
        key: "Ewe",
        "name": "Èʋegbe"
    },
    {
        value: "ka",
        key: "Georgian",
        "name": "ქართული"
    },
    {
        value: "pa",
        key: "Punjabi",
        "name": "ਪੰਜਾਬੀ"
    },
    {
        value: "bn",
        key: "Bengali",
        "name": "বাংলা"
    },
    {
        value: "bs",
        key: "Bosnian",
        "name": "Bosanski"
    },
    {
        value: "ch",
        key: "Chamorro",
        "name": "Finu' Chamorro"
    },
    {
        value: "be",
        key: "Belarusian",
        "name": "беларуская мова"
    },
    {
        value: "yo",
        key: "Yoruba",
        "name": "Èdè Yorùbá"
    }
]

export default languages;