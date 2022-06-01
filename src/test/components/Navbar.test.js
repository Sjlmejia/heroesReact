import { Navbar } from "../../componentes/ui/Navbar";
import { mount } from "enzyme";
import { AuthContext } from "../../componentes/auth/authContext";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { types } from "../../componentes/types/types";
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}) );
const contextValue= {
  dispatch:jest.fn(),
  user: {
    name: "Batman",
    logged: true
  }
}

describe('pruebas en el navbar', () => {
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );
  test('debe hacer match con el snapshot', () => { 
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text()).toBe('Batman');
  });
  test('debe de llamar al logout', () => {
    wrapper.find('button').simulate('click');
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout
    });
    expect( mockNavigate).toBeCalledWith('/login', {replace: true});
  });
})