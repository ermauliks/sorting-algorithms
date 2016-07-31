var a = [4,3,2,1,5];
var hole, value;
var n = a.length;

for (var i=1; i < n; i++) {
  value = a[i];
  hole = i;
  while (hole > 0 && value < a[hole-1]) {
    a[hole] = a[hole-1];
    hole--;
  }
  a[hole]=value;
}

for (var i=0; i<n; i++) {
  console.log(a[i]);
}
