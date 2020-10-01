import React from 'react'

const Repo = ({repo}) => (
    <li className="list-group-item">
        <i className="far fa-dot-circle"></i> <a href={repo.html_url}>{repo.name}</a> 
    </li>
)

export default Repo