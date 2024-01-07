import { IUser } from './User';

export abstract class AbstractUsers {
  protected userList: IUser[] = [];
  abstract add(user: IUser): void;
  remove(userId: string): boolean {
    if (this.userList.filter(u => u.id === userId).length === 0) {
      return false;
    } else {
      this.userList = this.userList.filter(u => u.id !== userId);
      return true;
    }
  }
  get(userId: string): IUser | null {
    const user = this.userList.find(u => u.id === userId);
    return user ? { ...user } : null;
  }
  sorted(sortType: 'asc' | 'desc' = 'asc') {
    this.userList.sort((a, b): number => {
      if (sortType === 'asc') {
        return a.age - b.age;
      } else {
        return b.age - a.age;
      }
    });
  }
}
