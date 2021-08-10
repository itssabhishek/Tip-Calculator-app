function reply_click(clicked_id) {
  percentage_value = clicked_id;
  percentage_value = parseInt(percentage_value);
}

function calculateBill() {
  var bill = parseInt(document.getElementById('bill_value').value);

  var ent_tip_percentage = parseInt(
    document.getElementsByClassName('forms_tip-6')[0].value
  );

  var no_of_people = parseInt(
    document.getElementsByClassName('forms_number')[1].value
  );
  if (isNaN(no_of_people)) {
    no_of_people = 1;
  }

  percentage_value == 1
    ? (percentage_value = ent_tip_percentage)
    : percentage_value;

  var div = document.getElementsByClassName('hidden')[0];

  if (bill < 0 || no_of_people < 0) {
    div.style.color = 'red';
  } else {
    div.style.display = 'none';
  }

  var tip = (bill * percentage_value) / 100;

  var tip_amount = tip / no_of_people;
  document.getElementsByClassName('tip_amount')[0].innerHTML =
    tip_amount.toFixed(2);

  var total = (bill + tip) / no_of_people;
  document.getElementsByClassName('total')[0].innerHTML = total.toFixed(2);
}

function reset() {
  document.getElementById('forms').reset();
  document.getElementsByClassName('tip_amount')[0].innerHTML = '$0.00';
  document.getElementsByClassName('total')[0].innerHTML = '$0.00';
}
