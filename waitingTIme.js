function waitingTime(array, serial) {
  let totalTime = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    totalTime += array[i];
  }
}

waitingTime([3, 4, 6, 8, 11], 10);
