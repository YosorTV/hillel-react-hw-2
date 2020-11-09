import todoApi from '../../todoApi';

// functions helper
const actionTypeCreator = type => payload => ({type,payload});
const todoTemplate = title => ({title,isDone: false});

// action get todos
export const ACTION_SET_TODOS = 'ACTION_SET_TODOS';
    const setAction = actionTypeCreator(ACTION_SET_TODOS);
export const getTodos = () => dispatch => 
    todoApi.get().then(({data}) => dispatch(setAction(data)));

// action create new todo
export const ACTION_CREATE_TODO = 'ACTION_CREATE_TODO';
const createAction = actionTypeCreator(ACTION_CREATE_TODO);
export const createTodo = title => dispatch => 
    todoApi.post('', todoTemplate(title)).then(({data}) => dispatch(createAction(data)));

// action delete todo
export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';
    const deleteAction = actionTypeCreator(ACTION_DELETE_TODO);
export const deleteTodo = id => dispatch => {
    dispatch(deleteAction(id));
        todoApi.delete(id);
}

// action status todo
export const ACTION_STATUS_TODO = 'ACTION_STATUS_TODO';
    const statusAction = actionTypeCreator(ACTION_STATUS_TODO);
export const toggleTodo = id => (dispatch, getState) => {
    const todo = { ...getState().todos.find(item => item.id === id) }
    todo.isDone = !todo.isDone
        todoApi.put(todo.id, todo).then(({data}) => 
            dispatch(statusAction(data)));
}