document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {
      format: 'dd mmmm',
      i18n: {
        months: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        weekdaysShort: ["Вс","Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekdaysAbbrev: ["Вс","Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        cancel: 'отмена',
        clear: 'очистить',
        done: 'готово'
      }
    });
  });
(function() {
    
    var formContainer = document.querySelector(".booking-form");    

    formContainer.addEventListener('click', setInputVal);

    function setInputVal(e) {
      var target = e.target;
      var operation;
      var input;

      while(target !== formContainer) {
        if (target.className === 'counter__btn') { break; }
        target = target.parentNode;
      }

      operation = target.dataset.operation;
      input = target.parentNode.querySelector('input');

      if(isNaN(input.value) || input.value < 0){
        input.value = 0;
      }

      if (operation === 'plus') {
        input.value = +input.value + 1;
      } else if (input.value - 1 >= 0) {
        input.value = +input.value - 1;       
      }
    }
  })();