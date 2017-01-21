function getCurrentDate() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;

  return day + '.' + month + '.' + year;
}

function daysCounter() {
  var timeDifference = Math.abs(date2.getTime() - date1.getTime());
  var daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  if ($("#endDay").prop('checked')) daysDifference++;

  return daysDifference;
}

function weeksCounter() {
  var daysDifference = daysCounter();
  var weeksDifference = daysDifference / 7;

  return (weeksDifference < 1) ?  0 : Math.floor(weeksDifference);
}

function monthsCounter() {
  var monthsDifference = (date2.getFullYear() - date1.getFullYear()) * 12;

  monthsDifference -= date1.getMonth() + 1;
  monthsDifference += date2.getMonth() + 1;

  return (monthsDifference < 0) ? -monthsDifference : monthsDifference;
}

function yearsCounter() {
  var yearsDifference = (date2.getFullYear() - date1.getFullYear());
  return (yearsDifference < 0) ? -yearsDifference : yearsDifference;
}

$('#submit').click(function() {
  var selectList = $('select');

  for (var i = 0; i < selectList.length; i++) {
    if (selectList[i].value == "") {
      $('#modal-2').modal('show');
      return;
    }
  }

  window.date1 = new Date(selectList[2].value, selectList[1].value, selectList[0].value);
  window.date2 = new Date(selectList[5].value, selectList[4].value, selectList[3].value);

  $('.days-between').html(daysCounter());
  $('.weeks-between').html(weeksCounter());
  $('.months-between').html(monthsCounter());
  $('.years-between').html(yearsCounter());

  $('#modal-1').modal('show');
});

$('.current-date span').html('Today is ' + getCurrentDate());

for (var i = 1; i <= 31; i++) {
  $('.days').append('<option value="'+i+'">'+i+'</option>');
}

for (var i = 1900; i <= 2100; i++) {
  $('.year').append('<option value="'+i+'">'+i+'</option>');
}
