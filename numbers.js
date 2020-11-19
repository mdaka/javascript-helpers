const f1 = null;        // false
const f2 = false;       // false
const f3 = true;        // false
const f4 = [];          // false
const f5 = {};          // false
const f6 = undefined;   // false
const f7 = '2.5..6 ..'; // false
const f8 = '   ';       // false
const f9 = '';          // false
const f10 = ' . 5 ';    // false ( Notice - a space between the dot and 5)

const f11 = '1e';       // false ( in case you need 'e' to be allowed then we need to avoid this method Number(f11)

const t1 = '0.5';       // true
const t2 = '2.5';       // true
const t3 = "025";       // true
const t4 = "100";       // true

const itDepends1 = '.5';        // false , true if point is allowed to be at first
const itDepends2 = ' .5';       // false if spaces are prevented, true if spaces are allowed
const itDepends3 = ' .5  ';     // false if spaces are prevented, true if spaces are allowed
const itDepends4 = '  5';       // false if spaces are prevented, true if spaces are allowed



/*
    Do not allow numbers that include 'e'
*/
function isNumber(n, isAllowedSpaces = true, isAllowedNumWithPointFirst = true) { 

    /******** Step-1 ********/
    n = n || null; // To deal with undefined
    if(!n){
        return false;
    }

    /******** Step-2 ********/
    // To avoid problems with isNaN(false) which returns false and isNaN(true) returns false, but false and true values are not numbers, so convert them to string, and then use isNaN method to make them fail
    // Notice Number(false) will give us 0, and Number(true) will give us 1, so we must not allow this
    // Thus, let's convert the number to a string
    n = "" + n;
    if(isNaN(n)){
        return false;
    }

    /******** Step-3 ********/
    // parseInt('', 10)       // NaN
    // parseInt('   ', 10)    // NaN
    // parseInt('   5', 10);  // NaN
    // parseInt('   .5', 10); // 5
    if(typeof n == 'string'){ // To deal with spaces, Trim all spaces by using parseInt // Notice we can return false immediately if we dont; need any spaces

        if(!isAllowedSpaces && n.includes(' ')){ // If user don't need any space to be allowed the return false;
            return false;
        }

        if(!isAllowedNumWithPointFirst){ // this mean we must return false for cases like '.5', '   .5'
            n = parseInt(n, 10);
        }
        else{
            n = parseFloat(n, 10);
        }
        
        if(isNaN(n)){
            return false;
        }
        
        /* n = n.replace(/\s/g, ''); // Trim all spaces
        if(n == ''){
            return false;
        } */ 
    }
    
    /******** Step-4 ********/
    const num = Number(n); //  Number('543$') => NaN, Number('$53455') => NaN, ('53455e') => NaN, ('.53455.) => NaN, ('.') => NaN, '(5)' => NaN, ('543...') => NaN, Number({}) => NaN
                           // (undefined) => NaN, ('false') => NaN
                           // ('543') => 543, ('543.') => 543, ('543.0') => 543, ('543.01') => 543.01, ('.53455') => 0.53455
                           // (+1) => 1, (-1) => -1
                           /* Problomatic values are the following*/
                           // Number('') => 0, Number() => 0, Number(null) => 0, Number(false) => 0, Number('  ') => 0
                           // Number([]) => 0
                           // Number(true) => 1,
                           // Number(" \u00A0   \t\n\r") // 0
    if(isNaN(num)){
        return false;
    }

    return true;
}




const  status1 =  isNumber(itDepends3, isAllowedSpaces = true,  isAllowedNumWithPointFirst = true);
const  status2 =  isNumber(itDepends3, isAllowedSpaces = false, isAllowedNumWithPointFirst = true);
const  status3 =  isNumber(itDepends3, isAllowedSpaces = false, isAllowedNumWithPointFirst = false);
const  status4 =  isNumber(itDepends3, isAllowedSpaces = true,  isAllowedNumWithPointFirst = false);