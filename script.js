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

// List of countries with their flag codes (ISO 3166-1 alpha-2), aliases, and capitals
const allCountries = [
    { name: 'Afghanistan', code: 'AF', capital: 'Kabul', domain: 'af' },
    { name: 'Albania', code: 'AL', capital: 'Tirana', domain: 'al' },
    { name: 'Algeria', code: 'DZ', capital: 'Algiers', domain: 'dz' },
    { name: 'Andorra', code: 'AD', capital: 'Andorra la Vella', domain: 'ad' },
    { name: 'Angola', code: 'AO', capital: 'Luanda', domain: 'ao' },
    { name: 'Antigua and Barbuda', code: 'AG', capital: "Saint John's" },
    { name: 'Argentina', code: 'AR', capital: 'Buenos Aires', domain: 'ar' },
    { name: 'Armenia', code: 'AM', capital: 'Yerevan', domain: 'am' },
    { name: 'Australia', code: 'AU', capital: 'Canberra', domain: 'au' },
    { name: 'Austria', code: 'AT', capital: 'Vienna', domain: 'at' },
    { name: 'Azerbaijan', code: 'AZ', capital: 'Baku', domain: 'az' },
    { name: 'Bahamas', code: 'BS', capital: 'Nassau', domain: 'bs' },
    { name: 'Bahrain', code: 'BH', capital: 'Manama', domain: 'bh' },
    { name: 'Bangladesh', code: 'BD', capital: 'Dhaka', domain: 'bd' },
    { name: 'Barbados', code: 'BB', capital: 'Bridgetown', domain: 'bb' },
    { name: 'Belarus', code: 'BY', capital: 'Minsk', domain: 'by' },
    { name: 'Belgium', code: 'BE', capital: 'Brussels', domain: 'be' },
    { name: 'Belize', code: 'BZ', capital: 'Belmopan', domain: 'bz' },
    { name: 'Benin', code: 'BJ', capital: 'Porto-Novo', domain: 'bj' },
    { name: 'Bhutan', code: 'BT', capital: 'Thimphu', domain: 'bt' },
    { name: 'Bolivia', code: 'BO', capital: 'Sucre', domain: 'bo' },
    { name: 'Bosnia and Herzegovina', code: 'BA', capital: 'Sarajevo', domain: 'ba' },
    { name: 'Botswana', code: 'BW', capital: 'Gaborone', domain: 'bw' },
    { name: 'Brazil', code: 'BR', capital: 'Brasília', domain: 'br' },
    { name: 'Brunei', code: 'BN', capital: 'Bandar Seri Begawan', domain: 'bn' },
    { name: 'Bulgaria', code: 'BG', capital: 'Sofia', domain: 'bg' },
    { name: 'Burkina Faso', code: 'BF', capital: 'Ouagadougou', domain: 'bf' },
    { name: 'Burundi', code: 'BI', capital: 'Gitega', domain: 'bi' },
    { name: 'Cambodia', code: 'KH', capital: 'Phnom Penh', domain: 'kh' },
    { name: 'Cameroon', code: 'CM', capital: 'Yaoundé', domain: 'cm' },
    { name: 'Canada', code: 'CA', capital: 'Ottawa', domain: 'ca' },
    { name: 'Cape Verde', code: 'CV', capital: 'Praia', domain: 'cv' },
    { name: 'Central African Republic', code: 'CF', capital: 'Bangui', domain: 'cf' },
    { name: 'Chad', code: 'TD', capital: "N'Djamena" },
    { name: 'Chile', code: 'CL', capital: 'Santiago', domain: 'cl' },
    { name: 'China', code: 'CN', capital: 'Beijing', domain: 'cn', aliases: ['PRC', "People's Republic of China"] },
    { name: 'Colombia', code: 'CO', capital: 'Bogotá', domain: 'co' },
    { name: 'Comoros', code: 'KM', capital: 'Moroni', domain: 'km' },
    { name: 'Congo', code: 'CG', capital: 'Brazzaville', domain: 'cg' },
    { name: 'Costa Rica', code: 'CR', capital: 'San José', domain: 'cr' },
    { name: 'Croatia', code: 'HR', capital: 'Zagreb', domain: 'hr' },
    { name: 'Cuba', code: 'CU', capital: 'Havana', domain: 'cu' },
    { name: 'Cyprus', code: 'CY', capital: 'Nicosia', domain: 'cy' },
    { name: 'Czech Republic', code: 'CZ', capital: 'Prague', domain: 'cz', aliases: ['Czechia', 'Czech'] },
    { name: 'Denmark', code: 'DK', capital: 'Copenhagen', domain: 'dk' },
    { name: 'Djibouti', code: 'DJ', capital: 'Djibouti', domain: 'dj' },
    { name: 'Dominica', code: 'DM', capital: 'Roseau', domain: 'dm' },
    { name: 'Dominican Republic', code: 'DO', capital: 'Santo Domingo', domain: 'do' },
    { name: 'DR Congo', code: 'CD', capital: 'Kinshasa', domain: 'cd', aliases: ['Democratic Republic of the Congo', 'Congo-Kinshasa'] },
    { name: 'Ecuador', code: 'EC', capital: 'Quito', domain: 'ec' },
    { name: 'Egypt', code: 'EG', capital: 'Cairo', domain: 'eg' },
    { name: 'El Salvador', code: 'SV', capital: 'San Salvador', domain: 'sv' },
    { name: 'Equatorial Guinea', code: 'GQ', capital: 'Malabo', domain: 'gq' },
    { name: 'Eritrea', code: 'ER', capital: 'Asmara', domain: 'er' },
    { name: 'Estonia', code: 'EE', capital: 'Tallinn', domain: 'ee' },
    { name: 'Eswatini', code: 'SZ', capital: 'Mbabane', domain: 'sz', aliases: ['Swaziland'] },
    { name: 'Ethiopia', code: 'ET', capital: 'Addis Ababa', domain: 'et' },
    { name: 'Fiji', code: 'FJ', capital: 'Suva', domain: 'fj' },
    { name: 'Finland', code: 'FI', capital: 'Helsinki', domain: 'fi' },
    { name: 'France', code: 'FR', capital: 'Paris', domain: 'fr' },
    { name: 'Gabon', code: 'GA', capital: 'Libreville', domain: 'ga' },
    { name: 'Gambia', code: 'GM', capital: 'Banjul', domain: 'gm' },
    { name: 'Georgia', code: 'GE', capital: 'Tbilisi', domain: 'ge' },
    { name: 'Germany', code: 'DE', capital: 'Berlin', domain: 'de', aliases: ['Deutschland'] },
    { name: 'Ghana', code: 'GH', capital: 'Accra', domain: 'gh' },
    { name: 'Greece', code: 'GR', capital: 'Athens', domain: 'gr' },
    { name: 'Grenada', code: 'GD', capital: "Saint George's" },
    { name: 'Guatemala', code: 'GT', capital: 'Guatemala City', domain: 'gt' },
    { name: 'Guinea', code: 'GN', capital: 'Conakry', domain: 'gn' },
    { name: 'Guinea-Bissau', code: 'GW', capital: 'Bissau', domain: 'gw' },
    { name: 'Guyana', code: 'GY', capital: 'Georgetown', domain: 'gy' },
    { name: 'Haiti', code: 'HT', capital: 'Port-au-Prince', domain: 'ht' },
    { name: 'Honduras', code: 'HN', capital: 'Tegucigalpa', domain: 'hn' },
    { name: 'Hungary', code: 'HU', capital: 'Budapest', domain: 'hu' },
    { name: 'Iceland', code: 'IS', capital: 'Reykjavik', domain: 'is' },
    { name: 'India', code: 'IN', capital: 'New Delhi', domain: 'in' },
    { name: 'Indonesia', code: 'ID', capital: 'Jakarta', domain: 'id' },
    { name: 'Iran', code: 'IR', capital: 'Tehran', domain: 'ir', aliases: ['Persia'] },
    { name: 'Iraq', code: 'IQ', capital: 'Baghdad', domain: 'iq' },
    { name: 'Ireland', code: 'IE', capital: 'Dublin', domain: 'ie', aliases: ['Eire', 'Republic of Ireland'] },
    { name: 'Israel', code: 'IL', capital: 'Jerusalem', domain: 'il' },
    { name: 'Ivory Coast', code: 'CI', capital: 'Yamoussoukro', domain: 'ci', aliases: ['Côte d\'Ivoire', 'Cote d\'Ivoire'] },
    { name: 'Italy', code: 'IT', capital: 'Rome', domain: 'it' },
    { name: 'Jamaica', code: 'JM', capital: 'Kingston', domain: 'jm' },
    { name: 'Japan', code: 'JP', capital: 'Tokyo', domain: 'jp' },
    { name: 'Jordan', code: 'JO', capital: 'Amman', domain: 'jo' },
    { name: 'Kazakhstan', code: 'KZ', capital: 'Nur-Sultan', domain: 'kz' },
    { name: 'Kenya', code: 'KE', capital: 'Nairobi', domain: 'ke' },
    { name: 'Kiribati', code: 'KI', capital: 'Tarawa', domain: 'ki' },
    { name: 'Kosovo', code: 'XK', capital: 'Pristina', domain: 'xk' },
    { name: 'Kuwait', code: 'KW', capital: 'Kuwait City', domain: 'kw' },
    { name: 'Kyrgyzstan', code: 'KG', capital: 'Bishkek', domain: 'kg' },
    { name: 'Laos', code: 'LA', capital: 'Vientiane', domain: 'la', aliases: ['Lao'] },
    { name: 'Latvia', code: 'LV', capital: 'Riga', domain: 'lv' },
    { name: 'Lebanon', code: 'LB', capital: 'Beirut', domain: 'lb' },
    { name: 'Lesotho', code: 'LS', capital: 'Maseru', domain: 'ls' },
    { name: 'Liberia', code: 'LR', capital: 'Monrovia', domain: 'lr' },
    { name: 'Libya', code: 'LY', capital: 'Tripoli', domain: 'ly' },
    { name: 'Liechtenstein', code: 'LI', capital: 'Vaduz', domain: 'li' },
    { name: 'Lithuania', code: 'LT', capital: 'Vilnius', domain: 'lt' },
    { name: 'Luxembourg', code: 'LU', capital: 'Luxembourg', domain: 'lu' },
    { name: 'Madagascar', code: 'MG', capital: 'Antananarivo', domain: 'mg' },
    { name: 'Malawi', code: 'MW', capital: 'Lilongwe', domain: 'mw' },
    { name: 'Malaysia', code: 'MY', capital: 'Kuala Lumpur', domain: 'my' },
    { name: 'Maldives', code: 'MV', capital: 'Malé', domain: 'mv' },
    { name: 'Mali', code: 'ML', capital: 'Bamako', domain: 'ml' },
    { name: 'Malta', code: 'MT', capital: 'Valletta', domain: 'mt' },
    { name: 'Marshall Islands', code: 'MH', capital: 'Majuro', domain: 'mh' },
    { name: 'Mauritania', code: 'MR', capital: 'Nouakchott', domain: 'mr' },
    { name: 'Mauritius', code: 'MU', capital: 'Port Louis', domain: 'mu' },
    { name: 'Mexico', code: 'MX', capital: 'Mexico City', domain: 'mx' },
    { name: 'Micronesia', code: 'FM', capital: 'Palikir', domain: 'fm' },
    { name: 'Moldova', code: 'MD', capital: 'Chișinău', domain: 'md' },
    { name: 'Monaco', code: 'MC', capital: 'Monaco', domain: 'mc' },
    { name: 'Mongolia', code: 'MN', capital: 'Ulaanbaatar', domain: 'mn' },
    { name: 'Montenegro', code: 'ME', capital: 'Podgorica', domain: 'me' },
    { name: 'Morocco', code: 'MA', capital: 'Rabat', domain: 'ma' },
    { name: 'Mozambique', code: 'MZ', capital: 'Maputo', domain: 'mz' },
    { name: 'Myanmar', code: 'MM', capital: 'Naypyidaw', domain: 'mm', aliases: ['Burma'] },
    { name: 'Namibia', code: 'NA', capital: 'Windhoek', domain: 'na' },
    { name: 'Nauru', code: 'NR', capital: 'Yaren', domain: 'nr' },
    { name: 'Nepal', code: 'NP', capital: 'Kathmandu', domain: 'np' },
    { name: 'Netherlands', code: 'NL', capital: 'Amsterdam', domain: 'nl', aliases: ['Holland'] },
    { name: 'New Zealand', code: 'NZ', capital: 'Wellington', domain: 'nz' },
    { name: 'Nicaragua', code: 'NI', capital: 'Managua', domain: 'ni' },
    { name: 'Niger', code: 'NE', capital: 'Niamey', domain: 'ne' },
    { name: 'Nigeria', code: 'NG', capital: 'Abuja', domain: 'ng' },
    { name: 'North Korea', code: 'KP', capital: 'Pyongyang', domain: 'kp', aliases: ['DPRK', "Democratic People's Republic of Korea", 'North Korea'] },
    { name: 'North Macedonia', code: 'MK', capital: 'Skopje', domain: 'mk', aliases: ['Macedonia'] },
    { name: 'Norway', code: 'NO', capital: 'Oslo', domain: 'no' },
    { name: 'Oman', code: 'OM', capital: 'Muscat', domain: 'om' },
    { name: 'Pakistan', code: 'PK', capital: 'Islamabad', domain: 'pk' },
    { name: 'Palau', code: 'PW', capital: 'Ngerulmud', domain: 'pw' },
    { name: 'Palestine', code: 'PS', capital: 'East Jerusalem', domain: 'ps' },
    { name: 'Panama', code: 'PA', capital: 'Panama City', domain: 'pa' },
    { name: 'Papua New Guinea', code: 'PG', capital: 'Port Moresby', domain: 'pg' },
    { name: 'Paraguay', code: 'PY', capital: 'Asunción', domain: 'py' },
    { name: 'Peru', code: 'PE', capital: 'Lima', domain: 'pe' },
    { name: 'Philippines', code: 'PH', capital: 'Manila', domain: 'ph' },
    { name: 'Poland', code: 'PL', capital: 'Warsaw', domain: 'pl' },
    { name: 'Portugal', code: 'PT', capital: 'Lisbon', domain: 'pt' },
    { name: 'Qatar', code: 'QA', capital: 'Doha', domain: 'qa' },
    { name: 'Romania', code: 'RO', capital: 'Bucharest', domain: 'ro' },
    { name: 'Russia', code: 'RU', capital: 'Moscow', domain: 'ru', aliases: ['Russian Federation', 'Russian'] },
    { name: 'Rwanda', code: 'RW', capital: 'Kigali', domain: 'rw' },
    { name: 'Saint Kitts and Nevis', code: 'KN', capital: 'Basseterre', domain: 'kn' },
    { name: 'Saint Lucia', code: 'LC', capital: 'Castries', domain: 'lc' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', capital: 'Kingstown', domain: 'vc' },
    { name: 'Samoa', code: 'WS', capital: 'Apia', domain: 'ws' },
    { name: 'San Marino', code: 'SM', capital: 'San Marino', domain: 'sm' },
    { name: 'São Tomé and Príncipe', code: 'ST', capital: 'São Tomé', domain: 'st' },
    { name: 'Saudi Arabia', code: 'SA', capital: 'Riyadh', domain: 'sa' },
    { name: 'Senegal', code: 'SN', capital: 'Dakar', domain: 'sn' },
    { name: 'Serbia', code: 'RS', capital: 'Belgrade', domain: 'rs' },
    { name: 'Seychelles', code: 'SC', capital: 'Victoria', domain: 'sc' },
    { name: 'Sierra Leone', code: 'SL', capital: 'Freetown', domain: 'sl' },
    { name: 'Singapore', code: 'SG', capital: 'Singapore', domain: 'sg' },
    { name: 'Slovakia', code: 'SK', capital: 'Bratislava', domain: 'sk' },
    { name: 'Slovenia', code: 'SI', capital: 'Ljubljana', domain: 'si' },
    { name: 'Solomon Islands', code: 'SB', capital: 'Honiara', domain: 'sb' },
    { name: 'Somalia', code: 'SO', capital: 'Mogadishu', domain: 'so' },
    { name: 'South Africa', code: 'ZA', capital: 'Cape Town', domain: 'za' },
    { name: 'South Korea', code: 'KR', capital: 'Seoul', domain: 'kr', aliases: ['Korea', 'Republic of Korea', 'ROK'] },
    { name: 'South Sudan', code: 'SS', capital: 'Juba', domain: 'ss' },
    { name: 'Spain', code: 'ES', capital: 'Madrid', domain: 'es' },
    { name: 'Sri Lanka', code: 'LK', capital: 'Colombo', domain: 'lk' },
    { name: 'Sudan', code: 'SD', capital: 'Khartoum', domain: 'sd' },
    { name: 'Suriname', code: 'SR', capital: 'Paramaribo', domain: 'sr' },
    { name: 'Sweden', code: 'SE', capital: 'Stockholm', domain: 'se' },
    { name: 'Switzerland', code: 'CH', capital: 'Bern', domain: 'ch' },
    { name: 'Syria', code: 'SY', capital: 'Damascus', domain: 'sy' },
    { name: 'Taiwan', code: 'TW', capital: 'Taipei', domain: 'tw', aliases: ['Republic of China', 'ROC'] },
    { name: 'Tajikistan', code: 'TJ', capital: 'Dushanbe', domain: 'tj' },
    { name: 'Tanzania', code: 'TZ', capital: 'Dodoma', domain: 'tz' },
    { name: 'Thailand', code: 'TH', capital: 'Bangkok', domain: 'th' },
    { name: 'Timor-Leste', code: 'TL', capital: 'Dili', domain: 'tl', aliases: ['East Timor'] },
    { name: 'Togo', code: 'TG', capital: 'Lomé', domain: 'tg' },
    { name: 'Tonga', code: 'TO', capital: "Nuku'alofa" },
    { name: 'Trinidad and Tobago', code: 'TT', capital: 'Port of Spain', domain: 'tt' },
    { name: 'Tunisia', code: 'TN', capital: 'Tunis', domain: 'tn' },
    { name: 'Turkey', code: 'TR', capital: 'Ankara', domain: 'tr' },
    { name: 'Turkmenistan', code: 'TM', capital: 'Ashgabat', domain: 'tm' },
    { name: 'Tuvalu', code: 'TV', capital: 'Funafuti', domain: 'tv' },
    { name: 'Uganda', code: 'UG', capital: 'Kampala', domain: 'ug' },
    { name: 'Ukraine', code: 'UA', capital: 'Kyiv', domain: 'ua' },
    { name: 'United Arab Emirates', code: 'AE', capital: 'Abu Dhabi', domain: 'ae', aliases: ['UAE'] },
    { name: 'United Kingdom', code: 'GB', capital: 'London', domain: 'uk', aliases: ['UK', 'Great Britain', 'Britain', 'England'] },
    { name: 'United States', code: 'US', capital: 'Washington, D.C.', domain: 'us', aliases: ['USA', 'US', 'America', 'United States of America'] },
    { name: 'Uruguay', code: 'UY', capital: 'Montevideo', domain: 'uy' },
    { name: 'Uzbekistan', code: 'UZ', capital: 'Tashkent', domain: 'uz' },
    { name: 'Vanuatu', code: 'VU', capital: 'Port Vila', domain: 'vu' },
    { name: 'Vatican City', code: 'VA', capital: 'Vatican City', domain: 'va', aliases: ['Holy See'] },
    { name: 'Venezuela', code: 'VE', capital: 'Caracas', domain: 've' },
    { name: 'Vietnam', code: 'VN', capital: 'Hanoi', domain: 'vn' },
    { name: 'Yemen', code: 'YE', capital: 'Sana\'a' },
    { name: 'Zambia', code: 'ZM', capital: 'Lusaka', domain: 'zm' },
    { name: 'Zimbabwe', code: 'ZW', capital: 'Harare', domain: 'zw' },
];

// Settings state
let settings = {
    geoguessrFilter: false,
    requireCapitals: false,
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
const requireDomainsCheckbox = document.getElementById('require-domains');
const flagImg = document.getElementById('flag');
const countryInput = document.getElementById('country-input');
const capitalInput = document.getElementById('capital-input');
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
    settings.requireDomains = requireDomainsCheckbox.checked;
    
    // Update countries list
    countries = getAvailableCountries();
    usedCountries = []; // Reset used countries when settings change
    
    // Update capital input visibility
    if (settings.requireCapitals) {
        capitalInput.style.display = 'block';
    } else {
        capitalInput.style.display = 'none';
    }
    
    // Update domain input visibility
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
    
    // Reset UI
    countryInput.value = '';
    capitalInput.value = '';
    domainInput.value = '';
    countryInput.disabled = false;
    capitalInput.disabled = false;
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
    const userDomainAnswer = normalizeString(domainInput.value.trim());
    const correctCountry = normalizeString(currentCountry.name);
    const correctCapital = normalizeString(currentCountry.capital);
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
    // Domain is correct if: not required OR (user answer matches correct domain OR both are empty)
    const isDomainCorrect = !settings.requireDomains || 
        (userDomainAnswer === correctDomain || (userDomainAnswer === '' && correctDomain === ''));
    
    // Increment total seen
    totalSeen++;
    roundTotalSeen++;
    
    // All required fields must be correct
    if (isCountryCorrect && isCapitalCorrect && isDomainCorrect) {
        // Correct answer
        correctCount++;
        roundCorrectCount++;
        
        // Remove from incorrect list if it was there
        if (incorrectCountries.includes(currentCountry.name)) {
            incorrectCountries = incorrectCountries.filter(name => name !== currentCountry.name);
        }
        
        let feedbackMsg = `Correct! It's ${currentCountry.name}`;
        if (settings.requireCapitals) {
            feedbackMsg += ` and the capital is ${currentCountry.capital}`;
        }
        if (settings.requireDomains && currentCountry.domain) {
            feedbackMsg += ` (domain: .${currentCountry.domain})`;
        }
        feedbackDiv.textContent = feedbackMsg;
        feedbackDiv.className = 'feedback correct';
        countryInput.disabled = true;
        capitalInput.disabled = true;
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
        if (settings.requireDomains && isDomainCorrect) correctParts.push('domain');
        
        if (correctParts.length > 0) {
            feedbackMsg += ` (${correctParts.join(', ')} ${correctParts.length === 1 ? 'was' : 'were'} correct)`;
        }
        
        feedbackDiv.textContent = feedbackMsg;
        feedbackDiv.className = 'feedback incorrect';
        countryInput.disabled = true;
        capitalInput.disabled = true;
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
        countryInput.value = '';
        capitalInput.value = '';
        countryInput.disabled = false;
        capitalInput.disabled = false;
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
            // Move focus to capital input if required, then domain, otherwise submit
            if (settings.requireCapitals) {
                capitalInput.focus();
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
        (!settings.requireDomains || domainInput.disabled) &&
        !justSubmitted) {
        e.preventDefault();
        nextBtn.click();
    }
});

// Initialize
updateSettings();
showScreen('menu');
