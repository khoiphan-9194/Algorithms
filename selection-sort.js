const arr = [5, 6, 2, 7, 1, 9, 4];




// function swap(arr, left, right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
// }


function selectionSort(arr)
{
    let minIndex;

    for (let i = 0; i < arr.length-1; i++) {
        
        minIndex=i;
        for(let j =i+1; j<arr.length;j++)
        {
            if(arr[minIndex]> arr[j])
            {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; //swap elements
    }
    console.log("array sorted acsending order")
}

selectionSort(arr)
console.log(arr);

function selectionSortDes(arr)
{
    let maxIndex;

    for (let i = 0; i < arr.length-1; i++) {
        
        maxIndex=i;
        for(let j =i+1; j<arr.length;j++)
        {
            if(arr[maxIndex]< arr[j])
            {
                maxIndex = j;
            }
        }
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]; //swap elements
    }
    console.log("array sorted in descending order")
}

selectionSortDes(arr)
console.log(arr);