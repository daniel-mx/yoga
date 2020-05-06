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

class Options {
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
                            text-align: ${this.textAlign};`;
    }
}

let options = new Options(100, 300, 'green', 26, 'center', 'content');
options.newDiv(); 




