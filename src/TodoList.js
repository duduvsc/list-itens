import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    setItems([...items, { text: input, completed: false }]);
    setInput('');
  };

  const handleToggleComplete = index => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const handleDelete = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAdd}>Adicionar</button>
      {items.map((item, index) => (
        <div key={index}>
          <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
          <button onClick={() => handleToggleComplete(index)}>
            {item.completed ? 'Desmarcar' : 'Marcar como concluído'}
          </button>
          <button onClick={() => handleDelete(index)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
