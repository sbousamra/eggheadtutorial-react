import React from 'react';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			txt: "My name is",
			name: App.defaultProps.defName
		}
	}

	update(e) {
		this.setState(
			{
				name: e.target.value,
			}
		)
	}

	render() {
		return (
			<div>
				<Title text={this.state.name}/>
				<div>
					{this.state.txt}&nbsp; 
					{this.state.name}
				</div>

				<Widget updateText={this.update.bind(this)} />
				<Button> I <Heart /> React</Button>
			</div>
		) 
	}
}

class Heart extends React.Component {
	render() {
		return <span>&hearts;</span>
	}
}

class Title extends React.Component {

	render() {
		return (
			<h1> Title: {this.props.text} </h1>
		);
	}
}

const Title = (props) => <h1> Title: {props.text} </h1>
const Widget = (props) => <input type="text" onChange={props.updateText}/>
const Button = (props) => <button>{props.children}</button>

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	defName: "Bass",
	text: "this is the default text"
}

export default App

