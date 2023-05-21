// let random = require('./Random')
let LivingCreature = require('./LivingCreature')
const random = require('./Random')
module.exports = class Eater extends LivingCreature {
    constructor(x, y) {
      super(x,y,index)
      this.energy = 8
      this.gender = random(1)
      this.mul = 0
      this.directions = []
    }
    refreshCordinates() {
      this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
      ];
    }
    mula() {

      // Multiplying always

      if (this.mul >= 10) {
        this.refreshCordinates()
        let randomSpace = random(this.directions)
        let x = randomSpace[0]
        let y = randomSpace[1]
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
          matrix[y][x] = 3
          let eater = new Eater(x, y)
          EaterArr.push(eater)
        }
        this.mul = 0

        // Multiplying only with other gender without timeout

      //   this.refreshCordinates()
      //   let squareWithOtherEater = chooseCell(3)
      //   for(var i = 0; i < this.squareWithOtherEater.length; i++){
      //     if (squareWithOtherEater[i].gender == 1 && this.gender == 0){
      //       let freeSpace = this.chooseCell(0)
      //       let randomSpace = random(freeSpace)
      //       if(randomSpace){
      //         let x = randomSpace[0]
      //         let y = randomSpace[1]
      //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {;
      //           matrix[y][x] = 3;
      //           let eater = new Eater(x, y);
      //           EaterArr.push(eater);
      //         };
      //       };
      //     this.mul = 0;
      //     };
        };
        this.mul = this.mul + 1;
      };
      
    eatgrass() {
      this.refreshCordinates()
      let foundedGrasses = random(this.chooseCell(1))
      let x = foundedGrasses[0]
      let y = foundedGrasses[1]
      matrix[y][x] = 3
      matrix[this.y][this.x] = 0
      for (let i = 0; i < grassArr.length; i++) {
        if (grassArr[i].x == x && grassArr[i].y == y) {
          grassArr.splice(i, 1)
        }
      }
      this.x = x
      this.y = y
      this.mula()
    }
    eat() {
      this.refreshCordinates()
      let foundedGrassEater = random(this.chooseCell(2))
      let x = foundedGrassEater[0]
      let y = foundedGrassEater[1]
      matrix[y][x] = 3
      matrix[this.y][this.x] = 0
      this.x = x
      this.y = y
      for (let i = 0; i < grassEaterArr.length; i++) {
        if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
          grassEaterArr.splice(i, 1)
        }
      }
      this.mula()
    }
    move() {
      this.refreshCordinates()
      if (this.energy > 0) {
        let foundedGrassEater = random(this.chooseCell(2))
        let foundedGrasses = random(this.chooseCell(1))
        if (foundedGrassEater) {
          this.eat()
          this.energy = 8
        } else {
          if (foundedGrasses) {
            this.eatgrass()
            this.energy = 8
          }
          else {
            let randomSpace = random(this.chooseCell(0))
            if (randomSpace) {
              let x = randomSpace[0]
              let y = randomSpace[1]
              if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                matrix[y][x] = 3
                matrix[this.y][this.x] = 0
                this.x = x
                this.y = y
              }
  
            }
            this.energy = this.energy - 1
          }
        }
      }
      else {
        this.die()
      }
    }
    die() {
      // this.refreshCordinates()
      matrix[this.y][this.x] = 0
      for (let i = 0; i < EaterArr.length; i++) {
        if (EaterArr[i].x == this.x && EaterArr[i].y == this.y) {
            EaterArr.splice(i, 1)
        }
      }
    }
    chooseCell(character) {
      this.refreshCordinates()
      let found = [];
      for (let i in this.directions) {
        let x = this.directions[i][0];
        let y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
          if (matrix[y][x] == character) {
            found.push(this.directions[i]);
          }
        }
  
      }
      return found;
  
    }
  }