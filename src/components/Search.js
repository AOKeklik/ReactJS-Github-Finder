import React from 'react'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            keyword: ''
        }
    }
    onChange(e){
        this.setState({
            keyword: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()

        if(this.state.keyword == ''){
            this.props.setAlert('Lutfen Arama Cubugunu Bos Birakmayiniz..', 'danger')
        }else{
            this.props.searchUsers(this.state.keyword)
            this.setState({keyword: ''})
        }
    }
    render(){
        return (
            <div className="container my-3">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input onChange={this.onChange} value={this.state.keyword} type="text" className="form-control" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
                {
                    this.props.showClearButton && <button onClick={this.props.clearUsers} className="btn btn-secondary btn-sm btn-block mt-3">Clear Results</button>
                }
            </div>
        )
    }
}

export default Search