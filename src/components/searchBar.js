import React, { Component } from 'react'

class SearchBar extends Component {
    constructor (props) {
        super (props);

        this.state = {
            searchTerm: ''
        }
    }
    render() {
        return (
            <div className="row search-bar">
                <form className="col s12 m8 offset-m2">
                    <div className="row">
                        <div className="input-field col s12">
                            <input 
                                id="search" 
                                type="text" 
                                className="validate" 
                                value={this.state.searchTerm}
                                onChange={event => this.onInputChange(event.target.value)} /> 
                            <label htmlFor="search">What Do You Want?</label>
                        </div>
                    </div>
                </form>
            </div>
        );

    }
    onInputChange = (term) => {
        this.setState({searchTerm: term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;