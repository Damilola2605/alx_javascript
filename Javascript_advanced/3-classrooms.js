#!/usr/bin/node

function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }
  const students = [];

  for (let i = 0; i < numberOfStudents; i++) {
    const seatNumber = i + 1;
    const getSeatNumber = studentSeat(seatNumber);
    students.push(getSeatNumber);
  }

  return students;
}

const classroom = createClassRoom(10);
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
