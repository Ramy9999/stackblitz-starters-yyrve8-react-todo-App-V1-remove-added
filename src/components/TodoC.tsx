import { useState, useRef } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
// import NewTodo from './newTodo';
//import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import { auto } from '@popperjs/core';

interface TodoProps {
  todos: string[];
  todoC: string[];
  title: string;
  status: string;
  titlez: string;
  completeTodoHandlerReducer: (todo: number) => void;
  completeAddTodoHandlerReducer: (todo: string) => void;
  //time: number;
  //setTodoVisible: (todoVisible: boolean) => void;
  //todoVisible: boolean;
}

function TodoC({
  title,
  status,
  titlez,
  todos,
  todoC,
  completeTodoHandlerReducer,
  completeAddTodoHandlerReducer,
}: //time,
//setTodoVisible,
//todoVisible,
TodoProps) {
  const [todoVisible, setTodoVisible] = useState(true);
  //this.myButtonRef = React.createRef();
  //const [todoArr, settodoArr] = useState([]);
  //const [todoIndex, settodoIndex] = useState(0);
  const myContainer = useRef(null);
  const [toTitle, setToTitle] = useState(title);
  const [completedtodoArr, setCompletedtodoArr] = useState([]);
  let completedtodoArr2 = [];
  //toTitle = title;
  function onInputHandler(event) {
    setToTitle(event.target.innerText);
  }
  function completeTodoHandler(event) {
    //setTodoVisible(false);
    // const todos = todoArr.filter((todo, todoIndex) => {
    //   return todoIndex !== index;
    // });
    // settodoArr(todos);
    //let newtodos = [...todos];
    //settodoIndex(event.target);
    let index = todos.indexOf(event.target.title);
    completeTodoHandlerReducer(index);
    //alert(index);
    //todos.splice(index, 1);
    //setCompletedtodoArr([...completedtodoArr, event.target.title.toString()]);
    //console.log('the arr is: ', completedtodoArr);
    //completedtodoArr2.push(event.target.title.toString());
    //console.log('the new array is: ', completedtodoArr2);
    completeAddTodoHandlerReducer(event.target.title);
    //removeCompletedTodoHandler(index);
    console.log(index);
    // var array = [...todoArr]; // make a separate copy of the array
    // var index = array.indexOf(e.target.value);
    // if (index !== -1) {
    //   array.splice(index, 1);
    //   settodoArr({ todoArr: array });
    // }

    // settodoArr(todoArr.filter((el) => el !== name));
  }
  const onChangeTodo = () => {
    //setToTitle((todos) =>
    todos.map((todo) => (todo === todo ? { ...todos, title: toTitle } : todo));
  };
  const ChangetodocHandler = (event) => {
    setToTitle(event.target.value);
    let index = todos.indexOf(event.target.title);
    //todos.splice(index, 1);
    todos[index] = event.target.value;
    todos.splice(todos.indexOf(event.target.title), 1, event.target.value);
    console.log('The modified todos are: ', todos);
  };
  function removeCompletedTodoHandler(event) {
    let index = todoC.indexOf(event.target.title);
    todoC.splice(index, 1);
    setTodoVisible(false);
    console.log('todoC index is:', index);
    console.log('todoC is:', todoC);
  }
  function mOver() {
    //const element = document.getElementById('bin');
    //element.setAttribute('title', 'Remove Completed todo');
    myContainer.current.setAttribute('title', 'Remove Completed todo');
  }
  return (
    <>
      {todoVisible && [
        <p
          style={{
            borderStyle: 'ridge',
            borderRadius: 5,
            borderWidth: 1.6,
            borderColor: 'white',
            height: 65,
            position: 'relative',
          }}
        >
          {/* <div contentEditable dangerouslySetInnerHTML={{ __html: title }} /> */}

          <input
            contentEditable="true"
            //dangerouslySetInnerHTML={{ __html: title }}
            //onInput={onInputHandler}
            type="text"
            value={toTitle}
            onChange={ChangetodocHandler}
            style={{
              border: 0,
              width: 'inherit',
              display: 'block',
              //margin: '1.12em 0',
              //fontSize: '100%',
              font: 'inherit',
              fontSize: 25,
              //msTransform: 'translateY(25%)',
              //transform: 'translateY(25%)',
              float: 'left',
              //margin: auto,
              marginLeft: 20,
            }}
          />
          {/* {toTitle} */}
          {/* <input value={toTitle} onChange={ChangetodocHandler} /> */}
          {/* </div> */}

          {/* <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
            /> */}

          <button
            style={{
              //msTransform: 'translateY(25%)',
              //transform: 'translateY(25%)',
              float: 'right',
              margin: auto,
              //marginRight: 20,
            }}
            type="button"
            className="btn btn-success align-middle redy"
            //onClick={completeTodoHandler} //add (index)
            title={title} //maybe change to time
          >
            {status}
          </button>
          {/* <div
            title={title} //maybe change to time
            onClick={removeCompletedTodoHandler}
          > */}
          <button
            style={{
              //color: 'red',
              color: 'transparent',
              textShadow: '0 0 0 #8b0000',
              float: 'right',
              margin: auto,
              border: 'none',
              background: 'none',
            }}
            ref={myContainer}
            id="bin"
            title={title}
            //title="Remove completed todo" //rename title in whole app to todoTitle
            //onMouseOver={mOver} //after renaming title, uncomment this line
            onClick={removeCompletedTodoHandler}
          >
            🗑️
          </button>
          {/* </div> */}
        </p>,
      ]}
      {todoC.length == 0 && [
        <p style={{ textAlign: 'center' }}>No Completed Todos Yet!</p>,
      ]}

      {/* {completedtodoArr2 && completedtodoArr2.length > 0 ? (
        [<p style={{ textAlign: 'center' }}>No jdsfjdsfk</p>]
      ) : (
        <p style={{ textAlign: 'center' }}>No Completed Todos Yet!</p>
      )} */}
    </>
  );
}

export default TodoC;
