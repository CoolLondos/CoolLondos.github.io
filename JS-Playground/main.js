var count = 0;
function rizz() {
count++;
  if (count == 1) {
  alert("Click me again!");
  document.getElementById('test').innerHTML = "Click me again!";
  document.getElementById('test').style.fontsize = "20px";
} else if (count == 2) {
  alert("Yippee");
  document.getElementById('test').innerHTML = "Yippee";
  document.getElementById('test').style.fontsize = "24px";
} else {
  alert("e");
  document.getElementById('test').innerHTML = "e";
  document.getElementById('test').style.fontsize = "30px";
}

}
