// let random = require('./Random')
let LivingCreature = require('./LivingCreature')
module.exports = class Fish extends LivingCreature{
	constructor(x,y){
		super(x,y,index)
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
    move() {
        this.getnewcordinates()
        let emptyCells = random(this.chooseCell(4))
        if (emptyCells) {
            let x = emptyCells[0]
            let y = emptyCells[1]
            matrix[this.y][this.x] = 4
            matrix[y][x] = 5
            this.x = x
            this.y = y
        }
    }
}