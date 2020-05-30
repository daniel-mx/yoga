function form() {
    let message = {
        loading: 'Загрузка',
        sucsess: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };
    
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        contactsForm = document.getElementById('form'),
        contactsInput = contactsForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    
    statusMessage.classList.add('status');
    
    function formSubmit(itform) {
        itform.addEventListener('submit', function (event) {
            event.preventDefault();
            itform.appendChild(statusMessage);
    
            let formData = new FormData(itform);
    
            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    // в json формате:   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    };
    
                    request.send(data);
                    // В json формате: request.send(json);
                });
            }
            // end postData
    
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
    
                }
                for (let j = 0; j < contactsInput.length; j++) {
                    contactsInput[j].value = '';
                }
            }
    
            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    //thanksModal.style.display = "block";
                    //mainModal.style.display = "none";
                    statusMessage.innerHTML = message.sucsess;
                    //statusMessage.innerHTML = "";
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    }
    formSubmit(form);
    formSubmit(contactsForm);
}

module.exports = form;