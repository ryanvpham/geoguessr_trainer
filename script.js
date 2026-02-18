// GeoGuessr countries list (from geometas.com)
const geoguessrCountries = [
    // Western Europe
    'Andorra', 'Austria', 'Belgium', 'France', 'Germany', 'Greece', 'Ireland', 'Isle of Man',
    'Italy', 'Luxembourg', 'Malta', 'Monaco', 'Netherlands', 'Portugal', 'Spain', 'Switzerland',
    'United Kingdom',
    // Eastern Europe
    'Albania', 'Bulgaria', 'Croatia', 'Czechia', 'Hungary', 'Montenegro', 'North Macedonia',
    'Poland', 'Romania', 'Russia', 'Serbia', 'Slovakia', 'Slovenia', 'Ukraine',
    // Nordics
    'Denmark', 'Faroe Islands', 'Finland', 'Greenland', 'Iceland', 'Norway', 'Sweden',
    // Baltics
    'Estonia', 'Latvia', 'Lithuania',
    // Latin America
    'Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Costa Rica', 'Curaçao',
    'Dominican Republic', 'Ecuador', 'Guatemala', 'Mexico', 'Panama', 'Peru', 'Puerto Rico',
    'U.S. Virgin Islands', 'Uruguay',
    // North America
    'Bermuda', 'Canada', 'United States',
    // South & South-East Asia
    'Bangladesh', 'Bhutan', 'Cambodia', 'Christmas Island', 'India', 'Indonesia', 'Laos',
    'Malaysia', 'Pakistan', 'Philippines', 'Singapore', 'Sri Lanka', 'Thailand', 'Vietnam',
    // Rest of Asia
    'China', 'Hong Kong', 'Japan', 'Kazakhstan', 'Kyrgyzstan', 'Mongolia', 'South Korea', 'Taiwan',
    // Oceania
    'American Samoa', 'Australia', 'Guam', 'New Zealand', 'Northern Mariana Islands',
    // Africa
    'Botswana', 'Eswatini', 'Ghana', 'Kenya', 'Lesotho', 'Madagascar', 'Nigeria', 'Réunion',
    'Rwanda', 'Senegal', 'South Africa', 'Uganda',
    // Middle East
    'Israel', 'Jordan', 'Palestine', 'Qatar', 'Tunisia', 'Turkey', 'United Arab Emirates'
];

