import React from "react";

function Book(props){
    let info = {
        color:'white',
        backgroundColor : 'crimson',
        border:'1px soild',
        display:'flex'
    };

    let img = {
        width: '150px',
        heigth : '150px',
        borderRadius:'100px',
        marginRigth: '50px'
    };

    let urlImg ='https://images.velog.io/images/jini_eun/post/107f5cfb-e97c-4c4c-b997-06098062e5b3/image.png'
    return(
        <div style={info}>
            <img src={urlImg} alt={img} />
            <div>
                <h2>{`이 책의 이름은 ${props.name} 입니다.`}</h2>
                <h3>{`이 책은 총 ${props.page} 페이지 입니다.`}</h3>
            </div>
        </div>
    );
};

export default Book;