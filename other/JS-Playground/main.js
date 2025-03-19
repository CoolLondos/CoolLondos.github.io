var count = 0;
function rizzup() {
count = count + 1;
reloadnumber()
};

function rizzdown() {
count = count - 1;
reloadnumber()
};

function rizzx2() {
count = count * 2;
reloadnumber()
};

function rizzhalf2() {
count = count / 2;
reloadnumber()
};

function reloadnumber() {
document.getElementById('test').innerHTML = "Number: " + count;
console.log(count)
};
