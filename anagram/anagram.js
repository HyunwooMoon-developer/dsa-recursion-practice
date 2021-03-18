let anagrams = [];

function generateAnagrams(word, anagram=''){

    if(!word){
        return anagrams.push(anagram);
    }

    for(let i =0 ; i < word.length ; i++){
        anagram += word[i];
        generateAnagrams(word.slice(0, i) + word.slice(i+1), anagram)
        anagram = anagram.slice(0, anagram.length -1);
    }
}

generateAnagrams('abc');
console.log(anagrams);

/*---------------------------------------------------- */

function cleanString(string){
    let cleanString = string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return cleanString;
}

console.log(cleanString('Hello Everyone!'));

function anagram(a,b){
    let aString = cleanString(a);
    let bString = cleanString(b);

    return aString === bString;
}

console.log(anagram('hello', 'Hello'));
console.log(anagram('hello', 'Hell'));

