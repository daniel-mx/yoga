// showUser.bind.();



// function showUser(surname, name) {
//     let age = document.getElementById('age');
//     alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
// }
// showUser('Petrov', 'Pter');

/* let age = document.getElementById('age');
function showUser(surname, name) {
    
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age, ['Petrov', 'Pter']); */
'use strict';

/* class Options {
    constructor(height, width, bg, fontSize, textAlign, newText = "new text") {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.newText = newText;
    }

    newDiv() {
        // let div = document.getElementsByTagName('div');
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = this.newText;
        div.style.cssText = `width: ${this.width}px;
                            height: ${this.height}px;
                            background-color: ${this.bg};
                            font-size: ${this.fontSize}px;
                            text-align: ${this.textAlign};
                            border: 5px solid;
                            padding: 10px`;
    }
}

let options = new Options(100, 300, '#99c9c9', 36, 'center', 'content');
options.newDiv(); 
 */

// let obj = [
//     {name: 'jhon', age: 47, job: 'engineer'},
//     {name: 'Ivan', age: 27, job: 'economist'},
//     {name: 'vasilisa', age: 22, job: 'finansist'},
// ];

// let newV = obj.reduce(function(total, person){
//     return total + person.age;
// },0);
// console.log(newV);

// let filterObj = obj
//     .filter(person => person.age > 25)
//     .map(person => {
//         return {
//             info: `${person.name} (${person.job})`,
//             age: person.age
//         };
//     })
//     .reduce((total, person) => total + person.age,0);
// console.log(filterObj);
//- ----
// function camelize(str) {
//     return str
//       .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//       .map(
//         // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//         // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//   }
// console.log(camelize("list-style-image"));


// function filterRange(arr, a, b) {
//     return arr.filter(item => (item >= a) && (item <= b));

// }
// let arr = [5,8,13,1];
// let filtered = filterRange(arr, 4,9);
// console.log(filtered);
// console.log(arr);


// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
// let arr = [1, 3, 5, 8, 13];
// filterRangeInPlace(arr, 1, 5);

// let arr = [5, 2, 1, -10, 8];
// arr.sort( (a,b) => -a+b)

// let styles = ['Джаз', 'Блюз', 'Эхо', 'Русский рок', 'Шансон'];
// styles.push('Рок-н-ролл');
// styles[Math.floor((styles.length / 2) - 1)] = 'Классика';
// console.log(styles.shift());
// styles.unshift('Рэп','Регги');

// function sumInput() {
//     let arr = [];
//     while (true) {
//         let answer = prompt('Введите число', '');
//         if (answer == null || answer == '' || !isFinite(answer)) {break;}
//         arr.push(+answer);
//     }
//     let sum = 0;
//     for (let key of arr){         
//         sum += key;

//     }

//     return sum;

// }


function camelize(str) {
    return str.split('-')
        .map((word, index) => index == 0? word : word[0].toUpperCase() + word.slice(1))
        .join('');

}

console.log(camelize("background-color"));