import { createStore } from 'redux'
import reducers from './reducers'

const initialState = [
    {
        id: 1,
        name: 'To Do',
        tasks: [
            { id: 1, name: '1', description: 'qwer' },
            { id: 2, name: '2', description: 'asdf' },
            { id: 3, name: '3', description: 'zcxv' },
            { id: 4, name: '4', description: 'rtyu' },
            { id: 5, name: '5', description: 'dfgh' },
        ]
    },
    { id: 2, name: 'In process', tasks: [] },
    { id: 3, name: 'Done', tasks: [] },
]

export default createStore(reducers, initialState)