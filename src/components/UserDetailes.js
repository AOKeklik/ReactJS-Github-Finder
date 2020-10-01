import React from 'react'
import Loading from './Loading'
import Repos from './Repos'

class UserDetailes extends React.Component{
    componentDidMount(){// BIR ISLEM GERCEKLESTIGINDE ALTTAKI method LARI SET ET
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }
    render(){
        const {loading, repos} = this.props
        const {name, avatar_url, location, html_url, bio, blog, following, followers, public_repos} = this.props.user

        if(loading) return <Loading />
        return (
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={avatar_url} className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">{name}</p>
                                <p><i className="fas fa-map-marker-alt"></i> {location} </p>
                                <p>
                                    <a href={html_url} className="btn btn-primary btn-sm btn-block">Githun Profil</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                {
                                    bio && 
                                        <React.Fragment>
                                            <h3>About</h3>
                                            <p>{bio}</p>
                                        </React.Fragment>
                                }
                                {
                                    blog && 
                                        <>
                                            <h3>Blog</h3>
                                            <p>{blog}</p>
                                        </>
                                }
                                <div>
                                    <span className="badge badge-primary m-1">Following: {following}</span>
                                    <span className="badge badge-info m-1">Followers: {followers}</span>
                                    <span className="badge badge-success m-1">Repos: {public_repos}</span>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <Repos repos={repos} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetailes