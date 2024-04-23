// Task №1

// Create a function that parses a string into an integer (like the js function parseInt, but without the base parameter)
// Example:
//   myParseInt('123') + 2
// Should output 125, and not '1232'
// should be actual string parse, and not +string or anything like that

// Option 1:

function myParseInt(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (!isNaN(char)) {
      result = result * 10 + parseInt(char);
    } else {
      break;
    }
  }
  return result;
}

// Example usage:
console.log(myParseInt('123') + 2); // Output: 125

// Option 2:

const myParseInt = str => {
  let result = 0;
  for (const char of str) {
    if (!isNaN(char)) {
      result = result * 10 + parseInt(char);
    } else {
      break;
    }
  }
  return result;
};

// Example usage:
console.log(myParseInt('123') + 2); // Output: 125

// Option 3:

const myParseInt = str => {
  const match = str.match(/^\d+/);
  return match ? parseInt(match[0]) : NaN;
};

// Example usage:
console.log(myParseInt('123') + 2); // Output: 125

// Task №2

// Create a function that prints a given matrix in spiral
// the function should accept any matrix size [MxN]
//
// Example with a 3x3 matrix:
//   const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//
// For the above matrix, the output should be:
//   1 2 3 6 9 8 7 4 5

// Option 1:

const printSpiral = matrix => {
  let result = [];

  // Define boundaries
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Print top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Print right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Print bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Print left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result.join(' ');
};

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(printSpiral(matrix)); // Output: 1 2 3 6 9 8 7 4 5

// Option 2:

const printSpiral = matrix => {
  const result = [];

  const printLayer = (matrix, top, bottom, left, right) => {
    // Base case
    if (top > bottom || left > right) return;

    // Print top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Print right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Print bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Print left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }

    // Recursively print the inner layer
    printLayer(matrix, top, bottom, left, right);
  };

  printLayer(matrix, 0, matrix.length - 1, 0, matrix[0].length - 1);
  return result.join(' ');
};

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(printSpiral(matrix)); // Output: 1 2 3 6 9 8 7 4 5
