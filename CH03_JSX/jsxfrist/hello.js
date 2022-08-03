class Hello extends React.Component {
    render() {
        return <h1>Hello, {this.props.nickname}</h1>
    }
}

ReactDOM.render(
    <Hello nickname='hello'/>,
    document.getElementById('root')
);