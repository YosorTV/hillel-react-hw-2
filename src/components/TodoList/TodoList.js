import React from 'react'
import TodoItem from '../TodoItem/TodoItem';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../store/actions/todos';

function TodoList({ todos, onItemToggle, onItemDelete, onItemEdit }) {
  return (
      <div>
          {todos.map((item) => (
              <TodoItem
                  key={item.id}
                  item={item}
                  onItemToggle={onItemToggle}
                  onItemDelete={onItemDelete}
              />
          ))}
      </div>
  );
}



function mapStateToProps({todos}) {
  return {
      todos
  };
}

const mapDispatchToProps = {
  onItemDelete: deleteTodo,
  onItemToggle: toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

