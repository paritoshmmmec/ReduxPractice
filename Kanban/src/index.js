import React from 'react'
import ReactDOM from 'react-dom'
import OrderContainer from './containers/OrderContainer'
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <div>
        <OrderContainer />
    </div>,
    rootEl
)

render()
