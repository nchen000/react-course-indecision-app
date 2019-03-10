//JSX - JavaScript XML
//all JSX needs ONE single root wrapper
//() is for clarity and readbility 

//use of Javascript expression inside {} to display data from outside source
//AND expression ONLY
//true, false, null, undefined are all ingnored by JSX
//hence they are allowed inside {}

//tenary operator is expression so it is allowed inside {}

//JSX does NOT have built-in data binding

//some attribute from html is the same in JSX like id
//some got renamed like class -> className
//https://reactjs.org/docs/dom-elements.html 
//for complete list of attribute

/* ReactDOM.render() takes two arguments: JSX you want to render,
 DOM element i.e. where would you like to render to */

 //https://reactjs.org/docs/events.html
//for complete list of syntheticEvent

//JSX DO NOT support objects
//JSX support array 
//when JSX sees array, it renders every item side by side
//for array of JSX: add key for each items

//Math.random() generates random number from 0 to 1
//but can never be one i.e 0 to 0.9999999999999999

console.log('App.js is running!');

const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) =>{
    //prevent default action of refreshing the page
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    //add user typed value into array
    //empty string is false value
    if(option){
        app.options.push(option);
        //"wipe" the form by setting it to empty string
        e.target.elements.option.value = '';

        renderApp();
    }
};

const onRemoveAll = () => {
    //empty array
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    //generate random number based on the length of array
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

//this id comes from index.html
const appRoot = document.getElementById('app');

const renderApp = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here is your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    //return array of lis 
                    app.options.map((option)=>{
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();