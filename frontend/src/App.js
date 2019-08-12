// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React, { Component } from 'react';
import Modal from './components/Modal'

const todoItems = [
    {
        id: 1,
        title: "Go to Market",
        description: "Buy ingredients to prepare dinner",
        completed: true
      },
      {
        id: 2,
        title: "Study",
        description: "Read Algebra and History textbook for upcoming test",
        completed: false
      },
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            activeItem: {
              title: "",
              description: "",
              completed: false
            },
            todoList: todoItems
        };
    }

    toggle = () => {
      this.setState({ modal: !this.state.modal})
    };

    handleSubmit = item => {
      this.toggle();
      alert("save" + JSON.stringify(item));
    };

    handleDelete = item => {
      alert("delete" + JSON.stringify(item));
    };

    createItem = () => {
      const item = { title: "", desciption: "", completed: false};
      this.setState({ activeItem: item, modal: !this.state.modal})
    }

    editItem = item => {
      
    }

    displayCompleted = status => {
        if (status) {
            return this.setState({viewCompleted: true})
        }

        return this.setState({viewCompleted: false})
    };

    renderTabList = () => {
        return(
            <div className="my-5 tab-list">
                <span
                onClick={() => this.displayCompleted(true)}
                className={this.state.viewCompleted ? "active": ""}
                >
                    complete
                </span>
                <span
                onClick={() => this.displayCompleted(false)}
                className={this.state.viewCompleted ? "": "active"}
                >
                    Incomplete
                </span>
            </div>
        );
    };

    renderItems = () => {
        const { viewCompleted } = this.state;
        const newItems = this.state.todoList.filter(
            item => item.completed === viewCompleted
        );

        return newItems.map(item => (
            <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
            >
                <span
                className={`todo-title mr-2 ${
                    this.state.viewCompleted ? "completed-todo" : ""
                }`}
                title={item.description}
                >
                    {item.title}
                </span>
                <span>
                    <button className="btn btn-secondary mr2">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </span>
            </li>
        ));
    };

    render() {
        return (
            <main className="content">
                <h1 className="text-white text-uppercase text-center my-4"> Todo App</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3"></div>
                        <div className="">
                            <button className="btn btn-primary">Add Task</button>
                        </div>
                        {this.renderTabList()}
                        <ul className="list-group list-group-flush">
                            {this.renderItems()}
                        </ul>
                    </div>
                </div>
            </main>
        )
    }
}

export default App;