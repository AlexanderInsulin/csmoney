import React from 'react';
import { useSelector, useDispatch } from 'react-redux'



import BoardsList from './components/templates/BoardsList'

export default (store) => {
    const boards = useSelector(state => state)
    const dispatch = useDispatch()

    return <BoardsList
        boards={boards}
        onTaskDelete={({taskId, boardId}) => dispatch({ type: 'REMOVE_TASK', taskId, boardId })}
    />
};
