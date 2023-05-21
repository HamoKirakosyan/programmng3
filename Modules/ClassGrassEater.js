// let random = require('./Random')
let LivingCreature = require('./LivingCreature')
module.exports = class Grasseater extends LivingCreature {
    constructor(x, y) {
        super(x,y,index)
        this.energy = 8
        this.gender = random(1) // leter will be added
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

        // var newCell = random(this.chooseCell(0));
        // if (newCell) {
        //     var newGrassEater = new Grasseater(newCell[0], newCell[1], this.index);
        //     grassEaterArr.push(newGrassEater);
        //     matrix[newCell[1]][newCell[0]] = 2;
        // }
    }
    getnewcordinates() {
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
    chooseCell(character) {
        this.getnewcordinates()
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

    die() {
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                matrix[this.y][this.x] = 0
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }

    eat() {
        this.getnewcordinates()
        let grassCells = random(this.chooseCell(1))

        if (!grassCells) {
            this.energy--
            if (this.energy <= 0) {
                this.die();
                return;
            }
            this.move()
        } else {
            this.energy = 8
            this.mula();
            let x = grassCells[0]
            let y = grassCells[1]
            matrix[this.y][this.x] = 0
            matrix[y][x] = 2
            this.x = x
            this.y = y
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        }
    }

    move() {
        this.getnewcordinates()
        let emptyCells = random(this.chooseCell(0))
        if (emptyCells) {
            let x = emptyCells[0]
            let y = emptyCells[1]
            matrix[this.y][this.x] = 0
            matrix[y][x] = 2
            this.x = x
            this.y = y
        }
    }
}
