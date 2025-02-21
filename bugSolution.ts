function printArray(arr: (number | string | null)[]): void {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null) {
      console.log(arr[i]);
    } else {
      console.log('Null value encountered'); // Handle null values gracefully 
    }
  }
}

const myNullArray: (number | null)[] = [1, null, 2, null, 3];
printArray(myNullArray); //Handles the null values gracefully

//Alternative solution using optional chaining (?.)
function printArray2(arr: (number | string | null)[]): void {
    for (let i = 0; i < arr?.length; i++) {
        console.log(arr[i]);
    }
}

const myNullArray2: (number | null)[] = [1, null, 2, null, 3];
printArray2(myNullArray2); //This will log 1, undefined, 2, undefined, 3, so handle it as needed.