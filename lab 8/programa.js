console.log('**El substring de palíndromo más largo**');

const getLongestPalindrome = (string) => {
    let start = 0;
    let end = 0;

    for(let i = 0; i < string.length; i++) {
        // del centro
        let length1 = expandMiddle(string, i, i);
        // de mitad y mitad
        let length2 = expandMiddle(string, i, i+1);
        let finalLength = Math.max(length1, length2);

        if(finalLength > end-start) {
            start = i - Math.trunc((finalLength-1)/2);
            end = i + Math.trunc(finalLength / 2);
        }
    }

    return string.substring(start+1, end);
}

const expandMiddle = (string, left, right) => {
    while(left >= 0 && right < string.length && string[left] == string[right]) {
        left--;
        right++;
    }
    return right - left + 1;
}

console.log(getLongestPalindrome('pepepipcapacpas'));
console.log(getLongestPalindrome('babadungabbaxxxx'));