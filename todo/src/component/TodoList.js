import React, {Component} from 'react'
import TodoItem from './TodoItem'
import {connect} from 'react-redux'
import {deleteTodo} from '../redux/todoReducer'

class TodoList extends Component{

    static defaultProps = {
        todos:[],
        delete : () => {}
    }

    render(){
        const {todos, deleteItem} = this.props;
        const list = todos.map((item, index) => {
            return <TodoItem key={index} id={index+1} index={index} content= {item} onClick={deleteItem}/>
        })
        return list
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos          //todoReducer todos를 넣어줌
    }
}


const mapDipatchToProps = (dispatch) => {
    return {
        deleteItem:(index) => dispatch(deleteTodo(index))
    }
}


//export default connect(mapStateToProps, mapDipatchToProps) (TodoList);
export default connect(mapStateToProps, mapDipatchToProps) (TodoList);