function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray = [1, 2, 3, 4, 5];
printArray(myArray); // Works fine

const myStringArray = ['a', 'b', 'c', 'd', 'e'];
printArray(myStringArray); // Works fine

const myMixedArray = [1, 'a', 2, 'b', 3];
printArray(myMixedArray); // Works fine

const myNullArray: any[] = [1, null, 2, null, 3];
printArray(myNullArray); // Throws error: TypeError: Cannot read properties of undefined (reading 'length')