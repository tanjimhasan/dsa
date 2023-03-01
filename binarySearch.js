let sortedArray = [6,19,24,27,36,51,40,80,101]; 
let ascendingArray = [6,19,24,27,36,51,40,80,101];
let descendingArray = [100,89,75,40,34,25,21,12,1];

// Binary Search with Ascending array
function binarySearchAscending(target){
    let starterPoint   = 0;
    let endingPoint    = ascendingArray.length -1;
    let midPoint;

    while( starterPoint <= endingPoint ){
        midPoint = Math.floor((( starterPoint + endingPoint )/2));
        if(ascendingArray[midPoint] === target){
            return `${target} fround at index ${midPoint}`
        }else if(ascendingArray[midPoint] < target){
            starterPoint = midPoint + 1;
        }else{
            endingPoint = midPoint - 1;
        }
    }
    return `${target} not found`;
}

binarySearchAscending(80);


// Binary Search with descending array
function branarySearchDescending(target){
    let starterPoint   = 0;
    let endingPoint    = descendingArray.length -1;
    let midPoint;

    while(starterPoint <= endingPoint){
        midPoint = Math.floor((( starterPoint + endingPoint )/2));
        if(descendingArray[midPoint] === target){
            return `${target} fround at index ${midPoint}`
        }else if(descendingArray[midPoint] < target){
            starterPoint = midPoint + 1;
        }else{
            endingPoint = midPoint - 1;
        }
    }
    return `${target} not found`;
}

branarySearchDescending(12);


// Binary Search with Agnostic array
function branarySearchOrderAgnostic(target){
    let starterPoint   = 0;
    let endingPoint    = sortedArray.length -1;
    let midPoint;

    const isDescendingOrder = sortedArray[starterPoint] > sortedArray[endingPoint];

    while(starterPoint <= endingPoint){
        midPoint = Math.floor((( starterPoint + endingPoint )/2));
        if(sortedArray[midPoint] === target){
            return `${target} fround at index ${midPoint}`
        }else if(sortedArray[midPoint] < target){
            if(isDescendingOrder){
                endingPoint = midPoint - 1;
            }else{
                starterPoint = midPoint + 1; 
            }
            
        }else{
            if(isDescendingOrder){
                starterPoint = midPoint + 1;
            }else{
                endingPoint = midPoint - 1;
            }
        }
    }
    return `${target} not found`;
}

branarySearchOrderAgnostic(12);