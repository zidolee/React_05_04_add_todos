import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../redux/todoReducer'

class AddTodo extends Component {

    state = {
        content: "",
        message:"",
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClick = () => {
        if(this.state.content){
            this.props.add(this.state.content);
            this.setState({
                message:""
            })
        }else{
            this.setState({
                message:"내용을 입력하세요"
            })
        }
    }

    onAddShower = ()=>{
        this.props.add("씻기");
    }

    render() {

        const { content,message } = this.state;
        
        return <div>
            <p>
                {message}
            </p>
            <input className="input-content" name="content" value={content} onChange={this.onChange} />
            <button className="bt" onClick={this.onClick}>추가</button>
            <button className="bt" onClick={this.onAddShower}>씻기 추가</button>
        </div>
    }
}

//addtodo 에 전달할 데이터 가 없기때문에
// const mapStateToProps = () => {

// }

const mapDispatchToProps = (dispatch) => {
    return {
        //content를 마라미터로 넘겨받아서 ADD_TODO 액션을 만들어서 dispatch를 호출하는 함수
        add : (content) => dispatch(addTodo(content))
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
export default connect(null, mapDispatchToProps)(AddTodo);