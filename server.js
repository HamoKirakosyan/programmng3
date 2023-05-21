var express = require("express");
var app = express();
var server = require('http').createServer(app);
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);

grassArr = []
grassEaterArr = []
EaterArr = []
WaterArr = []
matrix = [];
FishArr = []

LivingCreature = require('../programmng3/Modules/LivingCreature')
Eater = require('../programmng3/Modules/ClassEater')
Fish = require('../programmng3/Modules/ClassFish')
Grass = require('../programmng3/Modules/ClassGrass')
GrassEater = require('../programmng3/Modules/ClassGrassEater')
Water = require('../programmng3/Modules/ClassWater')

function matrixGenerator(size, countGrass, countGrassEater, predatorCount,WaterCount,FishCout) {
   for (let i = 0; i < size; i++) {
       matrix.push([])
       for (let j = 0; j < size; j++) {
           matrix[i].push(0)
       }

   }
   for (let k = 0; k < WaterCount; k++){
       let x = Math.floor(random(size))
       let y = Math.floor(random(size))
  if (matrix[y][x] == 0) {
           matrix[y][x] = 4
       }
       else {
      k--
       }
   }
   for (let k = 0; k < countGrass; k++) {
       let x = Math.floor(random(size))
       let y = Math.floor(random(size))
       if (matrix[y][x] == 0) {
           matrix[y][x] = 1
       }
       else {
           k--
       }
   }
   for (let k = 0; k < FishCout; k++) {
       let x = Math.floor(random(size))
       let y = Math.floor(random(size))
       if (matrix[y][x] == 4) {
           matrix[y][x] = 5
       }
       else {
           k--
       }
   }
   for (let k = 0; k < countGrassEater; k++) {
       let x = Math.floor(random(size))
       let y = Math.floor(random(size))
       if (matrix[y][x] == 0) {
           matrix[y][x] = 2
       }
       else {
           k--
       }
   }
   for (let k = 0; k < predatorCount; k++) {
       let x = Math.floor(random(size))
       let y = Math.floor(random(size))
       if (matrix[y][x] == 0) {
           matrix[y][x] = 3
       }
       else {
           k--
       }
   }
}

// generating matrix
let size = 10
let grasscount = 100
let grasseater = 15
let eater = 15
let water = 0
let fish = 0
matrixGenerator(size,grasscount,grasseater,eater,water,fish)

// adding creatures
for (let i = 0; i < matrix.length; i++) {
   for (j = 0; j < matrix[i].length; j++) {
       if (matrix[i][j] == 1) {
           let grass = new Grass(j, i)
           grassArr.push(grass)
       }
       else if (matrix[i][j] == 2) {
           let grassEater = new Grasseater(j, i)
           grassEaterArr.push(grassEater)
       } 
  else if (matrix[i][j] == 3) {
           let eater = new Eater(j, i)
           EaterArr.push(eater)
       }
  else if (matrix[i][j] == 4){
 let water = new Water(i,j)
 WaterArr.push(water)
  }
  else if (matrix[i][j] == 5){
 let fish = new Fish(i,j)
 FishArr.push(fish)
  }
   }
};

//drawing scene
function MovingCreatures(){
   for (let opp = 0; opp < grassEaterArr.length; opp++) {
       grassEaterArr[opp].eat()
   }
   for (let op = 0; op < grassArr.length; op++) {
       grassArr[op].mul()
   }
   for (let oo = 0; oo < EaterArr.length; oo++) {
       EaterArr[oo].move()
   }
   for (let oo = 0; oo < FishArr.length; oo++) {
       FishArr[oo].move()
   }
   let sendData = {
      matrix: matrix
   }

   io.socket.emit("matrix",sendData)
}


MovingCreatures()
