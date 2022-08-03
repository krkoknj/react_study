// JSX

/**
 * 1. 태그는 무조건 닫혀야 한다
 */

<input type='text'/>

/**
 * 2. 두 개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져야 한다.
 */

class App2 extends React.Component {
    render() {

    }
}

/**
 * JSX 내부에서 변수를 사용하려면 코드르 { }로 감싸면 된다.
 */
class App3 extends React.Component {
    render() {
        const title = "100분 토론";
        
        return (
            <>
                <h1>이어서 {title}</h1>
            </>
        );
    }
}

/**
 * 4. {} 자바스크립트 if조건문(X)
 * : 삼항 연산자
 */
class App4 extends React.Component {
    render(){
        let flag = true;
        return(
            <div>
                {
                    flag ? <p>안녕하세요</p> : <p>누구신가요</p>
                }
            </div>
        );
    }
};
/**
 * 5. 카멜케이스 표기법
 */
class App5 extends React.Component {
    render(){
        return(
            <div className='app5'>
                <h1>제목</h1>
            </div>
        );
    }
}