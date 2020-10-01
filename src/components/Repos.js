import React from 'react'
import Repo from './Repo'

// ISTER constructor METHODU ILE {repos} SEKLINDE ISTERSEKDE props SEKLINDE DEGER ALABILRZ 

const Repos = ({repos}) => repos.map(repo => <Repo repo={repo} key={repo.id} />)

export default Repos