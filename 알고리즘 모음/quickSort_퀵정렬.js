const fs ='10\n5\n2\n3\n1\n4\n2\n3\n5\n1\n7'
const [N,...input] = fs.toString().split('\n').map(item => +item)

let answer =  quickSort(input,0,N-1)
console.log(answer);

function quickSort(array, left , right ) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);
  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);
  return array;
}

function divide(array, left, right, pivot) {
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }

    if (left <= right) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}