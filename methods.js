let arr1 = [1,2,3,4,12,22,43,12,11];
let num = 12345;

// toString() Method converts array to string
console.log("array string", typeof arr1.toString()) 
console.log("number to string", num.toString())

// join() method joins the array with provided element
console.log("array join: ", arr1.join(' and '))


//pop method, changes the array and returns the popped element
let popItem = arr1.pop();
console.log("POP", arr1, popItem)

//push: modifies the original array
arr1.push('98');
console.log("Push array", arr1)

//shift(): it removes first element of the array and then returns it
console.log("Shift array", arr1, arr1.shift());

//unshift(): it adds element to the first position in the array modifies the array, it returns the length of new array.
arr1.unshift(111);
console.log("Unshift array: ", arr1);

//delete(): method deletes the element of the provided position but the length remians the same
delete arr1[0]
console.log("delete(0): ", arr1)
arr1.shift();

//concat(), joins two array
arr2 = [1,2,3,4,5]
arr3 = [6,7,8,9,10]
console.log("arr2.concat(arr3): ", arr2.concat(arr3)) 

//it sorts the strings like it sees the first element and sorts accordingly

arr1.sort();
console.log("arr1.sort():", arr1 )
//it should be modified to sort acording to the need for example:
//to sort the numbers according to the number then
arr1.pop()
let compare = (a, b) => {
    return a - b
}
sortedArr = arr1.sort(compare)
console.log("sort(arr1): ", sortedArr );

//to sort in decending order we will change the compare function accordingly like:

compare = (a, b) => {
    return b - a
}

console.log("sorted in decending order: ", arr1.sort(compare))

//arr.reverse() this helps to reverse the array
console.log("arr1.reverse(): ", arr1.reverse()) 

//arr1.splice(position, number of elements to remove, elements comma seperated)
// it returns deleted array

let deleteArray = arr1.splice(1,1,1111,2222,3333,4444)
console.log("Delete number: ", deleteArray)
console.log("arr1.splice()", arr1)


//arr1.slice() this helps to break an arrya from the provided position to the provided position
//does not modify theoriginal array

slicedArr = arr1.slice(5);
console.log("slice(from, to(not included)): ", arr1, "sliced Array: ", slicedArr)

slicedArr = arr1.slice(1,4);
console.log("slice(1, 4): ", slicedArr)
