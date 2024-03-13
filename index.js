// Code your solutions in this file
function writeCards(names, event) {
  let array = [];
  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return array;
}

function countDown(num) {
  for (let i = num; i >= 0; i--) console.log(i);
}

countDown(10);
