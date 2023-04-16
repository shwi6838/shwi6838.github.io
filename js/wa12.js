//Problem 1
let Employees = '{"employees" : [' +
    '{ "firstName":"Sam", "department":"Tech", "designation":"Manager", "salary":40000, "raise-eligible":true },' +
    '{ "firstName":"Mary", "department":"Finance", "designation":"Trainee", "salary":18500, "raise-eligible":true },' +
    '{ "firstName":"Bill", "department":"HR", "designation":"Executive", "salary":21200, "raise-eligible":false } ]}';

const obj = JSON.parse(Employees);
console.log("Problem 1");
console.log(obj);

//Problem 2
let Companies = '{"companies" : [' +
    '{ "companyName": "TechStars", "website":"www.techstars.com" } ]}';
const obj2 = JSON.parse(Companies);
obj2['employees'] = obj['employees'];
console.log("Problem 2");
console.log(obj2);

//Problem 3
obj2['employees'].push({ "firstName": "Anna", "department": "Tech", "designation": "Executive", "salary": 25600, "raise-eligible": false });
console.log("Problem 3");
console.log(obj2);

//Problem 4
function totalSalary(employees) 
{
    var total = 0;
    for (var i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }
    return total;
}
var total = totalSalary(obj2['employees']);
console.log("Problem 4");
console.log(total);

//Problem 5
function giveSalaryRaises(employees)
{
    for (var i = 0; i < employees.length; i++) {
        if (employees[i]["raise-eligible"]) 
        {
            employees[i].salary = employees[i].salary * 1.1;
            employees[i]["raise-eligible"] = false;
        }
    }
}
giveSalaryRaises(obj2['employees']);
console.log("Problem 5");
console.log(obj2);

//Problem 6
const workathome = ['Anna', 'Sam'];

for(var i = 0; i < obj2['employees'].length; i++)
{
    if(workathome.includes(obj2['employees'][i].firstName))
    {
        obj2['employees'][i]["wfh"] = true;
    }
    else
    {
        obj2['employees'][i]["wfh"] = false;
    }
}
console.log("Problem 6");
console.log(obj2);







