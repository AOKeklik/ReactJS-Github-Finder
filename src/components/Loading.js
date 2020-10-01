import React from 'react'
import loading from './loading.gif'

// loading.gif DOSYASI ANA DIZIN ALTINDA ARANMASI ICIN MUTLAKA BASINA / slash ISARETI EKLEMEMIZ GEREKMEKTEDIR

const Loading = () => (
    <React.Fragment>
        <img src={`/${loading}`} style={{width: '200px', display: 'block', margin: 'auto'}}/>
    </React.Fragment>
)

export default Loading