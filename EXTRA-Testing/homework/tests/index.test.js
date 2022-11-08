
const { checkSeatStatus, getRowNumber,book } = require('../homework');
//const checkSeatStatus = require('../homework.js');

describe('checkSeatStatus', function () {
        it('checkSeatStatus should be a function', function () {
            expect(typeof checkSeatStatus).toBe('function');
        });

        it('should throw a TypeError if second parameter is not a string', function () {
            expect(() => {
                return checkSeatStatus(9);
            }).toThrow(new TypeError('First parameter is not a string'));
        });

        it('should throw a TypeError if second parameter is not a number', function () {
            expect(() => {
                return checkSeatStatus('hola', '9');
            }).toThrow(new TypeError('Second parameter is not a number'));
        });
    });

 describe('getRowNumber', () => {
  it('should return 1 if the letter given is an A', function () {
          expect(getRowNumber('A')).toBe(0);
      });
  
  it('should return 3 if the letter given is a C', function () {
          expect(getRowNumber('C')).toBe(2);
      });


  it('should return true if thgite given seat defined by row and column is booked', function () {
          expect(checkSeatStatus('A', 1)).toBe(true);
      });
  
  it('should return false if the given seat defined by row and column is not booked', function () {
          expect(checkSeatStatus('E', 3)).toBe(false);
      });
 });


  describe('book', () => {

    it('should return "Seat in XX successfully booked" if the given seat is not booked', function () {
            expect(book('E', 3)).toBe('Seat in E3 successfully booked');
        });
    
    it('should return "Seat in XX is already booked" if the given seat is already booked', function () {
            expect(book('A', 1)).toBe('Seat in A1 is already booked');
        });
  });

  //commit
  