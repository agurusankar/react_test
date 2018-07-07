import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow } from "enzyme";
import { List } from "./../../components/List.js";

Enzyme.configure({ adapter: new Adapter() });

describe("testing List component", () => {
    let wrapper;
    
    test("checking List class", () => {
        var data = [
    {
        "id": 25,
        "task": "hi",
        "color": "#FFFFFF",
        "done": false,
        "is_archived": false,
        "timestamp": "2018-06-27T12:15:28.940286Z"
    },
    {
        "id": 26,
        "task": "hello",
        "color": "#FFFFFF",
        "done": false,
        "is_archived": false,
        "timestamp": "2018-06-27T12:17:48.984049Z"
    }
];

        const wrapper = shallow(<List data={data} />);
        var content = wrapper.find("CSSTransition").at(0);
        expect(content.prop('classNames')).toEqual('fade');
    });
});