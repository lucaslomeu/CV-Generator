//CLONANDO AS DIVS DO HTML
//PROCURAR O BOTÃO, LIMPAR OS INPUTS E CLONAR
document.querySelector('#addCourse').addEventListener('click', cloneField);
document.querySelector('#addSkill').addEventListener('click', cloneField2);
document
  .querySelector('#addQualification')
  .addEventListener('click', cloneField3);
document.querySelector('#addLang').addEventListener('click', cloneField4);

function cloneField() {
  const newFields = document.querySelector('.academic').cloneNode(true);
  const fields = newFields.querySelectorAll('input'); //PEGAR OS CAMPOS QUE IRÁ LIMPAR

  fields.forEach(function (field) {
    //PEGAR OS CAMPOS FIELDS E LIMPAR
    field.value = '';
  });

  document.querySelector('#academic-item').appendChild(newFields);
}

function cloneField2() {
  const newFields = document.querySelector('.skills').cloneNode(true);
  const fields = newFields.querySelectorAll('input'); //PEGAR OS CAMPOS QUE IRÁ LIMPAR
  fields.forEach(function (field) {
    //PEGAR OS CAMPOS FIELDS E LIMPAR
    field.value = '';
  });
  document.querySelector('#skills-item').appendChild(newFields);
}

function cloneField3() {
  const newFields = document.querySelector('.qualification').cloneNode(true);
  const fields = newFields.querySelectorAll('input'); //PEGAR OS CAMPOS QUE IRÁ LIMPAR
  fields.forEach(function (field) {
    //PEGAR OS CAMPOS FIELDS E LIMPAR
    field.value = '';
  });
  document.querySelector('#qualification-item').appendChild(newFields);
}

function cloneField4() {
  const newFields = document.querySelector('.lang').cloneNode(true);

  const fields = newFields.querySelectorAll('input');
  fields.forEach(function (field) {
    //PEGAR OS CAMPOS FIELDS E LIMPAR
    field.value = '';
  });

  document.querySelector('#lang-item').appendChild(newFields);
}
