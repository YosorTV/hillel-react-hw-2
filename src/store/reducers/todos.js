import {
    ACTION_SET_TODOS,
    ACTION_DELETE_TODO,
    ACTION_CREATE_TODO,
    ACTION_STATUS_TODO,
} from '../actions/todos';

const initialState = {
    todos: [],
};

const updateTodo = (todos, todo) => todos.map((item) => (item.id === todo.id ? todo : item));
const createTodo = (todos, todo) => [...todos, todo];

export default function (state = initialState, { type, payload }) {
    switch (type) {
    case ACTION_SET_TODOS:
        return { ...state, todos: payload };
    case ACTION_DELETE_TODO:
        return {
            ...state,
            todos: state.todos.filter((item) => item.id !== payload),
        };
    case ACTION_STATUS_TODO:
        return {
            ...state,
            todos: updateTodo(state.todos, payload),
        };
    case ACTION_CREATE_TODO:
        return {
            ...state,
            todos: createTodo(state.todos, payload),
        };
    default:
        return state;
    }
}