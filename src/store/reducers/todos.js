import {
  ACTION_SET_TODOS,
  ACTION_CREATE_TODO,
  ACTION_DELETE_TODO,
  ACTION_UPDATE_TODO
} from '../actions/todos';

const initialState = {
  todos:[]
};

const updateTodo = (todos, todo) => todos.map((el) => (el.id === todo.id ? todo : el));
const deleteTodo = (todos, payload) => todos.filter((el) => el.id !== payload);
const createTodo = (todos, todo) => ([...todos, todo]);

export default function (state = initialState, {type, payload}) {
  switch(type) {
    case ACTION_SET_TODOS: 
      return {
        ...state, 
        todos:payload
      };
    case ACTION_UPDATE_TODO: 
      return {
        ...state, 
        todos:updateTodo(state.todos, payload)
      };
    case ACTION_CREATE_TODO: 
      return {
        ...state,
        todos: createTodo(state.todos, payload)
      };
    case ACTION_DELETE_TODO:
      return {
        ...state,
        todos: deleteTodo(state.todos, payload)
      }
  }
}
