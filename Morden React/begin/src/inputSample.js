import React, { useState, useRef } from 'react'; // useRef를 선택

function InputSample() {
    const [inputs, setInputs] = useState({ // JSX에서 변경될 inputs을 객체로 만듬
        name: '',
        nickname: '',
    });
    const nameInput = useRef(); // nameInput을 Ref로 사용할거라고 선언
    const { name, nickname } = inputs; // 비구조 할당화로 iputs의 객체에 name이랑 nickName을 넣음

    const onChange = (e) => {
        const { value, name } = e.target;

        setInputs({
            ...inputs, // 기존의 inputs(객체)안 값을 복사 한다., 객체를 수정할띠 spread문법을 사용하자
            [name]: value // name 키를 가진 값을 value로 설정 , name 값이 아니라, name키 <- value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus(); // ref로 지정된 nameInput의 위치에 있는 DOM을 currnet가 가르킨다. 그리고 DOM함수를 사용하면 됨

    };


    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>이름: {name} </b>
                <b>닉네임: {nickname} </b>
            </div>
        </div>
    );
}

export default InputSample;