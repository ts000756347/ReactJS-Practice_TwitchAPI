import React from 'react';
import Directory from './Directory';
import {connect} from 'react-redux';

class SearchContainer extends React.Component {

    render() {
        const {
            Top
        } = this.props;
        console.log('top');
        console.log(Top);
        return (
            <Directory games={Top}/>

        );
    }
}

export default SearchContainer = connect(
    (state) => ({Top: state.TopReducer}),
)(SearchContainer);