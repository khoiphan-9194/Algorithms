// The array must be sorted for binary search to work.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(array, element) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === element) {
            // We must return the mid value, which represents the index value, once we have found the element being searched for.
            return mid;
        } else if (array[mid] < element) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    // If we do not find the element we need to return false.
    return -1;
}

/*
Step 1. Create a function that accepts a sorted array and the element we are searching for.
Step 2. Define two variable which represent the start index and the end index of the given array.
Step 3. While start index is less than or equal to end index we continue to loop through the given array.
Step 4. Define a variable which represents the middle index of the given array.
Step 5. If the given element is at the given array's middle index, return that middle index number.
Step 6. Else if the given array's middle index less than the given element, start index equals the middle index plus one.
Step 7. Else update the end index to the middle index minus one.
Step 8. After exiting the loop return '-1' because the given element was not found.
*/