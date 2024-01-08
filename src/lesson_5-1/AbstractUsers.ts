import { IUser } from './User';

export abstract class AbstractUsers<T extends IUser> {
  protected userList: T[] = [];
  add(user: T): void {
    if (this.userList.filter(u => u.id === user.id).length === 0) {
      this.userList.push(user);
    }
  }
  remove(userId: string): boolean {
    if (this.userList.filter(u => u.id === userId).length === 0) {
      return false;
    } else {
      this.userList = this.userList.filter(u => u.id !== userId);
      return true;
    }
  }
  get(userId: string): T | null {
    const user = this.userList.find(u => u.id === userId);
    return user ? { ...user } : null;
  }
}
