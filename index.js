// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO


// Write a program that multiplies each entry in the following array by 2。
// TODO should output [2,4,6,8,10]
var a = [1, 2, 3, 4, 5];
for (var i = 0; i < a.length; i++) {
    a[i] = a[i] * 2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.join(" "));

// case 2 output: 'Red+Green+White+Black'
console.log(colors.join("+"));

// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(","));


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var a = [5, 1, 8, 10, 4];
for (var i = 0; i < a.length; i++) {
  for (var j = i + 1; j < a.length; j++) {
    if (a[i] < a[j]) {
      var temp = a[j]
      a[j] = a[i]
      a[i] = temp
    }
  }
}
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
a.sort();
var max_count = 1, res = a[0], curr_count = 1;
for (var i = 1; i < a.length; i++) {
    if (a[i] == a[i-1]) {
        curr_count += 1;
    } else {
        if (curr_count > max_count) {
            max_count = curr_count;
            res = a[i - 1];
        }
        curr_count = 1;
    }
    if (curr_count > max_count) {
        max_count = curr_count;
        res = a[i - 1];
    }
  }
  console.log(res);