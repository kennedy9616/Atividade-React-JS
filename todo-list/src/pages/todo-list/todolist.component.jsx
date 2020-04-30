import * as React from 'react';
import '../../App.css';

export default function TodoList() {

  const [tarefas, setTarefas] = React.useState([]);

  const addTarefa = () => {
    if (document.getElementById("textInput").value.trim() === '')
      return;
    let novaTarefa = document.getElementById("textInput").value;
    setTarefas([...tarefas, novaTarefa]);
    document.getElementById("textInput").value = "";
  }

  return(
    <div class="container">
      <h2 class="header orange-text"> TodoList </h2>
      <ul> {tarefas.map((tarefa) => <li>{tarefa}</li>)} </ul>
      <input
        id="textInput"
        type="text"
        name="texto"
        class="autocomplete"
        placeholder="Digite a tarefa"
      />
      <button 
        type="button"
        class="btn btn-primary"
        onClick={addTarefa}
      > Adicionar </button>
    </div>
  );
}