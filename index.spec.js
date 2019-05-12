
describe('Chaos Chess', () => {
    describe('king', () => {
        test('move like a queen', () => {
            let startingPosition = 'A5'
            let up = 'B5'
            let king = {
                position: startingPosition,
                moveTo(direction) {

                }
            }

            king.moveTo(up)

            expect(king.position).toBe('B5')
        })
    })
})
