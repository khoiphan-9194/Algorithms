

const arr = [5, 6, 2, 7, 1, 9, 4];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element+" -")
// }



function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}




console.log("-----------------------Ascending Order---------------------------")
function partition_a(arr, low, high) {
    let i = low - 1; // this will return the partitiion index
    let pivot = arr[high];

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // let temp = arr[i];
            // arr[i] = arr[j];
            // arr[j] = temp;
            [arr[i], arr[j]] = [arr[j], arr[i]]; //swap elements
        }
    }

    // let temp = arr[i+1];
    // arr[i+1] = arr[high];
    // arr[high] = temp;
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {

        let pivot = partition_a(arr, low, high)
        quickSort(arr, low, pivot - 1)
        quickSort(arr, pivot + 1, high)
    }
}



quickSort(arr, 0, arr.length - 1)

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)

}

//-------------------------------------------------------
console.log("-----------------------Descending Order---------------------------")
function partition_b(arr, left, right) {
    pivot = arr[left];
    i = left;
    for (j = left + 1; j <= right; j++) {
        if (arr[j] > pivot) {
            i = i + 1;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    temp = arr[i];
    arr[i] = arr[left];
    arr[left] = temp;

    return i;

}

function quick_sort_descending(arr, left, right) {
    if (left < right) {
        pivot = partition_b(arr, left, right);
        quick_sort_descending(arr, left, pivot - 1);
        quick_sort_descending(arr, pivot + 1, right);
    }
}


quick_sort_descending(arr, 0, arr.length - 1)

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)

}