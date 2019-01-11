let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length); //logs in how many words

secretMessage.pop(); //remove last word from
console.log(secretMessage.length);

secretMessage.push('to', 'program'); //add words on
console.log(secretMessage.length);

secretMessage[7] = 'right'; //mutate item7

secretMessage.shift(); //remove first word from

secretMessage.unshift('Programming'); //adds word at the beginning

const removeFrom = secretMessage.splice(6, 5, 'know, '); //removed the words "get, right, the, first, time," from position 6 FORWARD with lenght 5 and replaced by 'know, '

console.log(secretMessage.join(' '));

