/*
function sendSubmit() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;
    const civil = document.getElementById('civil').value;
    const nacional = document.getElementById('nacional').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const adress = document.getElementById('adress').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const objective = document.getElementById('objective').value;
    const course = document.getElementById('course').value;
    const institution = document.getElementById('institution').value;
    const conclusion = document.getElementById('conclusion').value;
    const year = document.getElementById('year').value;
    const local = document.getElementById('local').value;
    const yearIn = document.getElementById('yearIn').value;
    const yearTo = document.getElementById('yearTo').value;
    const activies = document.getElementById('activies').value;
    const qualification = document.getElementById('qualification').value;
    const nivelQ = document.getElementById('nivelQ').value;
    const language = document.getElementById('language').value;
    const nivelLang = document.getElementById('nivelLang').value;
    


    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("AGE", age);
    sessionStorage.setItem("SEX", sex);
    sessionStorage.setItem("CIVIL", civil);
    sessionStorage.setItem("NACIONAL", nacional);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("PHONE", phone);
    sessionStorage.setItem("ADRESS", adress);
    sessionStorage.setItem("CITY", city);
    sessionStorage.setItem("STATE", state);
    sessionStorage.setItem("OBJECTIVE", objective);
    sessionStorage.setItem("COURSE", course);
    sessionStorage.setItem("INSTITUITION", institution);
    sessionStorage.setItem("CONCLUSION", conclusion);
    sessionStorage.setItem("YEAR", year);
    sessionStorage.setItem("LOCAL", local);
    sessionStorage.setItem("YEARIN", yearIn);
    sessionStorage.setItem("YEARTO", yearTo);
    sessionStorage.setItem("ACTIVIES", activies);
    sessionStorage.setItem("QUALIFICATION", qualification);
    sessionStorage.setItem("NIVELQ", nivelQ);
    sessionStorage.setItem("LANGUAGE", language);
    sessionStorage.setItem("NIVELLANG", nivelLang);

    return;
}
*/

/*

function send() { //FUNCÃO PARA CAPTURAR OS INPUTS (TEXT0S)
    //INFO
    const name = document.querySelector('input#name')
    const age = document.querySelector('input#age')
    const sex = document.querySelector('select#sex')
    const civil = document.querySelector('select#civil')
    const nacional = document.querySelector('input#nacional')
    const email = document.querySelector('input#email')
    const phone = document.querySelector('input#phone')

    //ADRESS
    const adress = document.querySelector('input#adress')
    const city = document.querySelector('input#city')
    const state = document.querySelector('select#state')

    //OBJECTIVE
    const objective = document.querySelector('textarea#objective')

    //ACADEMIC
    const course = document.querySelectorAll('input#course')
    const institution = document.querySelectorAll('input#institution')
    const conclusion = document.querySelectorAll('select#conclusion')
    const year = document.querySelectorAll('input#year')

    //SKILLS
    const local = document.querySelectorAll('input#local')
    const yearIn = document.querySelectorAll('input#yearIn')
    const yearTo = document.querySelectorAll('input#yearTo')
    const activies = document.querySelectorAll('textarea#activies')

    //EXP
    const qualification = document.querySelectorAll('input#qualification')
    const nivelQ = document.querySelectorAll('select#nivelQ')

    //LANG
    const language = document.querySelectorAll('input#language')
    const nivelLang = document.querySelectorAll('select#nivelLang')


    let arrInfo = [];
    var newDict = {
        nome: name.value,
        age: age.value,
        sex: sex.value,
        civil: civil.value,
        nacional: nacional.value,
        email: email.value,
        phone: phone.value
    }
    arrInfo.push(newDict);

    let arrAdress = [];
    var newDict = {
        adress: adress.value,
        city: city.value,
        state: state.value
    }
    arrAdress.push(newDict);

    let arrObjective = [];
    var newDict = {
        objective: objective.value
    }
    arrObjective.push(newDict);

    let arrAcademic = [];
    for (var i = 0; i < course.length; i++) {
        var newDict = {
            course: course[i].value,
            institution: institution[i].value,
            conclusion: conclusion[i].value,
            year: year[i].value
        }
        arrAcademic.push(newDict);
    }

    let arrSkills = [];
    for (var i = 0; i < local.length; i++) {
        var newDict = {
            local: local[i].value,
            yearIn: yearIn[i].value,
            yearTo: yearTo[i].value,
            activies: activies[i].value
        }
        arrSkills.push(newDict);
    }

    let arrExp = [];
    for (var i = 0; i < qualification.length; i++) {
        var newDict = {
            qualification: qualification[i].value,
            nivelQ: nivelQ[i].value
        }
        arrExp.push(newDict);
    }

    let arrLang = [];
    for (var i = 0; i < language.length; i++) {
        var newDict = {
            nomeLingua: language[i].value,
            nivelLingua: nivelLang[i].value
        }
        arrLang.push(newDict);
    }

    //console.log(arrInfo)
    // console.log(arrAdress)
    // console.log(arrObjective)
    // console.log(arrAcademic)
    // console.log(arrSkills)
    // console.log(arrExp)
}

*/



//CLONANDO AS DIVS DO HTML
//PROCURAR O BOTÃO, LIMPAR OS INPUTS E CLONAR
document.querySelector('#addCourse').addEventListener('click', cloneField)
document.querySelector('#addSkill').addEventListener('click', cloneField2)
document.querySelector('#addQualification').addEventListener('click', cloneField3)
document.querySelector('#addLang').addEventListener('click', cloneField4)

function cloneField() {
    const newFields = document.querySelector('.academic').cloneNode(true)
    const fields = newFields.querySelectorAll('input') //PEGAR OS CAMPOS QUE IRÁ LIMPAR

    fields.forEach(function (field) { //PEGAR OS CAMPOS FIELDS E LIMPAR
        field.value = ""
    })

    document.querySelector('#academic-item').appendChild(newFields)
}

function cloneField2() {
    const newFields = document.querySelector('.skills').cloneNode(true)
    const fields = newFields.querySelectorAll('input') //PEGAR OS CAMPOS QUE IRÁ LIMPAR
    fields.forEach(function (field) { //PEGAR OS CAMPOS FIELDS E LIMPAR
        field.value = ""
    })
    document.querySelector('#skills-item').appendChild(newFields)
}

function cloneField3() {
    const newFields = document.querySelector('.qualification').cloneNode(true)
    const fields = newFields.querySelectorAll('input') //PEGAR OS CAMPOS QUE IRÁ LIMPAR
    fields.forEach(function (field) { //PEGAR OS CAMPOS FIELDS E LIMPAR
        field.value = ""
    })
    document.querySelector('#qualification-item').appendChild(newFields)
}

function cloneField4() {
    const newFields = document.querySelector('.lang').cloneNode(true)

    const fields = newFields.querySelectorAll('input')
    fields.forEach(function (field) { //PEGAR OS CAMPOS FIELDS E LIMPAR
        field.value = ""
    })

    document.querySelector('#lang-item').appendChild(newFields)
}

/*
//BOTÃO PARA ENVIAR DADOS E NÃO RESETAR A PÁGINA
 document.querySelector("#enviar").onclick = function (e) {
     sendSubmit()
     //send();
     e.preventDefault();
     //setResultado()
 }
*/

