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

// List of countries with their flag codes (ISO 3166-1 alpha-2), aliases, capitals, and languages
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

// Settings state
let settings = {
    geoguessrFilter: false,
    requireCapitals: false,
    requireLanguages: false,
    requireDomains: false
};

// Get filtered countries based on settings
function getAvailableCountries() {
    let filtered = allCountries;
    
    if (settings.geoguessrFilter) {
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
let countries = getAvailableCountries();

// DOM elements
const menuScreen = document.getElementById('menu-screen');
const settingsScreen = document.getElementById('settings-screen');
const gameScreen = document.getElementById('game-screen');
const playBtn = document.getElementById('play-btn');
const settingsBtn = document.getElementById('settings-btn');
const backBtn = document.getElementById('back-btn');
const menuBackBtn = document.getElementById('menu-back-btn');
const geoguessrFilterCheckbox = document.getElementById('geoguessr-filter');
const requireCapitalsCheckbox = document.getElementById('require-capitals');
const requireLanguagesCheckbox = document.getElementById('require-languages');
const requireDomainsCheckbox = document.getElementById('require-domains');
const flagImg = document.getElementById('flag');
const countryInput = document.getElementById('country-input');
const capitalInput = document.getElementById('capital-input');
const languageInput = document.getElementById('language-input');
const domainInput = document.getElementById('domain-input');
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
    settingsScreen.style.display = screen === 'settings' ? 'block' : 'none';
    gameScreen.style.display = screen === 'game' ? 'block' : 'none';
}

// Initialize settings from checkboxes
function updateSettings() {
    settings.geoguessrFilter = geoguessrFilterCheckbox.checked;
    settings.requireCapitals = requireCapitalsCheckbox.checked;
    settings.requireLanguages = requireLanguagesCheckbox.checked;
    settings.requireDomains = requireDomainsCheckbox.checked;
    
    // Update countries list
    countries = getAvailableCountries();
    usedCountries = []; // Reset used countries when settings change
    
    // Update input visibility
    if (settings.requireCapitals) {
        capitalInput.style.display = 'block';
    } else {
        capitalInput.style.display = 'none';
    }
    
    if (settings.requireLanguages) {
        languageInput.style.display = 'block';
    } else {
        languageInput.style.display = 'none';
    }
    
    if (settings.requireDomains) {
        domainInput.style.display = 'block';
    } else {
        domainInput.style.display = 'none';
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

// Load a new flag
function loadNewFlag() {
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
            feedbackDiv.textContent = `Perfect! You got all ${countries.length} countries correct!`;
        } else {
            const remainingCount = incorrectCountries.length;
            feedbackDiv.textContent = `Round ${currentRound} complete! You have ${remainingCount} country${remainingCount !== 1 ? 'ies' : ''} to practice. Click Next to continue.`;
        }
        feedbackDiv.className = 'feedback correct';
        countryInput.disabled = true;
        capitalInput.disabled = true;
        languageInput.disabled = true;
        domainInput.disabled = true;
        submitBtn.disabled = true;
        nextBtn.style.display = 'block';
        nextBtn.textContent = incorrectCountries.length > 0 ? 'Start Next Round' : 'Back to Menu';
        flagImg.style.display = 'none';
        return;
    }
    
    flagImg.style.display = 'block';
    flagImg.src = `https://flagcdn.com/w320/${currentCountry.code.toLowerCase()}.png`;
    flagImg.alt = `${currentCountry.name} flag`;
    // Handle flag loading errors (for territories that might not have flags)
    flagImg.onerror = function() {
        this.src = `https://flagcdn.com/w320/${currentCountry.code.toLowerCase()}.svg`;
        this.onerror = function() {
            // If both PNG and SVG fail, show a placeholder or hide the image
            this.style.display = 'none';
            console.warn(`Flag not available for ${currentCountry.name} (${currentCountry.code})`);
        };
    };
    
    // Reset UI
    countryInput.value = '';
    capitalInput.value = '';
    languageInput.value = '';
    domainInput.value = '';
    countryInput.disabled = false;
    capitalInput.disabled = false;
    languageInput.disabled = false;
    domainInput.disabled = false;
    countryInput.focus();
    submitBtn.disabled = false;
    feedbackDiv.textContent = '';
    feedbackDiv.className = 'feedback';
    nextBtn.style.display = 'none';
    nextBtn.textContent = 'Next Flag';
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

// Check answer (case insensitive, supports aliases, accent-insensitive)
function checkAnswer() {
    const userCountryAnswer = normalizeString(countryInput.value.trim());
    const userCapitalAnswer = normalizeString(capitalInput.value.trim());
    const userLanguageAnswer = normalizeString(languageInput.value.trim());
    const userDomainAnswer = normalizeString(domainInput.value.trim());
    const correctCountry = normalizeString(currentCountry.name);
    const correctCapital = normalizeString(currentCountry.capital);
    const correctLanguages = currentCountry.languages ? currentCountry.languages.map(lang => normalizeString(lang)) : [];
    const correctDomain = currentCountry.domain ? normalizeString(currentCountry.domain) : '';
    
    // Check if country answer matches the country name or any of its aliases
    const allCountryAnswers = [correctCountry];
    if (currentCountry.aliases) {
        currentCountry.aliases.forEach(alias => {
            allCountryAnswers.push(normalizeString(alias));
        });
    }
    
    const isCountryCorrect = allCountryAnswers.includes(userCountryAnswer);
    const isCapitalCorrect = !settings.requireCapitals || userCapitalAnswer === correctCapital;
    const isLanguageCorrect = !settings.requireLanguages || correctLanguages.includes(userLanguageAnswer);
    // Domain is correct if: not required OR (user answer matches correct domain OR both are empty)
    const isDomainCorrect = !settings.requireDomains || 
        (userDomainAnswer === correctDomain || (userDomainAnswer === '' && correctDomain === ''));
    
    // Increment total seen
    totalSeen++;
    roundTotalSeen++;
    
    // All required fields must be correct
    if (isCountryCorrect && isCapitalCorrect && isLanguageCorrect && isDomainCorrect) {
        // Correct answer
        correctCount++;
        roundCorrectCount++;
        
        // Remove from incorrect list if it was there
        if (incorrectCountries.includes(currentCountry.name)) {
            incorrectCountries = incorrectCountries.filter(name => name !== currentCountry.name);
        }
        
        let feedbackMsg = `Correct! It's ${currentCountry.name}`;
        if (settings.requireCapitals) {
            feedbackMsg += `, capital: ${currentCountry.capital}`;
        }
        if (settings.requireLanguages && currentCountry.languages) {
            feedbackMsg += `, language: ${currentCountry.languages[0]}`;
        }
        if (settings.requireDomains && currentCountry.domain) {
            feedbackMsg += ` (domain: .${currentCountry.domain})`;
        }
        feedbackDiv.textContent = feedbackMsg;
        feedbackDiv.className = 'feedback correct';
        countryInput.disabled = true;
        capitalInput.disabled = true;
        languageInput.disabled = true;
        domainInput.disabled = true;
        submitBtn.disabled = true;
        nextBtn.style.display = 'block';
    } else {
        // Wrong answer - add to incorrect list if not already there
        if (!incorrectCountries.includes(currentCountry.name)) {
            incorrectCountries.push(currentCountry.name);
        }
        
        // Provide specific feedback showing which inputs were wrong and correct answers
        let feedbackMsg = 'Incorrect! ';
        const wrongDetails = [];
        
        if (!isCountryCorrect) {
            wrongDetails.push(`Country: ${currentCountry.name}`);
        }
        if (settings.requireCapitals && !isCapitalCorrect) {
            wrongDetails.push(`Capital: ${currentCountry.capital}`);
        }
        if (settings.requireLanguages && !isLanguageCorrect && currentCountry.languages) {
            wrongDetails.push(`Language: ${currentCountry.languages[0]}`);
        }
        if (settings.requireDomains && !isDomainCorrect) {
            if (currentCountry.domain) {
                wrongDetails.push(`Domain: .${currentCountry.domain}`);
            } else {
                wrongDetails.push(`Domain: (none)`);
            }
        }
        
        if (wrongDetails.length > 0) {
            feedbackMsg += wrongDetails.join(' | ');
        }
        
        // Also mention what was correct
        const correctParts = [];
        if (isCountryCorrect) correctParts.push('country');
        if (settings.requireCapitals && isCapitalCorrect) correctParts.push('capital');
        if (settings.requireLanguages && isLanguageCorrect) correctParts.push('language');
        if (settings.requireDomains && isDomainCorrect) correctParts.push('domain');
        
        if (correctParts.length > 0) {
            feedbackMsg += ` (${correctParts.join(', ')} ${correctParts.length === 1 ? 'was' : 'were'} correct)`;
        }
        
        feedbackDiv.textContent = feedbackMsg;
        feedbackDiv.className = 'feedback incorrect';
        countryInput.disabled = true;
        capitalInput.disabled = true;
        languageInput.disabled = true;
        domainInput.disabled = true;
        submitBtn.disabled = true;
        nextBtn.style.display = 'block';
    }
    
    updateScoreDisplay();
    
    // Set flag to prevent immediate next flag trigger
    justSubmitted = true;
    setTimeout(() => {
        justSubmitted = false;
    }, 100);
}

// Start game
function startGame() {
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
    updateSettings();
    showScreen('game');
    loadNewFlag();
}

// Event listeners for navigation
playBtn.addEventListener('click', startGame);
settingsBtn.addEventListener('click', () => showScreen('settings'));
backBtn.addEventListener('click', () => showScreen('menu'));
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
});

