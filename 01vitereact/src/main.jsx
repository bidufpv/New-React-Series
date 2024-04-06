import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'


function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
    
}

// const ReactElement = {
//     type: 'a',
//     props: {
//        href: "https://google.com",
//        target: '_blank'
//     },
//     Children: 'click to visit google'

// }
const anotherUser = 'Hello world'

const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
     anotherUser
)

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
//  anotherElement 
ReactElement
)

