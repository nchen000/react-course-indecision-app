import React from 'react';

export default class AddOption extends React.Component {
	//component state
	state = {
		error: undefined
	};

	//in-charge of doing stuff when form get submitted
	handleAddOption = (e) => {
		//these 'local' behavior works best to stay here
		//rather than stay with the parent
		e.preventDefault();

		//go to form element and fetch value by name of option
		//trim the extra space
		//if input is just a bunch of spaces
		//nothing will happen
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
		
		//change componet state
		this.setState(() => ({ error }));
		
		//if no error, 'wipe' the form
		//else let user edit their input and try again
		if(!error){
			e.target.elements.option.value = '';
		}

	};

	render() {
  	return (
			<div>
				{this.state.error && <p className='add-option-error'>{this.state.error}</p>}
				<form className="add-option" onSubmit={this.handleAddOption}>
					<input className="add-option__input" type="text" name="option"/>
					<button className='button'>Add Option</button>
				</form>
      </div>
    );
  }
}
