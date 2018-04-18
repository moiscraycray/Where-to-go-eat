// app to decide what to eat for us

var places = ['McDonalds', 'KFC', 'Hungry Jacks', 'Cabramatta', 'Sushi'];

function randomiser() {
  var decider = Math.floor(Math.random() * places.length);
  console.log(decider);
  return decider;
};

document.querySelector('.btn').addEventListener('click', () => {
  var number = randomiser();
  document.querySelector('.go-here').innerHTML = places[number];
});
