// Задание #1
document.write('<h3>Задание #1</h3>');
alert('Задание #1');
var a = 1, b = 1, c, d;
document.write('<p>var a = 1, b = 1, c, d;</p>');
document.write('<p>c = ++a</p>');
c = ++a; alert('c = ' + c + ' поскольку оператор \"++\" увеличивает \"a\" на единицу и получившееся значение присваивается \"c\"');  // 2
document.write('<p>d = b++</p>');
d = b++; alert('d = ' + d + ' поскольку сначала значение \"b\" присваивается переменной \"d\", а затем  оператор \"++\" увеличивает \"b\" на единицу'); // 1
alert('теперь значение b = 2');
document.write('<p>c = (2 + ++a)</p>');
c = (2 + ++a); alert('c = ' + c + ' поскольку префиксный оператор \"++\" увеличивает \"a\" на единицу, а затем выполняются остальные операции сложения и присваивания');      // 5
document.write('<p>d = (2 + b++)</p>');
d = (2 + b++); alert('d = ' + d + ' поскольку сначала идет операция сложения 2+b, затем операция присваивания переменной \"d\", а затем посфиксный оператор \"++\" увеличивает \"b\" на единицу');      // 4
document.write('<p>a = ' + a + '</p>');
alert('a = ' + a + ' поскольку исходное значение было увеличино на единицу в двух предыдущих операциях');   // 3
document.write('<p>b = ' + a + '</p>');
alert('b = ' + b + ' поскольку исходное значение было увеличино на единицу в двух предыдущих операциях');   // 3

// Задание #2
document.write('<h3>Задание #2</h3>');
alert('Задание #2');
a = 2;
var x = 1 + (a *= 2);
document.write('<p>a = 2;</p>');
document.write('<p>var x = 1 + (a *= 2);');
document.write('<p>x = ' + x + '</p>');
alert('x = ' + x + ' поскольку сначала выполняется операция a=a*2 в скобках, затем сложение и потом присвоение х');

// Задание #3
document.write('<h3>Задание #3</h3>');
alert('Задание #3');
function checkTheInput(x) {
    return isNaN(parseFloat(x));
}
function homework3(a, b) {
    if ((a >= 0) && (b >= 0)) {
        return +a - +b;
    }
    else if ((a < 0) && (b < 0)) {
        return +a * +b;
    }
    else {
        return +a + +b;
    }
}
// переменные a и b объявлены ранее
a = null;
b = null;
a = prompt('введите значение переменной \"a\"');
document.write('<p>a = ' + a + '</p>');
b = prompt('введите значение переменной \"b\"');
document.write('<p>b = ' + b + '</p>');

if (checkTheInput(a)) {
    alert('переменная a задана некорректно');
}
else if (checkTheInput(b)) {
    alert('переменная b задана некорректно');
}
else {
    document.write('<p>Результат операции: ' + homework3(a, b) + '</p>');
    alert(homework3(a, b));
}

// Задание #4
document.write('<h3>Задание #4</h3>');
alert('Задание #4');
// переменная объявлена ранее
a = null;
a = prompt('введите значение переменной \"a\" в диапазоне от 0 до 15');
document.write('<p>a = ' + a + '</p>');

if (checkTheInput(a)) {
    alert('Переменная задана некорректно');
}
else if ((a >= 0) && (a <= 15)) {
    switch (a) {
        case '0':
            alert('0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15');
            break;
        case '1':
            alert('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15');
            break;
        case '2':
            alert('2,3,4,5,6,7,8,9,10,11,12,13,14,15');
            break;
        case '3':
            alert('3,4,5,6,7,8,9,10,11,12,13,14,15');
            break;
        case '4':
            alert('4,5,6,7,8,9,10,11,12,13,14,15');
            break;
        case '5':
            alert('5,6,7,8,9,10,11,12,13,14,15');
            break;
        case '6':
            alert('6,7,8,9,10,11,12,13,14,15');
            break;
        case '7':
            alert('7,8,9,10,11,12,13,14,15');
            break;
        case '8':
            alert('8,9,10,11,12,13,14,15');
            break;
        case '9':
            alert('9,10,11,12,13,14,15');
            break;
        case '10':
            alert('10,11,12,13,14,15');
            break;
        case '11':
            alert('11,12,13,14,15');
            break;
        case '12':
            alert('12,13,14,15');
            break;
        case '13':
            alert('13,14,15');
            break;
        case '14':
            alert('14,15');
            break;
        case '15':
            alert('15');
            break;
    }
}
else {
    alert('Переменная a задана некорректно, необходимо число в диапазоне от 0 до 15');
}
// Задание #5
document.write('<h3>Задание #5</h3>');
alert('Задание #5');
document.write('функции написаны и использованы в задании #6');
alert('функции написаны и использованы в задании #6');
function hwSumma(a, b) {
    if (checkTheInput(a)) {
        alert('переменная a задана некорректно');
    }
    else if (checkTheInput(b)) {
        alert('переменная b задана некорректно');
    }
    else {
        return +a + +b;
    }
}
function hwSubtraction(a, b) {
    if (checkTheInput(a)) {
        alert('переменная a задана некорректно');
    }
    else if (checkTheInput(b)) {
        alert('переменная b задана некорректно');
    }
    else {
        return +a - +b;
    }
}
function hwMultiply(a, b) {
    if (checkTheInput(a)) {
        alert('переменная a задана некорректно');
    }
    else if (checkTheInput(b)) {
        alert('переменная b задана некорректно');
    }
    else {
        return +a * +b;
    }
}
function hwSubdivision(a, b) {
    if (checkTheInput(a)) {
        alert('переменная a задана некорректно');
    }
    else if (checkTheInput(b)) {
        alert('переменная b задана некорректно');
    }
    else if (+b == 0) {
        alert('делитель равен нулю');
    }
    else {
        return +a / +b;
    }
}

