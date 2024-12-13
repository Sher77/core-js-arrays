function swapHeadAndTail(arr) {
  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(Math.ceil(arr.length / 2));
  const mid = Math.floor(arr.length / 2);

  if (arr.length === 1) {
    return arr;
  }

  if (arr.length % 2 === 0) {
    return [...right, ...left];
  }

  return [...right, arr[mid], ...left];
}

console.log(swapHeadAndTail([1, 2, 3, 4, 5]));
console.log(swapHeadAndTail([1]));
console.log(swapHeadAndTail([1, 2]));
console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6, 7, 8]));
