import React, { Component } from 'react';
import './styles.css'

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <form>
				<label for="title">Title</label>
				<input type="text" id="title" name="title" placeholder="Title" />

				<label for="description">Description</label>
				<input type="text" id="description" name="description" placeholder="Description" />				

				<input type="submit" value="Create book" />
			</form>
        );
    }
}
 
export default AddBook;