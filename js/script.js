function getCurrentDate() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  if(day<10) {
    day='0'+day;
  }

  if(month<10) {
    month='0'+month;
  }

  return today = day + '.' + month + '.' + year;
}

function isSelectEmpty() {
  var $selectList = $('select');
  for(var i=0; i < $selectList.length; i++) {
    if($selectList[i].value == "") return true;
  }
  return false;
}

function getDate(n) {
  var $selectList = $('select');
  return $selectList[n].value;
}

function daysCounter() {
  var date1 = new Date(getDate(2), getDate(1), getDate(0));
  var date2 = new Date(getDate(5), getDate(4), getDate(3));
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  if($("#endDay").prop('checked')) diffDays++;
  return diffDays;
}

function weeksCounter() {
  var daysCol = daysCounter();
  var weeks = daysCol/7;
  if(weeks < 1) return 0;
  return Math.floor(weeks);
}

function monthsCounter() {
  var months;
  var d1 = new Date(getDate(2), getDate(1), getDate(0));
  var d2 = new Date(getDate(5), getDate(4), getDate(3));
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth() + 1;
  months += d2.getMonth() + 1;
  if(months < 0) return -months;
  return months;
}

function yearsCounter() {
  var d1 = new Date(getDate(2), getDate(1), getDate(0));
  var d2 = new Date(getDate(5), getDate(4), getDate(3));
  var years = (d2.getFullYear() - d1.getFullYear());
  if(years < 0) return -years;
  return years;
}

$('.alert').html('Сегодня ' + getCurrentDate());

$('#submit').click(function() {
  if(isSelectEmpty()) {
    $('#errorModal').modal('show');
    return;
  }
  $('.daysPassed').html(daysCounter());
  $('.weeksPassed').html(weeksCounter());
  $('.monthsPassed').html(monthsCounter());
  $('.yearsPassed').html(yearsCounter());
  $('#modal-1').modal('show');
});
