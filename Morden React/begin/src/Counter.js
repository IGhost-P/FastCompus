import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0); // 첫번째 현재의 상태, 두번째 디스패치는 보내다, 액션을 발생시킨다. 라는 뜻/ 리듀서와 기존값을 넣는다

    const onIncrease = () => {
        dispatch({ type: 'INCREMENT' }); // 상태의 로직이 컴포넌트 밖에 있는것을 확인할수있다.
    };

    const onDecrease = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
// 타입 이름은 우리 가 설정하고, 그에 따른 액션을 설정한다.