var a = [4,3,2,1,5];
var min;
var n = a.length;

for (var i=0; i < n; i++) {
  for (j=0; j < n-1; j++) {
    if (a[j] > a[j+1]) {
      swap (a, j, j+1);
    }
  }
}

for (var i=0; i<n; i++) {
  console.log(a[i]);
}

function swap (a, j, k) {
  var temp = a[j];
  a[j] = a[k];
  a[k] = temp;
}
