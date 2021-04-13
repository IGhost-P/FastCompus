import React from 'react'

function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color }}>
            { isSpecial && '*'} 안녕하세요 { name} {/*조건부 렌더링 , false관련 값이 아니면 모두 ture가 된다, 단축평가로 인해 *모양이 할당된다. */}
        </div>
    );
}

export default Hello // 헬로 컴포넌트를 만들어서 내보내 주겠다 라는뜻.
// 이런 JSX안 파일이 컴포넌트인듯?