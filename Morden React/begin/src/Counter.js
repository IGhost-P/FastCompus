
import React, { useState } from 'react';

function Counter() {

    const [number, setNumber] = useState(0); // 첫번째는 동적 으로 바뀔 값, 첫번째 값에 동작을 주는 함수임
    const onIncrese = () => {
        setNumber(prevNumber => prevNumber + 1)
    }
    const onDecrese = () => {
        setNumber(prevNumber => prevNumber + -1) // 
    }
    return (
        <div>
            <h1> {number} </h1>
            <button onClick={onIncrese}>+1</button> {/* 리엑트에 이벤트 핸들러 값은, 호출이 아닌 값을 주는것!*/}
            <button onClick={onDecrese}>-1</button>
        </div>
    )
}

export default Counter
