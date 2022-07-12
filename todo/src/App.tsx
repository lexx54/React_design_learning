import { useState, useEffect, useMemo, useCallback } from 'react';

import List, { Todo } from './List';

const initialTodos = [
  { id: 1, task: 'go Shopping' },
  { id: 2, task: 'Pay the electricity bill' },
]
function App() {
  const [todoList, setTodoList] = useState(initialTodos);
  const [task, setTask] = useState('');
  const [term, setTerm] = useState('');

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task,
    }
    setTodoList([...todoList, newTodo])
    setTask('')
  }

  const handleSearch = () => setTerm(task)

  const filteredToDoList = useMemo(() => todoList.filter((todo: Todo) => {
    console.log('filtering...')
    return todo.task.toLowerCase().includes(term.toLocaleLowerCase())
  }), [term, todoList])

  const handleDelete = useCallback((taskId: number) => {
    const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId)
    setTodoList(newTodoList)
  }, [todoList])

  const printTodoList = useCallback(() => {
    console.log('changing todolist', todoList)
  }, [todoList])

  useEffect(() => {
    printTodoList()
  }, [todoList, printTodoList])

  return (
    <>
      <input type="text" value={task} onChange={({ target }) => setTask(target.value)} />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>
      <List todoList={filteredToDoList} handleDelete={handleDelete} />
    </>
  );
}

export default App;

// note
// I have a rule when it comes to establishing whether it is a good idea to use
// memo, and this rule is straightforward: just don't use it. Normally, when
// we have small components or basic logic, we don't need this unless you're
// working with large data from some API or your component needs to
// perform a lot of renders (normally huge lists), or when you notice that
// your app is going slow. Only in that case would I recommend using
// memo.