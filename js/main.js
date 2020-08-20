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

    console.log(arrInfo)
    console.log(arrAdress)
    console.log(arrObjective)
    console.log(arrAcademic)
    console.log(arrSkills)
    console.log(arrExp)


}



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



















//CRIANDO ELEMENTO H1
function creatH1() {
    const creatH1 = document.createElement('h1')
    return creatH1
}

//CRIANDO ELEMENTO P
function creatP() {
    const p = document.createElement('p')
    return p
}

function setResultado() {
    const resultado = document.querySelector('#novocv')
    resultado.innerHTML = '' //ZERA O FORMULARIO

    const p = creatP() //CRIA UM PARAGRAFO
    p.innerHTML = 'TESTE'
    resultado.appendChild(p) //ADICIONA O PARAGRAFO NO HTML
}















//BOTÃO PARA ENVIAR DADOS E NÃO RESETAR A PÁGINA
document.querySelector("#enviar").onclick = function (e) {
    send();
    e.preventDefault();
    //setResultado()
    //window.location.href = "cv.html"
    //cv()
}


