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

const isAdmin = (user: Person): user is Admin => {
  if (user.type === TypeUser.ADMIN) return true;
  else return false;
};

const isUser = (user: Person): user is User => {
  if (user.type === TypeUser.USER) return true;
  else return false;
};

const persons: Person[] = [
  {
    type: TypeUser.USER,
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    type: TypeUser.USER,
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    type: TypeUser.USER,
    name: 'Ренат Aляуддинов',
    age: 22,
    group: 'Семья',
  },
  {
    type: TypeUser.USER,
    name: 'Антон Антонов',
    age: 30,
    group: 'Друзья',
  },
  {
    type: TypeUser.USER,
    name: 'Клайд Бэрроу',
    age: 25,
    group: 'Подельники',
  },
  {
    type: TypeUser.ADMIN,
    name: 'Босс',
    age: 25,
    role: 'администратор',
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

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