// Задание #6
document.write('<h3>Задание #6</h3>');
alert('Задание #6');
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return hwSumma(arg1, arg2);
        case 'вычитание':
            return hwSubtraction(arg1, arg2);
        case 'умножение':
            return hwMultiply(arg1, arg2);
        case 'деление':
            return hwSubdivision(arg1, arg2);
        default:
            alert('неизвестная операция');
    }
}
a = null;
b = null;
var operation;
a = prompt('введите значение переменной \"a\"');
document.write('<p>a = ' + a + '</p>');
b = prompt('введите значение переменной \"b\"');
document.write('<p>b = ' + b + '</p>');
operation = prompt('задайте требуемую операцию: сложение, вычитание, умножение или деление');
document.write('<p>операция: ' + operation + '</p>');
document.write('<p>результат операции: ' + mathOperation(a, b, operation) + '</p>');
alert('результат операции: ' + mathOperation(a, b, operation));

// Задание #7
document.write('<h3>Задание #7</h3>');
alert('Задание #7');
alert('объяснение выведено на страницу - необходимо пролистать вниз');
document.write('<p>результат сравнения (null == 0): ' + (null == 0) + '</p>');
document.write('<p>результат сравнения (null === 0): ' + (null === 0) + '</p>');
document.write('<p>результат сравнения (null == \'0\'): ' + (null == '0') + '</p>');
document.write('<p>результат сравнения (null === \'0\'): ' + (null === '0') + '</p>');
document.write('<p>для интерпретатора null - это значение особого состояния ячейки памяти, которая ничего не содержит, поэтому сравнение с иным содержимым дает ложь</p>');
document.write('<p>результат преобразования +null: ' + (+null) + '</p>');
document.write('<p>результат сравнения (+null == 0): ' + (+null == 0) + '</p>');
document.write('<p>в интерпретаторе заданы правила преобразования null, например, при преобразовании null в число, результат приравнивается к 0</p>');

// Задание #8
document.write('<h3>Задание #8</h3>');
alert('Задание #8');
function power(val, pow) {
    if (checkTheInput(val)) {
        document.write('<p>Переменная для возведения в степень задана некорректно</p>');
        alert('Переменная для возведения в степень задана некорректно');
    }
    else if (checkTheInput(pow) || pow < 0) {
        document.write('<p>Переменная степени задана некорректно</p>');
        alert('Переменная степени задана некорректно');
    }
    else {
        pow = parseInt(pow);
        if (pow == 0) {
            return 1;
        }
        else if (pow == 1) {
            return val;
        }
        else {
            return val * power(val, pow - 1);
        }
    }
}
a = null;
b = null;
c = null;
var operation;
a = prompt('введите число \"a\" для возведения в степень');
document.write('<p>a = ' + a + '</p>');
b = prompt('введите значение степени \"b\" (значение будет округлено до целочисленного)');
document.write('<p>b = ' + b + '</p>');
c = power(a, b);
if (c == undefined) {
    document.write('<p>некорректные исходные данные</p>');
    alert('<p>некорректные исходные данные</p>');
}
else {
    document.write('<p>результат возведения \"a\" в степень \"b\": ' + power(a, b) + '</p>');
    document.write('<p>проверка результата возведения \"a\" в степень \"b\" оператором** a**b = ' + a ** b + '</p>');
    alert('<p>результат возведения \"a\" в степень \"b\": ' + power(a, b) + '</p>');
    alert('<p>проверка результата возведения \"a\" в степень \"b\" оператором** a**b = ' + a ** b + '</p>');
}
alert('результат выведен на страницу - необходимо пролистать вниз');

