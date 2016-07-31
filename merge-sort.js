console.log(mergeSort([2,3,5,6,4,7,8,2,3,6,4,-7,8,2,3,5,6,4,7,8]));

function mergeSort(items) {
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right), items);
}

function merge(left, right, original) {
  var i=0, j=0, k=0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      original[k] = left[i++];
    } else {
      original[k] = right[j++];
    }
    k++;
  }
  
  while (i < left.length) 
    original[k++] = left[i++];
  while (j < right.length)
    original[k++] = right[j++];

  return original;
}
