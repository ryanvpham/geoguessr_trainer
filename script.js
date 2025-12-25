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
    { name: 'Afghanistan', code: 'AF', capital: 'Kabul' },
    { name: 'Albania', code: 'AL', capital: 'Tirana' },
    { name: 'Algeria', code: 'DZ', capital: 'Algiers' },
    { name: 'Andorra', code: 'AD', capital: 'Andorra la Vella' },
    { name: 'Angola', code: 'AO', capital: 'Luanda' },
    { name: 'Antigua and Barbuda', code: 'AG', capital: "Saint John's" },
    { name: 'Argentina', code: 'AR', capital: 'Buenos Aires' },
    { name: 'Armenia', code: 'AM', capital: 'Yerevan' },
    { name: 'Australia', code: 'AU', capital: 'Canberra' },
    { name: 'Austria', code: 'AT', capital: 'Vienna' },
    { name: 'Azerbaijan', code: 'AZ', capital: 'Baku' },
    { name: 'Bahamas', code: 'BS', capital: 'Nassau' },
    { name: 'Bahrain', code: 'BH', capital: 'Manama' },
    { name: 'Bangladesh', code: 'BD', capital: 'Dhaka' },
    { name: 'Barbados', code: 'BB', capital: 'Bridgetown' },
    { name: 'Belarus', code: 'BY', capital: 'Minsk' },
    { name: 'Belgium', code: 'BE', capital: 'Brussels' },
    { name: 'Belize', code: 'BZ', capital: 'Belmopan' },
    { name: 'Benin', code: 'BJ', capital: 'Porto-Novo' },
    { name: 'Bhutan', code: 'BT', capital: 'Thimphu' },
    { name: 'Bolivia', code: 'BO', capital: 'Sucre' },
    { name: 'Bosnia and Herzegovina', code: 'BA', capital: 'Sarajevo' },
    { name: 'Botswana', code: 'BW', capital: 'Gaborone' },
    { name: 'Brazil', code: 'BR', capital: 'Brasília' },
    { name: 'Brunei', code: 'BN', capital: 'Bandar Seri Begawan' },
    { name: 'Bulgaria', code: 'BG', capital: 'Sofia' },
    { name: 'Burkina Faso', code: 'BF', capital: 'Ouagadougou' },
    { name: 'Burundi', code: 'BI', capital: 'Gitega' },
    { name: 'Cambodia', code: 'KH', capital: 'Phnom Penh' },
    { name: 'Cameroon', code: 'CM', capital: 'Yaoundé' },
    { name: 'Canada', code: 'CA', capital: 'Ottawa' },
    { name: 'Cape Verde', code: 'CV', capital: 'Praia' },
    { name: 'Central African Republic', code: 'CF', capital: 'Bangui' },
    { name: 'Chad', code: 'TD', capital: "N'Djamena" },
    { name: 'Chile', code: 'CL', capital: 'Santiago' },
    { name: 'China', code: 'CN', capital: 'Beijing', aliases: ['PRC', "People's Republic of China"] },
    { name: 'Colombia', code: 'CO', capital: 'Bogotá' },
    { name: 'Comoros', code: 'KM', capital: 'Moroni' },
    { name: 'Congo', code: 'CG', capital: 'Brazzaville' },
    { name: 'Costa Rica', code: 'CR', capital: 'San José' },
    { name: 'Croatia', code: 'HR', capital: 'Zagreb' },
    { name: 'Cuba', code: 'CU', capital: 'Havana' },
    { name: 'Cyprus', code: 'CY', capital: 'Nicosia' },
    { name: 'Czech Republic', code: 'CZ', capital: 'Prague', aliases: ['Czechia', 'Czech'] },
    { name: 'Denmark', code: 'DK', capital: 'Copenhagen' },
    { name: 'Djibouti', code: 'DJ', capital: 'Djibouti' },
    { name: 'Dominica', code: 'DM', capital: 'Roseau' },
    { name: 'Dominican Republic', code: 'DO', capital: 'Santo Domingo' },
    { name: 'DR Congo', code: 'CD', capital: 'Kinshasa', aliases: ['Democratic Republic of the Congo', 'Congo-Kinshasa'] },
    { name: 'Ecuador', code: 'EC', capital: 'Quito' },
    { name: 'Egypt', code: 'EG', capital: 'Cairo' },
    { name: 'El Salvador', code: 'SV', capital: 'San Salvador' },
    { name: 'Equatorial Guinea', code: 'GQ', capital: 'Malabo' },
    { name: 'Eritrea', code: 'ER', capital: 'Asmara' },
    { name: 'Estonia', code: 'EE', capital: 'Tallinn' },
    { name: 'Eswatini', code: 'SZ', capital: 'Mbabane', aliases: ['Swaziland'] },
    { name: 'Ethiopia', code: 'ET', capital: 'Addis Ababa' },
    { name: 'Fiji', code: 'FJ', capital: 'Suva' },
    { name: 'Finland', code: 'FI', capital: 'Helsinki' },
    { name: 'France', code: 'FR', capital: 'Paris' },
    { name: 'Gabon', code: 'GA', capital: 'Libreville' },
    { name: 'Gambia', code: 'GM', capital: 'Banjul' },
    { name: 'Georgia', code: 'GE', capital: 'Tbilisi' },
    { name: 'Germany', code: 'DE', capital: 'Berlin', aliases: ['Deutschland'] },
    { name: 'Ghana', code: 'GH', capital: 'Accra' },
    { name: 'Greece', code: 'GR', capital: 'Athens' },
    { name: 'Grenada', code: 'GD', capital: "Saint George's" },
    { name: 'Guatemala', code: 'GT', capital: 'Guatemala City' },
    { name: 'Guinea', code: 'GN', capital: 'Conakry' },
    { name: 'Guinea-Bissau', code: 'GW', capital: 'Bissau' },
    { name: 'Guyana', code: 'GY', capital: 'Georgetown' },
    { name: 'Haiti', code: 'HT', capital: 'Port-au-Prince' },
    { name: 'Honduras', code: 'HN', capital: 'Tegucigalpa' },
    { name: 'Hungary', code: 'HU', capital: 'Budapest' },
    { name: 'Iceland', code: 'IS', capital: 'Reykjavik' },
    { name: 'India', code: 'IN', capital: 'New Delhi' },
    { name: 'Indonesia', code: 'ID', capital: 'Jakarta' },
    { name: 'Iran', code: 'IR', capital: 'Tehran', aliases: ['Persia'] },
    { name: 'Iraq', code: 'IQ', capital: 'Baghdad' },
    { name: 'Ireland', code: 'IE', capital: 'Dublin', aliases: ['Eire', 'Republic of Ireland'] },
    { name: 'Israel', code: 'IL', capital: 'Jerusalem' },
    { name: 'Ivory Coast', code: 'CI', capital: 'Yamoussoukro', aliases: ['Côte d\'Ivoire', 'Cote d\'Ivoire'] },
    { name: 'Italy', code: 'IT', capital: 'Rome' },
    { name: 'Jamaica', code: 'JM', capital: 'Kingston' },
    { name: 'Japan', code: 'JP', capital: 'Tokyo' },
    { name: 'Jordan', code: 'JO', capital: 'Amman' },
    { name: 'Kazakhstan', code: 'KZ', capital: 'Nur-Sultan' },
    { name: 'Kenya', code: 'KE', capital: 'Nairobi' },
    { name: 'Kiribati', code: 'KI', capital: 'Tarawa' },
    { name: 'Kosovo', code: 'XK', capital: 'Pristina' },
    { name: 'Kuwait', code: 'KW', capital: 'Kuwait City' },
    { name: 'Kyrgyzstan', code: 'KG', capital: 'Bishkek' },
    { name: 'Laos', code: 'LA', capital: 'Vientiane', aliases: ['Lao'] },
    { name: 'Latvia', code: 'LV', capital: 'Riga' },
    { name: 'Lebanon', code: 'LB', capital: 'Beirut' },
    { name: 'Lesotho', code: 'LS', capital: 'Maseru' },
    { name: 'Liberia', code: 'LR', capital: 'Monrovia' },
    { name: 'Libya', code: 'LY', capital: 'Tripoli' },
    { name: 'Liechtenstein', code: 'LI', capital: 'Vaduz' },
    { name: 'Lithuania', code: 'LT', capital: 'Vilnius' },
    { name: 'Luxembourg', code: 'LU', capital: 'Luxembourg' },
    { name: 'Madagascar', code: 'MG', capital: 'Antananarivo' },
    { name: 'Malawi', code: 'MW', capital: 'Lilongwe' },
    { name: 'Malaysia', code: 'MY', capital: 'Kuala Lumpur' },
    { name: 'Maldives', code: 'MV', capital: 'Malé' },
    { name: 'Mali', code: 'ML', capital: 'Bamako' },
    { name: 'Malta', code: 'MT', capital: 'Valletta' },
    { name: 'Marshall Islands', code: 'MH', capital: 'Majuro' },
    { name: 'Mauritania', code: 'MR', capital: 'Nouakchott' },
    { name: 'Mauritius', code: 'MU', capital: 'Port Louis' },
    { name: 'Mexico', code: 'MX', capital: 'Mexico City' },
    { name: 'Micronesia', code: 'FM', capital: 'Palikir' },
    { name: 'Moldova', code: 'MD', capital: 'Chișinău' },
    { name: 'Monaco', code: 'MC', capital: 'Monaco' },
    { name: 'Mongolia', code: 'MN', capital: 'Ulaanbaatar' },
    { name: 'Montenegro', code: 'ME', capital: 'Podgorica' },
    { name: 'Morocco', code: 'MA', capital: 'Rabat' },
    { name: 'Mozambique', code: 'MZ', capital: 'Maputo' },
    { name: 'Myanmar', code: 'MM', capital: 'Naypyidaw', aliases: ['Burma'] },
    { name: 'Namibia', code: 'NA', capital: 'Windhoek' },
    { name: 'Nauru', code: 'NR', capital: 'Yaren' },
    { name: 'Nepal', code: 'NP', capital: 'Kathmandu' },
    { name: 'Netherlands', code: 'NL', capital: 'Amsterdam', aliases: ['Holland'] },
    { name: 'New Zealand', code: 'NZ', capital: 'Wellington' },
    { name: 'Nicaragua', code: 'NI', capital: 'Managua' },
    { name: 'Niger', code: 'NE', capital: 'Niamey' },
    { name: 'Nigeria', code: 'NG', capital: 'Abuja' },
    { name: 'North Korea', code: 'KP', capital: 'Pyongyang', aliases: ['DPRK', "Democratic People's Republic of Korea", 'North Korea'] },
    { name: 'North Macedonia', code: 'MK', capital: 'Skopje', aliases: ['Macedonia'] },
    { name: 'Norway', code: 'NO', capital: 'Oslo' },
    { name: 'Oman', code: 'OM', capital: 'Muscat' },
    { name: 'Pakistan', code: 'PK', capital: 'Islamabad' },
    { name: 'Palau', code: 'PW', capital: 'Ngerulmud' },
    { name: 'Palestine', code: 'PS', capital: 'East Jerusalem' },
    { name: 'Panama', code: 'PA', capital: 'Panama City' },
    { name: 'Papua New Guinea', code: 'PG', capital: 'Port Moresby' },
    { name: 'Paraguay', code: 'PY', capital: 'Asunción' },
    { name: 'Peru', code: 'PE', capital: 'Lima' },
    { name: 'Philippines', code: 'PH', capital: 'Manila' },
    { name: 'Poland', code: 'PL', capital: 'Warsaw' },
    { name: 'Portugal', code: 'PT', capital: 'Lisbon' },
    { name: 'Qatar', code: 'QA', capital: 'Doha' },
    { name: 'Romania', code: 'RO', capital: 'Bucharest' },
    { name: 'Russia', code: 'RU', capital: 'Moscow', aliases: ['Russian Federation', 'Russian'] },
    { name: 'Rwanda', code: 'RW', capital: 'Kigali' },
    { name: 'Saint Kitts and Nevis', code: 'KN', capital: 'Basseterre' },
    { name: 'Saint Lucia', code: 'LC', capital: 'Castries' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', capital: 'Kingstown' },
    { name: 'Samoa', code: 'WS', capital: 'Apia' },
    { name: 'San Marino', code: 'SM', capital: 'San Marino' },
    { name: 'São Tomé and Príncipe', code: 'ST', capital: 'São Tomé' },
    { name: 'Saudi Arabia', code: 'SA', capital: 'Riyadh' },
    { name: 'Senegal', code: 'SN', capital: 'Dakar' },
    { name: 'Serbia', code: 'RS', capital: 'Belgrade' },
    { name: 'Seychelles', code: 'SC', capital: 'Victoria' },
    { name: 'Sierra Leone', code: 'SL', capital: 'Freetown' },
    { name: 'Singapore', code: 'SG', capital: 'Singapore' },
    { name: 'Slovakia', code: 'SK', capital: 'Bratislava' },
    { name: 'Slovenia', code: 'SI', capital: 'Ljubljana' },
    { name: 'Solomon Islands', code: 'SB', capital: 'Honiara' },
    { name: 'Somalia', code: 'SO', capital: 'Mogadishu' },
    { name: 'South Africa', code: 'ZA', capital: 'Cape Town' },
    { name: 'South Korea', code: 'KR', capital: 'Seoul', aliases: ['Korea', 'Republic of Korea', 'ROK'] },
    { name: 'South Sudan', code: 'SS', capital: 'Juba' },
    { name: 'Spain', code: 'ES', capital: 'Madrid' },
    { name: 'Sri Lanka', code: 'LK', capital: 'Colombo' },
    { name: 'Sudan', code: 'SD', capital: 'Khartoum' },
    { name: 'Suriname', code: 'SR', capital: 'Paramaribo' },
    { name: 'Sweden', code: 'SE', capital: 'Stockholm' },
    { name: 'Switzerland', code: 'CH', capital: 'Bern' },
    { name: 'Syria', code: 'SY', capital: 'Damascus' },
    { name: 'Taiwan', code: 'TW', capital: 'Taipei', aliases: ['Republic of China', 'ROC'] },
    { name: 'Tajikistan', code: 'TJ', capital: 'Dushanbe' },
    { name: 'Tanzania', code: 'TZ', capital: 'Dodoma' },
    { name: 'Thailand', code: 'TH', capital: 'Bangkok' },
    { name: 'Timor-Leste', code: 'TL', capital: 'Dili', aliases: ['East Timor'] },
    { name: 'Togo', code: 'TG', capital: 'Lomé' },
    { name: 'Tonga', code: 'TO', capital: "Nuku'alofa" },
    { name: 'Trinidad and Tobago', code: 'TT', capital: 'Port of Spain' },
    { name: 'Tunisia', code: 'TN', capital: 'Tunis' },
    { name: 'Turkey', code: 'TR', capital: 'Ankara' },
    { name: 'Turkmenistan', code: 'TM', capital: 'Ashgabat' },
    { name: 'Tuvalu', code: 'TV', capital: 'Funafuti' },
    { name: 'Uganda', code: 'UG', capital: 'Kampala' },
    { name: 'Ukraine', code: 'UA', capital: 'Kyiv' },
    { name: 'United Arab Emirates', code: 'AE', capital: 'Abu Dhabi', aliases: ['UAE'] },
    { name: 'United Kingdom', code: 'GB', capital: 'London', aliases: ['UK', 'Great Britain', 'Britain', 'England'] },
    { name: 'United States', code: 'US', capital: 'Washington, D.C.', aliases: ['USA', 'US', 'America', 'United States of America'] },
    { name: 'Uruguay', code: 'UY', capital: 'Montevideo' },
    { name: 'Uzbekistan', code: 'UZ', capital: 'Tashkent' },
    { name: 'Vanuatu', code: 'VU', capital: 'Port Vila' },
    { name: 'Vatican City', code: 'VA', capital: 'Vatican City', aliases: ['Holy See'] },
    { name: 'Venezuela', code: 'VE', capital: 'Caracas' },
    { name: 'Vietnam', code: 'VN', capital: 'Hanoi' },
    { name: 'Yemen', code: 'YE', capital: 'Sana\'a' },
    { name: 'Zambia', code: 'ZM', capital: 'Lusaka' },
    { name: 'Zimbabwe', code: 'ZW', capital: 'Harare' },
];

