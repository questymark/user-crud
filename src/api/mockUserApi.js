import delay from './delay';

const users = [
  {
    id: 1,
    name: "Смирнов Игорь Петрович",
    birthday: '01.01.1980',
    adress: 'г. Москва, ул. Большая Дорогомиловская, д. 14, кв. 35',
    city: 'Москва',
    phone: '+7 966 777 01 05'
  },
  {
    id: 2,
    name: "Петров Петр Петрович",
    birthday: '03.08.1991',
    adress: 'г. Москва, ул. Нежинская, д. 14, кв. 35',
    city: 'Москва',
    phone: '+7 966 777 77 77'
  }
];

const generateId = () => {
  if (JSON.parse(localStorage.getItem('users')).length) {
    return JSON.parse(localStorage.getItem('users'))[JSON.parse(localStorage.getItem('users')).length - 1].id + 1;
  } else {
    return 1;
  }
};

class UserApi {
  static getAllUsers() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(users));
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        resolve(Object.assign([], JSON.parse(localStorage.getItem('users'))));
      }, delay);
    });
  }

  static getUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        JSON.parse(localStorage.getItem('users')).forEach(item => {
          if (item.id == id) {
            resolve(item)
          }
        })
      }, delay);
    });
  }

  static saveUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.id) {
          const existingCourseIndex = users.findIndex(a => a.id == user.id);
          users.splice(existingCourseIndex, 1, user);
          let usersJSON = JSON.stringify(users);
          localStorage.setItem('users', usersJSON);
        } else { 
          user.id = generateId();
          let users = JSON.parse(localStorage.getItem('users')); 
          users.push(user);
          localStorage.setItem('users', JSON.stringify(users));
          
        }

        resolve(Object.assign([], JSON.parse(localStorage.getItem('users'))));
      }, delay);
    });
  }

  static deleteUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let users = JSON.parse(localStorage.getItem('users'));
        const indexOfCourseToDelete = users.findIndex(user => user.id == id);
        users.splice(indexOfCourseToDelete, 1);
        localStorage.setItem('users', JSON.stringify(users));
        resolve(Object.assign([], JSON.parse(localStorage.getItem('users'))));
      }, delay);
    });
  }
}

export default UserApi;
