# Javascript Helpers

## isNumber method
```js
    function isNumber(n, customOptions) { ... };

    defaultOptions = { 
        isAllowedE: true, 
        isAllowedHex: true, 
        isAllowedSpaces: true, 
        isAllowedInfinity: false,
        isAllowedNumWithPointFirst: true, 
    };
```
### Options
- isAllowedHex: is hex numbers are allowed, like '0x1'
- isAllowedSpaces: true, will let the string number contains spaces, valid numbers ['  5', '   2e63', ' .5']
# Examples
```js
    isNumber(null);        // false
    isNumber(false);       // false
    isNumber(true);        // false
    isNumber([]);          // false
    isNumber({});          // false
    isNumber(undefined);   // false
    isNumber('2.5..6 ..'); // false
    isNumber('   ');       // false
    isNumber('');          // false
    isNumber(' . 5 ');     // false ( Notice - a space between the dot and 5)
    isNumber('+54+');      // false
    isNumber('54-');       // false
    isNumber('1e');        // false


    isNumber('0.5');       // true
    isNumber('2.5');       // true
    isNumber('025');       // true
    isNumber('100');       // true
    isNumber('1e10');      // true ( in case you need 'e' to be prevented then pass isAllowedE = false
    isNumber('0x12');      // true ( in case you need 'x' to be prevented then pass isAllowedX = false
    isNumber(0x12);        // true
    isNumber('+54');       // true
    isNumber('-54');       // true
    isNumber(-54);         // true
    isNumber("000123.4");  // true

    isNumber('.5');        // false , true if point is allowed to be at first
    isNumber(' .5');       // false if spaces are prevented, true if spaces are allowed
    isNumber(' .5  ');     // false if spaces are prevented, true if spaces are allowed
    isNumber('  5');       // false if spaces are prevented, true if spaces are allowed
    isNumber('   2e63');   // false if spaces are prevented, true if spaces and E are allowed
    isNumber(Infinity);    // false if Infinity is prevented, true if isAllowedInfinity = true
```


## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.