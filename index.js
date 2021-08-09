function reply_click(clicked_id) {
  percentage_value = clicked_id;
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

  var tip_amount = (bill * percentage_value) / 100;
  document.getElementsByClassName('tip_amount')[0].innerHTML = tip_amount;
}
