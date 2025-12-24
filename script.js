// List of countries with their flag codes (ISO 3166-1 alpha-2), aliases, and capitals
const countries = [
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

let currentCountry = null;
let score = 0;
let streak = 0;
let usedCountries = [];
let justSubmitted = false;

const flagImg = document.getElementById('flag');
const countryInput = document.getElementById('country-input');
const capitalInput = document.getElementById('capital-input');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const feedbackDiv = document.getElementById('feedback');
const scoreSpan = document.getElementById('score');
const streakSpan = document.getElementById('streak');

// Get a random country that hasn't been used recently
function getRandomCountry() {
    // Reset used countries if we've used all of them
    if (usedCountries.length >= countries.length) {
        usedCountries = [];
    }
    
    let availableCountries = countries.filter(c => !usedCountries.includes(c.name));
    const randomIndex = Math.floor(Math.random() * availableCountries.length);
    const country = availableCountries[randomIndex];
    usedCountries.push(country.name);
    return country;
}

// Load a new flag
function loadNewFlag() {
    currentCountry = getRandomCountry();
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
}

// Normalize string for comparison (remove punctuation, extra spaces)
function normalizeString(str) {
    return str.toLowerCase()
        .replace(/[.,;:!?'"]/g, '') // Remove punctuation
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
}

// Check answer (case insensitive, supports aliases)
function checkAnswer() {
    const userCountryAnswer = countryInput.value.trim().toLowerCase();
    const userCapitalAnswer = normalizeString(capitalInput.value.trim());
    const correctCountry = currentCountry.name.toLowerCase();
    const correctCapital = normalizeString(currentCountry.capital);
    
    // Check if country answer matches the country name or any of its aliases
    const allCountryAnswers = [correctCountry];
    if (currentCountry.aliases) {
        currentCountry.aliases.forEach(alias => {
            allCountryAnswers.push(alias.toLowerCase());
        });
    }
    
    const isCountryCorrect = allCountryAnswers.includes(userCountryAnswer);
    const isCapitalCorrect = userCapitalAnswer === correctCapital;
    
    // Both must be correct
    if (isCountryCorrect && isCapitalCorrect) {
        // Correct answer
        score++;
        streak++;
        feedbackDiv.textContent = `Correct! It's ${currentCountry.name} and the capital is ${currentCountry.capital}`;
        feedbackDiv.className = 'feedback correct';
        countryInput.disabled = true;
        capitalInput.disabled = true;
        submitBtn.disabled = true;
        nextBtn.style.display = 'block';
    } else {
        // Wrong answer - provide specific feedback
        streak = 0;
        let feedbackMsg = 'Incorrect! ';
        if (!isCountryCorrect && !isCapitalCorrect) {
            feedbackMsg += `The country is ${currentCountry.name} and the capital is ${currentCountry.capital}`;
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
    
    scoreSpan.textContent = score;
    streakSpan.textContent = streak;
    
    // Set flag to prevent immediate next flag trigger
    justSubmitted = true;
    setTimeout(() => {
        justSubmitted = false;
    }, 100);
}

// Event listeners
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', loadNewFlag);

countryInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (!countryInput.disabled) {
            e.preventDefault();
            e.stopPropagation();
            // Move focus to capital input
            capitalInput.focus();
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
        capitalInput.disabled &&
        !justSubmitted) {
        e.preventDefault();
        loadNewFlag();
    }
});

// Initialize the game
loadNewFlag();
