import { Students } from './Students';
import { Employees } from './Employees';
import { employee1, employee2, student1, student2, student3 } from './User';

const students = new Students();
const employees = new Employees();

students.add(student1);
students.add(student2);
students.add(student3);


students.remove(student1.id)
console.log(students.get(student1.id));
console.log('#####################');

employees.add(employee1);
employees.add(employee2);

console.log(employees.get(employee1.id));
