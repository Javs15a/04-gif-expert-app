import React from 'react';
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";


describe('Pruebas de <GifExperApp/>', () => {

    test('debe de cargar el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

});
