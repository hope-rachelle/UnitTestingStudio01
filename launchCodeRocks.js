/*let numberDivisible = [{
  intiger: 2,
  code: "Launch!",
},
{
  intiger: 3,
  code: "Code!",
},
{
  intiger: 5,
  code: "Rocks!"
},
{
  intiger: [2, 3],
  code: "LaunchCode!"
},
{
  intiger: [2, 5],
  code: "Code Rocks!"
},
{
  intiger: [3, 5],
  code: "Launch Rocks! (CRASH!!!!)"
}]

function launchOutput(num){
for (i=0; i<numberDivisible.length; i++){
  if (num % numberDivisible[i].intiger === 0) {
    return numberDivisible[i].code;
    }
  }
}*/

function launchOutput(num){
 if (num % 2 === 0 && num % 3 !==0 && num % 5 !==0) {
  return "Launch!";
} else if (num % 3 === 0 && num % 2 !==0 && num % 5 !==0){
  return "Code!";
} else if (num % 5 === 0 && num % 3 !==0 && num % 2 !==0){
  return "Rocks!";
} else if (num % 2 === 0 && num % 3 === 0 && num % 5 !==0) {
  return "LaunchCode!";
} else if (num % 3 === 0 && num % 5 === 0 && num % 2 !==0) {
  return "Code Rocks!";
} else if (num % 2 === 0 && num % 5 === 0 && num % 3 !==0) {
  return "Launch Rocks! (CRASH!!!!)";
} else if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
  return "LaunchCode Rocks!";
} else
return "Rutabagas! That does not work."; 
}

module.exports = launchOutput;
