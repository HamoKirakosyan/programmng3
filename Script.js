var matrix = [];
var side = 10
socket = io();

// function matrixGenerator(size, countGrass, countGrassEater, predatorCount,WaterCount,FishCout) {
    // for (let i = 0; i < size; i++) {
        // matrix.push([])
        // for (let j = 0; j < size; j++) {
            // matrix[i].push(0)
        // }
// 
    // }
    // for (let k = 0; k < WaterCount; k++){
        // let x = Math.floor(random(size))
        // let y = Math.floor(random(size))
	// if (matrix[y][x] == 0) {
            // matrix[y][x] = 4
        // }
        // else {
	    // k--
        // }
    // }
    // for (let k = 0; k < countGrass; k++) {
        // let x = Math.floor(random(size))
        // let y = Math.floor(random(size))
        // if (matrix[y][x] == 0) {
            // matrix[y][x] = 1
        // }
        // else {
            // k--
        // }
    // }
    // for (let k = 0; k < FishCout; k++) {
        // let x = Math.floor(random(size))
        // let y = Math.floor(random(size))
        // if (matrix[y][x] == 4) {
            // matrix[y][x] = 5
        // }
        // else {
            // k--
        // }
    // }
    // for (let k = 0; k < countGrassEater; k++) {
        // let x = Math.floor(random(size))
        // let y = Math.floor(random(size))
        // if (matrix[y][x] == 0) {
            // matrix[y][x] = 2
        // }
        // else {
            // k--
        // }
    // }
    // for (let k = 0; k < predatorCount; k++) {
        // let x = Math.floor(random(size))
        // let y = Math.floor(random(size))
        // if (matrix[y][x] == 0) {
            // matrix[y][x] = 3
        // }
        // else {
            // k--
        // }
    // }
// }
function setup() {
    // p5.disableFriendlyErrors = true;
    // let size = +prompt("Write Map Size(if 100 it means 100*100=10000 blocks)")
    // let grasscount = +prompt("Write Count of grass")
    // let grasseater = +prompt("Write Count of grassEater")
    // let eater = +prompt("Write Count of predators")
    // let water = +prompt("Write Count of water")
    // let fish = +prompt("Write Count of Fish")
    // matrixGenerator(size,grasscount,grasseater,eater,water,fish)
    frameRate(60);
    createCanvas(10 * side, 10 * side);
    background('#acacac');

//     for (let i = 0; i < matrix.length; i++) {
//         for (j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] == 1) {
//                 let grass = new Grass(j, i)
//                 grassArr.push(grass)
//             }
//             else if (matrix[i][j] == 2) {
//                 let grassEater = new Grasseater(j, i)
//                 grassEaterArr.push(grassEater)
//             } 
// 	    else if (matrix[i][j] == 3) {
//                 let eater = new Eater(j, i)
//                 EaterArr.push(eater)
//             }
// 	    else if (matrix[i][j] == 4){
// 		let water = new Water(i,j)
// 		WaterArr.push(water)
// 	    }
// 	    else if (matrix[i][j] == 5){
// 		let fish = new Fish(i,j)
// 		FishArr.push(fish)
// 	    }
//         }
//     }
// }

function drawMatrix(data){
    matrix = data.matrix;
    // for (let opp = 0; opp < grassEaterArr.length; opp++) {
    //     grassEaterArr[opp].eat()
    // }
    // for (let op = 0; op < grassArr.length; op++) {
    //     grassArr[op].mul()
    // }
    // for (let oo = 0; oo < EaterArr.length; oo++) {
    //     EaterArr[oo].move()
    // }
    // for (let oo = 0; oo < FishArr.length; oo++) {
    //     FishArr[oo].move()
    // }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("Yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("Red");
            }
	    else if (matrix[y][x] == 4) {
                fill("Blue");
            }
	    else if (matrix[y][x] == 5) {
                fill("Orange");
            }
            rect(x * side, y * side, side, side);
        }
    }
}
}
socket.on("matrix",drawMatrix);