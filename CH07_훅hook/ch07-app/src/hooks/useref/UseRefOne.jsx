import React, {useEffect, useRef} from 'react';

/**
 * 
 * ref 객체는 컴포넌트의 전 생애주기 전체에 걸쳐서 유지
 * 컴포넌트가 재런더링되더라도 초기화 되지 않는다
 * 
 * Dom 요소에 접근할 때(document.querySelector())
 * 저장공간으로 사용
 */

function UseRef01() {
    return (
        <div className='cotainer'>
            <div className='d-flex'>
                <input className='form-control w-50' type={'text'} placeholder='username'/>
                <button>로그인</button>
            </div>
        </div>
    )
}

export default UseRef01