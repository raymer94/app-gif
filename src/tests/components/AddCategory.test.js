import { shallow } from "enzyme";
import AddCategory from "../../Components/AddCatergory";

describe("pruebas en <AddCategory/>", () =>{
    const wrapper = shallow(<AddCategory/>);

    test("debe mostrar el componente", ()=>{
        expect(wrapper).toMatchSnapshot();
    });
})