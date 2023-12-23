interface User {
  name: string;
  age: number;
  group: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const isAdmin = (person: Person): person is Admin => {
  return (person as Admin).role !== undefined;
};

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

const logPerson = (person: Person) => {
  let information: string;
  if (isAdmin(person)) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);
