import React from 'react';

//use the data passed from IndecisionApp inside the componet itself
const Header = (props) => (
	<div className='header'>
		<div className='container'>
			<h1 className='header__title'>{props.title}</h1>
			{props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
		</div>
	</div>
);

//default props for Header
Header.defaultProps = {
	title: 'Indecision'
};

export default Header;