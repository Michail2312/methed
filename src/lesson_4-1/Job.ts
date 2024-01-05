import { Person } from './Person';

export class Job {
  private _role: string;
  private _salary: number;
  constructor(role: string, salary: number) {
    this._role = role;
    this._salary = salary;
  }
  get salary(): number {
    return this._salary;
  }
  get role(): string {
    return this._role;
  }

  static work(personName: Person) {
    return `${personName.employeeInfo.name} сейчас работает как ${personName.employeeInfo.role}`;
  }
}

export const pushing = new Job('pushing', 300);
export const pulling = new Job('pulling', 200);
