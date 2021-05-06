import React from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) { // 자식 컴포넌트는 함수 자체를 감싸준다.
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
      &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}
export default React.memo(
    UserList,
    (prevProps, nextProps) => prevProps.users === nextProps.users
); // 이런식으로 두번쨰 파라미터에 해당 부분을 넣으면 , 나갈떄 users가 같으면 리랜더링 하지 않는다. 다만 이 경우는 나머지 props가 확실하게 변경되지 않는지 확인해야한다.