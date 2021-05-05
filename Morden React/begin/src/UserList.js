import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);
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
}

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

export default UserList;

// 마운트는 나타나는것, 언마운트는 사라지는것
// useEffect에는 첫번째는 함수, 두번째는 의존값인데 기본 값을 주면, 컴포넌트가 처음 나타날때만 등록한 함수가 나온다.
// 기본값이 아니면 설정한 특정값이 바뀌거나, 변경되어야 해당 값을 준다 (즉 해당 값이 바뀔때마다 함수가 호출됨, 반대로 해당 함수에 쓰이는 값이라면, 꼭 2번째 파라미터로 해당 값을 등록해줘야 최신으로 유지 된다., 함수도 마찬가지  )
// 주로 프롭스로 받은 값을 컴포넌트의 State로 받거나, API, 라이브러리 사용할때도 마운트돨떄 처리할수있다
// 우리의 UI가 나타난 상태 이후에 마운트라. DOM접근해도 ㄱㅊ음
// 사라지는건, 반환해주면된다(리턴)
// 클리어, 라이브러리 제거 등의 처리 
// 리엑트에선 부모 컴퍼넌트가 리 랜더링 되면 자식또한 같다. 그래서 Userlist의 값이 생성, 변경, 제거가 된다면 해당 배열(UserList)) 리 랜덜링이 되고, 그 안에 있는 User또한 리랜더링이 되어서, useEffect 또한 리 랜더링이 돈다, 즉 가상돔은 웹브라우저랑 다르게 보인다.-> 이렇게 중복이나 많은 리랜더링은 성능 저하를 유발 할수있다.

// useEffect 정리
// 첫번째 파라 미터에는 함수, 두번쨰는 댑스
// 리턴은 유즈 이팩트가 뒷정리 함수이기 떄문에 바뀌기 직전에 실행, 호출
// 조회 하고 있는 상태가 있으면, 두번째 파라미터를 넣어야한다.
// 조회는 하지만 두번째 파라 미터를 넣지 않으면, 참조하지 말거나(컴포넌트가 나타날때만 실행), 리턴에 넣으면 끝날때 호출 되고, 두번째 파라미터만 넣고 리턴을 빈칸으로 두면, 나타날떄, 끝날떄 바뀔때도 호출 된다.
// useEffect는 컴포넌트가 시작할때, 바뀔때 사라질떄 어떤 작업을 하고 싶을때 사용한다.
