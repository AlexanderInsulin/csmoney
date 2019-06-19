import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import BoardsList from './components/Board'
import { deleteTask, moveTask, addTask } from './store/actions/taskActions'

export default () => {
    const boards = useSelector(state => state)
    const dispatch = useDispatch()

    const onTaskDelete = ({ taskId, boardId }) =>
        dispatch(deleteTask(taskId, boardId))

    const onTaskMove = ({ taskId, boardId, fromBoardId }) =>
        dispatch(moveTask(taskId, boardId, fromBoardId))

    const onTaskAdd = ({ taskName, taskDescription, boardId }) =>
        dispatch(addTask(taskName, taskDescription, boardId))

    return <BoardsList {...{ boards, onTaskDelete, onTaskMove, onTaskAdd }} />
};
