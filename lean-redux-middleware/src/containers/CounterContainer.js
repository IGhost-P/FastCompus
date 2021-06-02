import React from 'react'
import Counter from '../components/Counter'
import { useSelector, useDispatch } from 'react-redux'
import { decrease, increase } from '../modules/Counter';
function CounterContainer() {
    const number = useSelector(state => state.counter); // 조회함
    const distpatch = useDispatch();

    const onIncrease = () => {
        distpatch(increase());
    };
    const onDecrease = () => {
        distpatch(decrease());
    }

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    )
}

export default CounterContainer
