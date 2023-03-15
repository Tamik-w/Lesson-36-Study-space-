'use strict';

const salaries = {
    'Mike': 1500,
    'Bob': 1800,
    'Nikola': 1700,
};

function maxSalary(salaries) {
    let maxSalary = 0;
    let maxSalaryEmployee = null;
    for (const [employee, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxSalaryEmployee = employee;
        }
    }
    return `Employee: ${maxSalaryEmployee}, His salary: ${maxSalary}`;
}

console.log(maxSalary(salaries))