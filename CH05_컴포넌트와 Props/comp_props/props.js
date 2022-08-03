/*
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
*/

function App(props) {
    return (
    <Profile name="Tom" intro="안녕" hit={100}/>
    );
}

function Profile(props) {
    return(
        <>
            <h2>{props.name}의 블로그 입니다.</h2>
            <p>{props.intro}</p>
            <hr/>
            <span>{props.hit}</span>
        </>
    )
}
