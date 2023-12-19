type User = {
  name: string;
  age: number;
  group?: string;
};

type Admin = {
  name: string;
  age: number;
  role: string;
};

type Person = User | Admin;

const persons: Person[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Ренат Aляуддинов',
    age: 22,
    group: 'Семья',
  },
  {
    name: 'Антон Антонов',
    age: 30,
    group: 'Друзья',
  },
  {
    name: 'Клайд Бэрроу',
    age: 25,
    group: 'Подельники',
  },
  {
    name: 'Босс',
    age: 25,
    role: 'администратор',
  },
];

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
};

console.log('Users:');
persons.forEach(logPerson);
