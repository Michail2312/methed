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
    age: 20,
    group: 'Семья',
  },
  {
    name: 'Антон Антонов',
    age: 20,
    group: 'Друзья',
  },
  {
    name: 'Джиперс Криперс',
    age: 20,
    group: 'Подельники',
  },
];

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
};

console.log('Users:');
persons.forEach(logPerson);
