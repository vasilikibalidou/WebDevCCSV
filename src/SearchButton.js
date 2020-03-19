import React from 'react';

class SearchButton extends React.Component{
    state={

    }
    render(){
        const {onSearch}=this.props
        return(
            <button onClick={onSearch}>Search</button>
        )
    }
}

export default SearchButton