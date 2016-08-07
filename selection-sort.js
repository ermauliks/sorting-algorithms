var a = [5,4,3,2,1];

selectionSort();

console.log("Original", a);

function selectionSort() {
  var min,
      n = a.length;
  for (var i=0; i<n-1; i++) {
    min = i;
    for (j=i; j < n; j++) {
      if (a[j] < a[min]) {
        swap (min, j);
      }
    }
  }
}

function swap (min, j) {
  var temp = a[min];
  a[min] = a[j];
  a[j] = temp;
}

console.log("Sorted", a);
