const baseWord = {
  1:{
    rus: 'Около / Относительно',
    eng: "About",
  },
  2:{
    rus: 'Ему / Его',
    eng: "Him"
  },
  3:{
    rus: 'Наследовать / Унаследовать',
    eng: "Inherit"
  },
  4:{
    rus: 'Много / Намного',
    eng: "Lot"
  },
  5:{
    rus: 'Проводить "время" / тратить ',
    eng: "Spend"
  },
  6:{
    rus: 'что-то / что-нибудь ',
    eng: "Something"
  },
  7:{
    rus: 'До сих пор / Все еще ',
    eng: "Still"
  },
  8:{
    rus: 'Ниже / Внизу ',
    eng: "Below"
  },
  9:{
    rus: 'Иначе /  еще',
    eng: "Else"
  },
  10:{
    rus: 'Переехать',
    eng: "Move"
  },
  11:{
    rus: 'Терять / Потерять',
    eng: "Lose"
  },
  12:{
    rus: 'Встретить / Встречаться',
    eng: "Meet"
  },
  13:{
    rus: 'Изучать / изучение',
    eng: "Study"
  },
  14:{
    rus: 'Падение ',
    eng: "Drop"
  },
  15:{
    rus: 'Заменять / Замещать',
    eng: "Replace"
  },
  16:{
    rus: 'Внутри / Внутрь ',
    eng: "Inside"
  },
  17:{
    rus: 'Вставить / Вкладка ',
    eng: "Insert"
  },
  18:{
    rus: 'Между',
    eng: "Between"
  },
  19:{
    rus: 'Определять / Устанавливать',
    eng: "Define"
  },
  20:{
    rus: 'Менять / Изменить',
    eng: "Change"
  }
}


//глобаьная перменная
window.rndValue = 0;



// Стартовая генерация данных
getRandomInt();
formFill();


/// Кнопка отправить
toSend.onclick = function(){
  working();
}

// Событие при нажатии на Enter
document.onkeypress = function(){
  if(event.keyCode == 13 ){
    working();
  }
}

// Кнопка подсказка
toHint.onclick = function(){
  let sendWord = baseWord[rndValue].eng;
  document.getElementById('eng__word').innerHTML = sendWord;
}


const tableAnswer = {
  answerTrue: 0,
  answerFalse: 0
}


function working (){
  let sendWord = document.getElementById('sendWord').value;
  if(sendWord == ""){
    document.getElementById('result').innerHTML = "Пустая строка";
    document.getElementById('result').style.color = "red";
    return;
  }
  sendWord = sendWord[0].toUpperCase() + sendWord.slice(1);
  if (sendWord != baseWord[rndValue].eng){
    document.getElementById('result').innerHTML = "Ввели неверно, еще пробуйте";
    document.getElementById('result').style.color = "red";
    tableAnswer.answerFalse += 1
  }else{
    document.getElementById('result').innerHTML = "Был правильный ответ";
    document.getElementById('result').style.color = "#11b721";
    tableAnswer.answerTrue += 1;
    document.getElementById('eng__word').innerHTML = "Английское слово";
    setTimeout(function(){     
      document.getElementById('sendWord').value = "";
      document.getElementById('result').innerHTML = "&nbsp;";
      getRandomInt();
      formFill();
    } , 800);
  }
  counter();
}

function counter (){
  document.getElementById('count__true').innerHTML = " - " + tableAnswer.answerTrue; 
  document.getElementById('count__false').innerHTML = " - " + tableAnswer.answerFalse;
}



// Заполнение полей после загрузки и нажатия
function formFill(){
  let rusWord = baseWord[rndValue].rus;
  let baseWordRus = document.getElementById('baseWordRus').innerHTML = rusWord;
  /// создать переменную getRandomInt
}

// Случайное числа От мин в оббъекте до макс.
function getRandomInt() {
  let count  = 0;
  for(key in baseWord){
    count++;
  }
  let sumBaseWord = 1 - 0.5 + Math.random() * (count - 1 + 1)
    sumBaseWord = Math.round(sumBaseWord);
    rndValue = sumBaseWord;
}

