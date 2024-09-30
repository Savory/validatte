import test from './test-template.ts';

let allValid: Array<string> = [];
let fixtures = [];

test({
	validator: 'contains',
	args: ['foo'],
	valid: ['foo', 'foobar', 'bazfoo'],
	invalid: ['bar', 'fobar', 'Foobar'],
});

test({
	validator: 'contains',
	args: ['foo', {
		ignoreCase: true,
	}],
	valid: ['Foo', 'FOObar', 'BAZfoo'],
	invalid: ['bar', 'fobar', 'baxoof'],
});

test({
	validator: 'equals',
	args: ['abc'],
	valid: ['abc'],
	invalid: ['Abc', '123'],
});

({
	validator: 'equals',
	args: ['abc ', { trim: true }],
	valid: ['  abc  '],
	invalid: ['Abc', '123'],
});

test({
	validator: 'equals',
	args: ['abc', { ignoreCase: true }],
	valid: ['abc', 'AbC'],
	invalid: ['@bc', '123'],
});

test({
	validator: 'isAfter',
	args: ['2011-08-03'],
	valid: ['2011-08-04', `${new Date(2011, 8, 10)}`],
	invalid: ['2010-07-02', '2011-08-03', `${new Date(0)}`, 'foo'],
});

test({
	validator: 'isAfter',
	valid: ['2100-08-04', `${new Date(Date.now() + 86400000)}`],
	invalid: ['2010-07-02', `${new Date(0)}`],
});

test({
	validator: 'isAfter',
	args: ['2011-08-03'],
	valid: ['2015-09-17'],
	invalid: ['invalid date'],
});

test({
	validator: 'isAfter',
	args: ['invalid date'],
	invalid: ['invalid date', '2015-09-17'],
});

test({
	validator: 'isAlpha',
	valid: [
		'abc',
		'ABC',
		'FoObar',
	],
	invalid: [
		'abc1',
		'  foo  ',
		'',
		'ÄBC',
		'FÜübar',
		'Jön',
		'Heiß',
	],
});

test({
	validator: 'isAlpha',
	args: ['bg-BG'],
	valid: [
		'абв',
		'АБВ',
		'жаба',
		'яГоДа',
	],
	invalid: [
		'abc1',
		'  foo  ',
		'',
		'ЁЧПС',
		'_аз_обичам_обувки_',
		'ехо!',
	],
});

test({
	validator: 'isAlpha',
	args: ['cs-CZ'],
	valid: [
		'žluťoučký',
		'KŮŇ',
		'Pěl',
		'Ďábelské',
		'ódy',
	],
	invalid: [
		'ábc1',
		'  fůj  ',
		'',
	],
});

test({
	validator: 'isAlpha',
	args: ['sk-SK'],
	valid: [
		'môj',
		'ľúbím',
		'mäkčeň',
		'stĹp',
		'vŕba',
		'ňorimberk',
		'ťava',
		'žanéta',
		'Ďábelské',
		'ódy',
	],
	invalid: [
		'1moj',
		'你好世界',
		'  Привет мир  ',
		'مرحبا العا ',
	],
});

test({
	validator: 'isAlpha',
	args: ['da-DK'],
	valid: [
		'aøå',
		'Ære',
		'Øre',
		'Åre',
	],
	invalid: [
		'äbc123',
		'ÄBC11',
		'',
	],
});

test({
	validator: 'isAlpha',
	args: ['nl-NL'],
	valid: [
		'Kán',
		'één',
		'vóór',
		'nú',
		'héél',
	],
	invalid: [
		'äca ',
		'abcß',
		'Øre',
	],
});

test({
	validator: 'isAlpha',
	args: ['de-DE'],
	valid: [
		'äbc',
		'ÄBC',
		'FöÖbär',
		'Heiß',
	],
	invalid: [
		'äbc1',
		'  föö  ',
		'',
	],
});

test({
	validator: 'isAlpha',
	args: ['hu-HU'],
	valid: [
		'árvíztűrőtükörfúrógép',
		'ÁRVÍZTŰRŐTÜKÖRFÚRÓGÉP',
	],
	invalid: [
		'äbc1',
		'  fäö  ',
		'Heiß',
		'',
	],
});

test({
	validator: 'isAlpha',
	args: ['pt-PT'],
	valid: [
		'palíndromo',
		'órgão',
		'qwértyúão',
		'àäãcëüïÄÏÜ',
	],
	invalid: [
		'12abc',
		'Heiß',
		'Øre',
		'æøå',
		'',
	],
});

test({
	validator: 'isAlpha',
	args: ['it-IT'],
	valid: [
		'àéèìîóòù',
		'correnti',
		'DEFINIZIONE',
		'compilazione',
		'metró',
		'pèsca',
		'PÉSCA',
		'genî',
	],
	invalid: [
		'äbc123',
		'ÄBC11',
		'æøå',
		'',
	],
});

test({
	validator: 'isAlpha',
	args: ['ar'],
	valid: [
		'أبت',
		'اَبِتَثّجً',
	],
	invalid: [
		'١٢٣أبت',
		'١٢٣',
		'abc1',
		'  foo  ',
		'',
		'ÄBC',
		'FÜübar',
		'Jön',
		'Heiß',
	],
});

test({
	validator: 'isAlpha',
	args: ['fa-IR'],
	valid: [
		'پدر',
		'مادر',
		'برادر',
		'خواهر',
	],
	invalid: [
		'فارسی۱۲۳',
		'۱۶۴',
		'abc1',
		'  foo  ',
		'',
		'ÄBC',
		'FÜübar',
		'Jön',
		'Heiß',
	],
});

test({
	validator: 'isAlpha',
	args: ['ku-IQ'],
	valid: [
		'ئؤڤگێ',
		'کوردستان',
	],
	invalid: [
		'ئؤڤگێ١٢٣',
		'١٢٣',
		'abc1',
		'  foo  ',
		'',
		'ÄBC',
		'FÜübar',
		'Jön',
		'Heiß',
	],
});

test({
	validator: 'isAlpha',
	args: ['nb-NO'],
	valid: [
		'aøå',
		'Ære',
		'Øre',
		'Åre',
	],
	invalid: [
		'äbc123',
		'ÄBC11',
		'',
	],
});

test({
	validator: 'isAlpha',
	args: ['pl-PL'],
	valid: [
		'kreską',
		'zamknięte',
		'zwykłe',
		'kropką',
		'przyjęły',
		'święty',
		'Pozwól',
	],
	invalid: [
		'12řiď ',
		'blé!!',
		'föö!2!',
	],
});

test({
	validator: 'isAlpha',
	args: ['sr-RS'],
	valid: [
		'ШћжЂљЕ',
		'ЧПСТЋЏ',
	],
	invalid: [
		'řiď ',
		'blé33!!',
		'föö!!',
	],
});

test({
	validator: 'isAlpha',
	args: ['sr-RS@latin'],
	valid: [
		'ŠAabčšđćž',
		'ŠATROĆčđš',
	],
	invalid: [
		'12řiď ',
		'blé!!',
		'föö!2!',
	],
});

test({
	validator: 'isAlpha',
	args: ['es-ES'],
	valid: [
		'ábcó',
		'ÁBCÓ',
		'dormís',
		'volvés',
		'español',
	],
	invalid: [
		'äca ',
		'abcß',
		'föö!!',
	],
});

test({
	validator: 'isAlpha',
	args: ['sv-SE'],
	valid: [
		'religiös',
		'stjäla',
		'västgöte',
		'Åre',
	],
	invalid: [
		'AİıÖöÇçŞşĞğÜüZ',
		'religiös23',
		'',
	],
});

test({
	validator: 'isAlpha',
	args: ['ar-SY'],
	valid: [
		'أبت',
		'اَبِتَثّجً',
	],
	invalid: [
		'١٢٣أبت',
		'١٢٣',
		'abc1',
		'  foo  ',
		'',
		'ÄBC',
		'FÜübar',
		'Jön',
		'Heiß',
	],
});

test({
	validator: 'isAlpha',
	args: ['tr-TR'],
	valid: [
		'AİıÖöÇçŞşĞğÜüZ',
	],
	invalid: [
		'0AİıÖöÇçŞşĞğÜüZ1',
		'  AİıÖöÇçŞşĞğÜüZ  ',
		'abc1',
		'  foo  ',
		'',
		'ÄBC',
		'Heiß',
	],
});

test({
	validator: 'isAlpha',
	args: ['uk-UA'],
	valid: [
		'АБВГҐДЕЄЖЗИIЇЙКЛМНОПРСТУФХЦШЩЬЮЯ',
	],
	invalid: [
		'0AİıÖöÇçŞşĞğÜüZ1',
		'  AİıÖöÇçŞşĞğÜüZ  ',
		'abc1',
		'  foo  ',
		'',
		'ÄBC',
		'Heiß',
		'ЫыЪъЭэ',
	],
});

test({
	validator: 'isAlpha',
	args: ['el-GR'],
	valid: [
		'αβγδεζηθικλμνξοπρςστυφχψω',
		'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',
		'άέήίΰϊϋόύώ',
		'ΆΈΉΊΪΫΎΏ',
	],
	invalid: [
		'0AİıÖöÇçŞşĞğÜüZ1',
		'  AİıÖöÇçŞşĞğÜüZ  ',
		'ÄBC',
		'Heiß',
		'ЫыЪъЭэ',
		'120',
		'jαckγ',
	],
});

test({
	validator: 'isAlpha',
	args: ['he'],
	valid: [
		'בדיקה',
		'שלום',
	],
	invalid: [
		'בדיקה123',
		'  foo  ',
		'abc1',
		'',
	],
});

test({
	validator: 'isAlpha',
	args: ['is-NOT'],
	error: [
		'abc',
		'ABC',
	],
});

