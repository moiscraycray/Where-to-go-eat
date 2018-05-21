// app to decide what to eat for us

var places = ['McDonalds', 'KFC', 'Hungry Jacks', 'Vietnamese', 'Sushi', 'Italian', 'Mexican', 'Turkish', 'Malaysian', 'Thai', 'Ramen', 'Burgers', 'Steak', 'Yum Cha'];

var firstRun = false;

function randomiser() {
  let number = Math.floor(Math.random() * places.length);
  console.log(number);
  return number;
};

function unique(method) {
  let number = method();
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
  let number = unique(randomiser);
  document.querySelector('.go-here').innerHTML = places[number];
  firstRun = true;
});
