const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
function over50(students){
  let over50 = students.filter(student => student.score > 50)
  .map(student => student.score += student.score*0.1 )
  .reduce((acc,cur) => acc+cur,0)
  return `Total score is ${over50}`
}

console.log(over50(students))