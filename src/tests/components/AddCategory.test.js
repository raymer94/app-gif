import { shallow } from "enzyme";
import AddCategory from "../../Components/AddCatergory";

describe("pruebas en <AddCategory/>", () =>{

    const setCategory = () =>{};
    const wrapper = shallow(<AddCategory setCategories={setCategory}/>);

    test("debe mostrar el componente", ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de cambiar la caja de texto", () => {
        const input = wrapper.find('input'); 
        const value = "hola texto";

        input.simulate('change', { target: { value } });
    });
})