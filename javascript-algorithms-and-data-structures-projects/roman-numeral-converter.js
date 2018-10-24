function convertToRoman(num) {
    if (isNaN(num)) {
        return "This is not a number.";
    }
    const romans = {"M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1};
    let roman = "";
    for (let char in romans) {
        while (num >= romans[char]) {
            roman += char;
            num -= romans[char];
        }
    };
 return roman;
}
