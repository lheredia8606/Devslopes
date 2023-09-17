var words = ['ant', 'awkward', 'car', 'zebra'];
console.log(words.reverse());
words = ['ant', 'awkward', 'car', 'zebra'];
let reversed = [];
for(i in words){
  reversed[i] = words[words.length - i - 1];
}
console.log(reversed);