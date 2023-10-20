import { FC, useState, useReducer } from 'react';
import NewTodo from './components/newTodo';
import TodoList from './components/TodoList';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

const initialState = { todos: [] };
// const initialState = {
//   todos: [{ id: 1, description: 'test task', state: 'NEW' }],
//   };

let todoC = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case 'COMPLETE':
      // console.log('the reducer index is: ', action.todoIndex);
      // return {
      //   state,
      //   todos: state.todos.splice(action.todoIndex, 1),
      // };
      const newItems = [...state.todos]; // create new array
      newItems.splice(action.todoIndex, 1); // remove element
      return { ...state, todos: newItems }; // spread state first so we don't lose our awesome title, override items with new items
    case 'COMPLETED':
      todoC.push(action.todo);
      todoC = [...new Set(todoC)];
      console.log('todoC is: ', todoC);

    default:
      return state;
  }
};

export const App: FC<{ name: string }> = ({ name }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos } = state;

  function addTodoHandlerReducer(todo) {
    dispatch({ type: 'ADD', todo: todo });
  }
  function completeTodoHandlerReducer(index) {
    console.log('the index is: ', index);
    dispatch({ type: 'COMPLETE', todoIndex: index });
  }
  function completeAddTodoHandlerReducer(todo) {
    console.log('the todo text is: ', todo);
    dispatch({ type: 'COMPLETED', todo: todo });
  }
  return (
    <>
      <h1>Todo Appication:</h1>
      <br />
      <h1 style={{ color: 'grey', fontWeight: 'normal' }}>V1</h1>
      {/* <button type="button" className="btn btn-success" >Complete</button> */}
      <NewTodo addtodoHandlerReducer={addTodoHandlerReducer} />
      <br />
      <TodoList
        todos={todos}
        todoC={todoC}
        //completedTodos={completedTodos}
        completeTodoHandlerReducer={completeTodoHandlerReducer}
        completeAddTodoHandlerReducer={completeAddTodoHandlerReducer}
      />
    </>
  );
};
