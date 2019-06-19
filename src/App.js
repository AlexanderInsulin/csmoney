import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Board from './components/Board'
import { deleteTask, moveTask, addTask, updateTask } from './store/actions/taskActions'

const debounce = (callback, wait, accumutate) => {
    let timeout = null
    let accum = {}

    return (...args) => {
        if (accumutate) accum = { ...accum, ...args[accumutate] }

        const next = () => {
            callback(...args, accum)
            accum = {}
        }

        clearTimeout(timeout)
        timeout = setTimeout(next, wait)
    }
}

export default () => {
    const lists = useSelector(state => state)
    const dispatch = useDispatch()

    const onTaskDelete = (taskId, listId) =>
        dispatch(deleteTask(taskId, listId))

    const onTaskMove = (fromListId, taskId, listId) =>
        dispatch(moveTask(fromListId, taskId, listId))

    const onTaskAdd = (listId) =>
        dispatch(addTask('', '', listId))

    const onTaskUpdate = debounce((listId, taskId, _, accum) => dispatch(updateTask(listId, taskId, accum)), 300, 2)


    return <Board {...{ lists, onTaskDelete, onTaskMove, onTaskAdd, onTaskUpdate }} />
};
