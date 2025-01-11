var count = 0;
function rizz() {
count++;
  if (count == 1) {
  alert("Click me again!");
  getElementById('test').innerHTML = "Click me again!";
} else if (count == 2) {
  alert("Yippee");
  getElementById('test').innerHTML = "Yippee";
} else {
  alert("e");
  getElementById('test').innerHTML = "e";
}

}
