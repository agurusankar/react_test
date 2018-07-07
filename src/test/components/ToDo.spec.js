import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow } from "enzyme";
import { ToDo } from "./../../components/ToDo.js";

Enzyme.configure({ adapter: new Adapter() });

describe("testing ToDo component", () => {
	let wrapper;
	test("checking return data of input text box", () => {
		const event = {
			preventDefault: jest.fn(),
			target: { value: "", type: "input" },
			key: "Enter"
		};
		const spy = jest.spyOn(ToDo.prototype, "addData");
		var data = {
			task: "Superman",
			color: "#FFFFFF",
			done: false,
			is_archived: false
		};

		const component = shallow(
			<ToDo postData={() => {}} requestData={() => {}} data={data} />
		);
		component.setState({ input: "I am Batman" });
		var data = component.instance().addData(event);
		expect(data.task).toEqual("I am Batman");
	});

	
});