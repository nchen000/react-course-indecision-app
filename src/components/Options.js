import React from 'react';
import Option from './Option';

const Options = (props) => (
	<div>
		<div className="widget-header">
			<h3 className="widget-header__title">You Options</h3>
			<button 
				className="button button--link"
				onClick={props.handleDeleteOptions}
			>
				Remove All
			</button>
		</div>

		{props.options.length === 0 && 
			<p className="widget__message">Please add an option to get started!</p>}
		{/*
			get access to options array and by using map
			to return individual Option tag for each item
			 in options array and give them individual key and value
		*/}
		{props.options.map((option, index) => (
			<Option 
			key={option} 
			optionText={option}
			count={index + 1}
			handleDeleteOption = {props.handleDeleteOption}
			/>
		))}
	</div>
);


export default Options;