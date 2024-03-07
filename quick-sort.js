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





function partition(arr, low, high) {
    let i = low - 1; // this will return the partitiion index
    let pivot = arr[high];

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
           // swap(arr, arr[i], arr[j])

            // let temp = arr[i];
            // arr[i] = arr[j];
            // arr[j] = temp;
            [arr[i], arr[j]] = [arr[j], arr[i]]; //swap elements
        }
    }
    //  swap(arr, arr[i+1], arr[high]);

    // let temp = arr[i+1];
    // arr[i+1] = arr[high];
    // arr[high] = temp;
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];



    return i+1;
}

function quickSort(arr,low,high)
{
    if(low<high)
    {
        
    let pivot = partition(arr,low,high)
        quickSort(arr,low,pivot-1)
        quickSort(arr,pivot+1,high)
    }
}

// console.log(partition(arr,0,arr.length-1));

quickSort(arr,0,arr.length-1)

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
    
}

