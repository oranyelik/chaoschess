const Piece = require('./piece')

describe('Chaos Chess', () => {
    describe('all pieces move like a queen', () => {
        test('king should move left', () => {
            let startingPosition = 'A5'
            let king = new Piece({
                position: startingPosition
            })

            king.moveUp()

            expect(king.position).toBe('B5')
        })

        test('king should move right', () => {
            let startingPosition = 'A5'
            let king = new Piece({
                position: startingPosition
            })

            king.moveRight()

            expect(king.position).toBe('A6')
        })

        test('king should move up and right', () => {
            let startingPosition = 'A5'
            let king = new Piece({
                position: startingPosition
            })

            king.moveRight()
            king.moveUp()

            expect(king.position).toBe('B6')
        })
    })
})
