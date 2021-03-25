import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Prueba de <GifGridItem/>', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un párrado con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen igual al url de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener animate_fadeIn', () => {
        const div = wrapper.find('div');

        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    });

});
