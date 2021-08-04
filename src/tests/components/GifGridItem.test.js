import React from 'react';
import { shallow } from "enzyme"
import GifGridItem from "../../Components/GifGridItem";



describe("Pruebas en <GifGridItem/>",()=>{

    const obj = {title: 'test', url: 'ddd'}    
    const wrapper = shallow(<GifGridItem img={obj}/>);

    test("debe mostrar el componente", () => {         
        expect(wrapper).toMatchSnapshot();
    });

    test("debe mostrar un parraro con el title", () => {
        const parrafo = wrapper.find('p');
        expect(parrafo.text().trim()).toBe(obj.title)
    });

    test("debe tener img igual al url y alt de los props", ()=>{
        const img = wrapper.find('img');
        expect(img.props().src).toBe(obj.url)
    });

    test("evaluando clase de css", () => {
       const div = wrapper.find('div');
       expect(div.props().className.includes("animate__bounce")).toBe(true);
       //console.log(div.props().className)
    });
})