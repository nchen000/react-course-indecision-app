import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from'./Options';
import OptionModal from './OptionModal';

//Event-handlers used to be ES6 methods had being converted
//to class properties using babel plugin
//this is a wrapper that renders all the components
export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	};

	//delete all
	handleDeleteOptions = () => {
		//implicitly return an object by ({})
		this.setState(() => ({options: []}));
	};

	handleClearSelectedOption = () => {
		this.setState(() => ({selectedOption: undefined }));
	};

	//delete one option
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			//no equal -> item we want to delete
			//everything else get to stay by filter()
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			})
		}));
	};

	handlePicK = () => {
		const randomNum = Math.floor(Math.random() * 
			this.state.options.length);
    const option = this.state.options[randomNum];
		
		this.setState(() =>({
			selectedOption: option
		}));
	};

	//manuiplate the state
	//get called inside if of AddOption class
	handleAddOption = (option) => {
		//if empty string reprompt
		//else indexof(option) is greater than -1
		//meaning it exists in array already
		if(!option) {
			return 'Enter valid value to add item';
		} else if(this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		} 

		//equivalent to a else clause
		this.setState((prevState)=>({
			//we use concat here b/c we don't want to
			//change the array from prevState
			options: prevState.options.concat(option)
		}));
	};

	componentDidMount() {
		//use of try catch to avoid invalid syntax to store as JSON
		try{
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
	
			if(options) {
				this.setState(()=>({options: options}));
			}
		} catch(e){
			//Do nothing at all
			//since we are reading from localStorage
			//it will take the previous value
		}
	}

	componentDidUpdate(prevProps, prevState) {
		//only if the data is changed
		//length is same, no did to call
		if(prevState.options.length !== 
			this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	componentWillUnmount() {
		console.log('componetWillUnmount');
	}

  render() {
		//this way provides more flexibility
		const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
				{/*
					passing data to componet by 
					providing key-value pair here
					you can access it later with props
					so the text can be rendered
				*/}
				<Header subtitle={subtitle}/>
				<div className='container'>
					{/*hasOptions either true or false*/}
					<Action 
						hasOptions={this.state.options.length > 0}
						handlePicK={this.handlePicK}
					/>
					<div className="widget">
						<Options 
							options={this.state.options}
							handleDeleteOptions = {this.handleDeleteOptions}
							handleDeleteOption = {this.handleDeleteOption}	
						/>
						<AddOption
							handleAddOption = {this.handleAddOption}
						/>	
					</div>
				</div>
					<OptionModal
						selectedOption= {this.state.selectedOption}
						handleClearSelectedOption = {this.handleClearSelectedOption}
					/>			
      </div>
    );
  }
}
