let colors = ['blue', 'red', 'green', 'yellow', 'black', 'white'];
let moreColors = ['purple', 'magenta', 'pink'];
colors.splice(1,3);
console.log(colors);
colors = colors.concat(moreColors);
console.log(colors);