//Task 1 
/* Выведи все элементы массива в консоль с помощью метода **`forEach`**
```javascript
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
``` */

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach((value: number) => console.log(value))

//Task 2 
/* Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:
> ['member 1: Darya', 'member 2: Masha', ... etc]
```javascript
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
``` */
const users: string[] = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const users2 = users.map((value: string, index: number) => console.log(`member ${index + 1}: ${value}`));

//Task 3 
/* С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.
```javascript
    const numbers = [7, -4, 32, -90, 54, 32, -21]
``` */

const numbers: number[] = [7, -4, 32, -90, 54, 32, -21];
const numbers2: number[] = numbers.filter((value: number) => {
  if (value > 0) {
    return true
  } else return false
})
console.log(numbers2);

// Task 4
/* Используя метод **`reduce`** получите сумму всех чисел массива.
```javascript
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
``` */

const fibonaccii: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
console.log(fibonaccii.reduce((prevValue, curValue) => prevValue + curValue));

//Task 5 
/* Используя метод **`find`** найдите в массиве первое четное число.
```javascript
    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
``` */
const numbers1: number[] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
console.log(numbers1.find((value: number) => {
  if (value % 2 !== 0) {
    return true
  } else return false
}));

//Task 6
/* Используя метод **`some`** проверьте то, в массиве есть элемент кратный 3 и 5.
 Реализуйте оба варианта, когда результирущее значение true или false*/

const numbers3: number[] = [3, 5, 7, 8, 9, 10];
console.log(numbers3.some((value) => { return value % 3 === 0 && value % 5 === 0 }));
console.log(numbers3.some((value) => { return !(value % 3 === 0 && value % 5 === 0) }));

//Task 7 
/*Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.
Реализуйте оба варианта, когда результирущее значение true или false */

const numbers5: number[] = [2, 4, 8, 6];
console.log(numbers5.every((value) => {
  let q: number = value * value;
  let w: number[] = q.toString().split('').map(Number);
  const sum: any = w.reduce((prevValue, curValue) => prevValue + curValue);
  if (sum % 2 !== 0) {
    return true
  } else return false

}));

//Task 8 🖥
/* Используя коллекцию **`Map`** создайте список ингредиентов к салату с количеством необходимым для добавления в салат.
Например: Огурцы - 300, помидоры - 200, соль - 10, сметана - 110
Выведите все продукт, количество которых больше 100 гр. */

const recipe = new Map<string, number>(
  [
    ['Огурцы', 200],
    ['Помидоры', 300],
    ['Петрушка', 50],
    ['Уроп', 50],
    ['Сметана', 150]
  ]
)

for (let [ingredient, amount] of recipe.entries()) {
  if (amount > 100) {
    console.log(ingredient, amount);
  };
};


// Task 9
/* Используя коллекцию **`Set`** создайте массив неповторяющийхся значений:
```javascript
    const numbers = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5]
``` */
const numbers4 = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];
const set1 = new Set(numbers4);
console.log(set1);

//Task 10
/* Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3. Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee', а если нет второго - в переменную elem2 запишите значение 'bbb'. Первый элемент никуда записывать не надо.  */

let arr1: string[] = ['first', 'second', 'third'];
let [elem1, elem2 = 'bbb', elem3 = 'eee'] = arr1;
console.log(elem2);
console.log(elem3);


//Task 11 
/* Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }. Запишите соответствующие значения в переменные name, surname и age. Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.*/

const obj = { name1: 'Петр', surname: 'Петров', age: '20 лет' };
const { name1 = 'Аноном', surname = 'Анонимович', age = '? лет' } = obj;
console.log(name1, surname, age);


//ADVANCED level

//Task 1  Тролли атакуют наш раздел с комментариями!!!
/* + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
+ Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
+ Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
> Примечание: для этой задачи **`y`** не считается гласной. */

function deleteWord(str: string) {

  const arr: string[] = ['a', 'e', 'i', 'o', 'u'];
  let str1: string[] = str.split('');
  let str2: string[] = str1.filter(letter => !arr.includes(letter));
  let str3: string = str2.join('');
  return str3
}

console.log(deleteWord('ryyyt fbjsjsod shdsohdogaa!'));

// Task 2 
/* + В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.
```javascript
    highAndLow("1 2 3 4 5"); // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"`
> Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым. */

/*  function highAndLow(str: string): void{

let maxNumber: number = 0;
let minNumber: number = 0;
let str1: number[] = str.split('').map(Number);

for( let i = maxNumber; i <= str1.length -1; i++){
    let c = Number(str1[i]);
    if (maxNumber < c){
        maxNumber = c;
    }
    if(minNumber > c){
        minNumber = c;
        }
    }
const result = `${minNumber} ${maxNumber}`;
console.log(result);
} 

console.log(highAndLow("1 2 3 -4 5")); */

let highAndLow: string = "1 2 3 -4 5";
let b: number[] = highAndLow.split(' ').map(Number);
let max: number = 0;
let min: number = 0;
for (let i = max; i <= b.length - 1; i++) {

  let c = Number(b[i]);

  if (max < c) {
    max = c;
  }
  if (min > c) {
    min = c;
  }
}

console.log(`"return ${max.toString()} ${min.toString()}"`);

//Task 3  Изограммы
/* + Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.
```javascript
    isIsogram("Dermatoglyphics") == true
    isIsogram("aba") == false
    isIsogram("moOse") == false // -- ignore letter case */

function isIsogram(word: string): boolean {

  const letters: any = new Set();
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (letters.has(letter)) {
      return false;
    }
    letters.add(letter);
  }
  return true;
}

console.log(isIsogram('korika'));