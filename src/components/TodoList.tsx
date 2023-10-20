import Todo from './Todo';
import TodoC from './TodoC';

interface TodoListProps {
  todos: string[];
  todoC: string[];
  completeTodoHandlerReducer: (todo: number) => void;
  completeAddTodoHandlerReducer: (todo: string) => void;
  //setTodoVisible: (todoVisible: boolean) => void;
  //todoVisible: boolean;
}
function TodoList({
  todos,
  todoC,
  completeTodoHandlerReducer,
  completeAddTodoHandlerReducer,
}: //setTodoVisible,
//todoVisible,
TodoListProps) {
  //const [todoVisible, setTodoVisible] = useState(true);
  function completeTodoHandler() {}

  console.log(todos);
  return (
    <>
      <h2>Todo List</h2>
      {todos && todos.length > 0 ? (
        todos.map((todo: string) => (
          <Todo
            key={Math.random()}
            title={todo}
            status="Complete"
            todos={todos}
            todoC={todoC}
            completeTodoHandlerReducer={completeTodoHandlerReducer}
            completeAddTodoHandlerReducer={completeAddTodoHandlerReducer}
            //time={Date.now()}
            //setTodoVisible={setTodoVisible}
            //todoVisible={todoVisible}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>No Todos Yet!</p>
      )}
      <br />
      <br />
      <h2>Completed Todo List</h2>
      <br />
      {todoC && todoC.length > 0 ? (
        todoC.map((todo: string) => (
          <TodoC
            key={Math.random()}
            title={todo}
            status="Completed"
            todos={todos}
            todoC={todoC}
            titlez={todo}
            completeTodoHandlerReducer={completeTodoHandlerReducer}
            completeAddTodoHandlerReducer={completeAddTodoHandlerReducer}
            //time={Date.now()}
            //setTodoVisible={setTodoVisible}
            //todoVisible={todoVisible}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>No Completed Todos Yet!</p>
      )}
    </>
  );
}

export default TodoList;
