import React, { Component } from 'react'

// can add export default instead of exporting each class
class Counter extends Component {
   
    state = {
        value: this.props.counter.value
    }

    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    handleIncrement = () => {
        this.setState({value: this.state.value + 1})
    }



    render() {
        
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id) } className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>
        )
    }

        getBadgeClasses() {
            let classes = 'badge m-2 badge-'
            classes += this.state.value === 0 ? 'warning' : 'primary'
            return classes
        }

        formatCount() {
            const { value: count } = this.state
            return count === 0 ? 'Zero' : count
        }
}

export default Counter
