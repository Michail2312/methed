type User = {
  name: string;
  age: number;
  group: string;
};

const persons: User[] = [
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
];

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
};

console.log('Users:');
persons.forEach(logPerson);
