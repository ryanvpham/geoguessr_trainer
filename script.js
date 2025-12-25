// GeoGuessr countries list
const geoguessrCountries = [
    'Albania', 'Andorra', 'Argentina', 'Australia', 'Austria', 'Bangladesh', 'Belgium', 'Bhutan',
    'Bolivia', 'Botswana', 'Brazil', 'Bulgaria', 'Cambodia', 'Canada', 'Chile', 'Colombia',
    'Croatia', 'Czechia', 'Denmark', 'Dominican Republic', 'Ecuador', 'Estonia', 'Eswatini',
    'Finland', 'France', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Guatemala', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan', 'Kenya',
    'Kyrgyzstan', 'Latvia', 'Lebanon', 'Lesotho', 'Lichtenstein', 'Lithuania', 'Luxembourg',
    'Malaysia', 'Mexico', 'Mongolia', 'Montenegro', 'Namibia', 'Netherlands', 'New Zealand',
    'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Palestine', 'Panama', 'Peru', 'Philippines',
    'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'San Marino', 'São Tomé and Príncipe',
    'Senegal', 'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea',
    'Spain', 'Sri Lanka', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Turkey', 'Tunisia',
    'Ukraine', 'Uganda', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Vietnam'
];

// List of countries with their flag codes (ISO 3166-1 alpha-2), aliases, capitals, and languages
const allCountries = [
    { name: 'Afghanistan', code: 'AF', capital: 'Kabul', languages: ['Pashto', 'Dari'] },
    { name: 'Albania', code: 'AL', capital: 'Tirana', languages: ['Albanian'] },
    { name: 'Algeria', code: 'DZ', capital: 'Algiers', languages: ['Arabic', 'Berber'] },
    { name: 'Andorra', code: 'AD', capital: 'Andorra la Vella', languages: ['Catalan'] },
    { name: 'Angola', code: 'AO', capital: 'Luanda', languages: ['Portuguese'] },
    { name: 'Antigua and Barbuda', code: 'AG', capital: "Saint John's", languages: ['English'] },
    { name: 'Argentina', code: 'AR', capital: 'Buenos Aires', languages: ['Spanish'] },
    { name: 'Armenia', code: 'AM', capital: 'Yerevan', languages: ['Armenian'] },
    { name: 'Australia', code: 'AU', capital: 'Canberra', languages: ['English'] },
    { name: 'Austria', code: 'AT', capital: 'Vienna', languages: ['German'] },
    { name: 'Azerbaijan', code: 'AZ', capital: 'Baku', languages: ['Azerbaijani'] },
    { name: 'Bahamas', code: 'BS', capital: 'Nassau', languages: ['English'] },
    { name: 'Bahrain', code: 'BH', capital: 'Manama', languages: ['Arabic'] },
    { name: 'Bangladesh', code: 'BD', capital: 'Dhaka', languages: ['Bengali'] },
    { name: 'Barbados', code: 'BB', capital: 'Bridgetown', languages: ['English'] },
    { name: 'Belarus', code: 'BY', capital: 'Minsk', languages: ['Belarusian', 'Russian'] },
    { name: 'Belgium', code: 'BE', capital: 'Brussels', languages: ['Dutch', 'French', 'German'] },
    { name: 'Belize', code: 'BZ', capital: 'Belmopan', languages: ['English'] },
    { name: 'Benin', code: 'BJ', capital: 'Porto-Novo', languages: ['French'] },
    { name: 'Bhutan', code: 'BT', capital: 'Thimphu', languages: ['Dzongkha'] },
    { name: 'Bolivia', code: 'BO', capital: 'Sucre', languages: ['Spanish', 'Quechua', 'Aymara'] },
    { name: 'Bosnia and Herzegovina', code: 'BA', capital: 'Sarajevo', languages: ['Bosnian', 'Serbian', 'Croatian'] },
    { name: 'Botswana', code: 'BW', capital: 'Gaborone', languages: ['English', 'Setswana'] },
    { name: 'Brazil', code: 'BR', capital: 'Brasília', languages: ['Portuguese'] },
    { name: 'Brunei', code: 'BN', capital: 'Bandar Seri Begawan', languages: ['Malay'] },
    { name: 'Bulgaria', code: 'BG', capital: 'Sofia', languages: ['Bulgarian'] },
    { name: 'Burkina Faso', code: 'BF', capital: 'Ouagadougou', languages: ['French'] },
    { name: 'Burundi', code: 'BI', capital: 'Gitega', languages: ['Kirundi', 'French'] },
    { name: 'Cambodia', code: 'KH', capital: 'Phnom Penh', languages: ['Khmer'] },
    { name: 'Cameroon', code: 'CM', capital: 'Yaoundé', languages: ['French', 'English'] },
    { name: 'Canada', code: 'CA', capital: 'Ottawa', languages: ['English', 'French'] },
    { name: 'Cape Verde', code: 'CV', capital: 'Praia', languages: ['Portuguese'] },
    { name: 'Central African Republic', code: 'CF', capital: 'Bangui', languages: ['French', 'Sango'] },
    { name: 'Chad', code: 'TD', capital: "N'Djamena", languages: ['French', 'Arabic'] },
    { name: 'Chile', code: 'CL', capital: 'Santiago', languages: ['Spanish'] },
    { name: 'China', code: 'CN', capital: 'Beijing', languages: ['Mandarin'], aliases: ['PRC', "People's Republic of China"] },
    { name: 'Colombia', code: 'CO', capital: 'Bogotá', languages: ['Spanish'] },
    { name: 'Comoros', code: 'KM', capital: 'Moroni', languages: ['Comorian', 'Arabic', 'French'] },
    { name: 'Congo', code: 'CG', capital: 'Brazzaville', languages: ['French'] },
    { name: 'Costa Rica', code: 'CR', capital: 'San José', languages: ['Spanish'] },
    { name: 'Croatia', code: 'HR', capital: 'Zagreb', languages: ['Croatian'] },
    { name: 'Cuba', code: 'CU', capital: 'Havana', languages: ['Spanish'] },
    { name: 'Cyprus', code: 'CY', capital: 'Nicosia', languages: ['Greek', 'Turkish'] },
    { name: 'Czech Republic', code: 'CZ', capital: 'Prague', languages: ['Czech'], aliases: ['Czechia', 'Czech'] },
    { name: 'Denmark', code: 'DK', capital: 'Copenhagen', languages: ['Danish'] },
    { name: 'Djibouti', code: 'DJ', capital: 'Djibouti', languages: ['French', 'Arabic'] },
    { name: 'Dominica', code: 'DM', capital: 'Roseau', languages: ['English'] },
    { name: 'Dominican Republic', code: 'DO', capital: 'Santo Domingo', languages: ['Spanish'] },
    { name: 'DR Congo', code: 'CD', capital: 'Kinshasa', languages: ['French'], aliases: ['Democratic Republic of the Congo', 'Congo-Kinshasa'] },
    { name: 'Ecuador', code: 'EC', capital: 'Quito', languages: ['Spanish'] },
    { name: 'Egypt', code: 'EG', capital: 'Cairo', languages: ['Arabic'] },
    { name: 'El Salvador', code: 'SV', capital: 'San Salvador', languages: ['Spanish'] },
    { name: 'Equatorial Guinea', code: 'GQ', capital: 'Malabo', languages: ['Spanish', 'French', 'Portuguese'] },
    { name: 'Eritrea', code: 'ER', capital: 'Asmara', languages: ['Tigrinya', 'Arabic', 'English'] },
    { name: 'Estonia', code: 'EE', capital: 'Tallinn', languages: ['Estonian'] },
    { name: 'Eswatini', code: 'SZ', capital: 'Mbabane', languages: ['Swati', 'English'], aliases: ['Swaziland'] },
    { name: 'Ethiopia', code: 'ET', capital: 'Addis Ababa', languages: ['Amharic'] },
    { name: 'Fiji', code: 'FJ', capital: 'Suva', languages: ['English', 'Fijian', 'Hindi'] },
    { name: 'Finland', code: 'FI', capital: 'Helsinki', languages: ['Finnish', 'Swedish'] },
    { name: 'France', code: 'FR', capital: 'Paris', languages: ['French'] },
    { name: 'Gabon', code: 'GA', capital: 'Libreville', languages: ['French'] },
    { name: 'Gambia', code: 'GM', capital: 'Banjul', languages: ['English'] },
    { name: 'Georgia', code: 'GE', capital: 'Tbilisi', languages: ['Georgian'] },
    { name: 'Germany', code: 'DE', capital: 'Berlin', languages: ['German'], aliases: ['Deutschland'] },
    { name: 'Ghana', code: 'GH', capital: 'Accra', languages: ['English'] },
    { name: 'Greece', code: 'GR', capital: 'Athens', languages: ['Greek'] },
    { name: 'Grenada', code: 'GD', capital: "Saint George's", languages: ['English'] },
    { name: 'Guatemala', code: 'GT', capital: 'Guatemala City', languages: ['Spanish'] },
    { name: 'Guinea', code: 'GN', capital: 'Conakry', languages: ['French'] },
    { name: 'Guinea-Bissau', code: 'GW', capital: 'Bissau', languages: ['Portuguese'] },
    { name: 'Guyana', code: 'GY', capital: 'Georgetown', languages: ['English'] },
    { name: 'Haiti', code: 'HT', capital: 'Port-au-Prince', languages: ['French', 'Haitian Creole'] },
    { name: 'Honduras', code: 'HN', capital: 'Tegucigalpa', languages: ['Spanish'] },
    { name: 'Hungary', code: 'HU', capital: 'Budapest', languages: ['Hungarian'] },
    { name: 'Iceland', code: 'IS', capital: 'Reykjavik', languages: ['Icelandic'] },
    { name: 'India', code: 'IN', capital: 'New Delhi', languages: ['Hindi', 'English'] },
    { name: 'Indonesia', code: 'ID', capital: 'Jakarta', languages: ['Indonesian'] },
    { name: 'Iran', code: 'IR', capital: 'Tehran', languages: ['Persian'], aliases: ['Persia'] },
    { name: 'Iraq', code: 'IQ', capital: 'Baghdad', languages: ['Arabic', 'Kurdish'] },
    { name: 'Ireland', code: 'IE', capital: 'Dublin', languages: ['Irish', 'English'], aliases: ['Eire', 'Republic of Ireland'] },
    { name: 'Israel', code: 'IL', capital: 'Jerusalem', languages: ['Hebrew', 'Arabic'] },
    { name: 'Ivory Coast', code: 'CI', capital: 'Yamoussoukro', languages: ['French'], aliases: ['Côte d\'Ivoire', 'Cote d\'Ivoire'] },
    { name: 'Italy', code: 'IT', capital: 'Rome', languages: ['Italian'] },
    { name: 'Jamaica', code: 'JM', capital: 'Kingston', languages: ['English'] },
    { name: 'Japan', code: 'JP', capital: 'Tokyo', languages: ['Japanese'] },
    { name: 'Jordan', code: 'JO', capital: 'Amman', languages: ['Arabic'] },
    { name: 'Kazakhstan', code: 'KZ', capital: 'Nur-Sultan', languages: ['Kazakh', 'Russian'] },
    { name: 'Kenya', code: 'KE', capital: 'Nairobi', languages: ['English', 'Swahili'] },
    { name: 'Kiribati', code: 'KI', capital: 'Tarawa', languages: ['English', 'Gilbertese'] },
    { name: 'Kosovo', code: 'XK', capital: 'Pristina', languages: ['Albanian', 'Serbian'] },
    { name: 'Kuwait', code: 'KW', capital: 'Kuwait City', languages: ['Arabic'] },
    { name: 'Kyrgyzstan', code: 'KG', capital: 'Bishkek', languages: ['Kyrgyz', 'Russian'] },
    { name: 'Laos', code: 'LA', capital: 'Vientiane', languages: ['Lao'], aliases: ['Lao'] },
    { name: 'Latvia', code: 'LV', capital: 'Riga', languages: ['Latvian'] },
    { name: 'Lebanon', code: 'LB', capital: 'Beirut', languages: ['Arabic', 'French'] },
    { name: 'Lesotho', code: 'LS', capital: 'Maseru', languages: ['Sesotho', 'English'] },
    { name: 'Liberia', code: 'LR', capital: 'Monrovia', languages: ['English'] },
    { name: 'Libya', code: 'LY', capital: 'Tripoli', languages: ['Arabic'] },
    { name: 'Liechtenstein', code: 'LI', capital: 'Vaduz', languages: ['German'] },
    { name: 'Lithuania', code: 'LT', capital: 'Vilnius', languages: ['Lithuanian'] },
    { name: 'Luxembourg', code: 'LU', capital: 'Luxembourg', languages: ['Luxembourgish', 'French', 'German'] },
    { name: 'Madagascar', code: 'MG', capital: 'Antananarivo', languages: ['Malagasy', 'French'] },
    { name: 'Malawi', code: 'MW', capital: 'Lilongwe', languages: ['English', 'Chichewa'] },
    { name: 'Malaysia', code: 'MY', capital: 'Kuala Lumpur', languages: ['Malay'] },
    { name: 'Maldives', code: 'MV', capital: 'Malé', languages: ['Dhivehi'] },
    { name: 'Mali', code: 'ML', capital: 'Bamako', languages: ['French'] },
    { name: 'Malta', code: 'MT', capital: 'Valletta', languages: ['Maltese', 'English'] },
    { name: 'Marshall Islands', code: 'MH', capital: 'Majuro', languages: ['English', 'Marshallese'] },
    { name: 'Mauritania', code: 'MR', capital: 'Nouakchott', languages: ['Arabic'] },
    { name: 'Mauritius', code: 'MU', capital: 'Port Louis', languages: ['English', 'French'] },
    { name: 'Mexico', code: 'MX', capital: 'Mexico City', languages: ['Spanish'] },
    { name: 'Micronesia', code: 'FM', capital: 'Palikir', languages: ['English'] },
    { name: 'Moldova', code: 'MD', capital: 'Chișinău', languages: ['Romanian'] },
    { name: 'Monaco', code: 'MC', capital: 'Monaco', languages: ['French'] },
    { name: 'Mongolia', code: 'MN', capital: 'Ulaanbaatar', languages: ['Mongolian'] },
    { name: 'Montenegro', code: 'ME', capital: 'Podgorica', languages: ['Montenegrin'] },
    { name: 'Morocco', code: 'MA', capital: 'Rabat', languages: ['Arabic', 'Berber'] },
    { name: 'Mozambique', code: 'MZ', capital: 'Maputo', languages: ['Portuguese'] },
    { name: 'Myanmar', code: 'MM', capital: 'Naypyidaw', languages: ['Burmese'], aliases: ['Burma'] },
    { name: 'Namibia', code: 'NA', capital: 'Windhoek', languages: ['English'] },
    { name: 'Nauru', code: 'NR', capital: 'Yaren', languages: ['English', 'Nauruan'] },
    { name: 'Nepal', code: 'NP', capital: 'Kathmandu', languages: ['Nepali'] },
    { name: 'Netherlands', code: 'NL', capital: 'Amsterdam', languages: ['Dutch'], aliases: ['Holland'] },
    { name: 'New Zealand', code: 'NZ', capital: 'Wellington', languages: ['English', 'Māori'] },
    { name: 'Nicaragua', code: 'NI', capital: 'Managua', languages: ['Spanish'] },
    { name: 'Niger', code: 'NE', capital: 'Niamey', languages: ['French'] },
    { name: 'Nigeria', code: 'NG', capital: 'Abuja', languages: ['English'] },
    { name: 'North Korea', code: 'KP', capital: 'Pyongyang', languages: ['Korean'], aliases: ['DPRK', "Democratic People's Republic of Korea", 'North Korea'] },
    { name: 'North Macedonia', code: 'MK', capital: 'Skopje', languages: ['Macedonian'], aliases: ['Macedonia'] },
    { name: 'Norway', code: 'NO', capital: 'Oslo', languages: ['Norwegian'] },
    { name: 'Oman', code: 'OM', capital: 'Muscat', languages: ['Arabic'] },
    { name: 'Pakistan', code: 'PK', capital: 'Islamabad', languages: ['Urdu', 'English'] },
    { name: 'Palau', code: 'PW', capital: 'Ngerulmud', languages: ['English', 'Palauan'] },
    { name: 'Palestine', code: 'PS', capital: 'East Jerusalem', languages: ['Arabic'] },
    { name: 'Panama', code: 'PA', capital: 'Panama City', languages: ['Spanish'] },
    { name: 'Papua New Guinea', code: 'PG', capital: 'Port Moresby', languages: ['English', 'Tok Pisin', 'Hiri Motu'] },
    { name: 'Paraguay', code: 'PY', capital: 'Asunción', languages: ['Spanish', 'Guaraní'] },
    { name: 'Peru', code: 'PE', capital: 'Lima', languages: ['Spanish', 'Quechua'] },
    { name: 'Philippines', code: 'PH', capital: 'Manila', languages: ['Filipino', 'English'] },
    { name: 'Poland', code: 'PL', capital: 'Warsaw', languages: ['Polish'] },
    { name: 'Portugal', code: 'PT', capital: 'Lisbon', languages: ['Portuguese'] },
    { name: 'Qatar', code: 'QA', capital: 'Doha', languages: ['Arabic'] },
    { name: 'Romania', code: 'RO', capital: 'Bucharest', languages: ['Romanian'] },
    { name: 'Russia', code: 'RU', capital: 'Moscow', languages: ['Russian'], aliases: ['Russian Federation', 'Russian'] },
    { name: 'Rwanda', code: 'RW', capital: 'Kigali', languages: ['Kinyarwanda', 'French', 'English'] },
    { name: 'Saint Kitts and Nevis', code: 'KN', capital: 'Basseterre', languages: ['English'] },
    { name: 'Saint Lucia', code: 'LC', capital: 'Castries', languages: ['English'] },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', capital: 'Kingstown', languages: ['English'] },
    { name: 'Samoa', code: 'WS', capital: 'Apia', languages: ['Samoan', 'English'] },
    { name: 'San Marino', code: 'SM', capital: 'San Marino', languages: ['Italian'] },
    { name: 'São Tomé and Príncipe', code: 'ST', capital: 'São Tomé', languages: ['Portuguese'] },
    { name: 'Saudi Arabia', code: 'SA', capital: 'Riyadh', languages: ['Arabic'] },
    { name: 'Senegal', code: 'SN', capital: 'Dakar', languages: ['French'] },
    { name: 'Serbia', code: 'RS', capital: 'Belgrade', languages: ['Serbian'] },
    { name: 'Seychelles', code: 'SC', capital: 'Victoria', languages: ['Seychellois Creole', 'English', 'French'] },
    { name: 'Sierra Leone', code: 'SL', capital: 'Freetown', languages: ['English'] },
    { name: 'Singapore', code: 'SG', capital: 'Singapore', languages: ['English', 'Malay', 'Mandarin', 'Tamil'] },
    { name: 'Slovakia', code: 'SK', capital: 'Bratislava', languages: ['Slovak'] },
    { name: 'Slovenia', code: 'SI', capital: 'Ljubljana', languages: ['Slovene'] },
    { name: 'Solomon Islands', code: 'SB', capital: 'Honiara', languages: ['English'] },
    { name: 'Somalia', code: 'SO', capital: 'Mogadishu', languages: ['Somali', 'Arabic'] },
    { name: 'South Africa', code: 'ZA', capital: 'Cape Town', languages: ['English', 'Afrikaans', 'Zulu', 'Xhosa'] },
    { name: 'South Korea', code: 'KR', capital: 'Seoul', languages: ['Korean'], aliases: ['Korea', 'Republic of Korea', 'ROK'] },
    { name: 'South Sudan', code: 'SS', capital: 'Juba', languages: ['English'] },
    { name: 'Spain', code: 'ES', capital: 'Madrid', languages: ['Spanish'] },
    { name: 'Sri Lanka', code: 'LK', capital: 'Colombo', languages: ['Sinhala', 'Tamil'] },
    { name: 'Sudan', code: 'SD', capital: 'Khartoum', languages: ['Arabic', 'English'] },
    { name: 'Suriname', code: 'SR', capital: 'Paramaribo', languages: ['Dutch'] },
    { name: 'Sweden', code: 'SE', capital: 'Stockholm', languages: ['Swedish'] },
    { name: 'Switzerland', code: 'CH', capital: 'Bern', languages: ['German', 'French', 'Italian', 'Romansh'] },
    { name: 'Syria', code: 'SY', capital: 'Damascus', languages: ['Arabic'] },
    { name: 'Taiwan', code: 'TW', capital: 'Taipei', languages: ['Mandarin'], aliases: ['Republic of China', 'ROC'] },
    { name: 'Tajikistan', code: 'TJ', capital: 'Dushanbe', languages: ['Tajik'] },
    { name: 'Tanzania', code: 'TZ', capital: 'Dodoma', languages: ['Swahili', 'English'] },
    { name: 'Thailand', code: 'TH', capital: 'Bangkok', languages: ['Thai'] },
    { name: 'Timor-Leste', code: 'TL', capital: 'Dili', languages: ['Tetum', 'Portuguese'], aliases: ['East Timor'] },
    { name: 'Togo', code: 'TG', capital: 'Lomé', languages: ['French'] },
    { name: 'Tonga', code: 'TO', capital: "Nuku'alofa", languages: ['Tongan', 'English'] },
    { name: 'Trinidad and Tobago', code: 'TT', capital: 'Port of Spain', languages: ['English'] },
    { name: 'Tunisia', code: 'TN', capital: 'Tunis', languages: ['Arabic'] },
    { name: 'Turkey', code: 'TR', capital: 'Ankara', languages: ['Turkish'] },
    { name: 'Turkmenistan', code: 'TM', capital: 'Ashgabat', languages: ['Turkmen'] },
    { name: 'Tuvalu', code: 'TV', capital: 'Funafuti', languages: ['Tuvaluan', 'English'] },
    { name: 'Uganda', code: 'UG', capital: 'Kampala', languages: ['English', 'Swahili'] },
    { name: 'Ukraine', code: 'UA', capital: 'Kyiv', languages: ['Ukrainian'] },
    { name: 'United Arab Emirates', code: 'AE', capital: 'Abu Dhabi', languages: ['Arabic'], aliases: ['UAE'] },
    { name: 'United Kingdom', code: 'GB', capital: 'London', languages: ['English'], aliases: ['UK', 'Great Britain', 'Britain', 'England'] },
    { name: 'United States', code: 'US', capital: 'Washington, D.C.', languages: ['English'], aliases: ['USA', 'US', 'America', 'United States of America'] },
    { name: 'Uruguay', code: 'UY', capital: 'Montevideo', languages: ['Spanish'] },
    { name: 'Uzbekistan', code: 'UZ', capital: 'Tashkent', languages: ['Uzbek'] },
    { name: 'Vanuatu', code: 'VU', capital: 'Port Vila', languages: ['Bislama', 'English', 'French'] },
    { name: 'Vatican City', code: 'VA', capital: 'Vatican City', languages: ['Italian', 'Latin'], aliases: ['Holy See'] },
    { name: 'Venezuela', code: 'VE', capital: 'Caracas', languages: ['Spanish'] },
    { name: 'Vietnam', code: 'VN', capital: 'Hanoi', languages: ['Vietnamese'] },
    { name: 'Yemen', code: 'YE', capital: 'Sana\'a', languages: ['Arabic'] },
    { name: 'Zambia', code: 'ZM', capital: 'Lusaka', languages: ['English'] },
    { name: 'Zimbabwe', code: 'ZW', capital: 'Harare', languages: ['English', 'Shona', 'Ndebele'] },
];

