// List of countries with their flag codes (ISO 3166-1 alpha-2) and aliases
const countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Brunei', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN', aliases: ['PRC', "People's Republic of China"] },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ', aliases: ['Czechia', 'Czech'] },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'DR Congo', code: 'CD', aliases: ['Democratic Republic of the Congo', 'Congo-Kinshasa'] },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Eswatini', code: 'SZ', aliases: ['Swaziland'] },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE', aliases: ['Deutschland'] },
    { name: 'Ghana', code: 'GH' },
    { name: 'Greece', code: 'GR' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran', code: 'IR', aliases: ['Persia'] },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE', aliases: ['Eire', 'Republic of Ireland'] },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Kosovo', code: 'XK' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Laos', code: 'LA', aliases: ['Lao'] },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia', code: 'FM' },
    { name: 'Moldova', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montenegro', code: 'ME' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM', aliases: ['Burma'] },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL', aliases: ['Holland'] },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'North Korea', code: 'KP', aliases: ['DPRK', "Democratic People's Republic of Korea", 'North Korea'] },
    { name: 'North Macedonia', code: 'MK', aliases: ['Macedonia'] },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestine', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russia', code: 'RU', aliases: ['Russian Federation', 'Russian'] },
    { name: 'Rwanda', code: 'RW' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'São Tomé and Príncipe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Korea', code: 'KR', aliases: ['Korea', 'Republic of Korea', 'ROK'] },
    { name: 'South Sudan', code: 'SS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syria', code: 'SY' },
    { name: 'Taiwan', code: 'TW', aliases: ['Republic of China', 'ROC'] },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL', aliases: ['East Timor'] },
    { name: 'Togo', code: 'TG' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE', aliases: ['UAE'] },
    { name: 'United Kingdom', code: 'GB', aliases: ['UK', 'Great Britain', 'Britain', 'England'] },
    { name: 'United States', code: 'US', aliases: ['USA', 'US', 'America', 'United States of America'] },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Vatican City', code: 'VA', aliases: ['Holy See'] },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Vietnam', code: 'VN' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' },
];

let currentCountry = null;
let score = 0;
let streak = 0;
let usedCountries = [];
let justSubmitted = false;

const flagImg = document.getElementById('flag');
const countryInput = document.getElementById('country-input');
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
    countryInput.disabled = false;
    countryInput.focus();
    submitBtn.disabled = false;
    feedbackDiv.textContent = '';
    feedbackDiv.className = 'feedback';
    nextBtn.style.display = 'none';
}

// Check answer (case insensitive, supports aliases)
function checkAnswer() {
    const userAnswer = countryInput.value.trim().toLowerCase();
    const correctAnswer = currentCountry.name.toLowerCase();
    
    // Check if answer matches the country name or any of its aliases
    const allAnswers = [correctAnswer];
    if (currentCountry.aliases) {
        currentCountry.aliases.forEach(alias => {
            allAnswers.push(alias.toLowerCase());
        });
    }
    
    const isCorrect = allAnswers.includes(userAnswer);
    
    if (isCorrect) {
        // Correct answer
        score++;
        streak++;
        feedbackDiv.textContent = `Correct! It's ${currentCountry.name}`;
        feedbackDiv.className = 'feedback correct';
        countryInput.disabled = true;
        submitBtn.disabled = true;
        nextBtn.style.display = 'block';
    } else {
        // Wrong answer
        streak = 0;
        feedbackDiv.textContent = `Incorrect! The answer is ${currentCountry.name}`;
        feedbackDiv.className = 'feedback incorrect';
        countryInput.disabled = true;
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
        !justSubmitted) {
        e.preventDefault();
        loadNewFlag();
    }
});

// Initialize the game
loadNewFlag();

