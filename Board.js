var board = document.getElementById('board');
document.getElementById('size_input').value = size;

function CreateBoard() {
    size = document.getElementById('size_input').value
    board = document.getElementById('board');
    board.innerHTML = '';
    for (let i = 0; i < size*size; i++) {
        var square = document.createElement('button');
        square.classList.add('grid');
        square.style.width = board.clientWidth/size + 'px';
        square.style.height = board.clientHeight/size + 'px';
        square.onclick = function(){squareClicked(i)};
        board.appendChild(square);
    }
}

var board2 = document.getElementById('board2');

function CreateBoard2() {
    board2 = document.getElementById('board2');
    board2.innerHTML = '';
    for (let i = 0; i < size*size; i++) {
        var square = document.createElement('div');
        square.classList.add('grid');
        square.style.width = board2.clientWidth/size +'px';
        square.style.height = board2.clientWidth/size + 'px';
        board2.appendChild(square);
    }
}

function squareClicked(index, ship_number, ship_segment) {
    //board.children[index].style.backgroundColor = 'black';
    var img = document.createElement('img');
    img.classList.add('ship_part');
    if (ship_segment == 0) {img.src = "images/shiphead.png";}
    else if (ship_segment == ships[ship_number].length-1) {img.src = "images/shiptail.png";}
    else {img.src = "images/shipbody.png";}
    if (ship_dir[ship_number] == 1) { img.setAttribute('style','transform:rotate(180deg)');}
    else if (ship_dir[ship_number] == 2) { img.setAttribute('style','transform:rotate(90deg)');}
    else if (ship_dir[ship_number] == 3) { img.setAttribute('style','transform:rotate(270deg)');}
    board.children[index].appendChild(img)
}