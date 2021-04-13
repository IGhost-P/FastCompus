import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value); {/* e는 이벤트에 등록하는 함수에서, 이벤트 객체 e를 가져온다. target은 이벤트 DOM을 받고, value는 값으로 받는다. */ }
    };
    const onReset = () => {
        setText('');
    };

    return (
        <div>
            <input onChange={onChange} value={text} /> {/* value를 text로 해야, input이 바뀔때. onchange할때, 다시 초기화 시킬수 있다.*/}
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text} </b>
            </div>
        </div>
    );
}

export default InputSample;