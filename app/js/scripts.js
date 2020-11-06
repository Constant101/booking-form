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
