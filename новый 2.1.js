var  form  =  document . getElementById ( 'addForm' ) ;
var  itemList  =  документ . getElementById ( 'предметы' ) ;
var  filter  =  document . getElementById ( 'фильтр' ) ;

// из отправки СОБЫТИЕ
форма . addEventListener ( 'отправить' ,  addItem ) ;
// Удаляем событие
itemList . addEventListener ( «щелкнуть» , removeItem ) ;
// Фильтровать событие
фильтр . addEventListener ( 'keyup' ,  filterItems ) ;

//Добавьте предмет
function   addItem ( e ) {
е . preventDefault ( ) ;

// получаем входное значение
var  newItem  =  document . getElementById ( 'элемент' ) . значение ;

// создаем новый элемент li
var  li  =  документ . createElement ( 'ли' ) ;
// добавляем класс
li . className = 'список-группа-элемент' ;
// добавляем текстовый узел с входным значением
li . appendChild ( документ . createTextNode ( newItem ) ) ;

// создаем элемент кнопки del
var  deleteBtn  =  документ . createElement ( 'кнопка' ) ;
// добавляем классы в кнопку del
deleteBtn . className  =  'btn btn-dangerous btn-sm float-right delete' ;
// добавляем текстовый узел
deleteBtn . appendChild ( документ . createTextNode ( 'X' ) ) ;  // = textContent = 'X'

// Кнопка добавления
li . appendChild ( deleteBtn ) ;
// Добавляем li в список
itemList . appendChild ( ли ) ;

}

// Убрать предмет
function  removeItem ( e ) {
  if ( e . target . classList . contains ( 'delete' ) ) {
    if ( confirm ( 'Вы уверены?' ) ) {
      var  li  =  e . цель . parentElement ;
      itemList . removeChild ( ли ) ;
    }
  }
}


// Фильтровать элементы
function  filterItems ( e ) {
  // конвертируем текст в нижний регистр
  var  text  =  e . цель . значение . toLowerCase ( ) ;
  // Получить список
  var  items  =  itemList . getElementsByTagName ( 'ли' ) ;
  // конвертируем в массив
  Массив . из ( пунктов ) . forEach ( функция ( элемент ) {
    var  itemName  =  item . firstChild . textContent ;
    if ( itemName . toLowerCase ( ) . indexOf ( текст )  ! =  - 1 ) {
      пункт . стиль . дисплей  =  'блок' ;
    }  else  {
      пункт . стиль . display  =  'нет' ;
    }
  } ) ;
  }