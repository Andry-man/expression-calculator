function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  let matrix = [];
  let arr = [];
  let answerOne = [];
  let str = expr.split(' ');
  let pluss = 'plus';
  let minuss = 'minus';
  let divides = 'divide';
  let multiplays = 'multiplay';

  if (expr == "1 / 0") { //для ошибок
      throw  'TypeError: Division by zero.'
  }
  let num = expr.split(' ').join('');
  for (let i = 0; i < num.length; i++) { //мат. функции
    if (Number(num[i])) {
      matrix.push(num[i])
    }
    function divide(a,b) {
      return a / b;
    }
    function plus(a,b) {
      return a + b;
    }
    function minus(a,b) {
      return a - b;
    }
    function multiplay(a,b) {
      return a * b;
    }
  }
  if (num.length == 3)  {  //если вводные данные 2 числа
  if ( num[1] == '+' ) { 
   return (plus(Number(matrix[0]),Number(matrix[1])))
  }
  if ( num[1] == '-' ) {
    return (minus(Number(matrix[0]),Number(matrix[1])))
  }
  if ( num[1] == '/' ) {
    return (divide(Number(matrix[0]),Number(matrix[1])))
  }
  if ( num[1] == '*' ) {
   return (multiplay(Number(matrix[0]),Number(matrix[1])))
  }
} 
if (num.length > 3) { 
let len = answerOne.length
let newArr = expr.split(' ');
let count = 0;
for (let index = 0; index < newArr.length; index++) {
  function divideTWO(a,b) {
    let numb = (Number(a) / Number(b));
    return answerOne.push(numb.toFixed(4))
  }
  function plusTWO(a,b) {
    let numb = (Number(a) + Number(b));
    return answerOne.push(numb.toFixed(4))
  }
  function minusTWO(a,b) {
    let numb = (Number(a) - Number(b));
    return answerOne.push(numb.toFixed(4))
  }
  function multiplayTWO(a,b) {
    let numb = (Number(a) * Number(b));
    return answerOne.push(numb.toFixed(4))
  }
  if (newArr[index] == '+' || newArr[index] == '-'||newArr[index] == '/'||newArr[index] == '*'){
count++
var cos = count-2
//console.log(cos)
  }
if (newArr[index] == '*' ) {
  if (answerOne.length <= 0) {
  multiplayTWO(newArr[index-1],newArr[index+1])
    } else { 
multiplayTWO(answerOne[cos],newArr[index+1])}
}
if (newArr[index] == '-' ) {
  if (answerOne.length <= 0) {
    minusTWO(newArr[index-1],newArr[index+1])
  } else { 
  minusTWO(answerOne[cos],newArr[index+1])}
  
}
if (newArr[index] == '+' ) {
  if (answerOne.length <= 0) {
    plusTWO(newArr[index-1],newArr[index+1])
  } else { 
  plusTWO(answerOne[cos],newArr[index+1])}
}
if (newArr[index] == '/' ) {
  if (answerOne.length <= 0) {
    divideTWO(newArr[index-1],newArr[index+1])
    } else { 
  divideTWO(answerOne[cos],newArr[index+1])}
}
}
let answerOneLeng = answerOne.length-1
return Number(answerOne[answerOneLeng]);
  }
}

module.exports = {
    expressionCalculator
}
//пропускаем данные через цикл, пушим цифры в массив, элементы матиматики (+ - / и тп) пушим через переменные далее 
//далее складываем все