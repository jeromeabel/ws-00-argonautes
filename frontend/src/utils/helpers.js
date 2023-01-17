// Capitalize first letter
export function capitalizeFirstChar(_str) {
    return _str.charAt(0).toUpperCase() + _str.slice(1)
}

export function getNormalizedString(_str) {
    return _str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    //return _str.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();
}

export function checkName(_str) {
    const regexSearch = /^[A-ÿ]{3,}[A-ÿ\-\s]*$/; // At least 3 characters
    return regexSearch.test(_str)    
}