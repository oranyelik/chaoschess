const Piece = require('./piece')

describe('Chaos Chess', () => {
    describe('all pieces move like a queen', () => {
        let king
        beforeEach(() => {
            let startingPosition = 'A5'
            king = new Piece({
                startingPosition
            })
        })

        test('king should move up', () => {
            king.moveUp()

            expect(king.position).toBe('A6')
        })

        test('king should move right', () => {
            king.moveRight()

            expect(king.position).toBe('B5')
        })

        test('king should move up and right', () => {
            king.moveRight()
            king.moveUp()

            expect(king.position).toBe('B6')
        })
    })
})
