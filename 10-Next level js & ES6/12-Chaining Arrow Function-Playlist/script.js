const playList = [
  { title: 'Learn to Code', dur: '5:34' },
  { title: 'Learn to Code', dur: '2:33' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '8:32' },
  { title: 'Learn to Skate', dur: '10:17' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '13:55' },
];

let totalSeconds = (word) => playList
.filter(song => song.title.includes(word))
.reduce((acum, currVal) => acum + Number(currVal.dur.split(':')[0]) * 60 + Number(currVal.dur.split(':')[1]),0);
console.log(totalSeconds('Code'));

/*
let getSecondsPerTrack = (track) => Number(track.dur.split(':')[0]) * 60 + Number(track.dur.split(':')[1]);
let totalSeconds = (word) => playList
.filter(song => song.title.includes(word))
.reduce((acum, currVal) => acum + getSecondsPerTrack(currVal),0);
console.log(totalSeconds('Code'));*/