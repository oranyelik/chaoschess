const rows = [ '1', '2', '3', '4', '5', '6', '7', '8' ]
const columns = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ]

class Piece {
    constructor({ startingPosition }) {
        this.position = startingPosition
    }

    moveUp() {
        let column = this.position[0]
        let row = this.position[1]
        row = parseInt(row) + 1

        this.position = `${column}${row}`
    }

    moveRight() {
        let column = this.position[0]
        column = column.charCodeAt() + 1
        column = String.fromCharCode(column)

        let row = this.position[1]

        this.position = `${column}${row}`
    }
}

module.exports = Piece
