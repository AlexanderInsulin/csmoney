import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Board from './components/Board'
import { deleteTask, moveTask, addTask, updateTask } from './store/actions/taskActions'

export default () => {
    const lists = useSelector(state => state)
    const dispatch = useDispatch()

    const onTaskDelete = (taskId, listId) =>
        dispatch(deleteTask(taskId, listId))

    const onTaskMove = (fromListId, taskId, listId) =>
        dispatch(moveTask(fromListId, taskId, listId))

    const onTaskAdd = (listId) =>
        dispatch(addTask('', '', listId))

    const onTaskUpdate = (listId, taskId, fileds) =>
        dispatch(updateTask(listId, taskId, fileds))

    return <Board {...{ lists, onTaskDelete, onTaskMove, onTaskAdd, onTaskUpdate}} />
};
