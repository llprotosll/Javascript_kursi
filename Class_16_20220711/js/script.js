//funkcijas pieteikšana ar apgalvojuma palīdzību 
function square (number) {
    return number * number;
  }
  const x = square(4); // x gets the value 16
  console.log(x);

  //funkcijas pieteikšana ar izteiksmes palīdzību (function expression)
  const square2 = function (number) {
    return number * number;
  }
  const y = square(4); // x gets the value 16
  console.log(y);

  //rekursīvās funckijas piemērs
  const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  }
  
  console.log(factorial(3))


  //piemērs ar funkciju, kuras arguments ir funkcija
  function map(f, a) {
    const result = [];
    for (const v of a) {
      result[i] = f(v);
      result.push (f(v));
    }
    return result;
  }
  
  const f = function (z) {
    return z * z * z;
  }
  
  const numbers = [0, 1, 2, 5, 10];
  const cube = map(f, numbers);
  console.log(cube);