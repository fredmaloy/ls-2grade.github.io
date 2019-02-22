
/* function filter(input, than) {
    for (var i=0; i<input.length; i++) {
        if (input[i] > than) {
            console.log (input[i])
        }
    }
   
    }
    
    input = array

    var array = [12, 100, 34, 65, 10];
    var result = filter(array, 60);
    
    console.log(result); // [100, 65];
    
    result = filter(array, 20);

    console.log(result); // [100, 34, 65];
    
    // конец первого задания
 */



 /* function filter(input, than) {

    for (var i=0; i<input.length; i++) {
        try {
            if (input[i] < 0) {
                throw new Error('есть отрицательные числа!!!');
            } else if (!isFinite(input[i])) {
                throw new Error('элементы массива должны быть только числа!!!');
            } else if (input[i] = undefined) {
                throw new Error('Массив пуст!!!');
            } else  if (input[i] > than) {
                console.log (input[i]);
            }

            console.log (input[i]);

        }  catch (e) {
            console.error(e.message);
        } 
    }
}
var b = 2;

var input = [12, 100, b, 65, -10];

var result = filter(input, 60);

result = filter(input, 20);

 */
