import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term : ''}
    }
    render() {
        return (
            <div className='search-bar'>
                <input value = {this.state.term} onChange={e => this.onChangeInput(e)} />
            </div>
        );
    }
    onChangeInput(e) {
        this.setState({ term : e.target.value});
        this.props.onInputSearchTerm(e.target.value);
    }
}

export default SearchBar;