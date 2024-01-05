import { Job, pulling, pushing } from './Job';
import { Person } from './Person';

const employee1 = new Person('employee1');
const employee2 = new Person('employee2', pulling);
const employee3 = new Person('employee3', pushing);


console.log(Job.work(employee1));
employee1.changeJob = pushing;
console.log(employee1.work());

console.log(Job.work(employee2));
employee2.changeJob = pulling;
console.log(employee2.work())

console.log(Job.work(employee3));
employee3.changeJob = pushing;
console.log(employee3.work())

console.log(Job.work(employee1));
console.log(Job.work(employee2));
console.log(Job.work(employee3));

employee1.changeJob = pulling;
employee2.changeJob = pushing;
employee3.changeJob = pulling;

console.log(Job.work(employee1));
console.log(Job.work(employee2));
console.log(Job.work(employee3));
