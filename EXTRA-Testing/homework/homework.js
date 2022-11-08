const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];



  function checkSeatStatus(row, number) {
    if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');
  
    let rowIndex = getRowNumber(row);
    let layoutRows = layout[rowIndex];
    let seat = layoutRows[number];
    return seat.booked;
  }



function getRowNumber(letter) {
return letter.charCodeAt() -65;
}


function book(row, col){
    if(checkSeatStatus (row, col))
    return 'Seat in ' + row + col + ' is already booked';
    let rowIndex = getRowNumber(row);
    let column = layout [rowIndex];
    let seat = column[col];
    seat.booked =true;

    return 'Seat in ' +row + col + ' successfully booked';
};


module.exports = {
    checkSeatStatus,
    getRowNumber,
    book
  };


//commit