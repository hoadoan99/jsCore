/** @format */

// + Data 1: Dolphins có điểm là 96, 108 và89. Koalas có điểm là  88, 91 và 110
// Tính ĐTB cả 2 đội

function champion() {
  const teamA = {
    name: "Dolphins",
    score: [96, 108, 89],
    dtb: function () {
      var dtbA = this.score.reduce((a, b) => {
        return a + b;
      });
      return dtbA / 3;
    },
  };
  const teamB = {
    name: "Koalas",
    score: [88, 91, 110],
    dtb: function () {
      var dtbB = this.score.reduce((a, b) => {
        return a + b;
      });
      return dtbB / 3;
    },
  };
  //   console.log(teamA.dtb());
  //   console.log(teamB.dtb);
  const whoIsChamp =
    teamA.dtb() > teamB.dtb()
      ? `Team ${teamA.name} WIN `
      : teamA.dtb() < teamB.dtb()
      ? `Team ${teamB.name} WIN `
      : `2 teams DRAW`;

  console.log(whoIsChamp);
  const whoIsChamp2 =
    teamA.dtb() > teamB.dtb() && teamA.dtb() >= 100
      ? `Team ${teamA.name} WIN `
      : teamA.dtb() < teamB.dtb() && teamB.dtb() >= 100
      ? `Team ${teamB.name} WIN `
      : `2 teams DRAW`;
}
champion();

// cách 2
// Dùng array chứa 2 mảng object , dùng 2 vòng lặp lồng nhau
