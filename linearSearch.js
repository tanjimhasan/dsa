let array = [ 5, 7, 3, 36, 2, 9 ];
let target = 2;

function linearSearch( array,target ){
    for( let i=0; i<array.length; i++ ){
        if( array[i] === target ){
            return i;
        }
    }
    return console.log("Sorry!! Not found");
}

linearSearch( array,target );