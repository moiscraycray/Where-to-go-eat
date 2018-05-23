var clicker = 0;
function counter() {
  clicker++;
  console.log(`i am clicker${clicker}`);
  return clicker;
}

document.querySelector('.btn').addEventListener('click', () => {
  let num = counter();
  document.querySelector('.counter').innerHTML = num;
})
