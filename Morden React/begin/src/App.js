import React, { useRaf } from 'react';
import Counter from './Counter';
import InputSample from './inputSample';
import UserList from './UserList'


function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'testert@gmail.com'
    },
    {
      id: 3,
      username: 'ysw',
      email: 'ysw@gmail.com'
    }
  ];

  const nextId = useRaf(4); // Raf를 이런식으로 사용할수도있다!
  const onCreat = () => {
    console.log(nextId.current); //4
    nextId.current += 1; // 이러면 생성후 id를 +1이 된다.
  }
  return (
    <div>
      <UserList users={users} />

    </div>
  )
}

export default App;