/** @format */

// Tìm xếp loại điểm của học sinhh
function getConduct() {
  var ranked = "";
  //   score
  var score = document.getElementById("score").value;
  score = Number(score);
  switch (
    score >= 90 && score <= 100
      ? 1
      : score >= 80 && score <= 90
      ? 2
      : score >= 70 && score <= 80
      ? 3
      : score >= 60 && score <= 70
      ? 4
      : score >= 50 && score <= 60
      ? 5
      : score >= 40 && score <= 50
      ? 6
      : 0
  ) {
    case 1:
      ranked = "S";
      break;
    case 2:
      ranked = "A";
      break;
    case 3:
      ranked = "B";
      break;
    case 4:
      ranked = "C";
      break;
    case 5:
      ranked = "D";
      break;
    case 6:
      ranked = "E";
      break;
    case 0:
      ranked = "You Have Failed!";
      break;
  }
  document.getElementById("StudentName").value =
    document.getElementById("name").value;
  document.getElementById("studentScore").value = ranked;
}
