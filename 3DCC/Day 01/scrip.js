(function (){
  function ColorNumber () {
    var oHoure = document.querySelector('#houre'),
      oMinute = document.querySelector('#minute'),
      oSecond = document.querySelector('#second'),
      nowTime = new Date(),
      nowHoure = nowTime.getHours(),
      nowMinute = nowTime.getMinutes(),
      nowSecond = nowTime.getSeconds(),
      houreDeg = (nowMinute / 60) * 30,
      minuteDeg = (nowSecond / 60) * 6;
      
  oHoure.style.WebkitTransform = "rotate(" + (nowHoure * 30 + houreDeg) + "deg)";
  oMinute.style.WebkitTransform = "rotate(" + (nowMinute * 6 + minuteDeg) + "deg)";
  oSecond.style.WebkitTransform = "rotate(" + (nowSecond * 6) + "deg)";
  }
  ColorNumber();
  setInterval(ColorNumber, 1000);
})();