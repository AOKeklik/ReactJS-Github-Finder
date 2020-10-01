import React from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './Navbar'
import Alert from './Alert'
import Search from './Search'
import Users from './Users'
import About from './About'
import UserDetailes from './UserDetailes'

// route ARACILIGI ILE component SEKLINDE BILGI GONDERIRKEN props DEGERLERI YANI state BILGISI GIDER ANCAK DIGER method LARI
// YADA FARKLI DEGERLERI GONDEREMEYIZ, render SEKLINDE BIR component E ISTEDIGIMIZ HER DEGERI GONDEREBILIRZ 
// render ILE props BILGISINI {...props} SEKLINDE KONDERIRZ

class App extends React.Component{
    constructor(props){
        super(props)
        this.searchUsers = this.searchUsers.bind(this)
        this.getUser = this.getUser.bind(this)
        this.getUserRepos = this.getUserRepos.bind(this)
        this.clearUsers = this.clearUsers.bind(this)
        this.setAlert = this.setAlert.bind(this)
        this.state = {
            users: [],
            user: {},
            repos: [],
            loading: false,
            alert: null
        }
    }
    searchUsers(keyword){
        this.setState({
            loading: true
        })
        setTimeout(() => {
            axios
                .get(`https://api.github.com/search/users?q=${keyword}`)
                .then(response => this.setState({
                    users: response.data.items,
                    loading: false
                }))
        }, 1000)
    }
    getUser(username){
        this.setState({
            loading: true
        })

        setTimeout(() => {
            axios 
                .get(`https://api.github.com/users/${username}`)
                .then(response => this.setState({
                    user: response.data,
                    loading: false
                }))
        }, 1000)
    }
    getUserRepos(username){
        this.setState({
            loading: true
        })

        setTimeout(() => {
            axios 
                .get(`https://api.github.com/users/${username}/repos`)
                .then(response => this.setState({
                    repos: response.data,
                    loading: false
                }))
        },1000);
    }
    clearUsers(){
        this.setState({
            users: []
        })
    }
    setAlert(msg, type){
        this.setState({
            alert: {msg, type}
        })

        setTimeout(() => {
            this.setState({
                alert: null
            })
        }, 3000)
    }
    render(){
        return (
            <BrowserRouter>
                <Navbar />
                <Alert alert={this.state.alert} />
                <Switch>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <Search
                                searchUsers={this.searchUsers}
                                clearUsers={this.clearUsers}
                                showClearButton={this.state.users.length > 0 ? true : false}
                                setAlert={this.setAlert} />
                            <Users users={this.state.users} loading={this.state.loading} />
                        </React.Fragment>
                    )} />
                    <Route path="/about" component={About} />
                    <Route path="/user/:login" render={props => (
                        <UserDetailes 
                            {...props} 
                            user={this.state.user} 
                            repos={this.state.repos}
                            getUser={this.getUser}
                            getUserRepos={this.getUserRepos}
                            loading={this.state.loading} />
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App