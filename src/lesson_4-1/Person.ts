import { Job, pulling, pushing } from './Job';

export class Person {
  private name: string;
  private Job: Job = new Job();
  constructor(name: string) {
    this.name = name;
  }
  set changeJob(job: Job) {
    this.Job = job;
  }
  get employeeInfo() {
    return { name: this.name, role: this.Job.roleEmployee };
  }
  getSalary() {
    return this.Job.salaryEmployee;
  }
  work() {
    return(`${this.name} сейчас работает`);
  }
}

