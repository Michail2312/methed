import { AbstractUsers } from './AbstractUsers';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from './User';

export class Employees extends AbstractUsers {
  add(user: IUser): void {
    if (this.userList.filter(u => u.id === user.id).length === 0) {
      this.userList.push(user);
    }
  }
}
