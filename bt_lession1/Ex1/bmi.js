/** @format */

// Cho công thức tính BMI = mass / height ** 2 = mass / (height * height) với mass là khối lượng, height là cân nặng

// + Data 1: Marks nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m

let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log(`Mark BMI ${markBMI} is higher than John BMI ${johnBMI}`);
} else if (markBMI == johnBMI) {
  console.log(`Mark BMI ${markBMI} is equal John BMI ${johnBMI}`);
} else {
  console.log(`John BMI ${johnBMI} is higher than Mark BMI ${markBMI}`);
}

// + Data 2: Marry nặng 95 kg và cao 1.88 m. Harry nặng 85 kg và cao 1.76 m
let marryMass = 95;
let marryHeight = 1.88;

let harryMass = 85;
let harryHeight = 1.76;

const marryBMI = marryMass / (marryHeight * marryHeight);
const harryBMI = harryMass / (harryHeight * harryHeight);

const compareBMI =
  marryBMI > harryBMI
    ? `Marry BMI ${marryBMI} is higher than Harry BMI ${harryBMI}`
    : marryBMI == harryBMI
    ? `Marry BMI ${marryBMI} is equal Harry BMI ${harryBMI}`
    : `Harry BMI ${harryBMI} is higher than Marry BMI ${marryBMI}`;
console.log(compareBMI);
