const arr = [5, 6, 2, 7, 1, 9, 4];
function insertionSort(arr) {
    n = arr.length;
    for (let i = 1; i < n; ++i) {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

insertionSort(arr)
console.log(arr);