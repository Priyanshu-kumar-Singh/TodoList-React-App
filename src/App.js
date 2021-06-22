import './App.css';
import Header from "./Mycomponents/Header";
import { Footer } from "./Mycomponents/Footer";
import { Todos } from "./Mycomponents/Todos";//using brackets here because we have used const func(rafc) in its js file
import { AddTodo } from "./Mycomponents/AddTodo";
import React, { useState, useEffect } from 'react';
import {About} from "./Mycomponents/About";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// This react -router dom is useful to create something like if we click a particular link/button then something must show 
// on our app after it 


function App() {
  //After refreshing data will not change YAY!
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    // console.log("I am ondelete of todo ", todo);
    // let index = todos.indexOf(todo); --> this will not work in deleting 
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc,li) => {
    // console.log("I am adding this todo ", title, desc);
    let sno = 1;
    if (todos.length > 0) sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      li: li
    }
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  }

  // It is method to make array dynamic like we can update directly using setTodos
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  //Jase hi todos me change aaye use Effect ko call kro 
  return (
    <>
      <Router>
        <Header title="MyTodosList" searchBar={false} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
