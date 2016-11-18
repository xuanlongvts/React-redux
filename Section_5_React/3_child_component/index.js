import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = { count: 0 };
        this.decrease = this.decrease.bind(this);
    }

    decrease(){
        this.setState({
            count: this.state.count - 1
        });
    }

    render(){
        console.log('Counter.render()');
        return(
            <div>
                Clicked: <span>{this.state.count}</span> times
                <button onClick={this.decrease}>Decrease</button>
            </div>
        );
    }
}

class Sum extends Component{
    constructor(props){
        super(props);
        this.state = {
            sum: 3,
            a: 1,
            b: 2
        }
    }

    render(){
        console.log('Sum.render()');
        return(
            <div>
                <p>
                    <input value={this.state.a} onChange={(e) => this.setState({a: e.target.value})} /> +
                    <input value={this.state.b} onChange={(e) => this.setState({b: e.target.value})} /> =
                    <span> {this.state.sum} </span>&nbsp;&nbsp;

                    <button onClick={()=>this.setState({sum: Number(this.state.a) + Number(this.state.b)})}>Sum</button>
                </p>
            </div>
        )
    }
}

class Exmples extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('Example.render()');
        return(
            <div>
                <h1>React</h1>
                <Counter />
                <Sum />
            </div>
        );
    }
}

ReactDOM.render(
    <Exmples/>,
    document.getElementById('root')
);