// Settings state
let settings = {
    geoguessrFilter: false,
    requireCapitals: false,
    requireLanguages: false
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
        
        // Note: Greenland is not in our countries list (it's a territory of Denmark)
        // So we'll skip it in the filter
        
        filtered = allCountries.filter(country => {
            const countryName = country.name;
            const aliases = country.aliases || [];
            
            return geoguessrCountries.some(ggName => {
                // Skip Greenland as it's not a country in our list
                if (ggName === 'Greenland') return false;
                
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
const flagImg = document.getElementById('flag');
const countryInput = document.getElementById('country-input');
const capitalInput = document.getElementById('capital-input');
const languageInput = document.getElementById('language-input');
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
        submitBtn.disabled = true;
        nextBtn.style.display = 'block';
        nextBtn.textContent = incorrectCountries.length > 0 ? 'Start Next Round' : 'Back to Menu';
        flagImg.style.display = 'none';
        return;
    }
    
    flagImg.style.display = 'block';
    flagImg.src = `https://flagcdn.com/w320/${currentCountry.code.toLowerCase()}.png`;
    flagImg.alt = `${currentCountry.name} flag`;
    
    // Reset UI
    countryInput.value = '';
    capitalInput.value = '';
    languageInput.value = '';
    countryInput.disabled = false;
    capitalInput.disabled = false;
    languageInput.disabled = false;
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
    const correctCountry = normalizeString(currentCountry.name);
    const correctCapital = normalizeString(currentCountry.capital);
    const correctLanguages = currentCountry.languages ? currentCountry.languages.map(lang => normalizeString(lang)) : [];
    
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
    
    // Increment total seen
    totalSeen++;
    roundTotalSeen++;
    
    // All required fields must be correct
    if (isCountryCorrect && isCapitalCorrect && isLanguageCorrect) {
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
        feedbackDiv.textContent = feedbackMsg;
        feedbackDiv.className = 'feedback correct';
        countryInput.disabled = true;
        capitalInput.disabled = true;
        languageInput.disabled = true;
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
        
        if (wrongDetails.length > 0) {
            feedbackMsg += wrongDetails.join(' | ');
        }
        
        // Also mention what was correct
        const correctParts = [];
        if (isCountryCorrect) correctParts.push('country');
        if (settings.requireCapitals && isCapitalCorrect) correctParts.push('capital');
        if (settings.requireLanguages && isLanguageCorrect) correctParts.push('language');
        
        if (correctParts.length > 0) {
            feedbackMsg += ` (${correctParts.join(', ')} ${correctParts.length === 1 ? 'was' : 'were'} correct)`;
        }
        
        feedbackDiv.textContent = feedbackMsg;
        feedbackDiv.className = 'feedback incorrect';
        countryInput.disabled = true;
        capitalInput.disabled = true;
        languageInput.disabled = true;
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
        countryInput.value = '';
        capitalInput.value = '';
        languageInput.value = '';
        countryInput.disabled = false;
        capitalInput.disabled = false;
        languageInput.disabled = false;
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
            } else {
                checkAnswer();
            }
        } else if (nextBtn.style.display !== 'none') {
            // Next button is visible, trigger it
            e.preventDefault();
            e.stopPropagation();
            loadNewFlag();
        }
    }
});

capitalInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!capitalInput.disabled) {
            e.preventDefault();
            e.stopPropagation();
            // Move focus to language input if required, otherwise submit
            if (settings.requireLanguages) {
                languageInput.focus();
            } else {
                checkAnswer();
            }
        } else if (nextBtn.style.display !== 'none') {
            // Next button is visible, trigger it
            e.preventDefault();
            e.stopPropagation();
            loadNewFlag();
        }
    }
});

languageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!languageInput.disabled) {
            e.preventDefault();
            e.stopPropagation();
            checkAnswer();
        } else if (nextBtn.style.display !== 'none') {
            // Next button is visible, trigger it
            e.preventDefault();
            e.stopPropagation();
            loadNewFlag();
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
        !justSubmitted) {
        e.preventDefault();
        loadNewFlag();
    }
});

// Initialize
updateSettings();
showScreen('menu');