test({
	validator: 'isAlphanumeric',
	valid: [
		'abc123',
		'ABC11',
	],
	invalid: [
		'abc ',
		'foo!!',
		'ÄBC',
		'FÜübar',
		'Jön',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['en-GB'],
	valid: [
		'abc123',
		'ABC11',
	],
	invalid: [
		'abc ',
		'foo!!',
		'ÄBC',
		'FÜübar',
		'Jön',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['bg-BG'],
	valid: [
		'абв1',
		'4АБ5В6',
		'жаба',
		'яГоДа2',
		'йЮя',
		'123',
	],
	invalid: [
		' ',
		'789  ',
		'hello000',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['cs-CZ'],
	valid: [
		'řiť123',
		'KŮŇ11',
	],
	invalid: [
		'řiď ',
		'blé!!',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['sk-SK'],
	valid: [
		'1môj',
		'2ľúbím',
		'3mäkčeň',
		'4stĹp',
		'5vŕba',
		'6ňorimberk',
		'7ťava',
		'8žanéta',
		'9Ďábelské',
		'10ódy',
	],
	invalid: [
		'1moj!',
		'你好世界',
		'  Привет мир  ',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['da-DK'],
	valid: [
		'ÆØÅ123',
		'Ære321',
		'321Øre',
		'123Åre',
	],
	invalid: [
		'äbc123',
		'ÄBC11',
		'',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['nl-NL'],
	valid: [
		'Kán123',
		'één354',
		'v4óór',
		'nú234',
		'hé54él',
	],
	invalid: [
		'1äca ',
		'ab3cß',
		'Øre',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['de-DE'],
	valid: [
		'äbc123',
		'ÄBC11',
	],
	invalid: [
		'äca ',
		'föö!!',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['hu-HU'],
	valid: [
		'0árvíztűrőtükörfúrógép123',
		'0ÁRVÍZTŰRŐTÜKÖRFÚRÓGÉP123',
	],
	invalid: [
		'1időúr!',
		'äbc1',
		'  fäö  ',
		'Heiß!',
		'',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['pt-PT'],
	valid: [
		'palíndromo',
		'2órgão',
		'qwértyúão9',
		'àäãcë4üïÄÏÜ',
	],
	invalid: [
		'!abc',
		'Heiß',
		'Øre',
		'æøå',
		'',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['it-IT'],
	valid: [
		'123àéèìîóòù',
		'123correnti',
		'DEFINIZIONE321',
		'compil123azione',
		'met23ró',
		'pès56ca',
		'PÉS45CA',
		'gen45î',
	],
	invalid: [
		'äbc123',
		'ÄBC11',
		'æøå',
		'',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['es-ES'],
	valid: [
		'ábcó123',
		'ÁBCÓ11',
	],
	invalid: [
		'äca ',
		'abcß',
		'föö!!',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['ar'],
	valid: [
		'أبت123',
		'أبتَُِ١٢٣',
	],
	invalid: [
		'äca ',
		'abcß',
		'föö!!',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['fa-IR'],
	valid: [
		'پارسی۱۲۳',
		'۱۴۵۶',
		'مژگان9',
	],
	invalid: [
		'äca ',
		'abcßة',
		'föö!!',
		'٤٥٦',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['ku-IQ'],
	valid: [
		'ئؤڤگێ١٢٣',
	],
	invalid: [
		'äca ',
		'abcß',
		'föö!!',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['ar-SY'],
	valid: [
		'أبت123',
		'أبتَُِ١٢٣',
	],
	invalid: [
		'abc ',
		'foo!!',
		'ÄBC',
		'FÜübar',
		'Jön',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['nb-NO'],
	valid: [
		'ÆØÅ123',
		'Ære321',
		'321Øre',
		'123Åre',
	],
	invalid: [
		'äbc123',
		'ÄBC11',
		'',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['pl-PL'],
	valid: [
		'kre123ską',
		'zam21knięte',
		'zw23ykłe',
		'123',
		'prz23yjęły',
		'świ23ęty',
		'Poz1322wól',
	],
	invalid: [
		'12řiď ',
		'blé!!',
		'föö!2!',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['sr-RS'],
	valid: [
		'ШћжЂљЕ123',
		'ЧПСТ132ЋЏ',
	],
	invalid: [
		'řiď ',
		'blé!!',
		'föö!!',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['sr-RS@latin'],
	valid: [
		'ŠAabčšđćž123',
		'ŠATRO11Ćčđš',
	],
	invalid: [
		'řiď ',
		'blé!!',
		'föö!!',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['sv-SE'],
	valid: [
		'religiös13',
		'st23jäla',
		'västgöte123',
		'123Åre',
	],
	invalid: [
		'AİıÖöÇçŞşĞğÜüZ',
		'foo!!',
		'',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['tr-TR'],
	valid: [
		'AİıÖöÇçŞşĞğÜüZ123',
	],
	invalid: [
		'AİıÖöÇçŞşĞğÜüZ ',
		'foo!!',
		'ÄBC',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['uk-UA'],
	valid: [
		'АБВГҐДЕЄЖЗИIЇЙКЛМНОПРСТУФХЦШЩЬЮЯ123',
	],
	invalid: [
		'éeoc ',
		'foo!!',
		'ÄBC',
		'ЫыЪъЭэ',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['el-GR'],
	valid: [
		'αβγδεζηθικλμνξοπρςστυφχψω',
		'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',
		'20θ',
		'1234568960',
	],
	invalid: [
		'0AİıÖöÇçŞşĞğÜüZ1',
		'  AİıÖöÇçŞşĞğÜüZ  ',
		'ÄBC',
		'Heiß',
		'ЫыЪъЭэ',
		'jαckγ',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['he'],
	valid: [
		'אבג123',
		'שלום11',
	],
	invalid: [
		'אבג ',
		'לא!!',
		'abc',
		'  foo  ',
	],
});

test({
	validator: 'isAlphanumeric',
	args: ['is-NOT'],
	error: [
		'1234568960',
		'abc123',
	],
});

test({
	validator: 'isAscii',
	valid: [
		'foobar',
		'0987654321',
		'test@example.com',
		'1234abcDEF',
	],
	invalid: [
		'ｆｏｏbar',
		'ｘｙｚ０９８',
		'１２３456',
		'ｶﾀｶﾅ',
	],
});

test({
	validator: 'isBase32',
	valid: [
		'ZG======',
		'JBSQ====',
		'JBSWY===',
		'JBSWY3A=',
		'JBSWY3DP',
		'JBSWY3DPEA======',
		'K5SWYY3PNVSSA5DPEBXG6ZA=',
		'K5SWYY3PNVSSA5DPEBXG6===',
	],
	invalid: [
		'12345',
		'',
		'JBSWY3DPtesting123',
		'ZG=====',
		'Z======',
		'Zm=8JBSWY3DP',
		'=m9vYg==',
		'Zm9vYm/y====',
	],
});

test({
	validator: 'isBase64',
	valid: [
		'Zg==',
		'Zm8=',
		'Zm9v',
		'Zm9vYg==',
		'Zm9vYmE=',
		'Zm9vYmFy',
		'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4=',
		'Vml2YW11cyBmZXJtZW50dW0gc2VtcGVyIHBvcnRhLg==',
		'U3VzcGVuZGlzc2UgbGVjdHVzIGxlbw==',
		'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuMPNS1Ufof9EW/M98FNw' +
		'UAKrwflsqVxaxQjBQnHQmiI7Vac40t8x7pIb8gLGV6wL7sBTJiPovJ0V7y7oc0Ye' +
		'rhKh0Rm4skP2z/jHwwZICgGzBvA0rH8xlhUiTvcwDCJ0kc+fh35hNt8srZQM4619' +
		'FTgB66Xmp4EtVyhpQV+t02g6NzK72oZI0vnAvqhpkxLeLiMCyrI416wHm5Tkukhx' +
		'QmcL2a6hNOyu0ixX/x2kSFXApEnVrJ+/IxGyfyw8kf4N2IZpW5nEP847lpfj0SZZ' +
		'Fwrd1mnfnDbYohX2zRptLy2ZUn06Qo9pkG5ntvFEPo9bfZeULtjYzIl6K8gJ2uGZ' +
		'HQIDAQAB',
	],
	invalid: [
		'12345',
		'',
		'Vml2YW11cyBmZXJtZtesting123',
		'Zg=',
		'Z===',
		'Zm=8',
		'=m9vYg==',
		'Zm9vYmFy====',
	],
});

test({
	validator: 'isBase64',
	args: [{ urlSafe: true }],
	valid: [
		'bGFkaWVzIGFuZCBnZW50bGVtZW4sIHdlIGFyZSBmbG9hdGluZyBpbiBzcGFjZQ',
		'1234',
		'bXVtLW5ldmVyLXByb3Vk',
		'PDw_Pz8-Pg',
		'VGhpcyBpcyBhbiBlbmNvZGVkIHN0cmluZw',
	],
	invalid: [
		' AA',
		'\tAA',
		'\rAA',
		'',
		'\nAA',
		'This+isa/bad+base64Url==',
		'0K3RgtC+INC30LDQutC+0LTQuNGA0L7QstCw0L3QvdCw0Y8g0YHRgtGA0L7QutCw',
	],
});

test({
	validator: 'isBefore',
	args: ['08/04/2011'],
	valid: ['2010-07-02', '2010-08-04', `${new Date(0)}`],
	invalid: ['08/04/2011', `${new Date(2011, 9, 10)}`],
});

test({
	validator: 'isBefore',
	args: [`${new Date(2011, 7, 4)}`],
	valid: ['2010-07-02', '2010-08-04', `${new Date(0)}`],
	invalid: ['08/04/2011', `${new Date(2011, 9, 10)}`],
});

test({
	validator: 'isBefore',
	valid: [
		'2000-08-04',
		`${new Date(0)}`,
		`${new Date(Date.now() - 86400000)}`,
	],
	invalid: ['2100-07-02', `${new Date(2217, 10, 10)}`],
});

test({
	validator: 'isBefore',
	args: ['2011-08-03'],
	valid: ['1999-12-31'],
	invalid: ['invalid date'],
});

test({
	validator: 'isBefore',
	args: ['invalid date'],
	invalid: ['invalid date', '1999-12-31'],
});

test({
	validator: 'isBIC',
	valid: [
		'SBICKEN1345',
		'SBICKEN1',
		'SBICKENY',
		'SBICKEN1YYP',
	],
	invalid: [
		'SBIC23NXXX',
		'S23CKENXXXX',
		'SBICKENXX',
		'SBICKENXX9',
		'SBICKEN13458',
		'SBICKEN',
	],
});

test({
	validator: 'isBoolean',
	valid: [
		'true',
		'false',
		'0',
		'1',
	],
	invalid: [
		'1.0',
		'0.0',
		'true ',
		'False',
		'True',
		'yes',
	],
});

test({
	validator: 'isBtcAddress',
	valid: [
		'1MUz4VMYui5qY1mxUiG8BQ1Luv6tqkvaiL',
		'3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
		'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
	],
	invalid: [
		'4J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
		'0x56F0B8A998425c53c75C4A303D4eF987533c5597',
		'pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g',
	],
});

test({
	validator: 'isByteLength',
	args: [{ min: 2 }],
	valid: ['abc', 'de', 'abcd', 'ｇｍａｉｌ'],
	invalid: ['', 'a'],
});

test({
	validator: 'isByteLength',
	args: [{ min: 2, max: 3 }],
	valid: ['abc', 'de', 'ｇ'],
	invalid: ['', 'a', 'abcd', 'ｇｍ'],
});

test({
	validator: 'isByteLength',
	args: [{ min: 0, max: 0 }],
	valid: [''],
	invalid: ['ｇ', 'a'],
});

test({
	validator: 'isCreditCard',
	valid: [
		'375556917985515',
		'36050234196908',
		'4716461583322103',
		'4716-2210-5188-5662',
		'4929 7226 5379 7141',
		'5398228707871527',
		'6283875070985593',
		'6263892624162870',
		'6234917882863855',
		'6234698580215388',
		'6226050967750613',
		'6246281879460688',
		'2222155765072228',
		'2225855203075256',
		'2720428011723762',
		'2718760626256570',
		'6765780016990268',
		'4716989580001715211',
	],
	invalid: [
		'foo',
		'foo',
		'5398228707871528',
		'2718760626256571',
		'2721465526338453',
		'2220175103860763',
		'375556917985515999999993',
		'899999996234917882863855',
		'prefix6234917882863855',
		'623491788middle2863855',
		'6234917882863855suffix',
		'4716989580001715213',
	],
});

// -$##,###.## (en-US, en-CA, en-AU, en-NZ, en-HK)
test({
	validator: 'isCurrency',
	valid: [
		'-$10,123.45',
		'$10,123.45',
		'$10123.45',
		'10,123.45',
		'10123.45',
		'10,123',
		'1,123,456',
		'1123456',
		'1.39',
		'.03',
		'0.10',
		'$0.10',
		'-$0.01',
		'-$.99',
		'$100,234,567.89',
		'$10,123',
		'10,123',
		'-10123',
	],
	invalid: [
		'1.234',
		'$1.1',
		'$ 32.50',
		'500$',
		'.0001',
		'$.001',
		'$0.001',
		'12,34.56',
		'123456,123,123456',
		'123,4',
		',123',
		'$-,123',
		'$',
		'.',
		',',
		'00',
		'$-',
		'$-,.',
		'-',
		'-$',
		'',
		'- $',
	],
});

// -$##,###.## (en-US, en-CA, en-AU, en-NZ, en-HK)
test({
	validator: 'isCurrency',
	args: [
		{
			allow_decimal: false,
		},
	],
	valid: [
		'-$10,123',
		'$10,123',
		'$10123',
		'10,123',
		'10123',
		'10,123',
		'1,123,456',
		'1123456',
		'1',
		'0',
		'$0',
		'-$0',
		'$100,234,567',
		'$10,123',
		'10,123',
		'-10123',
	],
	invalid: [
		'-$10,123.45',
		'$10,123.45',
		'$10123.45',
		'10,123.45',
		'10123.45',
		'1.39',
		'.03',
		'0.10',
		'$0.10',
		'-$0.01',
		'-$.99',
		'$100,234,567.89',
		'1.234',
		'$1.1',
		'$ 32.50',
		'.0001',
		'$.001',
		'$0.001',
		'12,34.56',
		'123,4',
		',123',
		'$-,123',
		'$',
		'.',
		',',
		'00',
		'$-',
		'$-,.',
		'-',
		'-$',
		'',
		'- $',
	],
});

// -$##,###.## (en-US, en-CA, en-AU, en-NZ, en-HK)
test({
	validator: 'isCurrency',
	args: [
		{
			require_decimal: true,
		},
	],
	valid: [
		'-$10,123.45',
		'$10,123.45',
		'$10123.45',
		'10,123.45',
		'10123.45',
		'10,123.00',
		'1.39',
		'.03',
		'0.10',
		'$0.10',
		'-$0.01',
		'-$.99',
		'$100,234,567.89',
	],
	invalid: [
		'$10,123',
		'10,123',
		'-10123',
		'1,123,456',
		'1123456',
		'1.234',
		'$1.1',
		'$ 32.50',
		'500$',
		'.0001',
		'$.001',
		'$0.001',
		'12,34.56',
		'123456,123,123456',
		'123,4',
		',123',
		'$-,123',
		'$',
		'.',
		',',
		'00',
		'$-',
		'$-,.',
		'-',
		'-$',
		'',
		'- $',
	],
});

// -$##,###.## (en-US, en-CA, en-AU, en-NZ, en-HK)
test({
	validator: 'isCurrency',
	args: [
		{
			digits_after_decimal: [1, 3],
		},
	],
	valid: [
		'-$10,123.4',
		'$10,123.454',
		'$10123.452',
		'10,123.453',
		'10123.450',
		'10,123',
		'1,123,456',
		'1123456',
		'1.3',
		'.030',
		'0.100',
		'$0.1',
		'-$0.0',
		'-$.9',
		'$100,234,567.893',
		'$10,123',
		'10,123.123',
		'-10123.1',
	],
	invalid: [
		'1.23',
		'$1.13322',
		'$ 32.50',
		'500$',
		'.0001',
		'$.01',
		'$0.01',
		'12,34.56',
		'123456,123,123456',
		'123,4',
		',123',
		'$-,123',
		'$',
		'.',
		',',
		'00',
		'$-',
		'$-,.',
		'-',
		'-$',
		'',
		'- $',
	],
});

// -$##,###.## with $ required (en-US, en-CA, en-AU, en-NZ, en-HK)
test({
	validator: 'isCurrency',
	args: [
		{
			require_symbol: true,
		},
	],
	valid: [
		'-$10,123.45',
		'$10,123.45',
		'$10123.45',
		'$10,123.45',
		'$10,123',
		'$1,123,456',
		'$1123456',
		'$1.39',
		'$.03',
		'$0.10',
		'$0.10',
		'-$0.01',
		'-$.99',
		'$100,234,567.89',
		'$10,123',
		'-$10123',
	],
	invalid: [
		'1.234',
		'$1.234',
		'1.1',
		'$1.1',
		'$ 32.50',
		' 32.50',
		'500',
		'10,123,456',
		'.0001',
		'$.001',
		'$0.001',
		'1,234.56',
		'123456,123,123456',
		'$123456,123,123456',
		'123.4',
		'$123.4',
		',123',
		'$,123',
		'$-,123',
		'$',
		'.',
		'$.',
		',',
		'$,',
		'00',
		'$00',
		'$-',
		'$-,.',
		'-',
		'-$',
		'',
		'$ ',
		'- $',
	],
});

// ¥-##,###.## (zh-CN)
test({
	validator: 'isCurrency',
	args: [
		{
			symbol: '¥',
			negative_sign_before_digits: true,
		},
	],
	valid: [
		'123,456.78',
		'-123,456.78',
		'¥6,954,231',
		'¥-6,954,231',
		'¥10.03',
		'¥-10.03',
		'10.03',
		'1.39',
		'.03',
		'0.10',
		'¥-10567.01',
		'¥0.01',
		'¥1,234,567.89',
		'¥10,123',
		'¥-10,123',
		'¥-10,123.45',
		'10,123',
		'10123',
		'¥-100',
	],
	invalid: [
		'1.234',
		'¥1.1',
		'5,00',
		'.0001',
		'¥.001',
		'¥0.001',
		'12,34.56',
		'123456,123,123456',
		'123 456',
		',123',
		'¥-,123',
		'',
		' ',
		'¥',
		'¥-',
		'¥-,.',
		'-',
		'- ¥',
		'-¥',
	],
});

test({
	validator: 'isCurrency',
	args: [
		{
			negative_sign_after_digits: true,
		},
	],
	valid: [
		'$10,123.45-',
		'$10,123.45',
		'$10123.45',
		'10,123.45',
		'10123.45',
		'10,123',
		'1,123,456',
		'1123456',
		'1.39',
		'.03',
		'0.10',
		'$0.10',
		'$0.01-',
		'$.99-',
		'$100,234,567.89',
		'$10,123',
		'10,123',
		'10123-',
	],
	invalid: [
		'-123',
		'1.234',
		'$1.1',
		'$ 32.50',
		'500$',
		'.0001',
		'$.001',
		'$0.001',
		'12,34.56',
		'123456,123,123456',
		'123,4',
		',123',
		'$-,123',
		'$',
		'.',
		',',
		'00',
		'$-',
		'$-,.',
		'-',
		'-$',
		'',
		'- $',
	],
});

// ¥##,###.## with no negatives (zh-CN)
test({
	validator: 'isCurrency',
	args: [
		{
			symbol: '¥',
			allow_negatives: false,
		},
	],
	valid: [
		'123,456.78',
		'¥6,954,231',
		'¥10.03',
		'10.03',
		'1.39',
		'.03',
		'0.10',
		'¥0.01',
		'¥1,234,567.89',
		'¥10,123',
		'10,123',
		'10123',
		'¥100',
	],
	invalid: [
		'1.234',
		'-123,456.78',
		'¥-6,954,231',
		'¥-10.03',
		'¥-10567.01',
		'¥1.1',
		'¥-10,123',
		'¥-10,123.45',
		'5,00',
		'¥-100',
		'.0001',
		'¥.001',
		'¥-.001',
		'¥0.001',
		'12,34.56',
		'123456,123,123456',
		'123 456',
		',123',
		'¥-,123',
		'',
		' ',
		'¥',
		'¥-',
		'¥-,.',
		'-',
		'- ¥',
		'-¥',
	],
});

// R ## ###,## and R-10 123,25 (el-ZA)
test({
	validator: 'isCurrency',
	args: [
		{
			symbol: 'R',
			negative_sign_before_digits: true,
			thousands_separator: ' ',
			decimal_separator: ',',
			allow_negative_sign_placeholder: true,
		},
	],
	valid: [
		'123 456,78',
		'-10 123',
		'R-10 123',
		'R 6 954 231',
		'R10,03',
		'10,03',
		'1,39',
		',03',
		'0,10',
		'R10567,01',
		'R0,01',
		'R1 234 567,89',
		'R10 123',
		'R 10 123',
		'R 10123',
		'R-10123',
		'10 123',
		'10123',
	],
	invalid: [
		'1,234',
		'R -10123',
		'R- 10123',
		'R,1',
		',0001',
		'R,001',
		'R0,001',
		'12 34,56',
		'123456 123 123456',
		' 123',
		'- 123',
		'123 ',
		'',
		' ',
		'R',
		'R- .1',
		'R-',
		'-',
		'-R 10123',
		'R00',
		'R -',
		'-R',
	],
});

// -€ ##.###,## (it-IT)
test({
	validator: 'isCurrency',
	args: [
		{
			symbol: '€',
			thousands_separator: '.',
			decimal_separator: ',',
			allow_space_after_symbol: true,
		},
	],
	valid: [
		'123.456,78',
		'-123.456,78',
		'€6.954.231',
		'-€6.954.231',
		'€ 896.954.231',
		'-€ 896.954.231',
		'16.954.231',
		'-16.954.231',
		'€10,03',
		'-€10,03',
		'10,03',
		'-10,03',
		'-1,39',
		',03',
		'0,10',
		'-€10567,01',
		'-€ 10567,01',
		'€ 0,01',
		'€1.234.567,89',
		'€10.123',
		'10.123',
		'-€10.123',
		'€ 10.123',
		'€10.123',
		'€ 10123',
		'10.123',
		'-10123',
	],
	invalid: [
		'1,234',
		'€ 1,1',
		'50#,50',
		'123,@€ ',
		'€€500',
		',0001',
		'€ ,001',
		'€0,001',
		'12.34,56',
		'123456.123.123456',
		'€123€',
		'',
		' ',
		'€',
		' €',
		'€ ',
		'€€',
		' 123',
		'- 123',
		'.123',
		'-€.123',
		'123 ',
		'€-',
		'- €',
		'€ - ',
		'-',
		'- ',
		'-€',
	],
});

// -##.###,## € (el-GR)
test({
	validator: 'isCurrency',
	args: [
		{
			symbol: '€',
			thousands_separator: '.',
			symbol_after_digits: true,
			decimal_separator: ',',
			allow_space_after_digits: true,
		},
	],
	valid: [
		'123.456,78',
		'-123.456,78',
		'6.954.231 €',
		'-6.954.231 €',
		'896.954.231',
		'-896.954.231',
		'16.954.231',
		'-16.954.231',
		'10,03€',
		'-10,03€',
		'10,03',
		'-10,03',
		'1,39',
		',03',
		'-,03',
		'-,03 €',
		'-,03€',
		'0,10',
		'10567,01€',
		'0,01 €',
		'1.234.567,89€',
		'10.123€',
		'10.123',
		'10.123€',
		'10.123 €',
		'10123 €',
		'10.123',
		'10123',
	],
	invalid: [
		'1,234',
		'1,1 €',
		',0001',
		',001 €',
		'0,001€',
		'12.34,56',
		'123456.123.123456',
		'€123€',
		'',
		' ',
		'€',
		' €',
		'€ ',
		' 123',
		'- 123',
		'.123',
		'-.123€',
		'-.123 €',
		'123 ',
		'-€',
		'- €',
		'-',
		'- ',
	],
});

// kr. -##.###,## (da-DK)
test({
	validator: 'isCurrency',
	args: [
		{
			symbol: 'kr.',
			negative_sign_before_digits: true,
			thousands_separator: '.',
			decimal_separator: ',',
			allow_space_after_symbol: true,
		},
	],
	valid: [
		'123.456,78',
		'-10.123',
		'kr. -10.123',
		'kr.-10.123',
		'kr. 6.954.231',
		'kr.10,03',
		'kr. -10,03',
		'10,03',
		'1,39',
		',03',
		'0,10',
		'kr. 10567,01',
		'kr. 0,01',
		'kr. 1.234.567,89',
		'kr. -1.234.567,89',
		'10.123',
		'kr. 10.123',
		'kr.10.123',
		'10123',
		'10.123',
		'kr.-10123',
	],
	invalid: [
		'1,234',
		'kr.  -10123',
		'kr.,1',
		',0001',
		'kr. ,001',
		'kr.0,001',
		'12.34,56',
		'123456.123.123456',
		'.123',
		'kr.-.123',
		'kr. -.123',
		'- 123',
		'123 ',
		'',
		' ',
		'kr.',
		' kr.',
		'kr. ',
		'kr.-',
		'kr. -',
		'kr. - ',
		' - ',
		'-',
		'- kr.',
		'-kr.',
	],
});

// kr. ##.###,## with no negatives (da-DK)
test({
	validator: 'isCurrency',
	args: [
		{
			symbol: 'kr.',
			allow_negatives: false,
			negative_sign_before_digits: true,
			thousands_separator: '.',
			decimal_separator: ',',
			allow_space_after_symbol: true,
		},
	],
	valid: [
		'123.456,78',
		'10.123',
		'kr. 10.123',
		'kr.10.123',
		'kr. 6.954.231',
		'kr.10,03',
		'kr. 10,03',
		'10,03',
		'1,39',
		',03',
		'0,10',
		'kr. 10567,01',
		'kr. 0,01',
		'kr. 1.234.567,89',
		'kr.1.234.567,89',
		'10.123',
		'kr. 10.123',
		'kr.10.123',
		'10123',
		'10.123',
		'kr.10123',
	],
	invalid: [
		'1,234',
		'-10.123',
		'kr. -10.123',
		'kr. -1.234.567,89',
		'kr.-10123',
		'kr.  -10123',
		'kr.-10.123',
		'kr. -10,03',
		'kr.,1',
		',0001',
		'kr. ,001',
		'kr.0,001',
		'12.34,56',
		'123456.123.123456',
		'.123',
		'kr.-.123',
		'kr. -.123',
		'- 123',
		'123 ',
		'',
		' ',
		'kr.',
		' kr.',
		'kr. ',
		'kr.-',
		'kr. -',
		'kr. - ',
		' - ',
		'-',
		'- kr.',
		'-kr.',
	],
});

// ($##,###.##) (en-US, en-HK)
test({
	validator: 'isCurrency',
	args: [
		{
			parens_for_negatives: true,
		},
	],
	valid: [
		'1,234',
		'(1,234)',
		'($6,954,231)',
		'$10.03',
		'(10.03)',
		'($10.03)',
		'1.39',
		'.03',
		'(.03)',
		'($.03)',
		'0.10',
		'$10567.01',
		'($0.01)',
		'$1,234,567.89',
		'$10,123',
		'(10,123)',
		'10123',
	],
	invalid: [
		'1.234',
		'($1.1)',
		'-$1.10',
		'$ 32.50',
		'500$',
		'.0001',
		'$.001',
		'($0.001)',
		'12,34.56',
		'123456,123,123456',
		'( 123)',
		',123',
		'$-,123',
		'',
		' ',
		'  ',
		'   ',
		'$',
		'$ ',
		' $',
		' 123',
		'(123) ',
		'.',
		',',
		'00',
		'$-',
		'$ - ',
		'$- ',
		' - ',
		'-',
		'- $',
		'-$',
		'()',
		'( )',
		'(  -)',
		'(  - )',
		'(  -  )',
		'(-)',
		'(-$)',
	],
});
// $##,###.## with no negatives (en-US, en-CA, en-AU, en-HK)
test({
	validator: 'isCurrency',
	args: [
		{ allow_negatives: false },
	],
	valid: [
		'$10,123.45',
		'$10123.45',
		'10,123.45',
		'10123.45',
		'10,123',
		'1,123,456',
		'1123456',
		'1.39',
		'.03',
		'0.10',
		'$0.10',
		'$100,234,567.89',
		'$10,123',
		'10,123',
	],
	invalid: [
		'1.234',
		'-1.234',
		'-10123',
		'-$0.01',
		'-$.99',
		'$1.1',
		'-$1.1',
		'$ 32.50',
		'500$',
		'.0001',
		'$.001',
		'$0.001',
		'12,34.56',
		'123456,123,123456',
		'-123456,123,123456',
		'123,4',
		',123',
		'$-,123',
		'$',
		'.',
		',',
		'00',
		'$-',
		'$-,.',
		'-',
		'-$',
		'',
		'- $',
		'-$10,123.45',
	],
});

//  R$ ##,###.## (pt_BR)
test({
	validator: 'isCurrency',
	args: [
		{
			symbol: 'R$',
			require_symbol: true,
			allow_space_after_symbol: true,
			symbol_after_digits: false,
			thousands_separator: '.',
			decimal_separator: ',',
		},
	],
	valid: [
		'R$ 1.400,00',
		'R$ 400,00',
	],
	invalid: [
		'$ 1.400,00',
		'$R 1.400,00',
	],
});

test({
	validator: 'isDataURI',
	valid: [
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAFVBMVEXk5OTn5+ft7e319fX29vb5+fn///++GUmVAAAALUlEQVQIHWNICnYLZnALTgpmMGYIFWYIZTA2ZFAzTTFlSDFVMwVyQhmAwsYMAKDaBy0axX/iAAAAAElFTkSuQmCC',
		'   data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAFVBMVEXk5OTn5+ft7e319fX29vb5+fn///++GUmVAAAALUlEQVQIHWNICnYLZnALTgpmMGYIFWYIZTA2ZFAzTTFlSDFVMwVyQhmAwsYMAKDaBy0axX/iAAAAAElFTkSuQmCC   ',
		'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Crect%20fill%3D%22%2300B1FF%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3C%2Fsvg%3E',
		'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCBmaWxsPSIjMDBCMUZGIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPjwvc3ZnPg==',
		' data:,Hello%2C%20World!',
		' data:,Hello World!',
		' data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D',
		' data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E',
		'data:,A%20brief%20note',
		'data:text/html;charset=US-ASCII,%3Ch1%3EHello!%3C%2Fh1%3E',
	],
	invalid: [
		'dataxbase64',
		'data:HelloWorld',
		'data:,A%20brief%20invalid%20[note',
		'file:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D',
		'data:text/html;charset=,%3Ch1%3EHello!%3C%2Fh1%3E',
		'data:text/html;charset,%3Ch1%3EHello!%3C%2Fh1%3E',
		'data:base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
		'',
		'http://wikipedia.org',
		'base64',
		'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
	],
});

test({
	validator: 'isDate',
	valid: [
		new Date().toISOString().slice(0, 10),
		new Date(2014, 2, 15).toISOString().slice(0, 10),
		new Date('2014-03-15').toISOString().slice(0, 10),
		'2020/02/29',
	],
	invalid: [
		'',
		'15072002',
		`${Number(42)}`,
		'2020-02-30', // invalid date
		'2019-02-29', // non-leap year
		'2020-04-31', // invalid date
	],
});

test({
	validator: 'isDate',
	args: ['DD/MM/YYYY'],
	valid: [
		'15-07-2002',
		'15/07/2002',
	],
	invalid: [
		'15/7/2002',
		'15-7-2002',
		'15/7/02',
		'15-7-02',
	],
});

test({
	validator: 'isDate',
	args: ['DD/MM/YY'],
	valid: [
		'15-07-02',
		'15/07/02',
	],
	invalid: [
		'15/7/2002',
		'15-7-2002',
	],
});

test({
	validator: 'isDate',
	args: ['D/M/YY'],
	valid: [
		'5-7-02',
		'5/7/02',
	],
	invalid: [
		'5/07/02',
		'15/7/02',
		'15-7-02',
	],
});

test({
	validator: 'isDecimal',
	valid: [
		'123',
		'00123',
		'-00123',
		'0',
		'-0',
		'+123',
		'0.01',
		'.1',
		'1.0',
		'-.25',
		'-0',
		'0.0000000000001',
	],
	invalid: [
		'0,01',
		',1',
		'1,0',
		'-,25',
		'0,0000000000001',
		'0٫01',
		'٫1',
		'1٫0',
		'-٫25',
		'0٫0000000000001',
		'....',
		' ',
		'',
		'-',
		'+',
		'.',
		'0.1a',
		'a',
		'\n',
	],
});

test({
	validator: 'isDivisibleBy',
	args: ['0'],
	invalid: [
		'9',
		'10',
		'1.12',
		'0.87',
		'0.0',
	],
});

test({
	validator: 'isDivisibleBy',
	args: ['2'],
	valid: [
		'10.0',
		'0',
		'2.0',
	],
	invalid: [
		'9',
		'17',
		'1.2',
		'1.1',
	],
});

test({
	validator: 'isDivisibleBy',
	args: ['11'],
	valid: [
		'11',
		'121',
		'0',
		'11.0',
	],
	invalid: [
		'91',
		'17',
		'11.2',
	],
});

test({
	validator: 'isEAN',
	valid: [
		'9421023610112',
		'1234567890128',
		'4012345678901',
		'9771234567003',
		'9783161484100',
		'73513537',
	],
	invalid: [
		'5901234123451',
		'079777681629',
		'0705632085948',
	],
});

test({
	validator: 'isEmail',
	valid: [
		'foo@bar.com',
		'x@x.au',
		'foo@bar.com.au',
		'foo+bar@bar.com',
		'hans.m端ller@test.com',
		'hans@m端ller.com',
		'test|123@m端ller.com',
		'test123+ext@gmail.com',
		'some.name.midd.leNa.me+extension@GoogleMail.com',
		'"foobar"@example.com',
		'"  foo  m端ller "@example.com',
		'"foo\\@bar"@example.com',
		'test@gmail.com',
		'test.1@gmail.com',
	],
	invalid: [
		'invalidemail@',
		'invalid.com',
		'@invalid.com',
		'foo@bar.com.',
		'somename@ｇｍａｉｌ.com',
		'foo@bar.co.uk.',
		'z@co.c',
		'ｇｍａｉｌｇｍａｉｌｇｍａｉｌｇｍａｉｌｇｍａｉｌ@gmail.com',
		'test1@invalid.co m',
		'test2@invalid.co m',
		'test3@invalid.co m',
		'test4@invalid.co m',
		'test5@invalid.co m',
		'test6@invalid.co m',
		'test7@invalid.co m',
		'test8@invalid.co m',
		'test9@invalid.co m',
		'test10@invalid.co m',
		'test11@invalid.co m',
		'test12@invalid.co　m',
		'test13@invalid.co　m',
		'multiple..dots@stillinvalid.com',
		'test123+invalid! sub_address@gmail.com',
		'gmail...ignores...dots...@gmail.com',
		'ends.with.dot.@gmail.com',
		'multiple..dots@gmail.com',
		'wrong()[]",:;<>@@gmail.com',
		'"wrong()[]",:;<>@@gmail.com',
		'username@domain.com�',
		'username@domain.com©',
	],
});

test({
	validator: 'isEmail',
	args: [{ domain_specific_validation: true }],
	valid: [
		'foobar@gmail.com',
		'foo.bar@gmail.com',
		'foo.bar@googlemail.com',
	],
	invalid: [
		'test@gmail.com',
		'test.1@gmail.com',
		'.foobar@gmail.com',
	],
});

test({
	validator: 'isEmail',
	args: [{ allow_utf8_local_part: false }],
	valid: [
		'foo@bar.com',
		'x@x.au',
		'foo@bar.com.au',
		'foo+bar@bar.com',
		'hans@m端ller.com',
		'test|123@m端ller.com',
		'test123+ext@gmail.com',
		'some.name.midd.leNa.me+extension@GoogleMail.com',
		'"foobar"@example.com',
		'"foo\\@bar"@example.com',
		'"  foo  bar  "@example.com',
	],
	invalid: [
		'invalidemail@',
		'invalid.com',
		'@invalid.com',
		'foo@bar.com.',
		'foo@bar.co.uk.',
		'somename@ｇｍａｉｌ.com',
		'hans.m端ller@test.com',
		'z@co.c',
		'tüst@invalid.com',
	],
});

test({
	validator: 'isEmail',
	args: [{ allow_display_name: true }],
	valid: [
		'foo@bar.com',
		'x@x.au',
		'foo@bar.com.au',
		'foo+bar@bar.com',
		'hans.m端ller@test.com',
		'hans@m端ller.com',
		'test|123@m端ller.com',
		'test123+ext@gmail.com',
		'some.name.midd.leNa.me+extension@GoogleMail.com',
		'Some Name <foo@bar.com>',
		'Some Name <x@x.au>',
		'Some Name <foo@bar.com.au>',
		'Some Name <foo+bar@bar.com>',
		'Some Name <hans.m端ller@test.com>',
		'Some Name <hans@m端ller.com>',
		'Some Name <test|123@m端ller.com>',
		'Some Name <test123+ext@gmail.com>',
		"'Foo Bar, Esq'<foo@bar.com>",
		'Some Name <some.name.midd.leNa.me+extension@GoogleMail.com>',
		'Some Middle Name <some.name.midd.leNa.me+extension@GoogleMail.com>',
		'Name <some.name.midd.leNa.me+extension@GoogleMail.com>',
		'Name<some.name.midd.leNa.me+extension@GoogleMail.com>',
		'Some Name <foo@gmail.com>',
		'Name🍓With🍑Emoji🚴‍♀️🏆<test@aftership.com>',
		'🍇🍗🍑<only_emoji@aftership.com>',
		'"<displayNameInBrackets>"<jh@gmail.com>',
		'"\\"quotes\\""<jh@gmail.com>',
		'"name;"<jh@gmail.com>',
		'"name;" <jh@gmail.com>',
	],
	invalid: [
		'invalidemail@',
		'invalid.com',
		'@invalid.com',
		'foo@bar.com.',
		'foo@bar.co.uk.',
		'Some Name <invalidemail@>',
		'Some Name <invalid.com>',
		'Some Name <@invalid.com>',
		'Some Name <foo@bar.com.>',
		'Some Name <foo@bar.co.uk.>',
		'Some Name foo@bar.co.uk.>',
		'Some Name <foo@bar.co.uk.',
		'Some Name < foo@bar.co.uk >',
		'Name foo@bar.co.uk',
		'Some Name <some..name@gmail.com>',
		'Some Name<emoji_in_address🍈@aftership.com>',
		'invisibleCharacter\u001F<jh@gmail.com>',
		'<displayNameInBrackets><jh@gmail.com>',
		'\\"quotes\\"<jh@gmail.com>',
		'""quotes""<jh@gmail.com>',
		'name;<jh@gmail.com>',
		'    <jh@gmail.com>',
		'"    "<jh@gmail.com>',
	],
});

test({
	validator: 'isEmail',
	args: [{ require_display_name: true }],
	valid: [
		'Some Name <foo@bar.com>',
		'Some Name <x@x.au>',
		'Some Name <foo@bar.com.au>',
		'Some Name <foo+bar@bar.com>',
		'Some Name <hans.m端ller@test.com>',
		'Some Name <hans@m端ller.com>',
		'Some Name <test|123@m端ller.com>',
		'Some Name <test123+ext@gmail.com>',
		'Some Name <some.name.midd.leNa.me+extension@GoogleMail.com>',
		'Some Middle Name <some.name.midd.leNa.me+extension@GoogleMail.com>',
		'Name <some.name.midd.leNa.me+extension@GoogleMail.com>',
		'Name<some.name.midd.leNa.me+extension@GoogleMail.com>',
	],
	invalid: [
		'some.name.midd.leNa.me+extension@GoogleMail.com',
		'foo@bar.com',
		'x@x.au',
		'foo@bar.com.au',
		'foo+bar@bar.com',
		'hans.m端ller@test.com',
		'hans@m端ller.com',
		'test|123@m端ller.com',
		'test123+ext@gmail.com',
		'invalidemail@',
		'invalid.com',
		'@invalid.com',
		'foo@bar.com.',
		'foo@bar.co.uk.',
		'Some Name <invalidemail@>',
		'Some Name <invalid.com>',
		'Some Name <@invalid.com>',
		'Some Name <foo@bar.com.>',
		'Some Name <foo@bar.co.uk.>',
		'Some Name foo@bar.co.uk.>',
		'Some Name <foo@bar.co.uk.',
		'Some Name < foo@bar.co.uk >',
		'Name foo@bar.co.uk',
	],
});

test({
	validator: 'isEmail',
	args: [{ allow_ip_domain: true }],
	valid: [
		'email@[123.123.123.123]',
		'email@255.255.255.255',
	],
	invalid: [
		'email@0.0.0.256',
		'email@26.0.0.256',
		'email@[266.266.266.266]',
	],
});

test({
	validator: 'isEmpty',
	valid: [
		'',
	],
	invalid: [
		' ',
		'foo',
		'3',
	],
});

test({
	validator: 'isEmpty',
	args: [{ ignoreWhitespace: false }],
	valid: [
		'',
	],
	invalid: [
		' ',
		'foo',
		'3',
	],
});

test({
	validator: 'isEmpty',
	args: [{ ignoreWhitespace: true }],
	valid: [
		'',
		' ',
	],
	invalid: [
		'foo',
		'3',
	],
});

test({
	validator: 'isEthereumAddress',
	valid: [
		'0x0000000000000000000000000000000000000001',
		'0x683E07492fBDfDA84457C16546ac3f433BFaa128',
		'0x88dA6B6a8D3590e88E0FcadD5CEC56A7C9478319',
		'0x8a718a84ee7B1621E63E680371e0C03C417cCaF6',
		'0xFCb5AFB808b5679b4911230Aa41FfCD0cd335b42',
	],
	invalid: [
		'0xGHIJK05pwm37asdf5555QWERZCXV2345AoEuIdHt',
		'0xFCb5AFB808b5679b4911230Aa41FfCD0cd335b422222',
		'0xFCb5AFB808b5679b4911230Aa41FfCD0cd33',
		'0b0110100001100101011011000110110001101111',
		'683E07492fBDfDA84457C16546ac3f433BFaa128',
		'1C6o5CDkLxjsVpnLSuqRs1UBFozXLEwYvU',
	],
});

test({
	validator: 'isFloat',
	valid: [
		'123',
		'123.',
		'123.123',
		'-123.123',
		'-0.123',
		'+0.123',
		'0.123',
		'.0',
		'-.123',
		'+.123',
		'01.123',
		'-0.22250738585072011e-307',
	],
	invalid: [
		'+',
		'-',
		'  ',
		'',
		'.',
		'foo',
		'20.foo',
		'2020-01-06T14:31:00.135Z',
	],
});

test({
	validator: 'isFloat',
	args: [{ locale: 'en-AU' }],
	valid: [
		'123',
		'123.',
		'123.123',
		'-123.123',
		'-0.123',
		'+0.123',
		'0.123',
		'.0',
		'-.123',
		'+.123',
		'01.123',
		'-0.22250738585072011e-307',
	],
	invalid: [
		'123٫123',
		'123,123',
		'  ',
		'',
		'.',
		'foo',
	],
});

test({
	validator: 'isFloat',
	args: [{ locale: 'de-DE' }],
	valid: [
		'123',
		'123,',
		'123,123',
		'-123,123',
		'-0,123',
		'+0,123',
		'0,123',
		',0',
		'-,123',
		'+,123',
		'01,123',
		'-0,22250738585072011e-307',
	],
	invalid: [
		'123.123',
		'123٫123',
		'  ',
		'',
		'.',
		'foo',
	],
});

test({
	validator: 'isFloat',
	args: [{ locale: 'ar-JO' }],
	valid: [
		'123',
		'123٫',
		'123٫123',
		'-123٫123',
		'-0٫123',
		'+0٫123',
		'0٫123',
		'٫0',
		'-٫123',
		'+٫123',
		'01٫123',
		'-0٫22250738585072011e-307',
	],
	invalid: [
		'123,123',
		'123.123',
		'  ',
		'',
		'.',
		'foo',
	],
});

test({
	validator: 'isFloat',
	args: [{
		min: 3.7,
	}],
	valid: [
		'3.888',
		'3.92',
		'4.5',
		'50',
		'3.7',
		'3.71',
	],
	invalid: [
		'3.6',
		'3.69',
		'3',
		'1.5',
		'a',
	],
});

test({
	validator: 'isFloat',
	args: [{
		min: 0.1,
		max: 1.0,
	}],
	valid: [
		'0.1',
		'1.0',
		'0.15',
		'0.33',
		'0.57',
		'0.7',
	],
	invalid: [
		'0',
		'0.0',
		'a',
		'1.3',
		'0.05',
		'5',
	],
});

test({
	validator: 'isFloat',
	args: [{
		gt: -5.5,
		lt: 10,
	}],
	valid: [
		'9.9',
		'1.0',
		'0',
		'-1',
		'7',
		'-5.4',
	],
	invalid: [
		'10',
		'-5.5',
		'a',
		'-20.3',
		'20e3',
		'10.00001',
	],
});

test({
	validator: 'isFloat',
	args: [{
		min: -5.5,
		max: 10,
		gt: -5.5,
		lt: 10,
	}],
	valid: [
		'9.99999',
		'-5.499999',
	],
	invalid: [
		'10',
		'-5.5',
	],
});

test({
	validator: 'isFloat',
	args: [{
		locale: 'de-DE',
		min: 3.1,
	}],
	valid: [
		'123',
		'123,',
		'123,123',
		'3,1',
		'3,100001',
	],
	invalid: [
		'3,09',
		'-,123',
		'+,123',
		'01,123',
		'-0,22250738585072011e-307',
		'-123,123',
		'-0,123',
		'+0,123',
		'0,123',
		',0',
		'123.123',
		'123٫123',
		'  ',
		'',
		'.',
		'foo',
	],
});

test({
	validator: 'isFQDN',
	valid: [
		'domain.com',
		'dom.plato',
		'a.domain.co',
		'foo--bar.com',
		'xn--froschgrn-x9a.com',
		'rebecca.blackfriday',
	],
	invalid: [
		'abc',
		'256.0.0.0',
		'_.com',
		'*.some.com',
		's!ome.com',
		'domain.com/',
		'/more.com',
		'domain.com�',
		'domain.com©',
	],
});

test({
	validator: 'isFQDN',
	args: [{
		allow_trailing_dot: true,
	}],
	valid: [
		'example.com.',
	],
});

test({
	validator: 'isFullWidth',
	valid: [
		'ひらがな・カタカナ、．漢字',
		'３ー０　ａ＠ｃｏｍ',
		'Ｆｶﾀｶﾅﾞﾬ',
		'Good＝Parts',
	],
	invalid: [
		'abc',
		'abc123',
		'!"#$%&()<>/+=-_? ~^|.,@`{}[]',
	],
});

test({
	validator: 'isHalfWidth',
	valid: [
		'"#$%&()<>/+=-_? ~^|.,@`{}[]',
		'l-btn_02--active',
		'abc123い',
		'ｶﾀｶﾅﾞﾬ￩',
	],
	invalid: [
		'あいうえお',
		'００１１',
	],
});

['md5', 'md4', 'ripemd128', 'tiger128'].forEach((algorithm) => {
	test({
		validator: 'isHash',
		args: [algorithm],
		valid: [
			'd94f3f016ae679c3008de268209132f2',
			'751adbc511ccbe8edf23d486fa4581cd',
			'88dae00e614d8f24cfd5a8b3f8002e93',
			'0bf1c35032a71a14c2f719e5a14c1e96',
			'd94f3F016Ae679C3008de268209132F2',
			'88DAE00e614d8f24cfd5a8b3f8002E93',
		],
		invalid: [
			'q94375dj93458w34',
			'39485729348',
			'%&FHKJFvk',
			'KYT0bf1c35032a71a14c2f719e5a1',
		],
	});
});

['crc32', 'crc32b'].forEach((algorithm) => {
	test({
		validator: 'isHash',
		args: [algorithm],
		valid: [
			'd94f3f01',
			'751adbc5',
			'88dae00e',
			'0bf1c350',
			'88DAE00e',
			'751aDBc5',
		],
		invalid: [
			'KYT0bf1c35032a71a14c2f719e5a14c1',
			'q94375dj93458w34',
			'q943',
			'39485729348',
			'%&FHKJFvk',
		],
	});
});

['sha1', 'tiger160', 'ripemd160'].forEach((algorithm) => {
	test({
		validator: 'isHash',
		args: [algorithm],
		valid: [
			'3ca25ae354e192b26879f651a51d92aa8a34d8d3',
			'aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d',
			'beb8c3f30da46be179b8df5f5ecb5e4b10508230',
			'efd5d3b190e893ed317f38da2420d63b7ae0d5ed',
			'AAF4c61ddCC5e8a2dabede0f3b482cd9AEA9434D',
			'3ca25AE354e192b26879f651A51d92aa8a34d8D3',
		],
		invalid: [
			'KYT0bf1c35032a71a14c2f719e5a14c1',
			'KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk',
			'q94375dj93458w34',
			'39485729348',
			'%&FHKJFvk',
		],
	});
});

test({
	validator: 'isHash',
	args: ['sha256'],
	valid: [
		'2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824',
		'1d996e033d612d9af2b44b70061ee0e868bfd14c2dd90b129e1edeb7953e7985',
		'80f70bfeaed5886e33536bcfa8c05c60afef5a0e48f699a7912d5e399cdcc441',
		'579282cfb65ca1f109b78536effaf621b853c9f7079664a3fbe2b519f435898c',
		'2CF24dba5FB0a30e26E83b2AC5b9E29E1b161e5C1fa7425E73043362938b9824',
		'80F70bFEAed5886e33536bcfa8c05c60aFEF5a0e48f699a7912d5e399cdCC441',
	],
	invalid: [
		'KYT0bf1c35032a71a14c2f719e5a14c1',
		'KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk',
		'q94375dj93458w34',
		'39485729348',
		'%&FHKJFvk',
	],
});

test({
	validator: 'isHash',
	args: ['sha384'],
	valid: [
		'3fed1f814d28dc5d63e313f8a601ecc4836d1662a19365cbdcf6870f6b56388850b58043f7ebf2418abb8f39c3a42e31',
		'b330f4e575db6e73500bd3b805db1a84b5a034e5d21f0041d91eec85af1dfcb13e40bb1c4d36a72487e048ac6af74b58',
		'bf547c3fc5841a377eb1519c2890344dbab15c40ae4150b4b34443d2212e5b04aa9d58865bf03d8ae27840fef430b891',
		'fc09a3d11368386530f985dacddd026ae1e44e0e297c805c3429d50744e6237eb4417c20ffca8807b071823af13a3f65',
		'3fed1f814d28dc5d63e313f8A601ecc4836d1662a19365CBDCf6870f6b56388850b58043f7ebf2418abb8f39c3a42e31',
		'b330f4E575db6e73500bd3b805db1a84b5a034e5d21f0041d91EEC85af1dfcb13e40bb1c4d36a72487e048ac6af74b58',
	],
	invalid: [
		'KYT0bf1c35032a71a14c2f719e5a14c1',
		'KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk',
		'q94375dj93458w34',
		'39485729348',
		'%&FHKJFvk',
	],
});

test({
	validator: 'isHash',
	args: ['sha512'],
	valid: [
		'9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043',
		'83c586381bf5ba94c8d9ba8b6b92beb0997d76c257708742a6c26d1b7cbb9269af92d527419d5b8475f2bb6686d2f92a6649b7f174c1d8306eb335e585ab5049',
		'45bc5fa8cb45ee408c04b6269e9f1e1c17090c5ce26ffeeda2af097735b29953ce547e40ff3ad0d120e5361cc5f9cee35ea91ecd4077f3f589b4d439168f91b9',
		'432ac3d29e4f18c7f604f7c3c96369a6c5c61fc09bf77880548239baffd61636d42ed374f41c261e424d20d98e320e812a6d52865be059745fdb2cb20acff0ab',
		'9B71D224bd62f3785D96d46ad3ea3d73319bFBC2890CAAdae2dff72519673CA72323C3d99ba5c11d7c7ACC6e14b8c5DA0c4663475c2E5c3adef46f73bcDEC043',
		'432AC3d29E4f18c7F604f7c3c96369A6C5c61fC09Bf77880548239baffd61636d42ed374f41c261e424d20d98e320e812a6d52865be059745fdb2cb20acff0ab',
	],
	invalid: [
		'KYT0bf1c35032a71a14c2f719e5a14c1',
		'KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk',
		'q94375dj93458w34',
		'39485729348',
		'%&FHKJFvk',
	],
});

test({
	validator: 'isHash',
	args: ['tiger192'],
	valid: [
		'6281a1f098c5e7290927ed09150d43ff3990a0fe1a48267c',
		'56268f7bc269cf1bc83d3ce42e07a85632394737918f4760',
		'46fc0125a148788a3ac1d649566fc04eb84a746f1a6e4fa7',
		'7731ea1621ae99ea3197b94583d034fdbaa4dce31a67404a',
		'6281A1f098c5e7290927ed09150d43ff3990a0fe1a48267C',
		'46FC0125a148788a3AC1d649566fc04eb84A746f1a6E4fa7',
	],
	invalid: [
		'KYT0bf1c35032a71a14c2f719e5a14c1',
		'KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk',
		'q94375dj93458w34',
		'39485729348',
		'%&FHKJFvk',
	],
});

test({
	validator: 'isHexadecimal',
	valid: [
		'deadBEEF',
		'ff0044',
	],
	invalid: [
		'abcdefg',
		'',
		'..',
		'0xa2h',
		'0xa20x',
		'0x0123456789abcDEFq',
		'0hfedCBA9876543210q',
		'01234q56789abcDEF',
	],
});

test({
	validator: 'isHexColor',
	valid: [
		'#ff0000ff',
		'#ff0034',
		'#CCCCCC',
		'0f38',
		'fff',
		'#f00',
	],
	invalid: [
		'#ff',
		'fff0a',
		'#ff12FG',
	],
});

test({
	validator: 'isHSL',
	valid: [
		'hsl(360,0000000000100%,000000100%)',
		'hsl(000010, 00000000001%, 00000040%)',
		'HSL(00000,0000000000100%,000000100%)',
		'hsL(0, 0%, 0%)',
		'hSl(  360  , 100%  , 100%   )',
		'Hsl(  00150  , 000099%  , 01%   )',
		'hsl(01080, 03%, 4%)',
		'hsl(-540, 03%, 4%)',
		'hsla(+540, 03%, 4%)',
		'hsla(+540, 03%, 4%, 500)',
		'hsl(+540deg, 03%, 4%, 500)',
		'hsl(+540gRaD, 03%, 4%, 500)',
		'hsl(+540.01e-98rad, 03%, 4%, 500)',
		'hsl(-540.5turn, 03%, 4%, 500)',
		'hsl(+540, 03%, 4%, 500e-01)',
		'hsl(+540, 03%, 4%, 500e+80)',
		'hsl(4.71239rad, 60%, 70%)',
		'hsl(270deg, 60%, 70%)',
		'hsl(200, +.1%, 62%, 1)',
		'hsl(270 60% 70%)',
		'hsl(200, +.1e-9%, 62e10%, 1)',
		'hsl(.75turn, 60%, 70%)',
		'hsl(200grad+.1%62%/1)',
		'hsl(200grad +.1% 62% / 1)',
		'hsl(270, 60%, 50%, .15)',
		'hsl(270, 60%, 50%, 15%)',
		'hsl(270 60% 50% / .15)',
		'hsl(270 60% 50% / 15%)',
	],
	invalid: [
		'hsl (360,0000000000100%,000000100%)',
		'hsl(0260, 100 %, 100%)',
		'hsl(0160, 100%, 100%, 100 %)',
		'hsl(-0160, 100%, 100a)',
		'hsl(-0160, 100%, 100)',
		'hsl(-0160 100%, 100%, )',
		'hsl(270 deg, 60%, 70%)',
		'hsl( deg, 60%, 70%)',
		'hsl(, 60%, 70%)',
		'hsl(3000deg, 70%)',
	],
});

test({
	validator: 'isIBAN',
	valid: [
		'GB82 WEST 1234 5698 7654 32',
		'BE71 0961 2345 6769',
		'FR76 3000 6000 0112 3456 7890 189',
		'DE91 1000 0000 0123 4567 89',
		'GR96 0810 0010 0000 0123 4567 890',
		'RO09 BCYP 0000 0012 3456 7890',
		'SA44 2000 0001 2345 6789 1234',
		'ES79 2100 0813 6101 2345 6789',
		'CH56 0483 5012 3456 7800 9',
		'GB98 MIDL 0700 9312 3456 78',
		'IL170108000000012612345',
		'IT60X0542811101000000123456',
		'JO71CBJO0000000000001234567890',
		'TR320010009999901234567890',
		'BR1500000000000010932840814P2',
		'LB92000700000000123123456123',
		'IR200170000000339545727003',
	],
	invalid: [
		'XX22YYY1234567890123',
		'FR14 2004 1010 0505 0001 3',
		'FR7630006000011234567890189@',
		'FR7630006000011234567890189😅',
		'FR763000600001123456!!🤨7890189@',
	],
});

fixtures = [
	{
		locale: 'ES',
		valid: [
			'99999999R',
			'12345678Z',
			'01234567L',
			'01234567l',
			'X1234567l',
			'x1234567l',
			'X1234567L',
			'Y1234567X',
			'Z1234567R',
		],
		invalid: [
			'123456789',
			'12345678A',
			'12345 678Z',
			'12345678-Z',
			'1234*6789',
			'1234*678Z',
			'12345678!',
			'1234567L',
			'A1234567L',
			'X1234567A',
			'Y1234567B',
			'Z1234567C',
		],
	},
	{
		locale: 'IN',
		valid: [
			'298448863364',
			'2984 4886 3364',
		],
		invalid: [
			'99999999R',
			'12345678Z',
			'01234567L',
			'01234567l',
			'X1234567l',
			'x1234567l',
			'X1234567L',
		],
	},
	{
		locale: 'NO',
		valid: [
			'09053426694',
			'26028338723',
			'08031470790',
			'12051539514',
			'02077448074',
			'14035638319',
			'13031379673',
			'29126214926',
		],
		invalid: [
			'09053426699',
			'26028338724',
			'92031470790',
		],
	},
	{
		locale: 'he-IL',
		valid: [
			'219472156',
			'219486610',
			'219488962',
			'219566726',
			'219640216',
			'219645041',
			'334795465',
			'335211686',
			'335240479',
			'335472171',
			'336999842',
			'337090443',
		],
		invalid: [
			'123456789',
			'12345678A',
			'12345 678Z',
			'12345678-Z',
			'1234*6789',
			'1234*678Z',
			'12345678!',
			'1234567L',
			'A1234567L',
			'X1234567A',
			'Y1234567B',
			'Z1234567C',
			'219772156',
			'219487710',
			'334705465',
			'336000842',
		],
	},
	{
		locale: 'ar-TN',
		valid: [
			'09958092',
			'09151092',
			'65126506',
			'79378815',
			'58994407',
			'73089789',
			'73260311',
		],
		invalid: [
			'123456789546',
			'123456789',
			'023456789',
			'12345678A',
			'12345',
			'1234578A',
			'123 578A',
			'12345 678Z',
			'12345678-Z',
			'1234*6789',
			'1234*678Z',
			'GE9800as98',
			'X231071922',
			'1234*678Z',
			'12345678!',
		],
	},
	{
		locale: 'zh-CN',
		valid: [
			'235407195106112745',
			'210203197503102721',
			'520323197806058856',
		],
		invalid: [
			'235407195106112742',
			'xx1234567',
			'135407195106112742',
			'123456789546',
			'123456789',
			'023456789',
			'12345678A',
			'12345',
			'1234578A',
			'123 578A',
			'12345 678Z',
			'12345678-Z',
			'1234*6789',
			'1234*678Z',
			'GE9800as98',
			'X231071922',
			'1234*678Z',
			'12345678!',
		],
	},
	{
		locale: 'zh-TW',
		valid: [
			'B176944193',
			'K101189797',
			'F112866121',
			'A219758834',
			'A244144802',
			'A146047171',
			'Q170219004',
			'Z277018381',
			'X231071923',
		],
		invalid: [
			'123456789',
			'A185034995',
			'X431071923',
			'GE9800as98',
			'X231071922',
			'1234*678Z',
			'12345678!',
			'1234567L',
			'A1234567L',
			'X1234567A',
			'Y1234567B',
			'Z1234567C',
			'219772156',
			'219487710',
			'334705465',
			'336000842',
		],
	},
];

allValid = [];

// Test fixtures
fixtures.forEach((fixture) => {
	if (fixture.valid) allValid = allValid.concat(fixture.valid);
	test({
		validator: 'isIdentityCard',
		valid: fixture.valid,
		invalid: fixture.invalid,
		args: [fixture.locale],
	});
});

// Test generics
test({
	validator: 'isIdentityCard',
	valid: [
		...allValid,
	],
	invalid: [
		'foo',
	],
	args: ['any'],
});

test({
	validator: 'isIdentityCard',
	args: ['is-NOT'],
	error: [
		'99999999R',
		'12345678Z',
	],
});

test({
	validator: 'isIn',
	args: ['foobar'],
	valid: ['foo', 'bar', 'foobar', ''],
	invalid: ['foobarbaz', 'barfoo'],
});

test({
	validator: 'isIn',
	args: [
		['foo', 'bar'],
	],
	valid: ['foo', 'bar'],
	invalid: ['foobar', 'barfoo', ''],
});

test({
	validator: 'isIn',
	args: [
		['1', '2', '3'],
	],
	valid: ['1', '2', '3'],
	invalid: ['4', ''],
});

test({
	validator: 'isIn',
	args: [
		[
			'1',
			'2',
			'3',
			{
				foo: 'bar',
			},
			() => 5,
			{
				toString: 'test',
			},
		],
	],
	valid: ['1', '2', '3', ''],
	invalid: ['4'],
});

test({
	validator: 'isIn',
	invalid: ['foo', ''],
});

test({
	validator: 'isIn',
	args: [{
		foo: 1,
		bar: 2,
		foobar: 3,
	}],
	valid: ['foo', 'bar', 'foobar'],
	invalid: ['foobarbaz', 'barfoo', ''],
});

test({
	validator: 'isIn',
	args: [{
		1: 3,
		2: 0,
		3: 1,
	}],
	valid: ['1', '2', '3'],
	invalid: ['4', ''],
});

test({
	validator: 'isInt',
	valid: [
		'65535',
		'13',
		'123',
		'0',
		'-0',
		'+1',
		'01',
		'-01',
		'000',
	],
	invalid: [
		'100e10',
		'123.123',
		'   ',
		'',
	],
});

test({
	validator: 'isInt',
	args: [{
		allow_leading_zeroes: false,
	}],
	valid: [
		'13',
		'123',
		'0',
		'123',
		'-0',
		'+1',
	],
	invalid: [
		'01',
		'-01',
		'000',
		'100e10',
		'123.123',
		'   ',
		'',
	],
});

test({
	validator: 'isInt',
	args: [{
		allow_leading_zeroes: true,
	}],
	valid: [
		'13',
		'123',
		'0',
		'123',
		'-0',
		'+1',
		'01',
		'-01',
		'000',
		'-000',
		'+000',
	],
	invalid: [
		'100e10',
		'123.123',
		'   ',
		'',
	],
});

test({
	validator: 'isInt',
	args: [{
		min: 10,
	}],
	valid: [
		'15',
		'80',
		'99',
	],
	invalid: [
		'9',
		'6',
		'3.2',
		'a',
	],
});

test({
	validator: 'isInt',
	args: [{
		min: 10,
		max: 15,
	}],
	valid: [
		'15',
		'11',
		'13',
	],
	invalid: [
		'9',
		'2',
		'17',
		'3.2',
		'-1',
		'33',
		'a',
	],
});

test({
	validator: 'isInt',
	args: [{
		gt: 10,
		lt: 15,
	}],
	valid: [
		'14',
		'11',
		'13',
	],
	invalid: [
		'10',
		'15',
		'17',
		'3.2',
		'33',
		'a',
	],
});

test({
	validator: 'isIP',
	valid: [
		'127.0.0.1',
		'0.0.0.0',
		'255.255.255.255',
		'1.2.3.4',
		'::1',
		'2001:db8:0000:1:1:1:1:1',
		'2001:41d0:2:a141::1',
		'::ffff:127.0.0.1',
		'::0000',
		'0000::',
		'1::',
		'1111:1:1:1:1:1:1:1',
		'fe80::a6db:30ff:fe98:e946',
		'::',
		'::ffff:127.0.0.1',
		'0:0:0:0:0:ffff:127.0.0.1',
	],
	invalid: [
		'abc',
		'256.0.0.0',
		'0.0.0.256',
		'26.0.0.256',
		'0200.200.200.200',
		'200.0200.200.200',
		'200.200.0200.200',
		'200.200.200.0200',
		'::banana',
		'banana::',
		'::1banana',
		'::1::',
		'1:',
		':1',
		':1:1:1::2',
		'1:1:1:1:1:1:1:1:1:1:1:1:1:1:1:1',
		'::11111',
		'11111:1:1:1:1:1:1:1',
		'2001:db8:0000:1:1:1:1::1',
		'0:0:0:0:0:0:ffff:127.0.0.1',
		'0:0:0:0:ffff:127.0.0.1',
	],
});

test({
	validator: 'isIP',
	args: [4],
	valid: [
		'127.0.0.1',
		'0.0.0.0',
		'255.255.255.255',
		'1.2.3.4',
		'255.0.0.1',
		'0.0.1.1',
	],
	invalid: [
		'::1',
		'2001:db8:0000:1:1:1:1:1',
		'::ffff:127.0.0.1',
		'137.132.10.01',
		'0.256.0.256',
		'255.256.255.256',
	],
});

test({
	validator: 'isIP',
	args: [6],
	valid: [
		'::1',
		'2001:db8:0000:1:1:1:1:1',
		'::ffff:127.0.0.1',
		'fe80::1234%1',
		'ff08::9abc%10',
		'ff08::9abc%interface10',
		'ff02::5678%pvc1.3',
	],
	invalid: [
		'127.0.0.1',
		'0.0.0.0',
		'255.255.255.255',
		'1.2.3.4',
		'::ffff:287.0.0.1',
		'%',
		'fe80::1234%',
		'fe80::1234%1%3%4',
		'fe80%fe80%',
	],
});

test({
	validator: 'isIP',
	args: [10],
	valid: [],
	invalid: [
		'127.0.0.1',
		'0.0.0.0',
		'255.255.255.255',
		'1.2.3.4',
		'::1',
		'2001:db8:0000:1:1:1:1:1',
	],
});

test({
	validator: 'isIPRange',
	valid: [
		'127.0.0.1/24',
		'0.0.0.0/0',
		'255.255.255.0/32',
	],
	invalid: [
		'127.200.230.1/35',
		'127.200.230.1/-1',
		'1.1.1.1/011',
		'::1/64',
		'1.1.1/24.1',
		'1.1.1.1/01',
		'1.1.1.1/1.1',
		'1.1.1.1/1.',
		'1.1.1.1/1/1',
		'1.1.1.1',
	],
});

test({
	validator: 'isISBN',
	args: [10],
	valid: [
		'3836221195',
		'3-8362-2119-5',
		'3 8362 2119 5',
		'1617290858',
		'1-61729-085-8',
		'1 61729 085-8',
		'0007269706',
		'0-00-726970-6',
		'0 00 726970 6',
		'3423214120',
		'3-423-21412-0',
		'3 423 21412 0',
		'340101319X',
		'3-401-01319-X',
		'3 401 01319 X',
	],
	invalid: [
		'3423214121',
		'3-423-21412-1',
		'3 423 21412 1',
		'978-3836221191',
		'9783836221191',
		'123456789a',
		'foo',
		'',
	],
});

test({
	validator: 'isISBN',
	args: [13],
	valid: [
		'9783836221191',
		'978-3-8362-2119-1',
		'978 3 8362 2119 1',
		'9783401013190',
		'978-3401013190',
		'978 3401013190',
		'9784873113685',
		'978-4-87311-368-5',
		'978 4 87311 368 5',
	],
	invalid: [
		'9783836221190',
		'978-3-8362-2119-0',
		'978 3 8362 2119 0',
		'3836221195',
		'3-8362-2119-5',
		'3 8362 2119 5',
		'01234567890ab',
		'foo',
		'',
	],
});

test({
	validator: 'isISBN',
	valid: [
		'340101319X',
		'9784873113685',
	],
	invalid: [
		'3423214121',
		'9783836221190',
	],
});

test({
	validator: 'isISBN',
	args: ['foo'],
	invalid: [
		'340101319X',
		'9784873113685',
	],
});

test({
	validator: 'isISIN',
	valid: [
		'AU0000XVGZA3',
		'DE000BAY0017',
		'BE0003796134',
		'SG1G55870362',
		'GB0001411924',
		'DE000WCH8881',
		'PLLWBGD00016',
	],
	invalid: [
		'DE000BAY0018',
		'PLLWBGD00019',
		'foo',
		'5398228707871528',
	],
});

test({
	validator: 'isISO31661Alpha2',
	valid: [
		'FR',
		'fR',
		'GB',
		'PT',
		'CM',
		'JP',
		'PM',
		'ZW',
		'MM',
		'cc',
		'GG',
	],
	invalid: [
		'',
		'FRA',
		'AA',
		'PI',
		'RP',
		'WV',
		'WL',
		'UK',
		'ZZ',
	],
});

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
test({
	validator: 'isISO31661Alpha3',
	valid: [
		'ABW',
		'HND',
		'KHM',
		'RWA',
	],
	invalid: [
		'',
		'FR',
		'fR',
		'GB',
		'PT',
		'CM',
		'JP',
		'PM',
		'ZW',
	],
});

const validISO8601: Array<string> = [
	'2009-12T12:34',
	'2009',
	'2009-05-19',
	'2009-05-19',
	'20090519',
	'2009123',
	'2009-05',
	'2009-123',
	'2009-222',
	'2009-001',
	'2009-W01-1',
	'2009-W51-1',
	'2009-W511',
	'2009-W33',
	'2009W511',
	'2009-05-19',
	'2009-05-19 00:00',
	'2009-05-19 14',
	'2009-05-19 14:31',
	'2009-05-19 14:39:22',
	'2009-05-19T14:39Z',
	'2009-W21-2',
	'2009-W21-2T01:22',
	'2009-139',
	'2009-05-19 14:39:22-06:00',
	'2009-05-19 14:39:22+0600',
	'2009-05-19 14:39:22-01',
	'20090621T0545Z',
	'2007-04-06T00:00',
	'2007-04-05T24:00',
	'2010-02-18T16:23:48.5',
	'2010-02-18T16:23:48,444',
	'2010-02-18T16:23:48,3-06:00',
	'2010-02-18T16:23.4',
	'2010-02-18T16:23,25',
	'2010-02-18T16:23.33+0600',
	'2010-02-18T16.23334444',
	'2010-02-18T16,2283',
	'2009-05-19 143922.500',
	'2009-05-19 1439,55',
	'2009-10-10',
	'2020-366',
	'2000-366',
];

const invalidISO8601: Array<string> = [
	'200905',
	'2009367',
	'2009-',
	'2007-04-05T24:50',
	'2009-000',
	'2009-M511',
	'2009M511',
	'2009-05-19T14a39r',
	'2009-05-19T14:3924',
	'2009-0519',
	'2009-05-1914:39',
	'2009-05-19 14:',
	'2009-05-19r14:39',
	'2009-05-19 14a39a22',
	'200912-01',
	'2009-05-19 14:39:22+06a00',
	'2009-05-19 146922.500',
	'2010-02-18T16.5:23.35:48',
	'2010-02-18T16:23.35:48',
	'2010-02-18T16:23.35:48.45',
	'2009-05-19 14.5.44',
	'2010-02-18T16:23.33.600',
	'2010-02-18T16,25:23:48,444',
	'2010-13-1',
];

test({
	validator: 'isISO8601',
	valid: validISO8601,
	invalid: invalidISO8601,
});

test({
	validator: 'isISO8601',
	args: [
		{ strict: true },
	],
	valid: validISO8601,
	invalid: invalidISO8601,
});

test({
	validator: 'isISO8601',
	args: [
		{ strict: true },
	],
	valid: [
		'2000-02-29',
		'2009-123',
		'2009-222',
		'2020-366',
		'2400-366',
	],
	invalid: [
		'2010-02-30',
		'2009-02-29',
		'2009-366',
		'2019-02-31',
	],
});

test({
	validator: 'isISRC',
	valid: [
		'USAT29900609',
		'GBAYE6800011',
		'USRC15705223',
		'USCA29500702',
	],
	invalid: [
		'USAT2990060',
		'SRC15705223',
		'US-CA29500702',
		'USARC15705223',
	],
});

test({
	validator: 'isISSN',
	valid: [
		'0378-5955',
		'0000-0000',
		'2434-561X',
		'2434-561x',
		'01896016',
		'20905076',
	],
	invalid: [
		'0378-5954',
		'0000-0001',
		'0378-123',
		'037-1234',
		'0',
		'2434-561c',
		'1684-5370',
		'19960791',
		'',
	],
});

test({
	validator: 'isISSN',
	args: [{
		case_sensitive: true,
	}],
	valid: [
		'2434-561X',
		'2434561X',
		'0378-5955',
		'03785955',
	],
	invalid: [
		'2434-561x',
		'2434561x',
	],
});

test({
	validator: 'isISSN',
	args: [{
		require_hyphen: true,
	}],
	valid: [
		'2434-561X',
		'2434-561x',
		'0378-5955',
	],
	invalid: [
		'2434561X',
		'2434561x',
		'03785955',
	],
});

test({
	validator: 'isISSN',
	args: [{
		case_sensitive: true,
		require_hyphen: true,
	}],
	valid: [
		'2434-561X',
		'0378-5955',
	],
	invalid: [
		'2434-561x',
		'2434561X',
		'2434561x',
		'03785955',
	],
});

test({
	validator: 'isJSON',
	valid: [
		'{ "key": "value" }',
		'{}',
	],
	invalid: [
		'{ key: "value" }',
		"{ 'key': 'value' }",
		'null',
		'1234',
		'false',
		'"nope"',
	],
});

test({
	validator: 'isJWT',
	valid: [
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb3JlbSI6Imlwc3VtIn0.ymiJSsMJXR6tMSr8G9usjQ15_8hKPDv_CArLhxw28MI',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2xvciI6InNpdCIsImFtZXQiOlsibG9yZW0iLCJpcHN1bSJdfQ.rRpe04zbWbbJjwM43VnHzAboDzszJtGrNsUxaqQ-GQ8',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqb2huIjp7ImFnZSI6MjUsImhlaWdodCI6MTg1fSwiamFrZSI6eyJhZ2UiOjMwLCJoZWlnaHQiOjI3MH19.YRLPARDmhGMC3BBk_OhtwwK21PIkVCqQe8ncIRPKo-E',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ', // No signature
	],
	invalid: [
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
		'$Zs.ewu.su84',
		'ks64$S/9.dy$§kz.3sd73b',
	],
});

test({
	validator: 'isLatLong',
	valid: [
		'(-17.738223, 85.605469)',
		'(-12.3456789, +12.3456789)',
		'(-60.978437, -0.175781)',
		'(77.719772, -37.529297)',
		'(7.264394, 165.058594)',
		'0.955766, -19.863281',
		'(31.269161,164.355469)',
		'+12.3456789, -12.3456789',
		'-15.379543, -137.285156',
		'(11.770570, -162.949219)',
		'-55.034319, 113.027344',
		'58.025555, 36.738281',
		'55.720923,-28.652344',
		'-90.00000,-180.00000',
		'(-71, -146)',
		'(-71.616864, -146.616864)',
		'-0.55, +0.22',
		'90, 180',
		'+90, -180',
		'-90,+180',
		'90,180',
		'0, 0',
	],
	invalid: [
		'(020.000000, 010.000000000)',
		'89.9999999989, 360.0000000',
		'90.1000000, 180.000000',
		'+90.000000, -180.00001',
		'090.0000, 0180.0000',
		'126, -158',
		'(-126.400010, -158.400010)',
		'-95, -96',
		'-95.738043, -96.738043',
		'137, -148',
		'(-137.5942, -148.5942)',
		'(-120, -203)',
		'(-119, -196)',
		'+119.821728, -196.821728',
		'(-110, -223)',
		'-110.369532, 223.369532',
		'(-120.969949, +203.969949)',
		'-116, -126',
		'-116.894222, -126.894222',
		'-112, -160',
		'-112.96381, -160.96381',
		'-90., -180.',
		'+90.1, -180.1',
		'(-17.738223, 85.605469',
		'0.955766, -19.863281)',
		'+,-',
		'(,)',
		',',
		' ',
	],
});

test({
	validator: 'isLocale',
	valid: [
		'uz_Latn_UZ',
		'en',
		'gsw',
		'es_ES',
		'sw_KE',
		'am_ET',
		'ca_ES_VALENCIA',
		'en_US_POSIX',
	],
	invalid: [
		'lo_POP',
		'12',
		'12_DD',
	],
});

test({
	validator: 'isLowerCase',
	valid: [
		'abc',
		'abc123',
		'this is lowercase.',
		'tr竪s 端ber',
	],
	invalid: [
		'fooBar',
		'123A',
	],
});

test({
	validator: 'isMACAddress',
	valid: [
		'ab:ab:ab:ab:ab:ab',
		'FF:FF:FF:FF:FF:FF',
		'01:02:03:04:05:ab',
		'01:AB:03:04:05:06',
		'A9 C5 D4 9F EB D3',
		'01 02 03 04 05 ab',
		'01-02-03-04-05-ab',
		'0102.0304.05ab',
	],
	invalid: [
		'abc',
		'01:02:03:04:05',
		'01:02:03:04::ab',
		'1:2:3:4:5:6',
		'AB:CD:EF:GH:01:02',
		'A9C5 D4 9F EB D3',
		'01-02 03:04 05 ab',
		'0102.03:04.05ab',
	],
});

test({
	validator: 'isMagnetURI',
	valid: [
		'magnet:?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce',
		'magnet:?xt=urn:btih:3E30322D5BFC7444B7B1D8DD42404B75D0531DFB&dn=world&tr=udp://world.com:1337',
		'magnet:?xt=urn:btih:4ODKSDJBVMSDSNJVBCBFYFBKNRU875DW8D97DWC6&dn=helloworld&tr=udp://helloworld.com:1337',
		'magnet:?xt=urn:btih:1GSHJVBDVDVJFYEHKFHEFIO8573898434JBFEGHD&dn=foo&tr=udp://foo.com:1337',
		'magnet:?xt=urn:btih:MCJDCYUFHEUD6E2752T7UJNEKHSUGEJFGTFHVBJS&dn=bar&tr=udp://bar.com:1337',
		'magnet:?xt=urn:btih:LAKDHWDHEBFRFVUFJENBYYTEUY837562JH2GEFYH&dn=foobar&tr=udp://foobar.com:1337',
		'magnet:?xt=urn:btih:MKCJBHCBJDCU725TGEB3Y6RE8EJ2U267UNJFGUID&dn=test&tr=udp://test.com:1337',
		'magnet:?xt=urn:btih:UHWY2892JNEJ2GTEYOMDNU67E8ICGICYE92JDUGH&dn=baz&tr=udp://baz.com:1337',
		'magnet:?xt=urn:btih:HS263FG8U3GFIDHWD7829BYFCIXB78XIHG7CWCUG&dn=foz&tr=udp://foz.com:1337',
	],
	invalid: [
		'',
		':?xt=urn:btih:06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4&dn=helloword2000&tr=udp://helloworld:1337/announce',
		'magnett:?xt=urn:btih:3E30322D5BFC7444B7B1D8DD42404B75D0531DFB&dn=world&tr=udp://world.com:1337',
		'xt=urn:btih:4ODKSDJBVMSDSNJVBCBFYFBKNRU875DW8D97DWC6&dn=helloworld&tr=udp://helloworld.com:1337',
		'magneta:?xt=urn:btih:1GSHJVBDVDVJFYEHKFHEFIO8573898434JBFEGHD&dn=foo&tr=udp://foo.com:1337',
		'magnet:?xt=uarn:btih:MCJDCYUFHEUD6E2752T7UJNEKHSUGEJFGTFHVBJS&dn=bar&tr=udp://bar.com:1337',
		'magnet:?xt=urn:btihz&dn=foobar&tr=udp://foobar.com:1337',
		'magnet:?xat=urn:btih:MKCJBHCBJDCU725TGEB3Y6RE8EJ2U267UNJFGUID&dn=test&tr=udp://test.com:1337',
		'magnet::?xt=urn:btih:UHWY2892JNEJ2GTEYOMDNU67E8ICGICYE92JDUGH&dn=baz&tr=udp://baz.com:1337',
		'magnet:?xt:btih:HS263FG8U3GFIDHWD7829BYFCIXB78XIHG7CWCUG&dn=foz&tr=udp://foz.com:1337',
	],
});

test({
	validator: 'isMimeType',
	valid: [
		'application/json',
		'application/xhtml+xml',
		'audio/mp4',
		'image/bmp',
		'font/woff2',
		'message/http',
		'model/vnd.gtw',
		'multipart/form-data',
		'multipart/form-data; boundary=something',
		'multipart/form-data; charset=utf-8; boundary=something',
		'multipart/form-data; boundary=something; charset=utf-8',
		'multipart/form-data; boundary=something; charset="utf-8"',
		'multipart/form-data; boundary="something"; charset=utf-8',
		'multipart/form-data; boundary="something"; charset="utf-8"',
		'text/css',
		'text/plain; charset=utf8',
		'Text/HTML;Charset="utf-8"',
		'text/html;charset=UTF-8',
		'Text/html;charset=UTF-8',
		'text/html; charset=us-ascii',
		'text/html; charset=us-ascii (Plain text)',
		'text/html; charset="us-ascii"',
		'video/mp4',
	],
	invalid: [
		'',
		' ',
		'/',
		'f/b',
		'application',
		'application\\json',
		'application/json/text',
		'application/json; charset=utf-8',
		'audio/mp4; charset=utf-8',
		'image/bmp; charset=utf-8',
		'font/woff2; charset=utf-8',
		'message/http; charset=utf-8',
		'model/vnd.gtw; charset=utf-8',
		'video/mp4; charset=utf-8',
	],
});

fixtures = [
	{
		locale: 'am-AM',
		valid: [
			'+37410324123',
			'+37422298765',
			'+37431276521',
			'022698763',
			'37491987654',
			'+37494567890',
		],
		invalid: [
			'12345',
			'+37411498855',
			'+37411498123',
			'05614988556',
			'',
			'37456789000',
		],
	},
	{
		locale: 'ar-AE',
		valid: [
			'+971502674453',
			'+971521247658',
			'+971541255684',
			'+971555454458',
			'+971561498855',
			'+971585215778',
			'971585215778',
			'0585215778',
			'585215778',
		],
		invalid: [
			'12345',
			'+971511498855',
			'+9715614988556',
			'+9745614988556',
			'',
			'+9639626626262',
			'+963332210972',
			'0114152198',
			'962796477263',
		],
	},
	{
		locale: 'ar-BH',
		valid: [
			'+97335078110',
			'+97339534385',
			'+97366331055',
			'+97333146000',
			'97335078110',
			'35078110',
			'66331055',
		],
		invalid: [
			'12345',
			'+973350781101',
			'+97379534385',
			'+973035078110',
			'',
			'+9639626626262',
			'+963332210972',
			'0114152198',
			'962796477263',
			'035078110',
			'16331055',
			'hello',
			'+9733507811a',
		],
	},
	{
		locale: 'ar-EG',
		valid: [
			'+201004513789',
			'+201111453489',
			'+201221204610',
			'+201144621154',
			'+201200124304',
			'+201011201564',
			'+201124679001',
			'+201064790156',
			'+201274652177',
			'+201280134679',
			'+201090124576',
			'+201583728900',
			'201599495596',
			'201090124576',
			'01090124576',
			'01538920744',
			'1593075993',
			'1090124576',
		],
		invalid: [
			'+221004513789',
			'+201404513789',
			'12345',
			'',
			'+9639626626262',
			'+963332210972',
			'0114152198',
			'962796477263',
		],
	},
	{
		locale: 'ar-JO',
		valid: [
			'0796477263',
			'0777866254',
			'0786725261',
			'+962796477263',
			'+962777866254',
			'+962786725261',
			'962796477263',
			'962777866254',
			'962786725261',
		],
		invalid: [
			'00962786725261',
			'00962796477263',
			'12345',
			'',
			'+9639626626262',
			'+963332210972',
			'0114152198',
		],
	},
	{
		locale: 'ar-KW',
		valid: [
			'96550000000',
			'96560000000',
			'96590000000',
			'+96550000000',
			'+96550000220',
			'+96551111220',
		],
		invalid: [
			'+96570000220',
			'00962786725261',
			'00962796477263',
			'12345',
			'',
			'+9639626626262',
			'+963332210972',
			'0114152198',
		],
	},
	{
		locale: 'ar-LY',
		valid: [
			'912220000',
			'0923330000',
			'218945550000',
			'+218958880000',
			'212220000',
			'0212220000',
			'+218212220000',
		],
		invalid: [
			'9122220000',
			'00912220000',
			'09211110000',
			'+0921110000',
			'+2180921110000',
			'021222200000',
			'213333444444',
			'',
			'+212234',
			'+21',
			'02122333',
		],
	},
	{
		locale: 'ar-SY',
		valid: [
			'0944549710',
			'+963944549710',
			'956654379',
			'0944549710',
			'0962655597',
		],
		invalid: [
			'12345',
			'',
			'+9639626626262',
			'+963332210972',
			'0114152198',
		],
	},
	{
		locale: 'ar-SA',
		valid: [
			'0556578654',
			'+966556578654',
			'966556578654',
			'596578654',
			'572655597',
		],
		invalid: [
			'12345',
			'',
			'+9665626626262',
			'+96633221097',
			'0114152198',
		],
	},
	{
		locale: 'ar-TN',
		valid: [
			'23456789',
			'+21623456789',
			'21623456789',
		],
		invalid: [
			'12345',
			'75200123',
			'+216512345678',
			'13520459',
			'85479520',
		],
	},
	{
		locale: 'bg-BG',
		valid: [
			'+359897123456',
			'+359898888888',
			'0897123123',
		],
		invalid: [
			'',
			'0898123',
			'+359212555666',
			'18001234567',
			'12125559999',
		],
	},
	{
		locale: 'bn-BD',
		valid: [
			'+8801794626846',
			'01399098893',
			'8801671163269',
			'01717112029',
			'8801898765432',
			'+8801312345678',
			'01494676946',
		],
		invalid: [
			'',
			'0174626346',
			'017943563469',
			'18001234567',
			'0131234567',
		],
	},
	{
		locale: 'cs-CZ',
		valid: [
			'+420 123 456 789',
			'+420 123456789',
			'+420123456789',
			'123 456 789',
			'123456789',
		],
		invalid: [
			'',
			'+42012345678',
			'+421 123 456 789',
			'+420 023456789',
			'+4201234567892',
		],
	},
	{
		locale: 'sk-SK',
		valid: [
			'+421 123 456 789',
			'+421 123456789',
			'+421123456789',
			'123 456 789',
			'123456789',
		],
		invalid: [
			'',
			'+42112345678',
			'+422 123 456 789',
			'+421 023456789',
			'+4211234567892',
		],
	},
	{
		locale: 'de-DE',
		valid: [
			'+49015123456789',
			'+4915123456789',
			'015123456789',
			'15123456789',
			'15623456789',
			'15623456789',
			'1601234567',
			'16012345678',
			'1621234567',
			'1631234567',
			'1701234567',
			'17612345678',
		],
		invalid: [
			'15345678910',
			'15412345678',
			'16212345678',
			'1761234567',
			'16412345678',
			'17012345678',
			'12345678910',
			'+4912345678910',
		],
	},
	{
		locale: 'de-AT',
		valid: [
			'+436761234567',
			'06761234567',
			'00436123456789',
			'+436123456789',
			'01999',
			'+4372876',
			'06434908989562345',
		],
		invalid: [
			'167612345678',
			'1234',
			'064349089895623459',
		],
	},
	{
		locale: 'pt-BR',
		valid: [
			'+55-12-996551215',
			'+55-15-97661234',
			'55-17-96332-2155',
			'55-17-6332-2155',
			'55-15-976612345',
			'55-15-75661234',
			'+5512984567890',
			'+551283456789',
			'5512984567890',
			'551283456789',
			'015994569878',
			'01593456987',
			'022995678947',
			'02299567894',
		],
		invalid: [
			'0819876543',
			'08158765432',
			'+55-15-7566123',
			'+017-123456789',
			'5501599623874',
			'+55012962308',
			'+55-015-1234-3214',
		],
	},
	{
		locale: 'zh-CN',
		valid: [
			'15323456787',
			'13523333233',
			'13898728332',
			'+8613238234822',
			'+8613487234567',
			'+8617823492338',
			'+8617823492338',
			'16637108167',
			'+8616637108167',
			'+8616637108167',
			'+8616712341234',
			'008618812341234',
			'008618812341234',
			'+8619912341234',
			'+8619812341234',
			'+8619112341234',
			'17269427292',
			'16565600001',
			'+8617269427292',
			'008617269427292',
		],
		invalid: [
			'12345',
			'',
			'+08613811211114',
			'+008613811211114',
			'08613811211114',
			'0086-13811211114',
			'0086-138-1121-1114',
			'Vml2YW11cyBmZXJtZtesting123',
			'010-38238383',
		],
	},
	{
		locale: 'zh-TW',
		valid: [
			'0987123456',
			'+886987123456',
			'886987123456',
			'+886-987123456',
			'886-987123456',
		],
		invalid: [
			'12345',
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'0-987123456',
		],
	},
	{
		locale: 'en-ZA',
		valid: [
			'0821231234',
			'+27821231234',
			'27821231234',
		],
		invalid: [
			'082123',
			'08212312345',
			'21821231234',
			'+21821231234',
			'+0821231234',
		],
	},
	{
		locale: 'en-AU',
		valid: [
			'61404111222',
			'+61411222333',
			'0417123456',
		],
		invalid: [
			'082123',
			'08212312345',
			'21821231234',
			'+21821231234',
			'+0821231234',
			'04123456789',
		],
	},
	{
		locale: 'en-GG',
		valid: [
			'+441481123456',
			'+441481789123',
			'441481123456',
			'441481789123',
		],
		invalid: [
			'999',
			'+441481123456789',
			'+447123456789',
		],
	},
	{
		locale: 'en-GH',
		valid: [
			'0202345671',
			'0502345671',
			'0242345671',
			'0542345671',
			'0272345671',
			'0572345671',
			'0262345671',
			'0562345671',
			'0232345671',
			'0282345671',
			'+233202345671',
			'+233502345671',
			'+233242345671',
			'+233542345671',
			'+233272345671',
			'+233572345671',
			'+233262345671',
			'+233562345671',
			'+233232345671',
			'+233282345671',
		],
		invalid: [
			'082123',
			'232345671',
			'0292345671',
			'+233292345671',
		],
	},
	{
		locale: 'en-HK',
		valid: [
			'91234567',
			'9123-4567',
			'61234567',
			'51234567',
			'+85291234567',
			'+852-91234567',
			'+852-9123-4567',
			'+852 9123 4567',
			'9123 4567',
			'852-91234567',
		],
		invalid: [
			'999',
			'+852-912345678',
			'123456789',
			'+852-1234-56789',
		],
	},
	{
		locale: 'en-MO',
		valid: [
			'61234567',
			'+85361234567',
			'+853-61234567',
			'+853-6123-4567',
			'+853 6123 4567',
			'6123 4567',
			'853-61234567',
		],
		invalid: [
			'999',
			'12345678',
			'612345678',
			'+853-12345678',
			'+853-22345678',
			'+853-82345678',
			'+853-612345678',
			'+853-1234-5678',
			'+853 1234 5678',
			'+853-6123-45678',
		],
	},
	{
		locale: 'en-IE',
		valid: [
			'+353871234567',
			'353831234567',
			'353851234567',
			'353861234567',
			'353871234567',
			'353881234567',
			'353891234567',
			'0871234567',
			'0851234567',
		],
		invalid: [
			'999',
			'+353341234567',
			'+33589484858',
			'353841234567',
			'353811234567',
		],
	},
	{
		locale: 'en-KE',
		valid: [
			'+254728590432',
			'+254733875610',
			'254728590234',
			'0733346543',
			'0700459022',
			'0110934567',
			'+254110456794',
			'254198452389',
		],
		invalid: [
			'999',
			'+25489032',
			'123456789',
			'+254800723845',
		],
	},
	{
		locale: 'en-MT',
		valid: [
			'+35699000000',
			'+35679000000',
			'99000000',
		],
		invalid: [
			'356',
			'+35699000',
			'+35610000000',
		],
	},
	{
		locale: 'en-UG',
		valid: [
			'+256728590432',
			'+256733875610',
			'256728590234',
			'0773346543',
			'0700459022',
		],
		invalid: [
			'999',
			'+254728590432',
			'+25489032',
			'123456789',
			'+254800723845',
		],
	},
	{
		locale: 'en-RW',
		valid: [
			'+250728590432',
			'+250733875610',
			'250738590234',
			'0753346543',
			'0780459022',
		],
		invalid: [
			'999',
			'+254728590432',
			'+25089032',
			'123456789',
			'+250800723845',
		],
	},
	{
		locale: 'en-TZ',
		valid: [
			'+255728590432',
			'+255733875610',
			'255628590234',
			'0673346543',
			'0600459022',
		],
		invalid: [
			'999',
			'+254728590432',
			'+25589032',
			'123456789',
			'+255800723845',
		],
	},
	{
		locale: 'fr-FR',
		valid: [
			'0612457898',
			'+33612457898',
			'33612457898',
			'0712457898',
			'+33712457898',
			'33712457898',
		],
		invalid: [
			'061245789',
			'06124578980',
			'0112457898',
			'0212457898',
			'0312457898',
			'0412457898',
			'0512457898',
			'0812457898',
			'0912457898',
			'+34612457898',
			'+336124578980',
			'+3361245789',
		],
	},
	{
		locale: 'fr-GF',
		valid: [
			'0612457898',
			'+594612457898',
			'594612457898',
			'0712457898',
			'+594712457898',
			'594712457898',
		],
		invalid: [
			'061245789',
			'06124578980',
			'0112457898',
			'0212457898',
			'0312457898',
			'0412457898',
			'0512457898',
			'0812457898',
			'0912457898',
			'+54612457898',
			'+5946124578980',
			'+59461245789',
		],
	},
	{
		locale: 'fr-GP',
		valid: [
			'0612457898',
			'+590612457898',
			'590612457898',
			'0712457898',
			'+590712457898',
			'590712457898',
		],
		invalid: [
			'061245789',
			'06124578980',
			'0112457898',
			'0212457898',
			'0312457898',
			'0412457898',
			'0512457898',
			'0812457898',
			'0912457898',
			'+594612457898',
			'+5906124578980',
			'+59061245789',
		],
	},
	{
		locale: 'fr-MQ',
		valid: [
			'0612457898',
			'+596612457898',
			'596612457898',
			'0712457898',
			'+596712457898',
			'596712457898',
		],
		invalid: [
			'061245789',
			'06124578980',
			'0112457898',
			'0212457898',
			'0312457898',
			'0412457898',
			'0512457898',
			'0812457898',
			'0912457898',
			'+594612457898',
			'+5966124578980',
			'+59661245789',
		],
	},
	{
		locale: 'fr-RE',
		valid: [
			'0612457898',
			'+262612457898',
			'262612457898',
			'0712457898',
			'+262712457898',
			'262712457898',
		],
		invalid: [
			'061245789',
			'06124578980',
			'0112457898',
			'0212457898',
			'0312457898',
			'0412457898',
			'0512457898',
			'0812457898',
			'0912457898',
			'+264612457898',
			'+2626124578980',
			'+26261245789',
		],
	},
	{
		locale: 'el-GR',
		valid: [
			'+306944848966',
			'6944848966',
			'306944848966',
		],
		invalid: [
			'2102323234',
			'+302646041461',
			'120000000',
			'20000000000',
			'68129485729',
			'6589394827',
			'298RI89572',
		],
	},
	{
		locale: 'en-GB',
		valid: [
			'447789345856',
			'+447861235675',
			'07888814488',
		],
		invalid: [
			'67699567',
			'0773894868',
			'077389f8688',
			'+07888814488',
			'0152456999',
			'442073456754',
			'+443003434751',
			'05073456754',
			'08001123123',
		],
	},
	{
		locale: 'en-SG',
		valid: [
			'87654321',
			'98765432',
			'+6587654321',
			'+6598765432',
		],
		invalid: [
			'987654321',
			'876543219',
			'8765432',
			'9876543',
			'12345678',
			'+98765432',
			'+9876543212',
			'+15673628910',
			'19876543210',
			'8005552222',
		],
	},
	{
		locale: 'en-US',
		valid: [
			'19876543210',
			'8005552222',
			'+15673628910',
			'+1(567)3628910',
			'+1(567)362-8910',
			'+1(567) 362-8910',
			'1(567)362-8910',
			'1(567)362 8910',
			'223-456-7890',
		],
		invalid: [
			'564785',
			'0123456789',
			'1437439210',
			'+10345672645',
			'11435213543',
			'1(067)362-8910',
			'1(167)362-8910',
			'+2(267)362-8910',
			'+3365520145',
		],
	},
	{
		locale: 'en-CA',
		valid: ['19876543210', '8005552222', '+15673628910'],
		invalid: [
			'564785',
			'0123456789',
			'1437439210',
			'+10345672645',
			'11435213543',
		],
	},
	{
		locale: 'en-ZM',
		valid: [
			'0956684590',
			'0966684590',
			'0976684590',
			'+260956684590',
			'+260966684590',
			'+260976684590',
			'260976684590',
		],
		invalid: [
			'12345',
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'010-38238383',
			'966684590',
		],
	},
	{
		locale: ['en-ZW'],
		valid: [
			'+263561890123',
			'+263715558041',
			'+263775551112',
			'+263775551695',
			'+263715556633',
		],
		invalid: [
			'12345',
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'+2631234567890',
			'+2641234567',
			'+263981234',
			'4736338855',
			'66338855',
		],
	},
	{
		locale: 'ru-RU',
		valid: [
			'+79676338855',
			'79676338855',
			'89676338855',
			'9676338855',
		],
		invalid: [
			'12345',
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'010-38238383',
			'+9676338855',
			'19676338855',
			'6676338855',
			'+99676338855',
		],
	},
	{
		locale: 'sr-RS',
		valid: [
			'0640133338',
			'063333133',
			'0668888878',
			'+381645678912',
			'+381611314000',
			'0655885010',
		],
		invalid: [
			'12345',
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'010-38238383',
			'+9676338855',
			'19676338855',
			'6676338855',
			'+99676338855',
		],
	},
	{
		locale: 'en-NZ',
		valid: [
			'+6427987035',
			'642240512347',
			'0293981646',
			'029968425',
		],
		invalid: [
			'12345',
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'+642956696123566',
			'+02119620856',
			'+9676338855',
			'19676338855',
			'6676338855',
			'+99676338855',
		],
	},
	{
		locale: 'en-MU',
		valid: [
			'+23012341234',
			'12341234',
			'012341234',
		],
		invalid: [
			'41234',
			'',
			'+230',
			'+2301',
			'+23012',
			'+230123',
			'+2301234',
			'+23012341',
			'+230123412',
			'+2301234123',
			'+230123412341',
			'+2301234123412',
			'+23012341234123',
		],
	},
	{
		locale: ['nb-NO', 'nn-NO'], // for multiple locales
		valid: [
			'+4796338855',
			'+4746338855',
			'4796338855',
			'4746338855',
			'46338855',
			'96338855',
		],
		invalid: [
			'12345',
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'+4676338855',
			'19676338855',
			'+4726338855',
			'4736338855',
			'66338855',
		],
	},
	{
		locale: ['ne-NP'],
		valid: [
			'+9779817385479',
			'+9779717385478',
			'+9779862002615',
			'+9779853660020',
		],
		invalid: [
			'12345',
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'+97796123456789',
			'+9771234567',
			'+977981234',
			'4736338855',
			'66338855',
		],
	},
	{
		locale: 'vi-VN',
		valid: [
			'0336012403',
			'+84586012403',
			'84981577798',
			'0708001240',
			'84813601243',
			'0523803765',
			'0863803732',
			'0883805866',
			'0892405867',
			'+84888696413',
		],
		invalid: [
			'12345',
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'010-38238383',
			'260976684590',
			'01678912345',
			'+841698765432',
			'841626543219',
			'0533803765',
		],
	},
	{
		locale: 'es-CL',
		valid: [
			'+56733875615',
			'56928590234',
			'0928590294',
			'0208590294',
		],
		invalid: [
			'1234',
			'+5633875615',
			'563875615',
			'56109834567',
			'56069834567',
		],
	},
	{
		locale: 'es-EC',
		valid: [
			'+593987654321',
			'593987654321',
			'0987654321',
			'027332615',
			'+59323456789',
		],
		invalid: [
			'03321321',
			'+593387561',
			'59312345677',
			'02344635',
			'593123456789',
			'081234567',
			'+593912345678',
			'+593902345678',
			'+593287654321',
			'593287654321',
		],
	},
	{
		locale: 'es-CR',
		valid: [
			'+50688888888',
			'+50665408090',
			'+50640895069',
			'25789563',
			'85789563',
		],
		invalid: [
			'+5081',
			'+5067777777',
			'+50188888888',
			'+50e987643254',
			'+506e4t4',
			'-50688888888',
			'50688888888',
			'12345678',
			'98765432',
			'01234567',
		],
	},
	{
		locale: 'es-ES',
		valid: [
			'+34654789321',
			'654789321',
			'+34714789321',
			'714789321',
			'+34744789321',
			'744789321',
		],
		invalid: [
			'12345',
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'+3465478932',
			'65478932',
			'+346547893210',
			'6547893210',
			'+34704789321',
			'704789321',
			'+34754789321',
			'754789321',
		],
	},
	{
		locale: 'es-MX',
		valid: [
			'+52019654789321',
			'+52199654789321',
			'+5201965478932',
			'+5219654789321',
			'52019654789321',
			'52199654789321',
			'5201965478932',
			'5219654789321',
			'87654789321',
			'8654789321',
			'0187654789321',
			'18654789321',
		],
		invalid: [
			'12345',
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'+3465478932',
			'65478932',
			'+346547893210',
			'+34704789321',
			'704789321',
			'+34754789321',
		],
	},
	{
		locale: 'es-PA',
		valid: [
			'+5076784565',
			'+5074321557',
			'5073331112',
			'+50723431212',
		],
		invalid: [
			'+50755555',
			'+207123456',
			'2001236542',
			'+507987643254',
			'+507jjjghtf',
		],
	},
	{
		locale: 'es-PY',
		valid: [
			'+595991372649',
			'+595992847352',
			'+595993847593',
			'+595994857473',
			'+595995348532',
			'+595996435231',
			'+595981847362',
			'+595982435452',
			'+595983948502',
			'+595984342351',
			'+595985403481',
			'+595986384012',
			'+595971435231',
			'+595972103924',
			'+595973438542',
			'+595974425864',
			'+595975425843',
			'+595976342546',
			'+595961435234',
			'+595963425043',
		],
		invalid: [
			'12345',
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'65478932',
			'+59599384712',
			'+5959938471234',
			'+595547893218',
			'+591993546843',
		],
	},
	{
		locale: 'es-UY',
		valid: [
			'+59899123456',
			'099123456',
			'+59894654321',
			'091111111',
		],
		invalid: [
			'54321',
			'montevideo',
			'',
			'+598099123456',
			'090883338',
			'099 999 999',
		],
	},
	{
		locale: 'et-EE',
		valid: [
			'+372 512 34 567',
			'372 512 34 567',
			'+37251234567',
			'51234567',
			'81234567',
			'+372842345678',
		],
		invalid: [
			'12345',
			'',
			'NotANumber',
			'+333 51234567',
			'61234567',
			'+51234567',
			'+372 539 57 4',
			'+372 900 1234',
			'12345678',
		],
	},
	{
		locale: 'pl-PL',
		valid: [
			'+48512689767',
			'+48 56 376 87 47',
			'56 566 78 46',
			'657562855',
			'+48657562855',
			'+48 887472765',
			'+48 56 6572724',
			'+48 67 621 5461',
			'48 67 621 5461',
		],
		invalid: [
			'+48  67 621 5461',
			'+55657562855',
			'3454535',
			'teststring',
			'',
			'1800-88-8687',
			'+6019-5830837',
			'357562855',
		],
	},
	{
		locale: 'fa-IR',
		valid: [
			'+989123456789',
			'989223456789',
			'09323456789',
			'09021456789',
			'+98-990-345-6789',
			'+98 938 345 6789',
			'0938 345 6789',
		],
		invalid: [
			'',
			'+989623456789',
			'+981123456789',
			'01234567890',
			'09423456789',
			'09823456789',
			'9123456789',
			'091234567890',
			'0912345678',
			'+98 912 3456 6789',
			'0912 345 678',
		],
	},
	{
		locale: 'fi-FI',
		valid: [
			'+358505557171',
			'0455571',
			'0505557171',
			'358505557171',
			'04412345',
			'0457 123 45 67',
			'+358457 123 45 67',
			'+358 50 555 7171',
		],
		invalid: [
			'12345',
			'',
			'045557',
			'045555717112312332423423421',
			'Vml2YW11cyBmZXJtZtesting123',
			'010-38238383',
			'+3-585-0555-7171',
			'+9676338855',
			'19676338855',
			'6676338855',
			'+99676338855',
			'044123',
			'019123456789012345678901',
		],
	},
	{
		locale: 'fj-FJ',
		valid: [
			'+6799898679',
			'6793788679',
			'+679 989 8679',
			'679 989 8679',
			'679 3456799',
			'679908 8909',
		],
		invalid: [
			'12345',
			'',
			'04555792',
			'902w99900030900000000099',
			'8uiuiuhhyy&GUU88d',
			'010-38238383',
			'19676338855',
			'679 9 89 8679',
			'6793 45679',
		],
	},
	{
		locale: 'ms-MY',
		valid: [
			'+60128228789',
			'+60195830837',
			'+6019-5830837',
			'+6019-5830837',
			'+6010-4357675',
			'+60172012370',
			'0128737867',
			'0172012370',
			'01468987837',
			'01112347345',
			'016-2838768',
			'016 2838768',
		],
		invalid: [
			'12345',
			'601238788657',
			'088387675',
			'16-2838768',
			'032551433',
			'6088-387888',
			'088-261987',
			'1800-88-8687',
			'088-320000',
		],
	},
	{
		locale: 'ko-KR',
		valid: [
			'+82-010-1234-5678',
			'+82-10-1234-5678',
			'82-010-1234-5678',
			'82-10-1234-5678',
			'+82 10 1234 5678',
			'010-123-5678',
			'10-1234-5678',
			'+82 10 1234 5678',
			'011 1234 5678',
			'+820112345678',
			'01012345678',
			'+82 016 1234 5678',
			'82 19 1234 5678',
			'+82 010 12345678',
		],
		invalid: [
			'abcdefghi',
			'+82 10 1234 567',
			'+82 10o 1234 1234',
			'+82 101 1234 5678',
			'+82 10 12 5678',
			'+011 7766 1234',
			'011_7766_1234',
			'+820 11 7766 1234',
		],
	},
	{
		locale: 'ja-JP',
		valid: [
			'09012345678',
			'08012345678',
			'07012345678',
			'06012345678',
			'090 1234 5678',
			'+8190-1234-5678',
			'+81 (0)90-1234-5678',
			'+819012345678',
			'+81-(0)90-1234-5678',
			'+81 90 1234 5678',
		],
		invalid: [
			'12345',
			'',
			'045555717112312332423423421',
			'Vml2YW11cyBmZXJtZtesting123',
			'+3-585-0555-7171',
			'0 1234 5689',
			'16 1234 5689',
			'03_1234_5689',
			'0312345678',
			'0721234567',
			'06 1234 5678',
			'072 123 4567',
			'0729 12 3456',
			'07296 1 2345',
			'072961 2345',
			'03-1234-5678',
			'+81312345678',
			'+816-1234-5678',
			'+81 090 1234 5678',
			'+8109012345678',
			'+81-090-1234-5678',
			'90 1234 5678',
		],
	},
	{
		locale: 'it-IT',
		valid: [
			'370 3175423',
			'333202925',
			'+39 310 7688449',
			'+39 3339847632',
		],
		invalid: [
			'011 7387545',
			'12345',
			'+45 345 6782395',
		],
	},
	{
		locale: 'fr-BE',
		valid: [
			'0470123456',
			'+32470123456',
			'32470123456',
			'021234567',
			'+3221234567',
			'3221234567',
		],
		invalid: [
			'12345',
			'+3212345',
			'3212345',
			'04701234567',
			'+3204701234567',
			'3204701234567',
			'0212345678',
			'+320212345678',
			'320212345678',
		],
	},
	{
		locale: 'nl-BE',
		valid: [
			'0470123456',
			'+32470123456',
			'32470123456',
			'021234567',
			'+3221234567',
			'3221234567',
		],
		invalid: [
			'12345',
			'+3212345',
			'3212345',
			'04701234567',
			'+3204701234567',
			'3204701234567',
			'0212345678',
			'+320212345678',
			'320212345678',
		],
	},
	{
		locale: 'nl-NL',
		valid: [
			'0670123456',
			'+31670123456',
			'31670123456',
			'021234567',
			'+3121234567',
			'3121234567',
		],
		invalid: [
			'12345',
			'+3112345',
			'3112345',
			'06701234567',
			'+3104701234567',
			'3104701234567',
			'0212345678',
			'+310212345678',
			'310212345678',
		],
	},
	{
		locale: 'ro-RO',
		valid: [
			'+40740123456',
			'+40 740123456',
			'+40740 123 456',
			'+40740.123.456',
			'+40740-123-456',
			'40740123456',
			'40 740123456',
			'40740 123 456',
			'40740.123.456',
			'40740-123-456',
			'0740123456',
			'0740/123456',
			'0740 123 456',
			'0740.123.456',
			'0740-123-456',
		],
		invalid: [
			'',
			'Vml2YW11cyBmZXJtZtesting123',
			'123456',
			'740123456',
			'+40640123456',
			'+40210123456',
		],
	},
	{
		locale: 'id-ID',
		valid: [
			'0811 778 998',
			'0811 7785 9983',
			'0812 7784 9984',
			'0813 7782 9982',
			'0821 1234 1234',
			'0822 1234 1234',
			'0823 1234 1234',
			'0852 1234 6764',
			'0853 1234 6764',
			'0851 1234 6764',
			'0814 7782 9982',
			'0815 7782 9982',
			'0816 7782 9982',
			'0855 7782 9982',
			'0856 7782 9982',
			'0857 7782 9982',
			'0858 7782 9982',
			'0817 7785 9983',
			'0818 7784 9984',
			'0819 7782 9982',
			'0859 1234 1234',
			'0877 1234 1234',
			'0878 1234 1234',
			'0895 7785 9983',
			'0896 7784 9984',
			'0897 7782 9982',
			'0898 1234 1234',
			'0899 1234 1234',
			'0881 7785 9983',
			'0882 7784 9984',
			'0883 7782 9982',
			'0884 1234 1234',
			'0886 1234 1234',
			'0887 1234 1234',
			'0888 7785 9983',
			'0889 7784 9984',
			'0828 7784 9984',
			'0838 7784 9984',
			'0831 7784 9984',
			'0832 7784 9984',
			'0833 7784 9984',
			'089931236181900',
			'62811 778 998',
			'62811778998',
			'628993123618190',
			'62898 740123456',
			'62899 7401 2346',
			'+62811 778 998',
			'+62811778998',
			'+62812 9650 3508',
			'08197231819',
			'085361008008',
			'+62811787391',
		],
		invalid: [
			'0899312361819001',
			'0217123456',
			'622178878890',
			'6221 740123456',
			'0341 8123456',
			'0778 89800910',
			'0741 123456',
			'+6221740123456',
			'+65740 123 456',
			'',
			'ASDFGJKLmZXJtZtesting123',
			'123456',
			'740123456',
			'+65640123456',
			'+64210123456',
		],
	},
	{
		locale: 'lt-LT',
		valid: [
			'+37051234567',
			'851234567',
		],
		invalid: [
			'+65740 123 456',
			'',
			'ASDFGJKLmZXJtZtesting123',
			'123456',
			'740123456',
			'+65640123456',
			'+64210123456',
		],
	},
	{
		locale: 'uk-UA',
		valid: [
			'+380982345679',
			'380982345679',
			'80982345679',
			'0982345679',
		],
		invalid: [
			'+30982345679',
			'982345679',
			'+380 98 234 5679',
			'+380-98-234-5679',
			'',
			'ASDFGJKLmZXJtZtesting123',
			'123456',
			'740123456',
		],
	},
	{
		locale: 'da-DK',
		valid: [
			'12345678',
			'12 34 56 78',
			'45 12345678',
			'4512345678',
			'45 12 34 56 78',
			'+45 12 34 56 78',
		],
		invalid: [
			'',
			'+45010203',
			'ASDFGJKLmZXJtZtesting123',
			'123456',
			'12 34 56',
			'123 123 12',
		],
	},
	{
		locale: 'sv-SE',
		valid: [
			'+46701234567',
			'46701234567',
			'0721234567',
			'073-1234567',
			'0761-234567',
			'079-123 45 67',
		],
		invalid: [
			'12345',
			'+4670123456',
			'+46301234567',
			'+0731234567',
			'0731234 56',
			'+7312345678',
			'',
		],
	},
	{
		locale: 'fo-FO',
		valid: [
			'123456',
			'12 34 56',
			'298 123456',
			'298123456',
			'298 12 34 56',
			'+298 12 34 56',
		],
		invalid: [
			'',
			'+4501020304',
			'ASDFGJKLmZXJtZtesting123',
			'12345678',
			'12 34 56 78',
		],
	},
	{
		locale: 'kl-GL',
		valid: [
			'123456',
			'12 34 56',
			'299 123456',
			'299123456',
			'299 12 34 56',
			'+299 12 34 56',
		],
		invalid: [
			'',
			'+4501020304',
			'ASDFGJKLmZXJtZtesting123',
			'12345678',
			'12 34 56 78',
		],
	},
	{
		locale: 'kk-KZ',
		valid: [
			'+77254716212',
			'77254716212',
			'87254716212',
			'7254716212',
		],
		invalid: [
			'12345',
			'',
			'ASDFGJKLmZXJtZtesting123',
			'010-38238383',
			'+9676338855',
			'19676338855',
			'6676338855',
			'+99676338855',
		],
	},
	{
		locale: 'be-BY',
		valid: [
			'+375241234567',
			'+375251234567',
			'+375291234567',
			'+375331234567',
			'+375441234567',
			'375331234567',
		],
		invalid: [
			'12345',
			'',
			'ASDFGJKLmZXJtZtesting123',
			'010-38238383',
			'+9676338855',
			'19676338855',
			'6676338855',
			'+99676338855',
		],
	},
	{
		locale: 'th-TH',
		valid: [
			'0912345678',
			'+66912345678',
			'66912345678',
		],
		invalid: [
			'99123456789',
			'12345',
			'67812345623',
			'081234567891',
		],
	},
	{
		locale: ['en-ZA', 'be-BY'],
		valid: [
			'0821231234',
			'+27821231234',
			'27821231234',
			'+375241234567',
			'+375251234567',
			'+375291234567',
			'+375331234567',
			'+375441234567',
			'375331234567',
		],
		invalid: [
			'082123',
			'08212312345',
			'21821231234',
			'+21821231234',
			'+0821231234',
			'12345',
			'',
			'ASDFGJKLmZXJtZtesting123',
			'010-38238383',
			'+9676338855',
			'19676338855',
			'6676338855',
			'+99676338855',
		],
	},
	{
		locale: 'en-SL',
		valid: [
			'+94766661206',
			'94713114340',
			'0786642116',
			'078 7642116',
			'078-7642116',
		],
		invalid: [
			'9912349956789',
			'12345',
			'1678123456',
			'0731234567',
			'0749994567',
			'0797878674',
		],
	},
];

allValid = [];

fixtures.forEach((fixture) => {
	// to be used later on for validating 'any' locale
	if (fixture.valid) allValid = allValid.concat(fixture.valid);

	if (Array.isArray(fixture.locale)) {
		test({
			validator: 'isMobilePhone',
			valid: fixture.valid,
			invalid: fixture.invalid,
			args: [fixture.locale],
		});
	} else {
		test({
			validator: 'isMobilePhone',
			valid: fixture.valid,
			invalid: fixture.invalid,
			args: [fixture.locale],
		});
	}
});

test({
	validator: 'isMobilePhone',
	valid: allValid,
	invalid: [
		'',
		'asdf',
		'1',
		'ASDFGJKLmZXJtZtesting123',
		'Vml2YW11cyBmZXJtZtesting123',
	],
	args: ['any'],
});

// strict mode
test({
	validator: 'isMobilePhone',
	valid: [
		'+254728530234',
		'+299 12 34 56',
		'+94766660206',
	],
	invalid: [
		'254728530234',
		'0728530234',
		'+728530234',
		'766667206',
		'0766670206',
	],
	args: ['any', { strictMode: true }],
});

// falsey locale defaults to 'any'
test({
	validator: 'isMobilePhone',
	valid: allValid,
	invalid: [
		'',
		'asdf',
		'1',
		'ASDFGJKLmZXJtZtesting123',
		'Vml2YW11cyBmZXJtZtesting123',
	],
	args: [],
});

// de-CH
test({
	validator: 'isMobilePhone',
	valid: [
		'+41751112233',
		'+41761112233',
		'+41771112233',
		'+41781112233',
		'+41791112233',
	],
	invalid: [
		'+41441112233',
	],
	args: [],
});

test({
	validator: 'isMobilePhone',
	args: [{ locale: ['is-NOT'] }],
	error: [
		'+123456789',
		'012345',
	],
});

test({
	validator: 'isMongoId',
	valid: [
		'507f1f77bcf86cd799439011',
	],
	invalid: [
		'507f1f77bcf86cd7994390',
		'507f1f77bcf86cd79943901z',
		'',
		'507f1f77bcf86cd799439011 ',
	],
});

test({
	validator: 'isMultibyte',
	valid: [
		'ひらがな・カタカナ、．漢字',
		'あいうえお foobar',
		'test＠example.com',
		'1234abcDEｘｙｚ',
		'ｶﾀｶﾅ',
		'中文',
	],
	invalid: [
		'abc',
		'abc123',
		'<>@" *.',
	],
});

test({
	validator: 'isNumeric',
	valid: [
		'123',
		'00123',
		'-00123',
		'0',
		'-0',
		'+123',
		'123.123',
		'+000000',
	],
	invalid: [
		' ',
		'',
		'.',
	],
});

test({
	validator: 'isNumeric',
	args: [{
		no_symbols: true,
	}],
	valid: [
		'123',
		'00123',
		'0',
	],
	invalid: [
		'-0',
		'+000000',
		'',
		'+123',
		'123.123',
		'-00123',
		' ',
		'.',
	],
});

test({
	validator: 'isOctal',
	valid: [
		'076543210',
		'0o01234567',
	],
	invalid: [
		'abcdefg',
		'012345678',
		'012345670c',
		'00c12345670c',
		'',
		'..',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['AM'],
	valid: [
		'AF0549358',
	],
	invalid: [
		'A1054935',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['AR'],
	valid: [
		'AAC811035',
	],
	invalid: [
		'A11811035',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['AT'],
	valid: [
		'P 1630837',
		'P 4366918',
	],
	invalid: [
		'0 1630837',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['AU'],
	valid: [
		'N0995852',
		'L4819236',
	],
	invalid: [
		'1A012345',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['BE'],
	valid: [
		'EM000000',
		'LA080402',
	],
	invalid: [
		'00123456',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['BG'],
	valid: [
		'346395366',
		'039903356',
	],
	invalid: [
		'ABC123456',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['CA'],
	valid: [
		'GA302922',
		'ZE000509',
	],
	invalid: [
		'AB0123456',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['CH'],
	valid: [
		'S1100409',
		'S5200073',
		'X4028791',
	],
	invalid: [
		'AB123456',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['CN'],
	valid: [
		'G25352389',
		'E00160027',
	],
	invalid: [
		'K0123456',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['CY'],
	valid: [
		'K00000413',
	],
	invalid: [
		'K10100',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['CZ'],
	valid: [
		'99003853',
		'42747260',
	],
	invalid: [
		'012345678',
		'AB123456',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['DE'],
	valid: [
		'C01X00T47',
		'C26VMVVC3',
	],
	invalid: [
		'AS0123456',
		'A012345678',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['DK'],
	valid: [
		'900010172',
	],
	invalid: [
		'01234567',
		'K01234567',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['DZ'],
	valid: [
		'855609385',
		'154472412',
		'197025599',
	],
	invalid: [
		'AS0123456',
		'A012345678',
		'0123456789',
		'12345678',
		'98KK54321',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['EE'],
	valid: [
		'K4218285',
		'K3295867',
		'KB0167630',
		'VD0023777',
	],
	invalid: [
		'K01234567',
		'KB00112233',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['ES'],
	valid: [
		'AF238143',
		'ZAB000254',
	],
	invalid: [
		'AF01234567',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['FI'],
	valid: [
		'XP8271602',
		'XD8500003',
	],
	invalid: [
		'A01234567',
		'ABC012345',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['FR'],
	valid: [
		'10CV28144',
		'60RF19342',
		'05RP34083',
	],
	invalid: [
		'012345678',
		'AB0123456',
		'01C234567',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['GB'],
	valid: [
		'925076473',
		'107182890',
		'104121156',
	],
	invalid: [
		'A012345678',
		'K000000000',
		'0123456789',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['GR'],
	valid: [
		'AE0000005',
		'AK0219304',
	],
	invalid: [
		'A01234567',
		'012345678',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['HR'],
	valid: [
		'007007007',
		'138463188',
	],
	invalid: [
		'A01234567',
		'00112233',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['HU'],
	valid: [
		'ZA084505',
		'BA0006902',
	],
	invalid: [
		'A01234567',
		'012345678',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['IE'],
	valid: [
		'D23145890',
		'X65097105',
		'XN0019390',
	],
	invalid: [
		'XND012345',
		'0123456789',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['IN'],
	valid: [
		'A-1234567',
		'A1234567',
		'X0019390',
	],
	invalid: [
		'AB-1234567',
		'0123456789',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['IS'],
	valid: [
		'A2040611',
		'A1197783',
	],
	invalid: [
		'K0000000',
		'01234567',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['IT'],
	valid: [
		'YA8335453',
		'KK0000000',
	],
	invalid: [
		'01234567',
		'KAK001122',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['JP'],
	valid: [
		'NH1106002',
		'TE3180251',
		'XS1234567',
	],
	invalid: [
		'X12345678',
		'012345678',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['KR'],
	valid: [
		'M35772699',
		'M70689098',
	],
	invalid: [
		'X12345678',
		'012345678',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['LT'],
	valid: [
		'20200997',
		'LB311756',
	],
	invalid: [
		'LB01234567',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['LU'],
	valid: [
		'JCU9J4T2',
		'JC4E7L2H',
	],
	invalid: [
		'JCU9J4T',
		'JC4E7L2H0',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['LV'],
	valid: [
		'LV9000339',
		'LV4017173',
	],
	invalid: [
		'LV01234567',
		'4017173LV',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['MT'],
	valid: [
		'1026564',
	],
	invalid: [
		'01234567',
		'MT01234',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['NL'],
	valid: [
		'XTR110131',
		'XR1001R58',
	],
	invalid: [
		'XTR11013R',
		'XR1001R58A',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['PO'],
	valid: [
		'ZS 0000177',
		'AN 3000011',
	],
	invalid: [
		'A1 0000177',
		'012345678',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['PT'],
	valid: [
		'I700044',
		'K453286',
	],
	invalid: [
		'0700044',
		'K4532861',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['RO'],
	valid: [
		'05485968',
		'040005646',
	],
	invalid: [
		'R05485968',
		'0511060461',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['SE'],
	valid: [
		'59000001',
		'56702928',
	],
	invalid: [
		'SE012345',
		'012345678',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['SL'],
	valid: [
		'PB0036440',
		'PB1390281',
	],
	invalid: [
		'SL0123456',
		'P01234567',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['SK'],
	valid: [
		'P0000000',
	],
	invalid: [
		'SK012345',
		'012345678',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['TR'],
	valid: [
		'U 06764100',
		'U 01048537',
	],
	invalid: [
		'06764100U',
		'010485371',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['UA'],
	valid: [
		'EH345655',
		'EK000001',
		'AP841503',
	],
	invalid: [
		'01234567',
		'012345EH',
		'A012345P',
	],
});

test({
	validator: 'isPassportNumber',
	args: ['US'],
	valid: [
		'790369937',
		'340007237',
	],
	invalid: [
		'US0123456',
		'0123456US',
		'7903699371',
	],
});

test({
	validator: 'isPort',
	valid: [
		'0',
		'22',
		'80',
		'443',
		'3000',
		'8080',
		'65535',
	],
	invalid: [
		'',
		'-1',
		'65536',
	],
});

fixtures = [
	{
		locale: 'AU',
		valid: [
			'4000',
			'2620',
			'3000',
			'2017',
			'0800',
		],
	},
	{
		locale: 'CA',
		valid: [
			'L4T 0A5',
			'G1A-0A2',
			'A1A 1A1',
			'X0A-0H0',
			'V5K 0A1',
		],
	},
	{
		locale: 'JP',
		valid: [
			'135-0000',
			'874-8577',
			'669-1161',
			'470-0156',
			'672-8031',
		],
	},
	{
		locale: 'GR',
		valid: [
			'022 93',
			'29934',
			'90293',
			'299 42',
			'94944',
		],
	},
	{
		locale: 'GB',
		valid: [
			'TW8 9GS',
			'BS98 1TL',
			'DE99 3GG',
			'DE55 4SW',
			'DH98 1BT',
			'DH99 1NS',
			'GIR0aa',
			'SA99',
			'W1N 4DJ',
			'AA9A 9AA',
			'AA99 9AA',
			'BS98 1TL',
			'DE993GG',
		],
	},
	{
		locale: 'FR',
		valid: [
			'75008',
			'44 522',
			'98025',
			'38 499',
			'39940',
		],
	},
	{
		locale: 'ID',
		valid: [
			'10210',
			'40181',
			'55161',
			'60233',
		],
	},
	{
		locale: 'IE',
		valid: [
			'A65 TF12',
			'A6W U9U9',
		],
		invalid: [
			'123',
			'75690HG',
			'AW5  TF12',
			'AW5 TF12',
			'756  90HG',
			'A65T F12',
			'O62 O1O2',
		],
	},
	{
		locale: 'IN',
		valid: [
			'364240',
			'360005',
		],
		invalid: [
			'123',
			'012345',
			'011111',
			'101123',
			'291123',
			'351123',
			'541123',
			'551123',
			'651123',
			'661123',
			'861123',
			'871123',
			'881123',
			'891123',
		],
	},
	{
		locale: 'BG',
		valid: [
			'1000',
		],
	},
	{
		locale: 'CZ',
		valid: [
			'20134',
			'392 90',
			'39919',
			'938 29',
			'39949',
		],
	},
	{
		locale: 'NL',
		valid: [
			'1012 SZ',
			'3432FE',
			'1118 BH',
			'3950IO',
			'3997 GH',
		],
	},
	{
		locale: 'NP',
		valid: [
			'10811',
			'32600',
			'56806',
			'977',
		],
		invalid: [
			'11977',
			'asds',
			'13 32',
			'-977',
			'97765',
		],
	},
	{
		locale: 'PL',
		valid: [
			'47-260',
			'12-930',
			'78-399',
			'39-490',
			'38-483',
		],
	},
	{
		locale: 'TW',
		valid: [
			'360',
			'90312',
			'399',
			'935',
			'38842',
		],
	},
	{
		locale: 'LI',
		valid: [
			'9485',
			'9497',
			'9491',
			'9489',
			'9496',
		],
	},
	{
		locale: 'PT',
		valid: [
			'4829-489',
			'0294-348',
			'8156-392',
		],
	},
	{
		locale: 'SE',
		valid: [
			'12994',
			'284 39',
			'39556',
			'489 39',
			'499 49',
		],
	},
	{
		locale: 'AD',
		valid: [
			'AD100',
			'AD200',
			'AD300',
			'AD400',
			'AD500',
			'AD600',
			'AD700',
		],
	},
	{
		locale: 'UA',
		valid: [
			'65000',
			'65080',
			'01000',
		],
	},
	{
		locale: 'BR',
		valid: [
			'39100-000',
			'22040-020',
			'39400-152',
		],
		invalid: [
			'79800A12',
			'13165-00',
			'38175-abc',
			'81470-2763',
			'78908',
			'13010|111',
		],
	},
	{
		locale: 'NZ',
		valid: [
			'7843',
			'3581',
			'0449',
			'0984',
			'4144',
		],
	},
	{
		locale: 'MT',
		valid: [
			'VLT2345',
			'VLT 2345',
			'ATD1234',
			'MSK8723',
		],
	},
	{
		locale: 'PR',
		valid: [
			'00979',
			'00631',
			'00786',
			'00987',
		],
	},
];

allValid = [];

// Test fixtures
fixtures.forEach((fixture) => {
	if (fixture.valid) allValid = allValid.concat(fixture.valid);
	test({
		validator: 'isPostalCode',
		valid: fixture.valid,
		invalid: fixture.invalid,
		args: [fixture.locale],
	});
});

// Test generics
test({
	validator: 'isPostalCode',
	valid: [
		...allValid,
		'1234',
		'6900',
		'1292',
		'9400',
		'27616',
		'90210',
		'10001',
		'21201',
		'33142',
		'060623',
		'123456',
		'293940',
		'002920',
	],
	invalid: [
		'asdf',
		'1',
		'ASDFGJKLmZXJtZtesting123',
		'Vml2YW11cyBmZXJtZtesting123',
		'48380480343',
		'29923-329393-2324',
		'4294924224',
		'13',
	],
	args: ['any'],
});

test({
	validator: 'isPostalCode',
	args: ['is-NOT'],
	error: [
		'293940',
		'1234',
	],
});

test({
	validator: 'isRFC3339',
	valid: [
		'2009-05-19 14:39:22-06:00',
		'2009-05-19 14:39:22+06:00',
		'2009-05-19 14:39:22Z',
		'2009-05-19T14:39:22-06:00',
		'2009-05-19T14:39:22Z',
		'2010-02-18T16:23:48.3-06:00',
		'2010-02-18t16:23:33+06:00',
		'2010-02-18t16:23:33+06:00',
		'2010-02-18t16:12:23.23334444z',
		'2010-02-18T16:23:55.2283Z',
		'2009-05-19 14:39:22.500Z',
		'2009-05-19 14:39:55Z',
		'2009-05-31 14:39:55Z',
		'2009-05-31 14:53:60Z',
		'2010-02-18t00:23:23.33+06:00',
		'2010-02-18t00:23:32.33+00:00',
		'2010-02-18t00:23:32.33+23:00',
	],
	invalid: [
		'2010-02-18t00:23:32.33+24:00',
		'2009-05-31 14:60:55Z',
		'2010-02-18t24:23.33+0600',
		'2009-05-00 1439,55Z',
		'2009-13-19 14:39:22-06:00',
		'2009-05-00 14:39:22+0600',
		'2009-00-1 14:39:22Z',
		'2009-05-19T14:39:22',
	],
});

test({
	validator: 'isRgbColor',
	valid: [
		'rgb(0,0,0)',
		'rgb(255,255,255)',
		'rgba(0,0,0,0)',
		'rgba(255,255,255,1)',
		'rgba(255,255,255,.1)',
		'rgba(255,255,255,0.1)',
		'rgb(5%,5%,5%)',
		'rgba(5%,5%,5%,.3)',
	],
	invalid: [
		'rgb(0,0,0,)',
		'rgb(0,0,)',
		'rgb(0,0,256)',
		'rgb()',
		'rgba(0,0,0)',
		'rgba(255,255,255,2)',
		'rgba(255,255,255,.12)',
		'rgba(255,255,256,0.1)',
		'rgb(4,4,5%)',
		'rgba(5%,5%,5%)',
		'rgba(3,3,3%,.3)',
		'rgb(101%,101%,101%)',
		'rgba(3%,3%,101%,0.3)',
	],
});

test({
	validator: 'isSemVer',
	valid: [
		'0.0.4',
		'1.2.3',
		'10.20.30',
		'1.1.2-prerelease+meta',
		'1.1.2+meta',
		'1.1.2+meta-valid',
		'1.0.0-alpha',
		'1.0.0-beta',
		'1.0.0-alpha.beta',
		'1.0.0-alpha.beta.1',
		'1.0.0-alpha.1',
		'1.0.0-alpha0.valid',
		'1.0.0-alpha.0valid',
		'1.0.0-alpha-a.b-c-somethinglong+build.1-aef.1-its-okay',
		'1.0.0-rc.1+build.1',
		'2.0.0-rc.1+build.123',
		'1.2.3-beta',
		'10.2.3-DEV-SNAPSHOT',
		'1.2.3-SNAPSHOT-123',
		'1.0.0',
		'2.0.0',
		'1.1.7',
		'2.0.0+build.1848',
		'2.0.1-alpha.1227',
		'1.0.0-alpha+beta',
		'1.2.3----RC-SNAPSHOT.12.9.1--.12+788',
		'1.2.3----R-S.12.9.1--.12+meta',
		'1.2.3----RC-SNAPSHOT.12.9.1--.12',
		'1.0.0+0.build.1-rc.10000aaa-kk-0.1',
		'99999999999999999999999.999999999999999999.99999999999999999',
		'1.0.0-0A.is.legal',
	],
	invalid: [
		'-invalid+invalid',
		'-invalid.01',
		'alpha',
		'alpha.beta',
		'alpha.beta.1',
		'alpha.1',
		'alpha+beta',
		'alpha_beta',
		'alpha.',
		'alpha..',
		'beta',
		'1.0.0-alpha_beta',
		'-alpha.',
		'1.0.0-alpha..',
		'1.0.0-alpha..1',
		'1.0.0-alpha...1',
		'1.0.0-alpha....1',
		'1.0.0-alpha.....1',
		'1.0.0-alpha......1',
		'1.0.0-alpha.......1',
		'01.1.1',
		'1.01.1',
		'1.1.01',
		'1.2',
		'1.2.3.DEV',
		'1.2-SNAPSHOT',
		'1.2.31.2.3----RC-SNAPSHOT.12.09.1--..12+788',
		'1.2-RC-SNAPSHOT',
		'-1.0.3-gamma+b7718',
		'+justmeta',
		'9.8.7+meta+meta',
		'9.8.7-whatever+meta+meta',
		'99999999999999999999999.999999999999999999.99999999999999999-',
		'---RC-SNAPSHOT.12.09.1--------------------------------..12',
	],
});

test({
	validator: 'isSlug',
	args: ['cs_67CZ'],
	valid: ['cs-cz', 'cscz'],
	invalid: [
		'not-----------slug',
		'@#_$@',
		'-not-slug',
		'not-slug-',
		'_not-slug',
		'not-slug_',
	],
});

test({
	validator: 'isSurrogatePair',
	valid: [
		'𠮷野𠮷',
		'𩸽',
		'ABC千𥧄1-2-3',
	],
	invalid: [
		'吉野竈',
		'鮪',
		'ABC1-2-3',
	],
});

test({
	validator: 'isUpperCase',
	valid: [
		'ABC',
		'ABC123',
		'ALL CAPS IS FUN.',
		'   .',
	],
	invalid: [
		'fooBar',
		'123abc',
	],
});

test({
	validator: 'isURL',
	valid: [
		'foobar.com',
		'www.foobar.com',
		'foobar.com/',
		'valid.au',
		'http://www.foobar.com/',
		'HTTP://WWW.FOOBAR.COM/',
		'https://www.foobar.com/',
		'HTTPS://WWW.FOOBAR.COM/',
		'http://www.foobar.com:23/',
		'http://www.foobar.com:65535/',
		'http://www.foobar.com:5/',
		'https://www.foobar.com/',
		'ftp://www.foobar.com/',
		'http://www.foobar.com/~foobar',
		'http://user:pass@www.foobar.com/',
		'http://user:@www.foobar.com/',
		'http://127.0.0.1/',
		'http://10.0.0.0/',
		'http://189.123.14.13/',
		'http://duckduckgo.com/?q=%2F',
		"http://foobar.com/t$-_.+!*'(),",
		'http://foobar.com/?foo=bar#baz=qux',
		'http://foobar.com?foo=bar',
		'http://foobar.com#baz=qux',
		'http://www.xn--froschgrn-x9a.net/',
		'http://xn--froschgrn-x9a.com/',
		'http://foo--bar.com',
		'http://høyfjellet.no',
		'http://xn--j1aac5a4g.xn--j1amh',
		'http://xn------eddceddeftq7bvv7c4ke4c.xn--p1ai',
		'http://кулік.укр',
		'test.com?ref=http://test2.com',
		'http://[FEDC:BA98:7654:3210:FEDC:BA98:7654:3210]:80/index.html',
		'http://[1080:0:0:0:8:800:200C:417A]/index.html',
		'http://[3ffe:2a00:100:7031::1]',
		'http://[1080::8:800:200C:417A]/foo',
		'http://[::192.9.5.5]/ipng',
		'http://[::FFFF:129.144.52.38]:80/index.html',
		'http://[2010:836B:4179::836B:4179]',
		'http://example.com/example.json#/foo/bar',
	],
	invalid: [
		'http://localhost:3000/',
		'//foobar.com',
		'xyz://foobar.com',
		'invalid/',
		'invalid.x',
		'invalid.',
		'.com',
		'http://com/',
		'http://300.0.0.1/',
		'mailto:foo@bar.com',
		'rtmp://foobar.com',
		'http://www.xn--.com/',
		'http://xn--.com/',
		'http://www.foobar.com:0/',
		'http://www.foobar.com:70000/',
		'http://www.foobar.com:99999/',
		'http://www.-foobar.com/',
		'http://www.foobar-.com/',
		'http://foobar/# lol',
		'http://foobar/? lol',
		'http://foobar/ lol/',
		'http://lol @foobar.com/',
		'http://lol:lol @foobar.com/',
		'http://lol:lol:lol@foobar.com/',
		'http://lol: @foobar.com/',
		'http://www.foo_bar.com/',
		'http://www.foobar.com/\t',
		'http://\n@www.foobar.com/',
		'',
		`http://foobar.com/${new Array(2083).join('f')}`,
		'http://*.foo.com',
		'*.foo.com',
		'!.foo.com',
		'http://example.com.',
		'http://localhost:61500this is an invalid url!!!!',
		'////foobar.com',
		'http:////foobar.com',
		"https://example.com/foo/<script>alert('XSS')</script>/",
	],
});

test({
	validator: 'isURL',
	args: [{
		protocols: ['rtmp'],
	}],
	valid: [
		'rtmp://foobar.com',
	],
	invalid: [
		'http://foobar.com',
	],
});

test({
	validator: 'isURL',
	args: [{
		protocols: ['file'],
		require_host: false,
		require_tld: false,
	}],
	valid: [
		'file://localhost/foo.txt',
		'file:///foo.txt',
		'file:///',
	],
	invalid: [
		'http://foobar.com',
		'file://',
	],
});

test({
	validator: 'isURL',
	args: [{
		require_valid_protocol: false,
	}],
	valid: [
		'rtmp://foobar.com',
		'http://foobar.com',
		'test://foobar.com',
	],
	invalid: [
		'mailto:test@example.com',
	],
});

test({
	validator: 'isURL',
	args: [{
		allow_underscores: true,
	}],
	valid: [
		'http://foo_bar.com',
		'http://pr.example_com.294.example.com/',
		'http://foo__bar.com',
	],
	invalid: [],
});

test({
	validator: 'isURL',
	args: [{
		require_tld: false,
	}],
	valid: [
		'http://foobar.com/',
		'http://foobar/',
		'http://localhost/',
		'foobar/',
		'foobar',
	],
	invalid: [],
});

test({
	validator: 'isURL',
	args: [{
		allow_trailing_dot: true,
		require_tld: false,
	}],
	valid: [
		'http://example.com.',
		'foobar.',
	],
});

test({
	validator: 'isURL',
	args: [{
		allow_protocol_relative_urls: true,
	}],
	valid: [
		'//foobar.com',
		'http://foobar.com',
		'foobar.com',
	],
	invalid: [
		'://foobar.com',
		'/foobar.com',
		'////foobar.com',
		'http:////foobar.com',
	],
});

test({
	validator: 'isURL',
	args: [{
		allow_protocol_relative_urls: true,
		require_protocol: true,
	}],
	valid: [
		'http://foobar.com',
	],
	invalid: [
		'//foobar.com',
		'://foobar.com',
		'/foobar.com',
		'foobar.com',
	],
});

test({
	validator: 'isURL',
	args: [{
		require_protocol: true,
	}],
	valid: [
		'http://foobar.com/',
	],
	invalid: [
		'http://localhost/',
		'foobar.com',
		'foobar',
	],
});

test({
	validator: 'isURL',
	args: [{
		host_whitelist: ['foo.com', 'bar.com'],
	}],
	valid: [
		'http://bar.com/',
		'http://foo.com/',
	],
	invalid: [
		'http://foobar.com',
		'http://foo.bar.com/',
		'http://qux.com',
	],
});

test({
	validator: 'isURL',
	args: [{
		host_whitelist: ['bar.com', 'foo.com', /\.foo\.com$/],
	}],
	valid: [
		'http://bar.com/',
		'http://foo.com/',
		'http://images.foo.com/',
		'http://cdn.foo.com/',
		'http://a.b.c.foo.com/',
	],
	invalid: [
		'http://foobar.com',
		'http://foo.bar.com/',
		'http://qux.com',
	],
});

test({
	validator: 'isURL',
	args: [{
		host_blacklist: ['foo.com', 'bar.com'],
	}],
	valid: [
		'http://foobar.com',
		'http://foo.bar.com/',
		'http://qux.com',
	],
	invalid: [
		'http://bar.com/',
		'http://foo.com/',
	],
});

test({
	validator: 'isURL',
	args: [{
		host_blacklist: ['bar.com', 'foo.com', /\.foo\.com$/],
	}],
	valid: [
		'http://foobar.com',
		'http://foo.bar.com/',
		'http://qux.com',
	],
	invalid: [
		'http://bar.com/',
		'http://foo.com/',
		'http://images.foo.com/',
		'http://cdn.foo.com/',
		'http://a.b.c.foo.com/',
	],
});

test({
	validator: 'isURL',
	args: [{ disallow_auth: true }],
	valid: [
		'doe.com',
	],
	invalid: [
		'john@doe.com',
		'john:john@doe.com',
	],
});

test({
	validator: 'isUUID',
	valid: [
		'A987FBC9-4BED-3078-CF07-9141BA07C9F3',
		'A987FBC9-4BED-4078-8F07-9141BA07C9F3',
		'A987FBC9-4BED-5078-AF07-9141BA07C9F3',
	],
	invalid: [
		'',
		'xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3',
		'A987FBC9-4BED-3078-CF07-9141BA07C9F3xxx',
		'A987FBC94BED3078CF079141BA07C9F3',
		'934859',
		'987FBC9-4BED-3078-CF07A-9141BA07C9F3',
		'AAAAAAAA-1111-1111-AAAG-111111111111',
	],
});

test({
	validator: 'isUUID',
	args: [3],
	valid: [
		'A987FBC9-4BED-3078-CF07-9141BA07C9F3',
	],
	invalid: [
		'',
		'xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3',
		'934859',
		'AAAAAAAA-1111-1111-AAAG-111111111111',
		'A987FBC9-4BED-4078-8F07-9141BA07C9F3',
		'A987FBC9-4BED-5078-AF07-9141BA07C9F3',
	],
});

test({
	validator: 'isUUID',
	args: [4],
	valid: [
		'713ae7e3-cb32-45f9-adcb-7c4fa86b90c1',
		'625e63f3-58f5-40b7-83a1-a72ad31acffb',
		'57b73598-8764-4ad0-a76a-679bb6640eb1',
		'9c858901-8a57-4791-81fe-4c455b099bc9',
	],
	invalid: [
		'',
		'xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3',
		'934859',
		'AAAAAAAA-1111-1111-AAAG-111111111111',
		'A987FBC9-4BED-5078-AF07-9141BA07C9F3',
		'A987FBC9-4BED-3078-CF07-9141BA07C9F3',
	],
});

test({
	validator: 'isUUID',
	args: [5],
	valid: [
		'987FBC97-4BED-5078-AF07-9141BA07C9F3',
		'987FBC97-4BED-5078-BF07-9141BA07C9F3',
		'987FBC97-4BED-5078-8F07-9141BA07C9F3',
		'987FBC97-4BED-5078-9F07-9141BA07C9F3',
	],
	invalid: [
		'',
		'xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3',
		'934859',
		'AAAAAAAA-1111-1111-AAAG-111111111111',
		'9c858901-8a57-4791-81fe-4c455b099bc9',
		'A987FBC9-4BED-3078-CF07-9141BA07C9F3',
	],
});

test({
	validator: 'isVariableWidth',
	valid: [
		'ひらがなカタカナ漢字ABCDE',
		'３ー０123',
		'Ｆｶﾀｶﾅﾞﾬ',
		'Good＝Parts',
	],
	invalid: [
		'abc',
		'abc123',
		'!"#$%&()<>/+=-_? ~^|.,@`{}[]',
		'ひらがな・カタカナ、．漢字',
		'１２３４５６',
		'ｶﾀｶﾅﾞﾬ',
	],
});

test({
	validator: 'isWhitelisted',
	args: ['abcdefghijklmnopqrstuvwxyz-'],
	valid: ['foo', 'foobar', 'baz-foo'],
	invalid: ['foo bar', 'fo.bar', 'türkçe'],
});

test({
	validator: 'matches',
	args: [/abc/],
	valid: ['abc', 'abcdef', '123abc'],
	invalid: ['acb', 'Abc'],
});

test({
	validator: 'matches',
	args: ['abc'],
	valid: ['abc', 'abcdef', '123abc'],
	invalid: ['acb', 'Abc'],
});

test({
	validator: 'matches',
	args: ['abc', 'i'],
	valid: ['abc', 'abcdef', '123abc', 'AbC'],
	invalid: ['acb'],
});
