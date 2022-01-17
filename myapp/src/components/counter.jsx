import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 3
    };

    render() { 
        return (
            <React.Fragment>
                <h1 className={this.getcountnumber()}>{this.makecount()}</h1> 
                <button className="btn btn-secondary btn-sm">Incriment</button>
            </React.Fragment>
        );
    }

    getcountnumber() {
        let countes = "badge m-2 badge-";
        countes += this.state.count === 0 ? "warning" : "primary";
        return countes;
    }

    makecount(){
        return this.state.count === 0 ? "Zero" : this.state.count;
    }
}
 
export default Counter;