// Normalize string for comparison (remove punctuation, extra spaces, and accents)
export function normalizeString(str) {
    return str
        .toLowerCase()
        .normalize('NFD') // Decompose accented characters
        .replace(/[\u0300-\u036f]/g, '') // Remove accent marks
        .replace(/[.,;:!?'"]/g, '') // Remove punctuation
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
}

// Check if answer matches country name or aliases
export function checkCountryAnswer(userAnswer, country) {
    const normalizedAnswer = normalizeString(userAnswer);
    const normalizedCountryName = normalizeString(country.name);
    
    // Check exact match
    if (normalizedAnswer === normalizedCountryName) {
        return true;
    }
    
    // Check aliases
    if (country.aliases && country.aliases.length > 0) {
        for (const alias of country.aliases) {
            if (normalizedAnswer === normalizeString(alias)) {
                return true;
            }
        }
    }
    
    return false;
}

// Check if answer matches capital name
export function checkCapitalAnswer(userAnswer, country) {
    const normalizedAnswer = normalizeString(userAnswer);
    const normalizedCapital = normalizeString(country.capital);

    return normalizedAnswer === normalizedCapital;
}

// Check if answer matches state/province name or aliases (same accent-tolerant
// matcher as checkCountryAnswer; a state object has the same {name, aliases?}
// shape so this is functionally identical, just named for clarity at callsites).
export function checkStateAnswer(userAnswer, state) {
    const normalizedAnswer = normalizeString(userAnswer);
    if (normalizedAnswer === normalizeString(state.name)) return true;
    if (state.aliases && state.aliases.length > 0) {
        for (const alias of state.aliases) {
            if (normalizedAnswer === normalizeString(alias)) return true;
        }
    }
    return false;
}

