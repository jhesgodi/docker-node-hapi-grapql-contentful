import expect from 'expect'

describe('Array functions tests', () => {
  describe('#indexOf()', () => {
    it('Shoul return -1 when the value is not present', () => {
      expect(
        [1, 2, 3].indexOf(4)
      ).toBe(-1)
    })
  })
})