// List of countries with their flag codes (ISO 3166-1 alpha-2), aliases, capitals, languages, and domains
// NOTE: languages and domains are commented out for now but kept in data structure for future use
const allCountries = [
    { name: 'Afghanistan', code: 'AF', capital: 'Kabul', languages: ['Pashto', 'Dari'], domain: 'af' },
    { name: 'Albania', code: 'AL', capital: 'Tirana', languages: ['Albanian'], domain: 'al' },
    { name: 'Algeria', code: 'DZ', capital: 'Algiers', languages: ['Arabic', 'Berber'], domain: 'dz' },
    { name: 'American Samoa', code: 'AS', capital: 'Pago Pago', languages: ['English', 'Samoan'], domain: 'as' },
    { name: 'Andorra', code: 'AD', capital: 'Andorra la Vella', languages: ['Catalan'], domain: 'ad' },
    { name: 'Angola', code: 'AO', capital: 'Luanda', languages: ['Portuguese'], domain: 'ao' },
    { name: 'Antigua and Barbuda', code: 'AG', capital: "Saint John's", languages: ['English'], domain: 'ag' },
    { name: 'Argentina', code: 'AR', capital: 'Buenos Aires', languages: ['Spanish'], domain: 'ar' },
    { name: 'Armenia', code: 'AM', capital: 'Yerevan', languages: ['Armenian'], domain: 'am' },
    { name: 'Australia', code: 'AU', capital: 'Canberra', languages: ['English'], domain: 'au' },
    { name: 'Austria', code: 'AT', capital: 'Vienna', languages: ['German'], domain: 'at' },
    { name: 'Azerbaijan', code: 'AZ', capital: 'Baku', languages: ['Azerbaijani'], domain: 'az' },
    { name: 'Bahamas', code: 'BS', capital: 'Nassau', languages: ['English'], domain: 'bs' },
    { name: 'Bahrain', code: 'BH', capital: 'Manama', languages: ['Arabic'], domain: 'bh' },
    { name: 'Bangladesh', code: 'BD', capital: 'Dhaka', languages: ['Bengali'], domain: 'bd' },
    { name: 'Barbados', code: 'BB', capital: 'Bridgetown', languages: ['English'], domain: 'bb' },
    { name: 'Belarus', code: 'BY', capital: 'Minsk', languages: ['Belarusian', 'Russian'], domain: 'by' },
    { name: 'Belgium', code: 'BE', capital: 'Brussels', languages: ['Dutch', 'French', 'German'], domain: 'be' },
    { name: 'Belize', code: 'BZ', capital: 'Belmopan', languages: ['English'], domain: 'bz' },
    { name: 'Benin', code: 'BJ', capital: 'Porto-Novo', languages: ['French'], domain: 'bj' },
    { name: 'Bermuda', code: 'BM', capital: 'Hamilton', languages: ['English'], domain: 'bm' },
    { name: 'Bhutan', code: 'BT', capital: 'Thimphu', languages: ['Dzongkha'], domain: 'bt' },
    { name: 'Bolivia', code: 'BO', capital: 'Sucre', languages: ['Spanish', 'Quechua', 'Aymara'], domain: 'bo' },
    { name: 'Bosnia and Herzegovina', code: 'BA', capital: 'Sarajevo', languages: ['Bosnian', 'Serbian', 'Croatian'], domain: 'ba' },
    { name: 'Botswana', code: 'BW', capital: 'Gaborone', languages: ['English', 'Setswana'], domain: 'bw' },
    { name: 'Brazil', code: 'BR', capital: 'Brasília', languages: ['Portuguese'], domain: 'br' },
    { name: 'Brunei', code: 'BN', capital: 'Bandar Seri Begawan', languages: ['Malay'], domain: 'bn' },
    { name: 'Bulgaria', code: 'BG', capital: 'Sofia', languages: ['Bulgarian'], domain: 'bg' },
    { name: 'Burkina Faso', code: 'BF', capital: 'Ouagadougou', languages: ['French'], domain: 'bf' },
    { name: 'Burundi', code: 'BI', capital: 'Gitega', languages: ['Kirundi', 'French'], domain: 'bi' },
    { name: 'Cambodia', code: 'KH', capital: 'Phnom Penh', languages: ['Khmer'], domain: 'kh' },
    { name: 'Cameroon', code: 'CM', capital: 'Yaoundé', languages: ['French', 'English'], domain: 'cm' },
    { name: 'Canada', code: 'CA', capital: 'Ottawa', languages: ['English', 'French'], domain: 'ca' },
    { name: 'Cape Verde', code: 'CV', capital: 'Praia', languages: ['Portuguese'], domain: 'cv' },
    { name: 'Central African Republic', code: 'CF', capital: 'Bangui', languages: ['French', 'Sango'], domain: 'cf' },
    { name: 'Chad', code: 'TD', capital: "N'Djamena", languages: ['French', 'Arabic'], domain: 'td' },
    { name: 'Chile', code: 'CL', capital: 'Santiago', languages: ['Spanish'], domain: 'cl' },
    { name: 'China', code: 'CN', capital: 'Beijing', languages: ['Mandarin'], domain: 'cn', aliases: ['PRC', "People's Republic of China"] },
    { name: 'Christmas Island', code: 'CX', capital: 'Flying Fish Cove', languages: ['English'], domain: 'cx' },
    { name: 'Colombia', code: 'CO', capital: 'Bogotá', languages: ['Spanish'], domain: 'co' },
    { name: 'Comoros', code: 'KM', capital: 'Moroni', languages: ['Comorian', 'Arabic', 'French'], domain: 'km' },
    { name: 'Congo', code: 'CG', capital: 'Brazzaville', languages: ['French'], domain: 'cg' },
    { name: 'Costa Rica', code: 'CR', capital: 'San José', languages: ['Spanish'], domain: 'cr' },
    { name: 'Croatia', code: 'HR', capital: 'Zagreb', languages: ['Croatian'], domain: 'hr' },
    { name: 'Cuba', code: 'CU', capital: 'Havana', languages: ['Spanish'], domain: 'cu' },
    { name: 'Curaçao', code: 'CW', capital: 'Willemstad', languages: ['Dutch', 'Papiamento', 'English'], domain: 'cw' },
    { name: 'Cyprus', code: 'CY', capital: 'Nicosia', languages: ['Greek', 'Turkish'], domain: 'cy' },
    { name: 'Czech Republic', code: 'CZ', capital: 'Prague', languages: ['Czech'], domain: 'cz', aliases: ['Czechia', 'Czech'] },
    { name: 'Denmark', code: 'DK', capital: 'Copenhagen', languages: ['Danish'], domain: 'dk' },
    { name: 'Djibouti', code: 'DJ', capital: 'Djibouti', languages: ['French', 'Arabic'], domain: 'dj' },
    { name: 'Dominica', code: 'DM', capital: 'Roseau', languages: ['English'], domain: 'dm' },
    { name: 'Dominican Republic', code: 'DO', capital: 'Santo Domingo', languages: ['Spanish'], domain: 'do' },
    { name: 'DR Congo', code: 'CD', capital: 'Kinshasa', languages: ['French'], domain: 'cd', aliases: ['Democratic Republic of the Congo', 'Congo-Kinshasa'] },
    { name: 'Ecuador', code: 'EC', capital: 'Quito', languages: ['Spanish'], domain: 'ec' },
    { name: 'Egypt', code: 'EG', capital: 'Cairo', languages: ['Arabic'], domain: 'eg' },
    { name: 'El Salvador', code: 'SV', capital: 'San Salvador', languages: ['Spanish'], domain: 'sv' },
    { name: 'Equatorial Guinea', code: 'GQ', capital: 'Malabo', languages: ['Spanish', 'French', 'Portuguese'], domain: 'gq' },
    { name: 'Eritrea', code: 'ER', capital: 'Asmara', languages: ['Tigrinya', 'Arabic', 'English'], domain: 'er' },
    { name: 'Estonia', code: 'EE', capital: 'Tallinn', languages: ['Estonian'], domain: 'ee' },
    { name: 'Eswatini', code: 'SZ', capital: 'Mbabane', languages: ['Swati', 'English'], domain: 'sz', aliases: ['Swaziland'] },
    { name: 'Ethiopia', code: 'ET', capital: 'Addis Ababa', languages: ['Amharic'], domain: 'et' },
    { name: 'Faroe Islands', code: 'FO', capital: 'Tórshavn', languages: ['Faroese', 'Danish'], domain: 'fo' },
    { name: 'Fiji', code: 'FJ', capital: 'Suva', languages: ['English', 'Fijian', 'Hindi'], domain: 'fj' },
    { name: 'Finland', code: 'FI', capital: 'Helsinki', languages: ['Finnish', 'Swedish'], domain: 'fi' },
    { name: 'France', code: 'FR', capital: 'Paris', languages: ['French'], domain: 'fr' },
    { name: 'Gabon', code: 'GA', capital: 'Libreville', languages: ['French'], domain: 'ga' },
    { name: 'Gambia', code: 'GM', capital: 'Banjul', languages: ['English'], domain: 'gm' },
    { name: 'Georgia', code: 'GE', capital: 'Tbilisi', languages: ['Georgian'], domain: 'ge' },
    { name: 'Germany', code: 'DE', capital: 'Berlin', languages: ['German'], domain: 'de', aliases: ['Deutschland'] },
    { name: 'Ghana', code: 'GH', capital: 'Accra', languages: ['English'], domain: 'gh' },
    { name: 'Greece', code: 'GR', capital: 'Athens', languages: ['Greek'], domain: 'gr' },
    { name: 'Greenland', code: 'GL', capital: 'Nuuk', languages: ['Greenlandic', 'Danish'], domain: 'gl' },
    { name: 'Grenada', code: 'GD', capital: "Saint George's", languages: ['English'], domain: 'gd' },
    { name: 'Guam', code: 'GU', capital: 'Hagåtña', languages: ['English', 'Chamorro'], domain: 'gu' },
    { name: 'Guatemala', code: 'GT', capital: 'Guatemala City', languages: ['Spanish'], domain: 'gt' },
    { name: 'Guinea', code: 'GN', capital: 'Conakry', languages: ['French'], domain: 'gn' },
    { name: 'Guinea-Bissau', code: 'GW', capital: 'Bissau', languages: ['Portuguese'], domain: 'gw' },
    { name: 'Guyana', code: 'GY', capital: 'Georgetown', languages: ['English'], domain: 'gy' },
    { name: 'Haiti', code: 'HT', capital: 'Port-au-Prince', languages: ['French', 'Haitian Creole'], domain: 'ht' },
    { name: 'Honduras', code: 'HN', capital: 'Tegucigalpa', languages: ['Spanish'], domain: 'hn' },
    { name: 'Hong Kong', code: 'HK', capital: 'Hong Kong', languages: ['Chinese', 'English'], domain: 'hk' },
    { name: 'Hungary', code: 'HU', capital: 'Budapest', languages: ['Hungarian'], domain: 'hu' },
    { name: 'Iceland', code: 'IS', capital: 'Reykjavik', languages: ['Icelandic'], domain: 'is' },
    { name: 'India', code: 'IN', capital: 'New Delhi', languages: ['Hindi', 'English'], domain: 'in' },
    { name: 'Indonesia', code: 'ID', capital: 'Jakarta', languages: ['Indonesian'], domain: 'id' },
    { name: 'Iran', code: 'IR', capital: 'Tehran', languages: ['Persian'], domain: 'ir', aliases: ['Persia'] },
    { name: 'Iraq', code: 'IQ', capital: 'Baghdad', languages: ['Arabic', 'Kurdish'], domain: 'iq' },
    { name: 'Ireland', code: 'IE', capital: 'Dublin', languages: ['Irish', 'English'], domain: 'ie', aliases: ['Eire', 'Republic of Ireland'] },
    { name: 'Isle of Man', code: 'IM', capital: 'Douglas', languages: ['English', 'Manx'], domain: 'im' },
    { name: 'Israel', code: 'IL', capital: 'Jerusalem', languages: ['Hebrew', 'Arabic'], domain: 'il' },
    { name: 'Ivory Coast', code: 'CI', capital: 'Yamoussoukro', languages: ['French'], domain: 'ci', aliases: ['Côte d\'Ivoire', 'Cote d\'Ivoire'] },
    { name: 'Italy', code: 'IT', capital: 'Rome', languages: ['Italian'], domain: 'it' },
    { name: 'Jamaica', code: 'JM', capital: 'Kingston', languages: ['English'], domain: 'jm' },
    { name: 'Japan', code: 'JP', capital: 'Tokyo', languages: ['Japanese'], domain: 'jp' },
    { name: 'Jordan', code: 'JO', capital: 'Amman', languages: ['Arabic'], domain: 'jo' },
    { name: 'Kazakhstan', code: 'KZ', capital: 'Astana', languages: ['Kazakh', 'Russian'], domain: 'kz' },
    { name: 'Kenya', code: 'KE', capital: 'Nairobi', languages: ['English', 'Swahili'], domain: 'ke' },
    { name: 'Kiribati', code: 'KI', capital: 'Tarawa', languages: ['English', 'Gilbertese'], domain: 'ki' },
    { name: 'Kosovo', code: 'XK', capital: 'Pristina', languages: ['Albanian', 'Serbian'], domain: '' },
    { name: 'Kuwait', code: 'KW', capital: 'Kuwait City', languages: ['Arabic'], domain: 'kw' },
    { name: 'Kyrgyzstan', code: 'KG', capital: 'Bishkek', languages: ['Kyrgyz', 'Russian'], domain: 'kg' },
    { name: 'Laos', code: 'LA', capital: 'Vientiane', languages: ['Lao'], domain: 'la', aliases: ['Lao'] },
    { name: 'Latvia', code: 'LV', capital: 'Riga', languages: ['Latvian'], domain: 'lv' },
    { name: 'Lebanon', code: 'LB', capital: 'Beirut', languages: ['Arabic', 'French'], domain: 'lb' },
    { name: 'Lesotho', code: 'LS', capital: 'Maseru', languages: ['Sesotho', 'English'], domain: 'ls' },
    { name: 'Liberia', code: 'LR', capital: 'Monrovia', languages: ['English'], domain: 'lr' },
    { name: 'Libya', code: 'LY', capital: 'Tripoli', languages: ['Arabic'], domain: 'ly' },
    { name: 'Liechtenstein', code: 'LI', capital: 'Vaduz', languages: ['German'], domain: 'li' },
    { name: 'Lithuania', code: 'LT', capital: 'Vilnius', languages: ['Lithuanian'], domain: 'lt' },
    { name: 'Luxembourg', code: 'LU', capital: 'Luxembourg', languages: ['Luxembourgish', 'French', 'German'], domain: 'lu' },
    { name: 'Madagascar', code: 'MG', capital: 'Antananarivo', languages: ['Malagasy', 'French'], domain: 'mg' },
    { name: 'Malawi', code: 'MW', capital: 'Lilongwe', languages: ['English', 'Chichewa'], domain: 'mw' },
    { name: 'Malaysia', code: 'MY', capital: 'Kuala Lumpur', languages: ['Malay'], domain: 'my' },
    { name: 'Maldives', code: 'MV', capital: 'Malé', languages: ['Dhivehi'], domain: 'mv' },
    { name: 'Mali', code: 'ML', capital: 'Bamako', languages: ['French'], domain: 'ml' },
    { name: 'Malta', code: 'MT', capital: 'Valletta', languages: ['Maltese', 'English'], domain: 'mt' },
    { name: 'Marshall Islands', code: 'MH', capital: 'Majuro', languages: ['English', 'Marshallese'], domain: 'mh' },
    { name: 'Mauritania', code: 'MR', capital: 'Nouakchott', languages: ['Arabic'], domain: 'mr' },
    { name: 'Mauritius', code: 'MU', capital: 'Port Louis', languages: ['English', 'French'], domain: 'mu' },
    { name: 'Mexico', code: 'MX', capital: 'Mexico City', languages: ['Spanish'], domain: 'mx' },
    { name: 'Micronesia', code: 'FM', capital: 'Palikir', languages: ['English'], domain: 'fm' },
    { name: 'Moldova', code: 'MD', capital: 'Chișinău', languages: ['Romanian'], domain: 'md' },
    { name: 'Monaco', code: 'MC', capital: 'Monaco', languages: ['French'], domain: 'mc' },
    { name: 'Mongolia', code: 'MN', capital: 'Ulaanbaatar', languages: ['Mongolian'], domain: 'mn' },
    { name: 'Montenegro', code: 'ME', capital: 'Podgorica', languages: ['Montenegrin'], domain: 'me' },
    { name: 'Morocco', code: 'MA', capital: 'Rabat', languages: ['Arabic', 'Berber'], domain: 'ma' },
    { name: 'Mozambique', code: 'MZ', capital: 'Maputo', languages: ['Portuguese'], domain: 'mz' },
    { name: 'Myanmar', code: 'MM', capital: 'Naypyidaw', languages: ['Burmese'], domain: 'mm', aliases: ['Burma'] },
    { name: 'Namibia', code: 'NA', capital: 'Windhoek', languages: ['English'], domain: 'na' },
    { name: 'Nauru', code: 'NR', capital: 'Yaren', languages: ['English', 'Nauruan'], domain: 'nr' },
    { name: 'Nepal', code: 'NP', capital: 'Kathmandu', languages: ['Nepali'], domain: 'np' },
    { name: 'Netherlands', code: 'NL', capital: 'Amsterdam', languages: ['Dutch'], domain: 'nl', aliases: ['Holland'] },
    { name: 'New Zealand', code: 'NZ', capital: 'Wellington', languages: ['English', 'Māori'], domain: 'nz' },
    { name: 'Nicaragua', code: 'NI', capital: 'Managua', languages: ['Spanish'], domain: 'ni' },
    { name: 'Niger', code: 'NE', capital: 'Niamey', languages: ['French'], domain: 'ne' },
    { name: 'Nigeria', code: 'NG', capital: 'Abuja', languages: ['English'], domain: 'ng' },
    { name: 'North Korea', code: 'KP', capital: 'Pyongyang', languages: ['Korean'], domain: 'kp', aliases: ['DPRK', "Democratic People's Republic of Korea", 'North Korea'] },
    { name: 'North Macedonia', code: 'MK', capital: 'Skopje', languages: ['Macedonian'], domain: 'mk', aliases: ['Macedonia'] },
    { name: 'Norway', code: 'NO', capital: 'Oslo', languages: ['Norwegian'], domain: 'no' },
    { name: 'Northern Mariana Islands', code: 'MP', capital: 'Saipan', languages: ['English', 'Chamorro', 'Carolinian'], domain: 'mp' },
    { name: 'Oman', code: 'OM', capital: 'Muscat', languages: ['Arabic'], domain: 'om' },
    { name: 'Pakistan', code: 'PK', capital: 'Islamabad', languages: ['Urdu', 'English'], domain: 'pk' },
    { name: 'Palau', code: 'PW', capital: 'Ngerulmud', languages: ['English', 'Palauan'], domain: 'pw' },
    { name: 'Palestine', code: 'PS', capital: 'East Jerusalem', languages: ['Arabic'], domain: 'ps' },
    { name: 'Panama', code: 'PA', capital: 'Panama City', languages: ['Spanish'], domain: 'pa' },
    { name: 'Papua New Guinea', code: 'PG', capital: 'Port Moresby', languages: ['English', 'Tok Pisin', 'Hiri Motu'], domain: 'pg' },
    { name: 'Paraguay', code: 'PY', capital: 'Asunción', languages: ['Spanish', 'Guaraní'], domain: 'py' },
    { name: 'Peru', code: 'PE', capital: 'Lima', languages: ['Spanish', 'Quechua'], domain: 'pe' },
    { name: 'Philippines', code: 'PH', capital: 'Manila', languages: ['Filipino', 'English'], domain: 'ph' },
    { name: 'Poland', code: 'PL', capital: 'Warsaw', languages: ['Polish'], domain: 'pl' },
    { name: 'Portugal', code: 'PT', capital: 'Lisbon', languages: ['Portuguese'], domain: 'pt' },
    { name: 'Puerto Rico', code: 'PR', capital: 'San Juan', languages: ['Spanish', 'English'], domain: 'pr' },
    { name: 'Qatar', code: 'QA', capital: 'Doha', languages: ['Arabic'], domain: 'qa' },
    { name: 'Romania', code: 'RO', capital: 'Bucharest', languages: ['Romanian'], domain: 'ro' },
    { name: 'Réunion', code: 'RE', capital: 'Saint-Denis', languages: ['French'], domain: 're' },
    { name: 'Russia', code: 'RU', capital: 'Moscow', languages: ['Russian'], domain: 'ru', aliases: ['Russian Federation', 'Russian'] },
    { name: 'Rwanda', code: 'RW', capital: 'Kigali', languages: ['Kinyarwanda', 'French', 'English'], domain: 'rw' },
    { name: 'Saint Kitts and Nevis', code: 'KN', capital: 'Basseterre', languages: ['English'], domain: 'kn' },
    { name: 'Saint Lucia', code: 'LC', capital: 'Castries', languages: ['English'], domain: 'lc' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', capital: 'Kingstown', languages: ['English'], domain: 'vc' },
    { name: 'Samoa', code: 'WS', capital: 'Apia', languages: ['Samoan', 'English'], domain: 'ws' },
    { name: 'San Marino', code: 'SM', capital: 'San Marino', languages: ['Italian'], domain: 'sm' },
    { name: 'São Tomé and Príncipe', code: 'ST', capital: 'São Tomé', languages: ['Portuguese'], domain: 'st' },
    { name: 'Saudi Arabia', code: 'SA', capital: 'Riyadh', languages: ['Arabic'], domain: 'sa' },
    { name: 'Senegal', code: 'SN', capital: 'Dakar', languages: ['French'], domain: 'sn' },
    { name: 'Serbia', code: 'RS', capital: 'Belgrade', languages: ['Serbian'], domain: 'rs' },
    { name: 'Seychelles', code: 'SC', capital: 'Victoria', languages: ['Seychellois Creole', 'English', 'French'], domain: 'sc' },
    { name: 'Sierra Leone', code: 'SL', capital: 'Freetown', languages: ['English'], domain: 'sl' },
    { name: 'Singapore', code: 'SG', capital: 'Singapore', languages: ['English', 'Malay', 'Mandarin', 'Tamil'], domain: 'sg' },
    { name: 'Slovakia', code: 'SK', capital: 'Bratislava', languages: ['Slovak'], domain: 'sk' },
    { name: 'Slovenia', code: 'SI', capital: 'Ljubljana', languages: ['Slovene'], domain: 'si' },
    { name: 'Solomon Islands', code: 'SB', capital: 'Honiara', languages: ['English'], domain: 'sb' },
    { name: 'Somalia', code: 'SO', capital: 'Mogadishu', languages: ['Somali', 'Arabic'], domain: 'so' },
    { name: 'South Africa', code: 'ZA', capital: 'Cape Town', languages: ['English', 'Afrikaans', 'Zulu', 'Xhosa'], domain: 'za' },
    { name: 'South Korea', code: 'KR', capital: 'Seoul', languages: ['Korean'], domain: 'kr', aliases: ['Korea', 'Republic of Korea', 'ROK'] },
    { name: 'South Sudan', code: 'SS', capital: 'Juba', languages: ['English'], domain: 'ss' },
    { name: 'Spain', code: 'ES', capital: 'Madrid', languages: ['Spanish'], domain: 'es' },
    { name: 'Sri Lanka', code: 'LK', capital: 'Colombo', languages: ['Sinhala', 'Tamil'], domain: 'lk' },
    { name: 'Sudan', code: 'SD', capital: 'Khartoum', languages: ['Arabic', 'English'], domain: 'sd' },
    { name: 'Suriname', code: 'SR', capital: 'Paramaribo', languages: ['Dutch'], domain: 'sr' },
    { name: 'Sweden', code: 'SE', capital: 'Stockholm', languages: ['Swedish'], domain: 'se' },
    { name: 'Switzerland', code: 'CH', capital: 'Bern', languages: ['German', 'French', 'Italian', 'Romansh'], domain: 'ch' },
    { name: 'Syria', code: 'SY', capital: 'Damascus', languages: ['Arabic'], domain: 'sy' },
    { name: 'Taiwan', code: 'TW', capital: 'Taipei', languages: ['Mandarin'], domain: 'tw', aliases: ['Republic of China', 'ROC'] },
    { name: 'Tajikistan', code: 'TJ', capital: 'Dushanbe', languages: ['Tajik'], domain: 'tj' },
    { name: 'Tanzania', code: 'TZ', capital: 'Dodoma', languages: ['Swahili', 'English'], domain: 'tz' },
    { name: 'Thailand', code: 'TH', capital: 'Bangkok', languages: ['Thai'], domain: 'th' },
    { name: 'Timor-Leste', code: 'TL', capital: 'Dili', languages: ['Tetum', 'Portuguese'], domain: 'tl', aliases: ['East Timor'] },
    { name: 'Togo', code: 'TG', capital: 'Lomé', languages: ['French'], domain: 'tg' },
    { name: 'Tonga', code: 'TO', capital: "Nuku'alofa", languages: ['Tongan', 'English'], domain: 'to' },
    { name: 'Trinidad and Tobago', code: 'TT', capital: 'Port of Spain', languages: ['English'], domain: 'tt' },
    { name: 'Tunisia', code: 'TN', capital: 'Tunis', languages: ['Arabic'], domain: 'tn' },
    { name: 'Turkey', code: 'TR', capital: 'Ankara', languages: ['Turkish'], domain: 'tr' },
    { name: 'Turkmenistan', code: 'TM', capital: 'Ashgabat', languages: ['Turkmen'], domain: 'tm' },
    { name: 'Tuvalu', code: 'TV', capital: 'Funafuti', languages: ['Tuvaluan', 'English'], domain: 'tv' },
    { name: 'Uganda', code: 'UG', capital: 'Kampala', languages: ['English', 'Swahili'], domain: 'ug' },
    { name: 'Ukraine', code: 'UA', capital: 'Kyiv', languages: ['Ukrainian'], domain: 'ua' },
    { name: 'United Arab Emirates', code: 'AE', capital: 'Abu Dhabi', languages: ['Arabic'], domain: 'ae', aliases: ['UAE'] },
    { name: 'United Kingdom', code: 'GB', capital: 'London', languages: ['English'], domain: 'uk', aliases: ['UK', 'Great Britain', 'Britain', 'England'] },
    { name: 'United States', code: 'US', capital: 'Washington, D.C.', languages: ['English'], domain: 'us', aliases: ['USA', 'US', 'America', 'United States of America'] },
    { name: 'U.S. Virgin Islands', code: 'VI', capital: 'Charlotte Amalie', languages: ['English'], domain: 'vi' },
    { name: 'Uruguay', code: 'UY', capital: 'Montevideo', languages: ['Spanish'], domain: 'uy' },
    { name: 'Uzbekistan', code: 'UZ', capital: 'Tashkent', languages: ['Uzbek'], domain: 'uz' },
    { name: 'Vanuatu', code: 'VU', capital: 'Port Vila', languages: ['Bislama', 'English', 'French'], domain: 'vu' },
    { name: 'Vatican City', code: 'VA', capital: 'Vatican City', languages: ['Italian', 'Latin'], domain: 'va', aliases: ['Holy See'] },
    { name: 'Venezuela', code: 'VE', capital: 'Caracas', languages: ['Spanish'], domain: 've' },
    { name: 'Vietnam', code: 'VN', capital: 'Hanoi', languages: ['Vietnamese'], domain: 'vn' },
    { name: 'Yemen', code: 'YE', capital: 'Sana\'a', languages: ['Arabic'], domain: 'ye' },
    { name: 'Zambia', code: 'ZM', capital: 'Lusaka', languages: ['English'], domain: 'zm' },
    { name: 'Zimbabwe', code: 'ZW', capital: 'Harare', languages: ['English', 'Shona', 'Ndebele'], domain: 'zw' },
];

// Game mode: 'country' or 'capital'
let gameMode = null;

// Settings for each game mode
let countryQuizSettings = {
    geoguessrFilter: false,
    questionFormat: 'flag', // 'flag'
    answerFormat: 'typein' // 'typein' or 'multichoice'
};

let capitalQuizSettings = {
    geoguessrFilter: false,
    questionFormat: 'flag', // 'flag' or 'countryName'
    answerFormat: 'typein' // 'typein' or 'multichoice'
};

// Get filtered countries based on settings
function getAvailableCountries(geoguessrFilter) {
    let filtered = allCountries;
    
    if (geoguessrFilter) {
        // Map GeoGuessr country names to our country objects
        // Handle special cases like "Czechia" -> "Czech Republic", "Lichtenstein" -> "Liechtenstein"
        const nameMap = {
            'Czechia': 'Czech Republic',
            'Lichtenstein': 'Liechtenstein'
        };
        
        filtered = allCountries.filter(country => {
            const countryName = country.name;
            const aliases = country.aliases || [];
            
            return geoguessrCountries.some(ggName => {
                const mappedName = nameMap[ggName] || ggName;
                return countryName === mappedName || 
                       countryName === ggName ||
                       aliases.some(alias => alias === ggName || alias === mappedName);
            });
        });
    }
    
    return filtered;
}

// Game state
let currentCountry = null;
let correctCount = 0;
let totalSeen = 0;
let usedCountries = [];
let incorrectCountries = []; // Track countries answered incorrectly
let currentRound = 1;
let roundCorrectCount = 0;
let roundTotalSeen = 0;
let roundScores = []; // Track scores for each completed round
let justSubmitted = false;
let countries = [];
let multiChoiceOptions = []; // Store current multi-choice options

// DOM elements
const menuScreen = document.getElementById('menu-screen');
const countryQuizSettingsScreen = document.getElementById('country-quiz-settings-screen');
const capitalQuizSettingsScreen = document.getElementById('capital-quiz-settings-screen');
const gameScreen = document.getElementById('game-screen');
const countryQuizBtn = document.getElementById('country-quiz-btn');
const capitalQuizBtn = document.getElementById('capital-quiz-btn');
const countryQuizBackBtn = document.getElementById('country-quiz-back-btn');
const capitalQuizBackBtn = document.getElementById('capital-quiz-back-btn');
const countryQuizStartBtn = document.getElementById('country-quiz-start-btn');
const capitalQuizStartBtn = document.getElementById('capital-quiz-start-btn');
const menuBackBtn = document.getElementById('menu-back-btn');
const gameTitle = document.getElementById('game-title');

// Country Quiz Settings DOM
const countryQuizGeoguessrFilter = document.getElementById('country-quiz-geoguessr-filter');
const countryQuizQuestionFormatRadios = document.querySelectorAll('input[name="country-quiz-question-format"]');
const countryQuizAnswerFormatRadios = document.querySelectorAll('input[name="country-quiz-answer-format"]');

// Capital Quiz Settings DOM
const capitalQuizGeoguessrFilter = document.getElementById('capital-quiz-geoguessr-filter');
const capitalQuizQuestionFormatRadios = document.querySelectorAll('input[name="capital-quiz-question-format"]');
const capitalQuizAnswerFormatRadios = document.querySelectorAll('input[name="capital-quiz-answer-format"]');

// Game Screen DOM
const flagContainer = document.getElementById('flag-container');
const flagImg = document.getElementById('flag');
const countryNameDisplay = document.getElementById('country-name-display');
const displayedCountryName = document.getElementById('displayed-country-name');
const typeinContainer = document.getElementById('typein-container');
const answerInput = document.getElementById('answer-input');
const multichoiceContainer = document.getElementById('multichoice-container');
const multichoiceOptionsDiv = document.getElementById('multichoice-options');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const feedbackDiv = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score-display');
const roundNumber = document.getElementById('round-number');
const roundSummary = document.getElementById('round-summary');
const roundSummaryContent = document.getElementById('round-summary-content');

// Screen navigation
function showScreen(screen) {
    menuScreen.style.display = screen === 'menu' ? 'block' : 'none';
    countryQuizSettingsScreen.style.display = screen === 'country-quiz-settings' ? 'block' : 'none';
    capitalQuizSettingsScreen.style.display = screen === 'capital-quiz-settings' ? 'block' : 'none';
    gameScreen.style.display = screen === 'game' ? 'block' : 'none';
}

// Load country quiz settings from DOM
function loadCountryQuizSettings() {
    countryQuizSettings.geoguessrFilter = countryQuizGeoguessrFilter.checked;
    const selectedQuestionFormat = document.querySelector('input[name="country-quiz-question-format"]:checked');
    if (selectedQuestionFormat) {
        countryQuizSettings.questionFormat = selectedQuestionFormat.value;
    }
    const selectedAnswerFormat = document.querySelector('input[name="country-quiz-answer-format"]:checked');
    if (selectedAnswerFormat) {
        countryQuizSettings.answerFormat = selectedAnswerFormat.value;
    }
}

// Load capital quiz settings from DOM
function loadCapitalQuizSettings() {
    capitalQuizSettings.geoguessrFilter = capitalQuizGeoguessrFilter.checked;
    const selectedQuestionFormat = document.querySelector('input[name="capital-quiz-question-format"]:checked');
    if (selectedQuestionFormat) {
        capitalQuizSettings.questionFormat = selectedQuestionFormat.value;
    }
    const selectedAnswerFormat = document.querySelector('input[name="capital-quiz-answer-format"]:checked');
    if (selectedAnswerFormat) {
        capitalQuizSettings.answerFormat = selectedAnswerFormat.value;
    }
}

// Update score display
function updateScoreDisplay() {
    const percentage = totalSeen > 0 ? Math.round((correctCount / totalSeen) * 100) : 0;
    const roundPercentage = roundTotalSeen > 0 ? Math.round((roundCorrectCount / roundTotalSeen) * 100) : 0;
    scoreDisplay.textContent = `${correctCount} / ${totalSeen} (${percentage}%) | Round: ${roundCorrectCount} / ${roundTotalSeen} (${roundPercentage}%)`;
    // Only update summary when game is complete
    if (incorrectCountries.length === 0) {
        updateRoundSummary();
    }
}

// Get a random country that hasn't been used in current round
function getRandomCountry() {
    // Determine which countries are available for this round
    let availableForRound;
    if (currentRound === 1) {
        // First round: use all countries
        availableForRound = countries;
    } else {
        // Subsequent rounds: only incorrect countries from previous rounds
        availableForRound = countries.filter(c => incorrectCountries.includes(c.name));
    }
    
    // Filter out countries already used in this round
    let availableCountries = availableForRound.filter(c => !usedCountries.includes(c.name));
    
    if (availableCountries.length === 0) {
        // Round complete - check if we should start next round
        if (currentRound === 1 && incorrectCountries.length > 0) {
            // Start round 2 with incorrect countries
            return startNextRound();
        } else if (currentRound > 1) {
            // Check if there are still incorrect countries to practice
            const stillIncorrect = countries.filter(c => incorrectCountries.includes(c.name));
            if (stillIncorrect.length > 0) {
                return startNextRound();
            }
        }
        // All rounds complete
        return null;
    }
    
    const randomIndex = Math.floor(Math.random() * availableCountries.length);
    const country = availableCountries[randomIndex];
    usedCountries.push(country.name);
    return country;
}

// Update round summary display (only show when game is complete)
function updateRoundSummary() {
    // Only show summary when game is complete (all countries correct)
    if (incorrectCountries.length === 0 && roundScores.length > 0) {
        // Save final round if it has progress
        if (roundTotalSeen > 0 && !roundScores.some(s => s.round === currentRound)) {
            roundScores.push({
                round: currentRound,
                correct: roundCorrectCount,
                total: roundTotalSeen
            });
        }
        
        roundSummary.style.display = 'block';
        let summaryHTML = '';
        
        roundScores.forEach((score, index) => {
            const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
            summaryHTML += `
                <div class="round-summary-item">
                    <span class="round-label">Round ${index + 1}:</span>
                    <span class="round-score">${score.correct} / ${score.total} (${percentage}%)</span>
                </div>
            `;
        });
        
        roundSummaryContent.innerHTML = summaryHTML;
    } else {
        roundSummary.style.display = 'none';
    }
}

// Start the next round
function startNextRound() {
    // Save current round score before starting next round
    if (roundTotalSeen > 0) {
        roundScores.push({
            round: currentRound,
            correct: roundCorrectCount,
            total: roundTotalSeen
        });
        // Don't show summary during gameplay
        roundSummary.style.display = 'none';
    }
    
    currentRound++;
    usedCountries = []; // Reset used countries for new round
    roundCorrectCount = 0;
    roundTotalSeen = 0;
    roundNumber.textContent = currentRound;
    
    // Filter incorrect countries to only those that are still incorrect
    // (in case user got some right in previous rounds)
    const stillIncorrect = countries.filter(c => incorrectCountries.includes(c.name));
    
    if (stillIncorrect.length === 0) {
        return null; // No more incorrect countries to practice
    }
    
    // Get a random country from remaining incorrect ones
    const randomIndex = Math.floor(Math.random() * stillIncorrect.length);
    const country = stillIncorrect[randomIndex];
    usedCountries.push(country.name);
    return country;
}

// Generate multi-choice options (4 options: 1 correct + 3 random)
function generateMultiChoiceOptions(correctAnswer, isCapital = false) {
    const options = [correctAnswer];
    
    // Get 3 random incorrect options
    const availableOptions = isCapital 
        ? countries.map(c => c.capital).filter(cap => cap !== correctAnswer)
        : countries.map(c => c.name).filter(name => name !== correctAnswer);
    
    // Shuffle and take 3
    const shuffled = availableOptions.sort(() => Math.random() - 0.5);
    options.push(...shuffled.slice(0, 3));
    
    // Shuffle all options
    const finalOptions = options.sort(() => Math.random() - 0.5);
    
    return finalOptions;
}

// Display multi-choice options
function displayMultiChoiceOptions(options, correctAnswer) {
    multichoiceOptionsDiv.innerHTML = '';
    multiChoiceOptions = options;
    
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'multichoice-btn';
        button.textContent = option;
        button.addEventListener('click', () => handleMultiChoiceAnswer(option, correctAnswer, button));
        multichoiceOptionsDiv.appendChild(button);
    });
}

