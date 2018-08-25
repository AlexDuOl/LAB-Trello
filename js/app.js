var section = document.getElementById('section')
var firtsId = document.getElementById('firtsId');
var secondId = document.getElementById('secondId');
var addList = document.getElementById('addList');
var botton = document.createElement('botton');
var bottonX = document.createElement('bottonX');

/*-----------------PRIMERA VERSION AÑADIR UNA LISTA--------------------*/
addList.addEventListener('click', firts);

function firts(){
  var conteinerFirst = document.createElement('div');
  conteinerFirst.className = 'conteiner';
  botton.className = 'guardar';
  bottonX.className = 'botonCancel';
  addList.className = 'newInput';
  botton.type = 'button';
  botton.appendChild(document.createTextNode('Guardar'));
  bottonX.type = 'buttonX';
  bottonX.innerHTML = '&times;';
  firtsId.appendChild(conteinerFirst);
  conteinerFirst.appendChild(addList);
  conteinerFirst.appendChild(botton);
  conteinerFirst.appendChild(bottonX);

addList.removeEventListener('click', firts);
};

/*-----------------SEGUNDA VERSION AÑADIR UNA LISTA--------------------*/
botton.addEventListener('click', second);

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

  var bottonTwo = document.createElement('bottonTwo');
  var textArea = document.createElement('textArea');
  bottonTwo.className = 'bottonTwo';
  textArea.className = 'textArea';

  document.getElementById('addList').value;

  bottonTwo.appendChild(document.createTextNode('Añadir'));
  newLink.appendChild(bottonTwo);

  conteinerTarea.appendChild(textArea);
  conteinerTarea.appendChild(bottonTwo);
  secondId.appendChild(conteinerTarea);

  newLink.style.display = 'none';
/*-----------------CUARTA VERSION FOCUS--------------------*/
  textArea.onfocus = ('click', function(){
     textArea.style.backgroundColor = '#ABC5D3';
  });
/*-----------------QUINTA VERSION AÑADIR NUEVAS LISTAS--------------------*/
bottonTwo.addEventListener('click', function (){

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
        bottonTwo.style.display = 'none';

        });

    });

  });

};
