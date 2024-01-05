import { Job } from './Job';

export class Person {
  private _name: string;
  private _Job: { role: string; salary: number };
  constructor(name: string, job?: Job);
  constructor(name: string, job: Job) {
    this._name = name;
    this._Job =
      typeof job === 'undefined'
        ? (this._Job = { role: 'Безработный', salary: 0 })
        : (this._Job = job);
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
    return `${this._name} сейчас работает`;
  }
}