// Settings state
let settings = {
    geoguessrFilter: false,
    requireCapitals: false
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
const flagImg = document.getElementById('flag');
const countryInput = document.getElementById('country-input');
const capitalInput = document.getElementById('capital-input');
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
    
    // Update countries list
    countries = getAvailableCountries();
    usedCountries = []; // Reset used countries when settings change
    
    // Update capital input visibility
    if (settings.requireCapitals) {
        capitalInput.style.display = 'block';
    } else {
        capitalInput.style.display = 'none';
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
    countryInput.disabled = false;
    capitalInput.disabled = false;
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
    const correctCountry = normalizeString(currentCountry.name);
    const correctCapital = normalizeString(currentCountry.capital);
    
    // Check if country answer matches the country name or any of its aliases
    const allCountryAnswers = [correctCountry];
    if (currentCountry.aliases) {
        currentCountry.aliases.forEach(alias => {
            allCountryAnswers.push(normalizeString(alias));
        });
    }
    
    const isCountryCorrect = allCountryAnswers.includes(userCountryAnswer);
    const isCapitalCorrect = !settings.requireCapitals || userCapitalAnswer === correctCapital;
    
    // Increment total seen
    totalSeen++;
    roundTotalSeen++;
    
    // Both must be correct (or capital not required)
    if (isCountryCorrect && isCapitalCorrect) {
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
        feedbackDiv.textContent = feedbackMsg;
        feedbackDiv.className = 'feedback correct';
        countryInput.disabled = true;
        capitalInput.disabled = true;
        submitBtn.disabled = true;
        nextBtn.style.display = 'block';
    } else {
        // Wrong answer - add to incorrect list if not already there
        if (!incorrectCountries.includes(currentCountry.name)) {
            incorrectCountries.push(currentCountry.name);
        }
        
        // Provide specific feedback
        let feedbackMsg = 'Incorrect! ';
        if (!isCountryCorrect && (!settings.requireCapitals || !isCapitalCorrect)) {
            if (settings.requireCapitals) {
                feedbackMsg += `The country is ${currentCountry.name} and the capital is ${currentCountry.capital}`;
            } else {
                feedbackMsg += `The country is ${currentCountry.name}`;
            }
        } else if (!isCountryCorrect) {
            feedbackMsg += `The country is ${currentCountry.name} (capital was correct)`;
        } else {
            feedbackMsg += `The capital is ${currentCountry.capital} (country was correct)`;
        }
        feedbackDiv.textContent = feedbackMsg;
        feedbackDiv.className = 'feedback incorrect';
        countryInput.disabled = true;
        capitalInput.disabled = true;
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
            // Move focus to capital input if required, otherwise submit
            if (settings.requireCapitals) {
                capitalInput.focus();
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
        !justSubmitted) {
        e.preventDefault();
        loadNewFlag();
    }
});

// Initialize
updateSettings();
showScreen('menu');
