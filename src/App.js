import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': 'ab',
    'birthday': '200420',
    'gender': 'boy',
    'job': 'student'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'test',
    'birthday': '200320',
    'gender': 'man',
    'job': 'teacher'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'polestar',
    'birthday': '200321',
    'gender': 'girl',
    'job': 'banker'
  }
]


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
              );
          })
         }
      </div>
    );
  }
}

export default App;
