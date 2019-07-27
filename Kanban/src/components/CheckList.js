import React, { Component } from 'react';
class CheckList extends Component {
    render() {
        let tasks = this.props.tasks.map((task) => (
            <li className="checklist__task"  key={task.id}>
                <input type="checkbox"  key={task.id} defaultChecked={task.done} />
                {task.name}
                <a href="/order" className="checklist__task--remove" >Remove</a>
            </li>
        ));

        return (
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}
export default CheckList;