// Settings event listeners
geoguessrFilterCheckbox.addEventListener('change', updateSettings);
requireCapitalsCheckbox.addEventListener('change', updateSettings);
requireLanguagesCheckbox.addEventListener('change', updateSettings);
requireDomainsCheckbox.addEventListener('change', updateSettings);

// Game event listeners
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', () => {
    if (nextBtn.textContent === 'Start Next Round') {
        // Start next round (round score already saved in loadNewFlag)
        currentCountry = startNextRound();
        if (currentCountry === null) {
            // No more incorrect countries
            feedbackDiv.textContent = `Perfect! You've mastered all countries!`;
            feedbackDiv.className = 'feedback correct';
            nextBtn.textContent = 'Back to Menu';
            // Show round summary when game is complete
            updateRoundSummary();
            return;
        }
        // Load the first flag of the new round
        flagImg.style.display = 'block';
        flagImg.src = `https://flagcdn.com/w320/${currentCountry.code.toLowerCase()}.png`;
        flagImg.alt = `${currentCountry.name} flag`;
        // Reset error handler
        flagImg.onerror = function() {
            this.src = `https://flagcdn.com/w320/${currentCountry.code.toLowerCase()}.svg`;
            this.onerror = function() {
                this.style.display = 'none';
                console.warn(`Flag not available for ${currentCountry.name} (${currentCountry.code})`);
            };
        };
        countryInput.value = '';
        capitalInput.value = '';
        languageInput.value = '';
        domainInput.value = '';
        countryInput.disabled = false;
        capitalInput.disabled = false;
        languageInput.disabled = false;
        domainInput.disabled = false;
        countryInput.focus();
        submitBtn.disabled = false;
        feedbackDiv.textContent = '';
        feedbackDiv.className = 'feedback';
        nextBtn.style.display = 'none';
        nextBtn.textContent = 'Next Flag';
        roundSummary.style.display = 'none';
    } else if (nextBtn.textContent === 'Back to Menu') {
        showScreen('menu');
    } else {
        loadNewFlag();
    }
});

countryInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!countryInput.disabled) {
            e.preventDefault();
            e.stopPropagation();
            // Move focus to next required input or submit
            if (settings.requireCapitals) {
                capitalInput.focus();
            } else if (settings.requireLanguages) {
                languageInput.focus();
            } else if (settings.requireDomains) {
                domainInput.focus();
            } else {
                checkAnswer();
            }
        } else if (nextBtn.style.display !== 'none') {
            // Next button is visible, trigger it
            e.preventDefault();
            e.stopPropagation();
            nextBtn.click();
        }
    }
});

capitalInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!capitalInput.disabled) {
            e.preventDefault();
            e.stopPropagation();
            // Move focus to language input if required, then domain, otherwise submit
            if (settings.requireLanguages) {
                languageInput.focus();
            } else if (settings.requireDomains) {
                domainInput.focus();
            } else {
                checkAnswer();
            }
        } else if (nextBtn.style.display !== 'none') {
            // Next button is visible, trigger it
            e.preventDefault();
            e.stopPropagation();
            nextBtn.click();
        }
    }
});

languageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!languageInput.disabled) {
            e.preventDefault();
            e.stopPropagation();
            // Move focus to domain input if required, otherwise submit
            if (settings.requireDomains) {
                domainInput.focus();
            } else {
                checkAnswer();
            }
        } else if (nextBtn.style.display !== 'none') {
            // Next button is visible, trigger it
            e.preventDefault();
            e.stopPropagation();
            nextBtn.click();
        }
    }
});

domainInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!domainInput.disabled) {
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
        countryInput.disabled &&
        (!settings.requireCapitals || capitalInput.disabled) &&
        (!settings.requireLanguages || languageInput.disabled) &&
        (!settings.requireDomains || domainInput.disabled) &&
        !justSubmitted) {
        e.preventDefault();
        nextBtn.click();
    }
});

// Initialize
updateSettings();
showScreen('menu');
