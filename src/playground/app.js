//---------------------------------------------------------
//refers to jsx-indecision.js for more notes
//--------------------------------------------------------------

//this is a wrapper that renders all the components
class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePicK = this.handlePicK.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: []
		};
	}

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

	//delete all
	handleDeleteOptions() {
		//implicitly return an object by ({})
		this.setState(() => ({options: []}));
	}

	//delete one option
	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			//no equal -> item we want to delete
			//everything else get to stay by filter()
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			})
		}));
	}

	handlePicK() {
		const randomNum = Math.floor(Math.random() * 
			this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
	}

	//manuiplate the state
	//get called inside if of AddOption class
	handleAddOption(option) {
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
				{/*hasOptions either true or false*/}
				<Action 
					hasOptions={this.state.options.length > 0}
					handlePicK={this.handlePicK}
				/>
				<Options 
					options={this.state.options}
					handleDeleteOptions = {this.handleDeleteOptions}
					handleDeleteOption = {this.handleDeleteOption}	
				/>
				<AddOption
					handleAddOption = {this.handleAddOption}
				/>
      </div>
    );
  }
}

//use the data passed from above inside the componet itself
const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

//default props for Header
Header.defaultProps = {
	title: 'Indecision'
};

const Action = (props) => {
    return (
			<div>
				{/* disabled = true i.e. !empty array*/}
				<button 
					onClick={props.handlePicK}
					disabled={!props.hasOptions}
				>
					What should I do?
				</button>
      </div>
    );
};

const Options = (props) =>{
	return (
		<div>
		<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && 
				<p>Please add an option to get started</p>}
			{/*
				get access to options array and by using map
				to return individual Option tag for each item
				 in options array and give them individual key and value
			*/}
			{props.options.map((option) => (
				<Option 
				key={option} 
				optionText={option}
				handleDeleteOption = {props.handleDeleteOption}
				/>
			))}
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button 
				onClick={(e) => {
					props.handleDeleteOption(props.optionText);
				}}
			>
				remove
			</button>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		//component state
		this.state = {
			error: undefined
		};
	}

	//in-charge of doing stuff when form get submitted
	handleAddOption(e) {
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

	}

	render() {
  	return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"/>
					<button>Add Option</button>
				</form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));