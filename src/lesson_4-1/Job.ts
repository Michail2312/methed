import { Person } from './Person';

export class Job {
  private role: string;
  private salary: number = 0;
  constructor(role?: string, salary?: number);
  constructor(role: string, salary: number) {
    if (typeof role === 'undefined' && typeof salary === 'undefined') {
      this.role = 'Безработный';
      this.salary = 0;
    } else {
      this.role = role;
      this.salary = salary;
    }
  }
  get salaryEmployee(): number {
    return this.salary;
  }
  get roleEmployee(): string {
    return this.role;
  }

  static work(personName: Person) {
    return(`${personName.employeeInfo.name} сейчас работает как ${personName.employeeInfo.role}`);
  }
}

export const pushing = new Job('pushing', 300);
export const pulling = new Job('pulling', 200);
