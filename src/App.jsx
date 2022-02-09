import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import React, {useState} from 'react';


function App() {
  const [lists, setLists] = useState([
    {
      content: "Pass MERN",
      isSelected: false
    },
    {
      content: "Get groceries",
      isSelected: false
    }
  ])

  const [form, setForm] = useState({
    content: "",
    isSelected: false
  })
  
  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  // Changes the isSelected to true or false
  const change = (idx) => {
    lists.forEach((list, i) => {
      let updateList = list;

      if(idx === i) {
        updateList.isSelected = true;
      }
      else {
        list.isSelected = false;
      }
      setLists(
        [...lists.slice(0,i),updateList].concat(lists.slice(i+1)));
    })
  }

  // Adds to the List
  const handleList = (e) => {
    e.preventDefault();
    setLists(
      [...lists,form])
      setForm({
        content: "",
        isSelected: false
      })
  }

  const handleDelete = (idx) => {
    setLists([...lists.slice(0,idx),...lists.slice(idx+1)])
  }

  return (
    <div>
      <div>
      <TodoForm
        handleList={handleList}
        handleForm={handleForm}
        inputs={form}
      />
      </div>
      <div>
        {
          lists.map((list, i) => {
            return <Todo
                    key={i}
                    idx={i}
                    content={list.content}
                    isSelected={list.isSelected}
                    change={change}
                    handleDelete={handleDelete}
                  />
          })
        }
      </div>
    </div>
  );
}

export default App;
