module.exports = function toReadable (number) {
     
    const wordsForNumbers = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',    
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
        20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'hundred'
    };
    
    let newString = number.toString();

    switch (newString.length) {

        case 1: {return wordsForNumbers[number];}
        case 2: 
            if (number < 20) {
                return wordsForNumbers[number];
            } 
            if (number % 10 === 0) {
                return wordsForNumbers[number];
            } 
                return wordsForNumbers[newString[0] * 10] + ' ' + wordsForNumbers[newString[1] * 1];
        case 3:
            if (number % 100 === 0) {
                return wordsForNumbers[newString[0]] + ' ' + 'hundred';
            }
            if (number % 10 === 0) {
                return wordsForNumbers[newString[0]] + ' ' + 'hundred' + ' ' + wordsForNumbers[newString[1] * 10];
            }
            if ((newString[1] * 1) === 0) {
                return wordsForNumbers[newString[0]] + ' ' + 'hundred' + ' ' + wordsForNumbers[newString[2] * 1];
            }
            if ((newString[1] * 1) === 1) {
                return wordsForNumbers[newString[0]] + ' ' + 'hundred' + ' ' + wordsForNumbers[newString.slice(1) * 1];
            }
            return wordsForNumbers[newString[0]] + ' ' + 'hundred' + ' ' + wordsForNumbers[newString[1] * 10] + ' ' + wordsForNumbers[newString[2] * 1];
           
        }
}