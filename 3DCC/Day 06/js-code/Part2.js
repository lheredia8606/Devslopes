let grade = 67;

if (grade > 90){
  console.log('AA')
}
else if (grade <= 90 && grade > 80) {
  console.log('AB');
}
else if (grade <= 80 && grade > 70) {
  console.log('BB');
}
else if (grade <= 70 && grade > 60) {
  console.log('BC');
}
else if (grade <= 60 && grade > 50) {
  console.log('CC');
}
else if (grade <= 50 && grade > 40) {
  console.log('CD');
}
else if (grade <= 40 && grade > 30) {
  console.log('DD');
}
else if (grade < 30) {
  console.log('FF');
}