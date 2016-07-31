var a = [5,4,3,2,1];
var min;
var n = a.length;

for (var i=0; i<n-1; i++) {
  min = i;
  for (j=i; j < n; j++) {
    if (a[j] < a[min]) {
      swap (a, min, j);
    }
  }
}

for (var i=0; i<n; i++) {
  console.log(a[i]);
}

function swap (a, min, j) {
  var temp = a[min];
  a[min] = a[j];
  a[j] = temp;
}
