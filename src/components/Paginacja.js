import React, {Component} from 'react';

class TodoApp extends Component {
    constructor() {
        super();
    this.state = {
        todos: ['a', 'b', 'c', 'd', 'e', "f", "g", "h"],
        currentPage: 1,
        todosPerPage: 3,
        upperPageBound: 3,
        lowerPageBound: 0,
        pageBound: 3
    };
        this.handleClick = this.handleClick.bind(this);
}

    handleClick(event) {
        //numeracja 1,2,3 na dole strony
        let listid = Number(event.target.id);
        this.setState({
            currentPage: listid
        });
    }

    render() {
        const {todos, currentPage, todosPerPage, upperPageBound, lowerPageBound} = this.state;
        // Logic for displaying current todos
        // 1*3 = 3 - ostatni index to 3
        const indexOfLastTodo = currentPage * todosPerPage;
        // 3 - 3 = 0 = pierwszy index to 0
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        // slice zwraca nową tablicę w tym przypadku od 0 do 3
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        // z tablicy z 3 wyciągamy po jedynczo wartości
        const renderTodos = currentTodos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });

        // numer strony
        const pageNumbers = [];
        // długość tablicy / ile będzie na stronie
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            if (number === 1 && currentPage === 1) {
                return (
                    <li key={number} id={number}><a href='#' id={number} onClick={this.handleClick}>{number}</a></li>
                )
            } else if ((number < upperPageBound + 1) && number > lowerPageBound) {
                return (
                    <li key={number} id={number}><a href='#' id={number} onClick={this.handleClick}>{number}</a></li>
                )
            }
        });
        const style = {
            marginLeft: '80px',
            marginBottom: '100px'
        }

        return (
            <div style={style}>
                <ul>
                    {renderTodos}
                </ul>
                <ul className="pagination">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}

export default TodoApp;

