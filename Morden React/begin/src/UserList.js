import React from 'react'

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
    // 이걸 이용해서, 여러번 선안 안하게 기본틀을 만듬
}

function UserList() {
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

    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))} {/* 배열을 가져오고, 그 배열을 map함수를 이용해서 for문처럼 돌아감 */}
        </div>
    );
}

export default UserList;
