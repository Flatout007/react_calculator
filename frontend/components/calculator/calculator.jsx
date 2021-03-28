import React from 'react'


export class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.updateNum1 = this.updateNum1.bind(this);
        this.updateNum2 = this.updateNum2.bind(this);
        this.multiply = this.multiply.bind(this);
        this.subtract = this.subtract.bind(this);
        this.add = this.add.bind(this);
        this.divide = this.divide.bind(this);
        this.clear = this.clear.bind(this);

        this.state = { res: 0, num1: '', num2: '' };
    }

    updateNum1(event) {
      let val = event.target.value;
      this.setState({num1: parseInt(val)});
    } 

    updateNum2(event) {
      let val = event.target.value;
      this.setState({ num2: parseInt(val) });
    }

    multiply(e) {
        e.preventDefault();
        this.setState({res: this.state.num1 * this.state.num2});
    }

    divide(e) {
        e.preventDefault();
        this.setState({ res: this.state.num1 / this.state.num2 });
    }

    add(e) {
        e.preventDefault();
        this.setState({ res: this.state.num1 + this.state.num2 });
    }

    subtract(e) {
        e.preventDefault();
        this.setState({ res: this.state.num1 - this.state.num2 });
    }

    clear(e) {
        e.preventDefault();
        this.setState({res: 0, num1: '', num2: ''});
    }

    
    render() {
        return(
            <div>
                <h1>{this.state.res}</h1>

                <input onChange={this.updateNum1} type="text" name='' value={this.state.num1 ? this.state.num1.toString() : ''}/>
                <input onChange={this.updateNum2} type="text" name='' value={this.state.num2 ? this.state.num2.toString() : ''} />
                  <br/>
                <button onClick={this.multiply}><h3>*</h3></button>
                <button onClick={this.divide}><h3>/</h3></button>
                <button onClick={this.subtract}><h3>-</h3></button>
                <button onClick={this.add}><h3>+</h3></button>
                  <br />
                <button onClick={this.clear}>clear</button>
            </div>
        ) 
    }
}