import React from 'react'
import loading from './loading.gif'

const Loading = () => {
    return (
        <React.Fragment>
            <img src={loading} alt="Loading.." style={{display: 'block', width:'200px', margin: 'auto'}} />
        </React.Fragment>
    )
}

export default Loading