import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import BoardsList from './components/templates/BoardsList'
import { actions } from './store'

export default (store) => {
    const boards = useSelector(state => state)
    const dispatch = useDispatch()

    return <BoardsList
        boards={boards}
        onTaskDelete={({ taskId, boardId }) => dispatch(actions.taskActions.deleteTask(taskId, boardId))}
        onTaskMove={({ taskId, boardId, fromBoardId }) => dispatch(actions.taskActions.moveTask(taskId, boardId, fromBoardId))}
    />
};
