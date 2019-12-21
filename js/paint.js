const painter = {};
painter.c = 'black';
painter.tool = 'pencil';
painter.colors = ['pink', 'yellow', 'blue', 'red', 'green', 'black'];


painter.start = () => {

}

painter.insertColors = () => {
    for (const color of painter.colors) {
        var newElement = document.createElement('div');
        // newElement.innerHTML = color;
        newElement.className = 'colorBtn';
        newElement.style.backgroundColor = color;
        newElement.style.width = '40px';
        newElement.style.height = '40px';
        // newElement.style.border = 'black 1px solid';
        document.querySelector('#menu-color').appendChild(newElement);
    }
}



painter.insertColors();
var canvas = document.querySelector('#canvas');
painter.paint = () => {
    var newElement = document.createElement('div');
    document.body.appendChild(newElement);
    newElement.style.position = 'absolute';
    if (painter.tool == 'brush') {
        newElement.style.backgroundColor = painter.c;
        var x = event.pageX;
        var y = event.pageY;
        newElement.style.width = '7px';
        newElement.style.height = '7px';
        newElement.style.left = `${x}px`;
        newElement.style.top = `${y}px`;
    } else if (painter.tool == 'eraser') {
        newElement.style.backgroundColor = 'white';
        var x = event.pageX;
        var y = event.pageY;
        newElement.style.width = '40px';
        newElement.style.height = '40px';
        newElement.style.left = `${x}px`;
        newElement.style.top = `${y}px`;
    } else if (painter.tool == 'pencil') {
        newElement.style.backgroundColor = painter.c;
        var x = event.pageX;
        var y = event.pageY;
        newElement.style.width = '3px';
        newElement.style.height = '3px';
        newElement.style.left = `${x}px`;
        newElement.style.top = `${y}px`;
    }
}


var isMouseDown = false;

window.addEventListener('mouseup', () => {
    isMouseDown = false;
});
canvas.addEventListener('mousedown', () => {
    isMouseDown = true;
    painter.paint();
});
canvas.addEventListener('mousemove', () => {
    if (isMouseDown)
        painter.paint();
});


document.querySelector('#menu-color').addEventListener('click', () => {
    var whatColor = event.target;
    var c = whatColor.style.backgroundColor;
    painter.c = c;

});

document.querySelector('#tool-bar').addEventListener('click', () => {
    var whatTool = event.target;
    var t = whatTool.id;
    painter.tool = t;
    console.log(whatTool);
    console.log(painter.tool);
});





// canvas.addEventListener("mousedown", painter.paint);
// canvas.addEventListener('mousemove', painter.paint);
// canvas.addEventListener('mouseup', painter.up);


// var isMouseDown = false;
// canvas.onmousedown = function() { isMouseDown = true };
// canvas.onmouseup = function() { isMouseDown = false };
// canvas.onmousemove = function() { if (isMouseDown) { painter.paint } };