import React, { Component } from 'react'

// class SearchField extends Component {
//     render() {
//         return (
//             <div>
//                 <form onSubmit={ event => this.props.handleSubmit(event) }>
//                     <input 
//                         type="text" 
//                         value={this.props.query} 
//                         onChange={ event => this.props.handleChange(event) }/>
//                     <input type="submit"/>
//                 </form>
//             </div>
//         )
//     }
// }

const SearchField = ({ value, handleChange, handleSubmit }) => {
    return (
        <div>
            <form onSubmit={ event => handleSubmit(event) }>
                <input 
                    type="text" 
                    value={value} 
                    onChange={ event => handleChange(event) }/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default SearchField;