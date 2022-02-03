import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import SauceList from '../SauceList';

describe("SauceList component", () => {
    //snapshot test: comparing the json render of a component to a json render of a snapshot
    test("renders SauceList as expectes"), () => {
        const sauces = ["siracha", "honey mustard", "hot sauce"];
        const component = renderer.create(<SauceList sauces={sauces} />);
        const jsonComponent = component.toJSON();
        console.log("Snapshot", jsonComponent);
        expect(snapshot).toMatchSnapshot();
    });
})