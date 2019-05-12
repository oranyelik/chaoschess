class Piece {
    constructor(startingPosition) {
        this.position = startingPosition
    }

    moveUp() {
        this.position = 'B5'
    }

    moveRight() {
        this.position = 'A6'
    }
}

module.exports = Piece
