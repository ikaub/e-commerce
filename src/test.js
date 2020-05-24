import React from "react";


class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    getData = (title) => {
        this.setState({title});
    }

    render() {
        const {title} = this.state;
        return (
            <div>
                <Child getData={this.getData}/>
                {
                    title ?
                        title : null
                }
            </div>
        );
    }
}

class Child extends React.Component {
    render() {
        return (
            <button onClick={() => {this.props.getData('Hello, world!')}}>
                Click
            </button>
        );
    }
}

export default Parent;