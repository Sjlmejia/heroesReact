import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../componentes/auth/authContext";
import { LoginScreen } from "../../componentes/login/LoginScreen";
import { types } from "../../componentes/types/types";
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}) );
const contextValue= {
  dispatch:jest.fn(),
  user: {
    logged: false
  }
}
const wrapper = mount(
  <AuthContext.Provider value={contextValue}>
    <MemoryRouter initialEntries={['/login']}>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </MemoryRouter>
  </AuthContext.Provider>
);

describe('pruebas Logincomponent', () => { 
  test('debe hacer match con el snapshot', () => { 
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de llamar al logout', () => {
    const handleClick = wrapper.find('button').prop('onClick');
    handleClick();
    expect(wrapper.find('button').text()).toBe('Login');
    expect(contextValue.dispatch).toHaveBeenCalledWith({'type':types.login, 'payload':{'name':'Jorge'}});
    expect(mockNavigate).toHaveBeenCalledWith('/marvel', {'replace':true});
    
    localStorage.setItem('lastPath', '/dc');
    handleClick();
    expect(mockNavigate).toHaveBeenCalledWith('/dc', {'replace':true});
  });
})