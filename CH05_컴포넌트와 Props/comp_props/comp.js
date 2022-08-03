function Welcome(props){
    return <h1>Hello, {props.name} </h1>
}

class Welcome2 extends React.Component {

    render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
}