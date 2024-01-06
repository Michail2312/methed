import { v4 as uuidv4 } from 'uuid';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  year?: number;
  specialty?: string;
  post?: string;
}

export const student1: IUser = {
  id: uuidv4(),
  firstName: 'John',
  lastName: 'Doe',
  age: 31,
  year: 10,
  specialty: 'backend developer',
};
export const student2: IUser = {
  id: uuidv4(),
  firstName: 'Anna',
  lastName: 'Chapman',
  age: 30,
  year: 11,
  specialty: 'frontend developer',
};
export const student3: IUser = {
  id: uuidv4(),
  firstName: 'John',
  lastName: 'Smith',
  age: 38,
  year: 12,
  specialty: 'fullstack developer',
};

export const employee1: IUser = {
  id: uuidv4(),
  firstName: 'James',
  lastName: 'Bond',
  age: 45,
  post: 'Project Manager',
};

export const employee2: IUser = {
  id: uuidv4(),
  firstName: 'Ethan',
  lastName: 'Hunt',
  age: 39,
  post: 'Team Lead',
};
