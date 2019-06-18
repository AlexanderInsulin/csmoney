import { ADD_TASK, REMOVE_TASK } from './types'

export const addTask = (name, description, boardId, id) => ({
    type: ADD_TASK,
    taskId: id,
    taskName: name,
    taskDescription: description,
    boardId,
})

export const deleteTask = (taskId, boardId) => ({
    type: REMOVE_TASK,
    taskId,
    boardId
})

export const moveTask = (taskId, boardId, fromBoardId) => (dispatch, getState) => {
    const fromBoard = getState()
        .find(board => board.id === fromBoardId)

    const { name, description, id } = fromBoard.tasks
        .find(task => task.id === taskId)

    dispatch(deleteTask(taskId, fromBoardId))
    dispatch(addTask(name, description, boardId, id ))
}

