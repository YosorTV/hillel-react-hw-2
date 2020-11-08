import todoApi from '../../todoApi';

const actionTypeCreator = type => payload => ({type, payload});

export const ACTION_DELETE_TODO = 'ACTION_DELETE';
export const deleteTodo = id => dispatch => {
  todoApi.delete(id).then(() => {
    return dispatch(actionTypeCreator(ACTION_DELETE_TODO, id))
  });
};

// export const ACTION_UPDATE_TODO = 'ACTION_UPDATE_ITEM';
// export const toggleTodo = id => (dispatch, getState) => {
//   const currentTodo = {...getState().todos.find(todo => todo.id === id)}
//   currentTodo.isDone = !currentTodo.isDone;
  
//   todoApi.put(todo.id, todo).then(({data}) => {
//     return dispatch(actionTypeCreator(ACTION_UPDATE_TODO, data));
//   });
// }

export const ACTION_UPDATE_TODO = 'ACTION_UPDATE_ITEM';
export function toggleTodo(id) {
    return function (dispatch, getState) {
        const todo = { ...getState().todos.find(item => item.id === id) }
        todo.isDone = !todo.isDone
        
        todoApi.put(todo.id, todo).then((resp) =>
                dispatch({
                    type: ACTION_UPDATE_TODO,
                    payload: resp.data,
                })
            );
            };
}

export const ACTION_CREATE_TODO = 'ACTION_CREATE_TODO';
export const createTodo = title => dispatch => {
  const todo = { title, isDone: false };
  todoApi.post('', todo).then(({data}) => {
    return dispatch(actionTypeCreator(ACTION_CREATE_TODO, data));
  });
}

export const ACTION_SET_TODOS = 'ACTION_SET_TODOS';
export const getTodos = () => dispatch => {
  todoApi.get().then(({data}) => {
    return dispatch(actionTypeCreator(ACTION_SET_TODOS, data))
  })
}