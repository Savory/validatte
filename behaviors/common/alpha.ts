export const alpha: { [key: string]: RegExp } = {
	ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
	'bg-BG': /^[А-Я]+$/i,
	'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
	'da-DK': /^[A-ZÆØÅ]+$/i,
	'de-DE': /^[A-ZÄÖÜß]+$/i,
	'el-GR': /^[Α-ώ]+$/i,
	'en-US': /^[A-Z]+$/i,
	'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
	'fa-IR': /^['آابپتثجچهخدذرزژسشصضطظعغفقکگلمنوهی']+$/i,
	'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
	he: /^[א-ת]+$/,
	'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
	'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
	'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
	'nb-NO': /^[A-ZÆØÅ]+$/i,
	'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
	'nn-NO': /^[A-ZÆØÅ]+$/i,
	'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
	'pt-PT': /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
	'ru-RU': /^[А-ЯЁ]+$/i,
	'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
	'sl-SI': /^[A-ZČĆĐŠŽ]+$/i,
	'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
	'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
	'sv-SE': /^[A-ZÅÄÖ]+$/i,
	'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
	'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
};

export const alphanumeric: { [key: string]: RegExp } = {
	'en-US': /^[0-9A-Z]+$/i,
	'bg-BG': /^[0-9А-Я]+$/i,
	'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
	'da-DK': /^[0-9A-ZÆØÅ]+$/i,
	'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
	'el-GR': /^[0-9Α-ω]+$/i,
	'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
	'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
	'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
	'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
	'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
	'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
	'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
	'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
	'pt-PT': /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
	'ru-RU': /^[0-9А-ЯЁ]+$/i,
	'sl-SI': /^[0-9A-ZČĆĐŠŽ]+$/i,
	'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
	'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
	'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
	'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
	'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
	'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
	'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
	ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
	he: /^[0-9א-ת]+$/,
	'fa-IR': /^['0-9آابپتثجچهخدذرزژسشصضطظعغفقکگلمنوهی۱۲۳۴۵۶۷۸۹۰']+$/i,
};

export const decimal: { [key: string]: string } = {
	'en-US': '.',
	ar: '٫',
};

export const englishLocales: Array<string> = [
	'AU',
	'GB',
	'HK',
	'IN',
	'NZ',
	'ZA',
	'ZM',
];

for (let locale: string, i = 0; i < englishLocales.length; i++) {
	locale = `en-${englishLocales[i]}`;
	alpha[locale] = alpha['en-US'];
	alphanumeric[locale] = alphanumeric['en-US'];
	decimal[locale] = decimal['en-US'];
}

// Source: http://www.localeplanet.com/java/
export const arabicLocales: Array<string> = [
	'AE',
	'BH',
	'DZ',
	'EG',
	'IQ',
	'JO',
	'KW',
	'LB',
	'LY',
	'MA',
	'QM',
	'QA',
	'SA',
	'SD',
	'SY',
	'TN',
	'YE',
];

for (let locale: string, i = 0; i < arabicLocales.length; i++) {
	locale = `ar-${arabicLocales[i]}`;
	alpha[locale] = alpha.ar;
	alphanumeric[locale] = alphanumeric.ar;
	decimal[locale] = decimal.ar;
}

// Source: https://en.wikipedia.org/wiki/Decimal_mark
export const dotDecimal: Array<string> = ['ar-EG', 'ar-LB', 'ar-LY'];
export const commaDecimal: Array<string> = [
	'bg-BG',
	'cs-CZ',
	'da-DK',
	'de-DE',
	'el-GR',
	'en-ZM',
	'es-ES',
	'fr-FR',
	'it-IT',
	'ku-IQ',
	'hu-HU',
	'nb-NO',
	'nn-NO',
	'nl-NL',
	'pl-PL',
	'pt-PT',
	'ru-RU',
	'sl-SI',
	'sr-RS@latin',
	'sr-RS',
	'sv-SE',
	'tr-TR',
	'uk-UA',
];

for (let i = 0; i < dotDecimal.length; i++) {
	decimal[dotDecimal[i]] = decimal['en-US'];
}

for (let i = 0; i < commaDecimal.length; i++) {
	decimal[commaDecimal[i]] = ',';
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
decimal['pt-BR'] = decimal['pt-PT'];

alpha['pl-Pl'] = alpha['pl-PL'];
alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
decimal['pl-Pl'] = decimal['pl-PL'];
