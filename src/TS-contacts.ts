enum TypeUser {
  ADMIN = 'admin',
  USER = 'user',
}

interface User {
  type: TypeUser.USER;
  name: string;
  age: number;
  group: string;
}

interface Admin {
  type: TypeUser.ADMIN;
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const isAdmin = (person: Person): person is Admin => {
  return person.type === TypeUser.ADMIN;
};

const isUser = (person: Person): person is User => {
  return person.type === TypeUser.USER;
};

const persons: Person[] = [
  {
    type: TypeUser.ADMIN,
    name: 'Иван Петров',
    age: 27,
    role: 'Administrator',
  },
  {
    type: TypeUser.USER,
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'музыкант',
  },
  {
    type: TypeUser.USER,
    name: 'Екатерина Попова',
    age: 24,
    group: 'дизайнер сайтов',
  },
  {
    type: TypeUser.ADMIN,
    name: 'Аркадий Паравозов',
    age: 55,
    role: 'Системный администратор',
  },
  {
    type: TypeUser.USER,
    name: 'Даня Поперечный',
    age: 28,
    group: 'Комик',
  },
  {
    type: TypeUser.ADMIN,
    name: 'Олег',
    age: 44,
    role: 'Модератор',
  },
];

const logPerson = (person: Person) => {
  let information: string = '';
  if (isAdmin(person)) {
    information = person.role;
  }
  if (isUser(person)) {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

const filterUsers = (persons: Person[], criteria: Partial<Person>): Person[] =>
  persons.filter(user => {
    const criteriaKeys = Object.keys(criteria) as (keyof Person)[];
    return criteriaKeys.every(
      fieldName => user[fieldName] === criteria[fieldName]
    );
  });

console.log('Users of age 24:');

filterUsers(persons, {
  age: 19,
}).forEach(logPerson);

