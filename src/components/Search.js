import React from 'react'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state = {
            keyword: ''
        }
    }
    onSubmit(e){
        e.preventDefault()

        if(this.state.keyword === ''){
            this.props.setAlert('Lutfen Bir Anahtar Kelime Giriniz..', 'danger')
        }else{
            this.props.searchUsers(this.state.keyword)
            this.setState({
                keyword: ''
            })
        }
    }
    onChange(e){
        this.setState({
            keyword: e.target.value
        })
    }
    render(){
        return (
            <div className="container my-3">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input type="text" value={this.state.keyword} onChange={this.onChange} className="form-control"/>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
                {
                    this.props.showClearButton &&  <button onClick={this.props.clearUsers} className="btn btn-secondary btn-sm btn-block mt-2">Clear Result</button>
                }
            </div>
        )
    }
}

export default Search