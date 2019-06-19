import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from './types'

export const addTask = (name, description, listId, id) => ({
    type: ADD_TASK,
    taskId: id,
    taskName: name,
    taskDescription: description,
    listId,
})

export const deleteTask = (taskId, listId) => ({
    type: REMOVE_TASK,
    taskId,
    listId
})

export const updateTask = (listId, taskId, fields) => ({
    type: UPDATE_TASK,
    taskId,
    listId,
    fields
})

export const moveTask = (fromListId, taskId, listId) => (dispatch, getState) => {
    const fromList = getState()
        .find(list => list.id === fromListId)

    const { name, description, id } = fromList.tasks
        .find(task => task.id === taskId)


    dispatch(deleteTask(taskId, fromListId))
    dispatch(addTask(name, description, listId, id ))
}

