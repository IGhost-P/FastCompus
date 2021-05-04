import React from 'react';

function User({ user, onRemove }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}
{/*파라미터를 넣고 싶기때문에 안에 새로운 함수를 넣는다, 이버튼이 눌리면 ~한 함수를 호출하고, 그리고 그 함수는id라는 파라미터를 가져 온다. 이렇게 안하면 랜더링 되는 순간 함수가 호출 되어버려서 삭제가 되어버림  */ }
function UserList({ users, onRemove }) {
    return (
        <div>
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove} />
            ))}
        </div>
    );
}

export default UserList;