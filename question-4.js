const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' },
    { name: 'Bob', age: 19, department: 'Design' }
  ];
  
  const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering' },
    { name: 'David', age: 17, department: 'Support' }
  ];
  
  const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' },
    { name: 'Faythe', age: 18, department: 'Engineering' },
    { name: 'Grace', age: 20, department: 'Engineering' }
  ];
  

  function addCompany(employees, companyName) {
    return employees.map(employee => ({
      ...employee,
      company: companyName
    }));
  }

const alphaWithCompany = addCompany(alphaTech, 'alphaTech');
const betaWithCompany = addCompany(betaSoft, 'betaSoft');
const gammaWithCompany = addCompany(gammaDev, 'gammaDev');

  const allEmployees = alphaWithCompany.concat(betaWithCompany, gammaWithCompany);

const result = allEmployees.filter((employee) => {
  return employee.department === 'Engineering' && employee.age >= 20;
}).map((employee) => {
  return {
    name: employee.name,
    company:  employee.company
  };
});

console.log(result);
// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
  

