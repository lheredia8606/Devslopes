console.log(trafficAction('Green', false, false));
console.log((trafficAction('Yellow', false, false)));
console.log((trafficAction('Red', false, false)));
console.log((trafficAction('Green', true, false)));
console.log((trafficAction('Yellow', true, false)));
console.log((trafficAction('Red', true, false)));
console.log((trafficAction('Green', true, true)));
console.log((trafficAction('Yellow', false, true)));
console.log((trafficAction('Red', false, true)));

function trafficAction(lightStatus,emergencyVehicle,isInIntersection){
if(isInIntersection || (lightStatus === 'Green' && !emergencyVehicle)){
  return 'You can drive';
}
else if (lightStatus === 'Red' || emergencyVehicle){
  return'You can not drive';
}
else{
  return'Prepare to stop';
}
}