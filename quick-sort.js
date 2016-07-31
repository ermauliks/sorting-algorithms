var A = [5,4,3,2,6,4,3,2];
console.log(quickSort(A, 0, A.length-1));

function quickSort(items, left, right) {
   var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

function partition(items, left, right) {
    var pivot   = items[right],
        i       = left,
        j       = right;

  while (i <= j) {
        while (items[i] < pivot)
            i++;

        while (items[j] > pivot)
            j--;

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function swap(items, a, b) {
  var temp = items[a];
  items[a] = items[b];
  items[b] = temp;
}
