import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow } from "enzyme";
import { ListItem } from "./../../components/ListItem.js";

Enzyme.configure({ adapter: new Adapter() });

describe("testing ListItem component", () => {
    let wrapper;
    test("checking ListItem", () => {
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const wrapper = shallow(<ListItem result={data} />);

        const item = wrapper.find("div").at(0);
        expect(item.text()).toContain("Superman");
    });
});

describe("testing ListItem component", () => {
    let wrapper;
    test("checking deleteButton ", () => {
        const target = { preventDefault: jest.fn(), target: { value: "" } };
        const spy = jest.spyOn(ListItem.prototype, "handleDelete");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(
            <ListItem deleteData={() => {}} result={data} />
        );
        const deleteButton = component.find("button").at(1);
        deleteButton.simulate("click", target);
        expect(spy).toHaveBeenCalledTimes(1);
    });
});

describe("testing ListItem component", () => {
    let wrapper;
    test("checking edit toggle button function call", () => {
        const target = { preventDefault: jest.fn(), target: { value: "" } };
        const spy = jest.spyOn(ListItem.prototype, "toggleEdit");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(<ListItem result={data} />);
        const toggleButton = component.find("button").at(0);
        toggleButton.simulate("click", target);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test("checking edit toggle button state change from true to false", () => {
        const target = { preventDefault: jest.fn(), target: { value: "" } };
        const spy = jest.spyOn(ListItem.prototype, "toggleEdit");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(<ListItem result={data} />);
        const toggleButton = component.find("button").at(0);
        component.setState({ edit: true });
        toggleButton.simulate("click", target);
        expect(component.state().edit).toEqual(false);
    });
    test("checking edit toggle button state change from false to true ", () => {
        const target = { preventDefault: jest.fn(), target: { value: "" } };
        const spy = jest.spyOn(ListItem.prototype, "toggleEdit");
        var data = {
            task: "Superman",
            color: "#FFFFFF",
            done: false,
            is_archived: false
        };

        const component = shallow(<ListItem result={data} />);
        const toggleButton = component.find("button").at(0);
        component.setState({ edit: false });
        toggleButton.simulate("click", target);
        expect(component.state().edit).toEqual(true);
    });

});

