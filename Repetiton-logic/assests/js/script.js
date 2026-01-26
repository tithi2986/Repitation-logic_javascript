$(document).ready(function () {

  let n = prompt("Enter number of inputs");
  n = Number(n);

  if(n > 100){
    alert("Please enter number less than 100..");
    return;
  }

  for (let i = 1; i <= n; i++) {
    $("#box-container").append(
      "<input type='number' id='box" + i + "' class='input-box'>"
    );
  }

  $("#max").click(function () {
    let max = Number($("#box1").val());

    for (let i = 2; i <= n; i++) {
      let val = Number($("#box" + i).val());
      if (val > max) {
        max = val;
      }
    }

    $("#result").text("Max: " + max);
  });

  $("#min").click(function () {
    let min = Number($("#box1").val());

    for (let i = 2; i <= n; i++) {
      let val = Number($("#box" + i).val());
      if (val < min) {
        min = val;
      }
    }

    $("#result").text("Min: " + min);
  });


  $("#sum").click(function () {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += Number($("#box" + i).val());
    }

    $("#result").text("Sum: " + sum);
  });

  $("#avg").click(function () {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += Number($("#box" + i).val());
    }

    let avg = sum / n;
    $("#result").text("Average: " + avg);
  });

  $("#clear").click(function () {
    $(".input-box").val("");
    $("#result").text("");
  });

});
