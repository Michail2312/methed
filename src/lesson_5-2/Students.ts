import { AbstractUsers } from './AbstractUsers';
import { IUser } from './User';

export class Students extends AbstractUsers {
  add(user: IUser): void {
    if (this.userList.filter(u => u.id === user.id).length === 0) {
      this.userList.push(user);
    }
  }
}