// Handle multi-choice answer selection
function handleMultiChoiceAnswer(selectedAnswer, correctAnswer, buttonElement) {
    // Disable all buttons
    const allButtons = multichoiceOptionsDiv.querySelectorAll('.multichoice-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    const isCorrect = normalizeString(selectedAnswer) === normalizeString(correctAnswer);
    
    // Mark correct/incorrect
    if (isCorrect) {
        buttonElement.classList.add('correct');
    } else {
        buttonElement.classList.add('incorrect');
        // Also highlight the correct answer
        allButtons.forEach(btn => {
            if (normalizeString(btn.textContent) === normalizeString(correctAnswer)) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Process answer
    totalSeen++;
    roundTotalSeen++;
    
    if (isCorrect) {
        correctCount++;
        roundCorrectCount++;
        
        // Remove from incorrect list if it was there
        if (incorrectCountries.includes(currentCountry.name)) {
            incorrectCountries = incorrectCountries.filter(name => name !== currentCountry.name);
        }
        
        feedbackDiv.textContent = `Correct!`;
        feedbackDiv.className = 'feedback correct';
    } else {
        // Wrong answer - add to incorrect list if not already there
        if (!incorrectCountries.includes(currentCountry.name)) {
            incorrectCountries.push(currentCountry.name);
        }
        
        feedbackDiv.textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
        feedbackDiv.className = 'feedback incorrect';
    }
    
    updateScoreDisplay();
    nextBtn.style.display = 'block';
    
    // Set flag to prevent immediate next trigger
    justSubmitted = true;
    setTimeout(() => {
        justSubmitted = false;
    }, 100);
}

// Load question based on format
function loadQuestion() {
    const settings = gameMode === 'country' ? countryQuizSettings : capitalQuizSettings;
    
    // Hide all question containers
    flagContainer.style.display = 'none';
    countryNameDisplay.style.display = 'none';
    
    if (gameMode === 'country') {
        // Country Quiz - only flag format available
        flagContainer.style.display = 'block';
        flagImg.style.display = 'block';
        flagImg.src = `https://flagcdn.com/w320/${currentCountry.code.toLowerCase()}.png`;
        flagImg.alt = `${currentCountry.name} flag`;
        flagImg.onerror = function() {
            this.src = `https://flagcdn.com/w320/${currentCountry.code.toLowerCase()}.svg`;
            this.onerror = function() {
                this.style.display = 'none';
                console.warn(`Flag not available for ${currentCountry.name} (${currentCountry.code})`);
            };
        };
    } else {
        // Capital Quiz
        if (settings.questionFormat === 'flag') {
            flagContainer.style.display = 'block';
            flagImg.style.display = 'block';
            flagImg.src = `https://flagcdn.com/w320/${currentCountry.code.toLowerCase()}.png`;
            flagImg.alt = `${currentCountry.name} flag`;
            flagImg.onerror = function() {
                this.src = `https://flagcdn.com/w320/${currentCountry.code.toLowerCase()}.svg`;
                this.onerror = function() {
                    this.style.display = 'none';
                    console.warn(`Flag not available for ${currentCountry.name} (${currentCountry.code})`);
                };
            };
        } else if (settings.questionFormat === 'countryName') {
            countryNameDisplay.style.display = 'block';
            displayedCountryName.textContent = currentCountry.name;
        }
    }
}

// Load a new question
function loadNewQuestion() {
    currentCountry = getRandomCountry();
    
    if (currentCountry === null) {
        // Round complete - save the round score
        if (roundTotalSeen > 0) {
            roundScores.push({
                round: currentRound,
                correct: roundCorrectCount,
                total: roundTotalSeen
            });
            updateRoundSummary();
        }
        
        // All rounds complete
        if (incorrectCountries.length === 0) {
            feedbackDiv.textContent = `Perfect! You got all ${countries.length} ${gameMode === 'country' ? 'countries' : 'capitals'} correct!`;
        } else {
            const remainingCount = incorrectCountries.length;
            const word = gameMode === 'country' 
                ? (remainingCount !== 1 ? 'countries' : 'country')
                : (remainingCount !== 1 ? 'capitals' : 'capital');
            feedbackDiv.textContent = `Round ${currentRound} complete! You have ${remainingCount} ${word} to practice. Click Next to continue.`;
        }
        feedbackDiv.className = 'feedback correct';
        answerInput.disabled = true;
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
        nextBtn.textContent = incorrectCountries.length > 0 ? 'Start Next Round' : 'Back to Menu';
        flagContainer.style.display = 'none';
        countryNameDisplay.style.display = 'none';
        return;
    }
    
    // Load question based on format
    loadQuestion();
    
    // Reset UI
    answerInput.value = '';
    answerInput.disabled = false;
    answerInput.focus();
    submitBtn.style.display = 'block';
    feedbackDiv.textContent = '';
    feedbackDiv.className = 'feedback';
    nextBtn.style.display = 'none';
    nextBtn.textContent = 'Next Question';
    
    // Show/hide answer format containers
    const settings = gameMode === 'country' ? countryQuizSettings : capitalQuizSettings;
    if (settings.answerFormat === 'typein') {
        typeinContainer.style.display = 'block';
        multichoiceContainer.style.display = 'none';
    } else {
        typeinContainer.style.display = 'none';
        multichoiceContainer.style.display = 'block';
        
        // Generate and display multi-choice options
        const correctAnswer = gameMode === 'country' ? currentCountry.name : currentCountry.capital;
        const options = generateMultiChoiceOptions(correctAnswer, gameMode === 'capital');
        displayMultiChoiceOptions(options, correctAnswer);
    }
}

// Normalize string for comparison (remove punctuation, extra spaces, and accents)
function normalizeString(str) {
    return str.toLowerCase()
        .normalize('NFD') // Decompose accented characters
        .replace(/[\u0300-\u036f]/g, '') // Remove accent marks
        .replace(/[.,;:!?'"]/g, '') // Remove punctuation
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
}

// Check country answer
function checkCountryAnswer() {
    const userAnswer = normalizeString(answerInput.value.trim());
    const correctCountry = normalizeString(currentCountry.name);
    
    // Check if answer matches the country name or any of its aliases
    const allCountryAnswers = [correctCountry];
    if (currentCountry.aliases) {
        currentCountry.aliases.forEach(alias => {
            allCountryAnswers.push(normalizeString(alias));
        });
    }
    
    const isCorrect = allCountryAnswers.includes(userAnswer);
    
    // Increment total seen
    totalSeen++;
    roundTotalSeen++;
    
    if (isCorrect) {
        // Correct answer
        correctCount++;
        roundCorrectCount++;
        
        // Remove from incorrect list if it was there
        if (incorrectCountries.includes(currentCountry.name)) {
            incorrectCountries = incorrectCountries.filter(name => name !== currentCountry.name);
        }
        
        feedbackDiv.textContent = `Correct! It's ${currentCountry.name}`;
        feedbackDiv.className = 'feedback correct';
        answerInput.disabled = true;
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    } else {
        // Wrong answer - add to incorrect list if not already there
        if (!incorrectCountries.includes(currentCountry.name)) {
            incorrectCountries.push(currentCountry.name);
        }
        
        feedbackDiv.textContent = `Incorrect! The correct answer is: ${currentCountry.name}`;
        feedbackDiv.className = 'feedback incorrect';
        answerInput.disabled = true;
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    }
    
    updateScoreDisplay();
    
    // Set flag to prevent immediate next trigger
    justSubmitted = true;
    setTimeout(() => {
        justSubmitted = false;
    }, 100);
}

// Check capital answer
function checkCapitalAnswer() {
    const userAnswer = normalizeString(answerInput.value.trim());
    const correctCapital = normalizeString(currentCountry.capital);
    
    const isCorrect = userAnswer === correctCapital;
    
    // Increment total seen
    totalSeen++;
    roundTotalSeen++;
    
    if (isCorrect) {
        // Correct answer
        correctCount++;
        roundCorrectCount++;
        
        // Remove from incorrect list if it was there
        if (incorrectCountries.includes(currentCountry.name)) {
            incorrectCountries = incorrectCountries.filter(name => name !== currentCountry.name);
        }
        
        feedbackDiv.textContent = `Correct! The capital of ${currentCountry.name} is ${currentCountry.capital}`;
        feedbackDiv.className = 'feedback correct';
        answerInput.disabled = true;
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    } else {
        // Wrong answer - add to incorrect list if not already there
        if (!incorrectCountries.includes(currentCountry.name)) {
            incorrectCountries.push(currentCountry.name);
        }
        
        feedbackDiv.textContent = `Incorrect! The capital of ${currentCountry.name} is: ${currentCountry.capital}`;
        feedbackDiv.className = 'feedback incorrect';
        answerInput.disabled = true;
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    }
    
    updateScoreDisplay();
    
    // Set flag to prevent immediate next trigger
    justSubmitted = true;
    setTimeout(() => {
        justSubmitted = false;
    }, 100);
}

// Check answer (routes to appropriate function)
function checkAnswer() {
    if (gameMode === 'country') {
        checkCountryAnswer();
    } else {
        checkCapitalAnswer();
    }
}

// Start country quiz
function startCountryQuiz() {
    loadCountryQuizSettings();
    gameMode = 'country';
    gameTitle.textContent = '🌍 Country Quiz';
    countries = getAvailableCountries(countryQuizSettings.geoguessrFilter);
    
    correctCount = 0;
    totalSeen = 0;
    roundCorrectCount = 0;
    roundTotalSeen = 0;
    usedCountries = [];
    incorrectCountries = [];
    currentRound = 1;
    roundScores = [];
    roundNumber.textContent = currentRound;
    updateScoreDisplay();
    showScreen('game');
    loadNewQuestion();
}

// Start capital quiz
function startCapitalQuiz() {
    loadCapitalQuizSettings();
    gameMode = 'capital';
    gameTitle.textContent = '🏛️ Capital Quiz';
    countries = getAvailableCountries(capitalQuizSettings.geoguessrFilter);
    
    correctCount = 0;
    totalSeen = 0;
    roundCorrectCount = 0;
    roundTotalSeen = 0;
    usedCountries = [];
    incorrectCountries = [];
    currentRound = 1;
    roundScores = [];
    roundNumber.textContent = currentRound;
    updateScoreDisplay();
    showScreen('game');
    loadNewQuestion();
}

// Event listeners for navigation
countryQuizBtn.addEventListener('click', () => showScreen('country-quiz-settings'));
capitalQuizBtn.addEventListener('click', () => showScreen('capital-quiz-settings'));
countryQuizBackBtn.addEventListener('click', () => showScreen('menu'));
capitalQuizBackBtn.addEventListener('click', () => showScreen('menu'));
countryQuizStartBtn.addEventListener('click', startCountryQuiz);
capitalQuizStartBtn.addEventListener('click', startCapitalQuiz);

menuBackBtn.addEventListener('click', () => {
    showScreen('menu');
    correctCount = 0;
    totalSeen = 0;
    roundCorrectCount = 0;
    roundTotalSeen = 0;
    usedCountries = [];
    incorrectCountries = [];
    currentRound = 1;
    roundScores = [];
    roundSummary.style.display = 'none';
    gameMode = null;
});

// Game event listeners
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', () => {
    if (nextBtn.textContent === 'Start Next Round') {
        // Start next round (round score already saved in loadNewQuestion)
        currentCountry = startNextRound();
        if (currentCountry === null) {
            // No more incorrect countries
            feedbackDiv.textContent = `Perfect! You've mastered all ${gameMode === 'country' ? 'countries' : 'capitals'}!`;
            feedbackDiv.className = 'feedback correct';
            nextBtn.textContent = 'Back to Menu';
            // Show round summary when game is complete
            updateRoundSummary();
            return;
        }
        // Load the first question of the new round
        loadQuestion();
        answerInput.value = '';
        answerInput.disabled = false;
        answerInput.focus();
        submitBtn.style.display = 'block';
        feedbackDiv.textContent = '';
        feedbackDiv.className = 'feedback';
        nextBtn.style.display = 'none';
        nextBtn.textContent = 'Next Question';
        roundSummary.style.display = 'none';
        
        // Show/hide answer format containers
        const settings = gameMode === 'country' ? countryQuizSettings : capitalQuizSettings;
        if (settings.answerFormat === 'typein') {
            typeinContainer.style.display = 'block';
            multichoiceContainer.style.display = 'none';
        } else {
            typeinContainer.style.display = 'none';
            multichoiceContainer.style.display = 'block';
            
            // Generate and display multi-choice options
            const correctAnswer = gameMode === 'country' ? currentCountry.name : currentCountry.capital;
            const options = generateMultiChoiceOptions(correctAnswer, gameMode === 'capital');
            displayMultiChoiceOptions(options, correctAnswer);
        }
    } else if (nextBtn.textContent === 'Back to Menu') {
        showScreen('menu');
    } else {
        loadNewQuestion();
    }
});

answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!answerInput.disabled) {
            e.preventDefault();
            e.stopPropagation();
            checkAnswer();
        } else if (nextBtn.style.display !== 'none') {
            // Next button is visible, trigger it
            e.preventDefault();
            e.stopPropagation();
            nextBtn.click();
        }
    }
});

// Global Enter key listener for next button (only when input doesn't have focus)
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && 
        nextBtn.style.display !== 'none' && 
        !justSubmitted) {
        // Check if we're in type-in mode and input is disabled
        const isTypeInMode = typeinContainer.style.display !== 'none';
        const isTypeInReady = isTypeInMode && answerInput.disabled;
        
        // Check if we're in multi-choice mode and buttons are disabled
        const isMultiChoiceMode = multichoiceContainer.style.display !== 'none';
        const isMultiChoiceReady = isMultiChoiceMode && 
            multichoiceOptionsDiv.querySelectorAll('.multichoice-btn:disabled').length > 0;
        
        if (isTypeInReady || isMultiChoiceReady) {
            e.preventDefault();
            nextBtn.click();
        }
    }
});

// Initialize
showScreen('menu');
