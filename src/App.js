import { NewTodo } from './features/Todos/NewTodo';
import { FilterTodo } from './features/Filters/Filters';
import { TodoList } from './features/Todos/TodoList';
import { ResetApp } from './features/Reset/ResetApp';
export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <FilterTodo />
      <TodoList />
      <ResetApp />
    </div>
  );
}
