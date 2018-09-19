var section = document.getElementById('section')
var firtsId = document.getElementById('firtsId');
var secondId = document.getElementById('secondId');
var addList = document.getElementById('addList');
var button = document.createElement('button');
var buttonX = document.createElement('buttonX');

/*-----------------PRIMERA VERSION AÑADIR UNA LISTA--------------------*/
addList.addEventListener('click', firts);

function firts(){
  var conteinerFirst = document.createElement('div');
  conteinerFirst.className = 'conteiner';
  button.className = 'guardar';
  buttonX.className = 'butonCancel';
  addList.className = 'newInput';
  button.type = 'button';
  button.appendChild(document.createTextNode('Guardar'));
  buttonX.type = 'buttonX';
  buttonX.innerHTML = '&times;';
  firtsId.appendChild(conteinerFirst);
  conteinerFirst.appendChild(addList);
  conteinerFirst.appendChild(botton);
  conteinerFirst.appendChild(bottonX);

addList.removeEventListener('click', firts);
};

/*-----------------SEGUNDA VERSION AÑADIR UNA LISTA--------------------*/
button.addEventListener('click', second);

function second(){
  var newName = document.getElementById('addList').value;
  var newText = document.createTextNode(newName);
  var newElement = document.createElement('h2');
  var newList = document.createTextNode('Añadir una tarea');
  var newLink = document.createElement('a');
  var conteinerTarea = document.createElement('div');
  conteinerTarea.className = 'conteiner  conteinerauto';
  newElement.className = 'newElement';
  newLink.className = 'link';

  addList.value = '';

  secondId.appendChild(conteinerTarea);
  newElement.appendChild(newText);
  conteinerTarea.appendChild(newElement);

  newLink.appendChild(newList);
  conteinerTarea.appendChild(newLink);

  /*-----------------TERCERA VERSION AÑADIR UNA LISTA--------------------*/
newLink.addEventListener('click', function (){

  var buttonTwo = document.createElement('buttonTwo');
  var textArea = document.createElement('textArea');
  buttonTwo.className = 'buttonTwo';
  textArea.className = 'textArea';

  document.getElementById('addList').value;

  buttonTwo.appendChild(document.createTextNode('Añadir'));
  newLink.appendChild(buttonTwo);

  conteinerTarea.appendChild(textArea);
  conteinerTarea.appendChild(buttonTwo);
  secondId.appendChild(conteinerTarea);

  newLink.style.display = 'none';
/*-----------------CUARTA VERSION FOCUS--------------------*/
  textArea.onfocus = ('click', function(){
     textArea.style.backgroundColor = '#ABC5D3';
  });
/*-----------------QUINTA VERSION AÑADIR NUEVAS LISTAS--------------------*/
buttonTwo.addEventListener('click', function (){

  var addTextArea = textArea.value;
  var newTextArea = document.createElement('h4');

  textArea.value = '';

  newTextArea.innerText = addTextArea;
  conteinerTarea.appendChild(newTextArea);
  secondId.appendChild(conteinerTarea);

  conteinerTarea.insertBefore(newTextArea, textArea);

/*-----------------SEXTA VERSION AÑADIR NUEVAS LISTAS Y CERRANDO LISTAS ANTERIORES--------------------*/
    addList.addEventListener('click', function (){

        textArea.style.display = 'none';
        buttonTwo.style.display = 'none';

        });

    });

  });

};
