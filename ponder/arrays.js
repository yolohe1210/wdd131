// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)
// function myFunction(item) {
//   console.log(item * 10); 
// }         
                    

const steps = ['one', 'two', 'three'];
steps.forEach(showSteps);
function showSteps(item) {
    console.log(item);
}
let myList = document.querySelector('#myList');
const stepsHtml = steps.map(listTemplate);
function listTemplate (item) {
    return `<li>${item}</li>`;
}
myList.innerHTML = stepsHtml.join('');


let grades = ["A", "B", "C"];
let points;
let gpaPoints = grades.map(convert);
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
console.log(gpaPoints);
console.log(grades);

let total = gpaPoints.reduce(getTotal);
function getTotal(total, point) {
  return total + point;
}
let gpa = total / gpaPoints.length;
console.log(gpa);
console.log(total);


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filteredWords = words.filter(function(word){
    return word.length < 6;
})
console.log(filteredWords); 

// const students = [
//     {last: 'Andrus', first: 'Aaron'},
//     {last: 'Masa', first:'Manny'},
//     {last: 'Tanda', first: 'Tamanda'}
// ];
// const studentContainer = document.getElementById('student-container');
// const studentHTML = students.map(student => {
//     return `<div class="student-card" style="text-align: center;">
//                 <p>${student.first} ${student.last}</p>
//                 <hr>
//             </div>`;
// });
// studentContainer.innerHTML = studentHTML.join('');
          
const classes = [
    {name: 'WDD131', credits: 2},
    {name: 'CSE170', credits: 2},
    {name: 'ITM455', credits: 4}
]

let container = document.querySelector('#classes');

classes.forEach(function(item){
    let name = document.createElement('div');
    let html = `
    <span>${item.name}</span>
    <span>${item.credits}</span>
    <hr>
    `;
    name.innerHTML = html; 
    container.appendChild(name);
})