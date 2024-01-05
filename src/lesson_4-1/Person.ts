import { Job } from './Job';

export class Person {
  private _name: string;
  private _Job: Job = new Job();
  constructor(name: string) {
    this._name = name;
  }
  set changeJob(job: Job) {
    this._Job = job;
  }
  get employeeInfo() {
    return { name: this._name, role: this._Job.role };
  }
  get getSalary() {
    return this._Job.salary;
  }
  work() {
    return(`${this._name} сейчас работает`);
  }
}

