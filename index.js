// app to decide what to eat for us

var places = ['McDonalds', 'KFC', 'Hungry Jacks', 'Vietnamese', 'Sushi', 'Italian', 'Mexican', 'Turkish', 'Malaysian', 'Thai', 'Ramen', 'Burgers', 'Steak'];

var firstRun = false;

function randomiser() {
  var number = Math.floor(Math.random() * places.length);
  console.log(number);
  return number;
};

function unique(method) {
  var number = method();
  if (firstRun === true) {
    while (number === prevNum) {
      number = method();
      console.log(`number: ${number} ---- prevNum: ${prevNum}`);
    }
  }
  var prevNum = number;
  return number;
};

document.querySelector('.btn').addEventListener('click', () => {
  var number = unique(randomiser);
  document.querySelector('.go-here').innerHTML = places[number];
  firstRun = true;
});
