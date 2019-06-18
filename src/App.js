import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import BoardsList from './components/BoardsList'
import { actions } from './store'

export default () => {
    const boards = useSelector(state => state)
    const dispatch = useDispatch()

    const onTaskDelete = ({ taskId, boardId }) =>
        dispatch(actions.taskActions.deleteTask(taskId, boardId))

    const onTaskMove = ({ taskId, boardId, fromBoardId }) =>
        dispatch(actions.taskActions.moveTask(taskId, boardId, fromBoardId))

    const onTaskAdd = ({ taskName, taskDescription, boardId }) =>
        dispatch(actions.taskActions.addTask(taskName, taskDescription, boardId))

    return <BoardsList {...{ boards, onTaskDelete, onTaskMove, onTaskAdd }} />
};
