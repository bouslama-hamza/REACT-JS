import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value : this.props.counter.value
    };

    handleIncriment = () => {
        this.setState({value : this.state.value + 1})
    }

    render() { 
        return (
            <React.Fragment>
                <h1 className={this.getcountnumber()}>{this.makecount()}</h1> 
                <button 
                    onClick={this.handleIncriment} 
                    className="btn btn-secondary btn-sm">
                    Incriment
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">
                    Danger
                </button>
            </React.Fragment>
        );
    }

    getcountnumber() {
        let countes = "badge m-2 badge-";
        countes += this.state.value === 0 ? "warning" : "primary";
        return countes;
    }

    makecount(){
        return this.state.value === 0 ? "Zero" : this.state.value;
    }
}
 
export default Counter;