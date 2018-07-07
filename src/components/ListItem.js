import React, { Component } from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteData } from "../actions/deleteData_action";
import { updateData } from "../actions/updateData_action";

export class ListItem extends Component {
	static propTypes = {
		result: PropTypes.object,
		deleteData: PropTypes.func,
		updateData: PropTypes.func,
	};
	static defaultProps = {
		result: {},
	};

	constructor(props) {
		super(props);
		this.state = {
			edit: false
		};
	}

	handleDelete(event) {
		this.props.deleteData(event.target.id);
	}

	toggleEdit() {
		if (this.state.edit) {
			this.setState({ edit: false });
		} else {
			this.setState({ edit: true });
		}
	}

	handleTextChange(event) {
		this.setState({ input: event.target.value });
	}

	handleKeyPress(event) {
		if (event.key === "Enter") {
			const data = {};
			data.id = event.target.id;

			data.item = {
				task: this.state.input,
			};

			this.setState({ edit: false });
			this.props.updateData(data);
		}
	}

	handleSave(event) {
		const data = {};
		data.id = event.target.id;
		if (event.target.type === "submit") {
			data.item = {
				task: this.state.input,
			};

			this.setState({ edit: false });
		} else {
			event.target.checked
				? (data.item = {
						done: true,
				  })
				: (data.item = {
						done: false,
				  });
		}
		this.props.updateData(data);
		return data;
	}

	render() {
		let content;

		if (this.state.edit) {
			content = (
				<input
					id={this.props.result.id}
					type="text"
					autoComplete="off"
					autofill="off"
					className="ListItem-input"
					defaultValue={this.props.result.task}
					onChange={this.handleTextChange}
					onKeyPress={this.handleKeyPress}
				/>
			);
		} else {
			content = <div className="content"> {this.props.result.task} </div>;
		}

		return (
			<div
				key={this.props.result.id}
				className={
					this.props.result.done ? "ListItem done" : "ListItem"
				}
			>
				<input
					type="checkbox"
					className={this.state.edit ? "hide" : "checkbox"}
					id={this.props.result.id}
					onChange={this.handleSave}
					checked={this.props.result.done}
				/>

				{content}

				<div className="button-container">
					<button
						className={
							this.state.edit
								? "save Button"
								: this.props.result.done
									? "hide"
									: "edit Button"
						}
						id={this.props.result.id}
						onClick={
							this.state.edit ? this.handleSave : this.toggleEdit
						}
					/>
					<button
						className={
							this.state.edit ? "cancel Button" : "delete Button"
						}
						id={this.props.result.id}
						onClick={
							this.state.edit
								? this.toggleEdit
								: this.handleDelete
						}
					/>
				</div>
			</div>
		);
	}
}

/* istanbul ignore next */
const mapDispatchToProps = dispatch =>
	bindActionCreators({ deleteData, updateData }, dispatch);

default connect(null, mapDispatchToProps)(ListItem);
