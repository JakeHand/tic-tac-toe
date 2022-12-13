let counter = 0;

let topLeft = document.getElementById('top-left');
let topMiddle = document.getElementById('top-middle');
let topRight = document.getElementById('top-right');
let middleLeft = document.getElementById('middle-left');
let middle = document.getElementById('middle');
let middleRight = document.getElementById('middle-right');
let bottomLeft = document.getElementById('bottom-left');
let bottomMiddle = document.getElementById('bottom-middle');
let bottomRight = document.getElementById('bottom-right');

topLeft.onclick = function() {
    if (topLeft.innerHTML !== 'x' && topLeft.innerHTML !== 'o') {
        if (counter % 2 === 0) {
            topLeft.innerHTML = 'x';
            counter++;
        } else {
            topLeft.innerHTML = 'o';
            counter++;
        }
    }
}

topMiddle.onclick = function() {
    if (topMiddle.innerHTML !== 'x' && topMiddle.innerHTML !== 'o') {
        if (counter % 2 === 0) {
            topMiddle.innerHTML = 'x';
            counter++;
        } else {
            topMiddle.innerHTML = 'o';
            counter++;
        }
    }
}

topRight.onclick = function() {
    if (topRight.innerHTML !== 'x' && topRight.innerHTML !== 'o') {
        if (counter % 2 === 0) {
            topRight.innerHTML = 'x';
            counter++;
        } else {
            topRight.innerHTML = 'o';
            counter++;
        }
    }
}

middleLeft.onclick = function() {
    if (middleLeft.innerHTML !== 'x' && middleLeft.innerHTML !== 'o') {
        if (counter % 2 === 0) {
            middleLeft.innerHTML = 'x';
            counter++;
        } else {
            middleLeft.innerHTML = 'o';
            counter++;
        }
    }
}

middle.onclick = function() {
    if (middle.innerHTML !== 'x' && middle.innerHTML !== 'o') {
        if (counter % 2 === 0) {
            middle.innerHTML = 'x';
            counter++;
        } else {
            middle.innerHTML = 'o';
            counter++;
        }
    }
}

middleRight.onclick = function() {
    if (middleRight.innerHTML !== 'x' && middleRight.innerHTML !== 'o') {
        if (counter % 2 === 0) {
            middleRight.innerHTML = 'x';
            counter++;
        } else {
            middleRight.innerHTML = 'o';
            counter++;
        }
    }
}

bottomLeft.onclick = function() {
    if (bottomLeft.innerHTML !== 'x' && bottomLeft.innerHTML !== 'o') {
        if (counter % 2 === 0) {
            bottomLeft.innerHTML = 'x';
            counter++;
        } else {
            bottomLeft.innerHTML = 'o';
            counter++;
        }
    }
}

bottomMiddle.onclick = function() {
    if (bottomMiddle.innerHTML !== 'x' && bottomMiddle.innerHTML !== 'o') {
        if (counter % 2 === 0) {
            bottomMiddle.innerHTML = 'x';
            counter++;
        } else {
            bottomMiddle.innerHTML = 'o';
            counter++;
        }
    }
}

bottomRight.onclick = function() {
    if (bottomRight.innerHTML !== 'x' && bottomRight.innerHTML !== 'o') {
        if (counter % 2 === 0) {
            bottomRight.innerHTML = 'x';
            counter++;
        } else {
            bottomRight.innerHTML = 'o';
            counter++;
        }
    }
}

let topRightContents = topRight.innerHTML;