let board = [
    ['', '',''],
    ['', '',''],
    ['', '',''],
];

let players = ['X', 'O'];
let currentPlayer;
let available = [];

function setup() {
  createCanvas(400, 400);
  frameRate(1);
  currentPlayer = floor(random(players.length));
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
        available.push([i,j]);
       // if (random(1) < 0.5) {
       //   currentPlayer = players[0];
       // } else {
       //   currentPlayer = players[1];
       // }
    }
  }
}

function equals3(a,b,c) {
  return (a == b && b == c && a != '');
}

function checkWinner(){
    let winner = null;
    //horizontal
    for (let i = 0; i < 3; i++) {
      if (equals3(board[i][0], board[i][1], board[i][2])) {
        winner = board[i][0];
      }
    }
    //vertical
    for (let i = 0; i < 3; i++) {
      if (equals3(board[0][i], board[1][i], board[2][i])) {
        winner = board[0][i];
      }
    }
    //diagonal
    if (equals3(board[0][0], board[1][1], board[2][2])) {
      winner = board[0][0];
    }
    if (equals3(board[2][0], board[1][1], board[0][2])) {
      winner = board[2][0];
    }
    if (winner == null && available.length == 0) {
      return 'tie';
    } else {
      return winner;
    }
}
function nextTurn() {
  print("player");
  print(currentPlayer);
  //let index = floor(random(available.length));
  //let spot = available.splice(index,1)[0];
  if(mouseX < 134){
    i = 0;
  }
  if (mouseX >= 134 && mouseX < 268) {
    i = 1;
  }
  if (mouseX >= 268) {
    i = 2;
  }
  if(mouseY < 134){
    j = 0;
  }
  if (mouseY >= 134 && mouseY < 268) {
    j = 1;
  }
  if (mouseY >= 268) {
    j = 2;
  }
  board[i][j] = players[currentPlayer];
  currentPlayer = (currentPlayer + 1) % players.length;
}

function mousePressed() {
 nextTurn();
}

function draw() {
    print(board[0]);
    print(board[1]);
    print(board[2]);
    background(255);
    let w = width / 3;
    let h = height / 3;

    line(w,0,w,height);
    line(w*2,0,w*2,height);
    line(0,h,width,h);
    line(0,h*2,width,h*2);

    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        let x = w * i + w/2;
        let y = h * j + h/2;
        let spot = board[i][j];
        textSize(32);
        strokeWeight(4);
        if (spot == players[1]) {
          fill(color('red'));
          square(x - 66, y - 66, 133);
         // ellipseMode(CORNER);
         // ellipse(x,y,w/2);
        } else if (spot == players[0]) {
          fill(color('blue'));
          square(x - 66, y - 66, 133);
        }
        //text(spot, x, y);
      }
    }

    let result = checkWinner();
    print("result");
    print(result);
    if (result != null) {
      noLoop();
      createP(result).style('color', '#FFF').style('font-size', '32pt');
  // } else {
 //   nextTurn();
    }
}
