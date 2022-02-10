import React, { Component } from "react";
import "./FancyBorder.css";

class FancyBorder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 400,
			height: 400,
			d1: 50,
			d2: 50,
			d3: 50,
			d4: 50,
			isCopied: false,
		};
		this.handleChangeTop = this.handleChangeTop.bind(this);
		this.handleChangeRight = this.handleChangeRight.bind(this);
		this.handleChangeBottom = this.handleChangeBottom.bind(this);
		this.handleChangeLeft = this.handleChangeLeft.bind(this);
		this.handleChangeHeight = this.handleChangeHeight.bind(this);
		this.handleChangeWidth = this.handleChangeWidth.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChangeTop(event) {
		let val = event.target.value;
		this.setState({ d1: val, isCopied: false });
	}
	handleChangeRight(event) {
		let val = event.target.value;
		this.setState({ d2: val, isCopied: false });
	}
	handleChangeBottom(event) {
		let val = event.target.value;
		this.setState({ d3: val, isCopied: false });
	}
	handleChangeLeft(event) {
		let val = event.target.value;
		this.setState({ d4: val, isCopied: false });
	}
	handleChangeHeight(event) {
		let val = parseInt(event.target.value);
		if (val >= 200 && val <= 700) this.setState({ height: val });
	}
	handleChangeWidth(event) {
		let val = parseInt(event.target.value);
		if ((val >= 200) & (val <= 700)) this.setState({ width: val });
	}
	handleClick(event) {
		navigator.clipboard.writeText(
			`border-radius : ${this.state.d1}% ${100 - this.state.d1}% ${
				this.state.d3
			}% ${100 - this.state.d3}% / ${100 - this.state.d4}% ${this.state.d2}% ${
				100 - this.state.d2
			}% ${this.state.d4}% `
		);
		this.setState({ isCopied: true });
	}
	render() {
		let styles = {
			width: this.state.width,
			height: this.state.height,
			borderRadius: `${this.state.d1}% ${100 - this.state.d1}% ${
				this.state.d3
			}% ${100 - this.state.d3}% / ${100 - this.state.d4}% ${this.state.d2}% ${
				100 - this.state.d2
			}% ${this.state.d4}%`,
		};
		return (
			<div className='FancyBorder center'>
				<h1 className='App-header'>Get Fancy border radius!</h1>
				<div className='container center'>
					<div className='Box' style={styles}></div>
					<input
						type='range'
						className='top'
						onChange={this.handleChangeTop}
						style={{ width: this.state.width, top: "-8px" }}
					/>
					<input
						type='range'
						className='right'
						onChange={this.handleChangeRight}
						style={{
							width: this.state.height,
							transform: `rotate(90deg) translateY(-${
								this.state.width / 2 + 12
							}px)`,
						}}
					/>
					<input
						type='range'
						className='bottom'
						onChange={this.handleChangeBottom}
						style={{ width: this.state.width }}
					/>
					<input
						type='range'
						className='left'
						onChange={this.handleChangeLeft}
						style={{
							width: this.state.height,
							transform: `rotate(270deg) translateY(-${
								this.state.width / 2 + 12
							}px)`,
						}}
					/>
					<h1 className='code'>
						border-radius :{" "}
						{`${this.state.d1}% ${100 - this.state.d1}% ${this.state.d3}% ${
							100 - this.state.d3
						}% / ${100 - this.state.d4}% ${this.state.d2}% ${
							100 - this.state.d2
						}% ${this.state.d4}%`}
					</h1>
				</div>

				<input
					type='number'
					min='200'
					max='700'
					name='width'
					onChange={this.handleChangeWidth}
					className='width input'
					placeholder='Enter width...'
					defaultValue={380}
				/>
				<input
					type='number'
					min='200'
					max='700'
					name='height'
					className='height input'
					onChange={this.handleChangeHeight}
					placeholder='Enter height...'
					defaultValue={380}
				/>

				<button onClick={this.handleClick} disabled={this.isCopied}>
					{this.state.isCopied ? "Copied!" : "Copy code"}
				</button>
			</div>
		);
	}
}
export default FancyBorder;
