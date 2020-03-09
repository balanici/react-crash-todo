import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.todo.id}</p>
                <h3>{this.props.todo.title}</h3>
                <p>completed: {this.props.todo.completed}</p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo:  PropTypes.object.isRequired
}


export default TodoItem
