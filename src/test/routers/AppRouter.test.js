import { AppRouter } from "../../routers/AppRouter";
import { mount } from "enzyme";
import { AuthContext } from "../../componentes/auth/authContext";

describe('pruebas en <AppRouter />', () => {
  
  test('debe de mostrar el login si no esta autenticado', () => {
    const contextValue = {
      user: {
        logged: false
      }
    }
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect (wrapper.find('h1').text()).toBe('Login Screen');
  })
  test('debe de mostrar marvel  si esta autenticado', () => {
    const contextValue = {
      user: {
        logged: true,
        name: 'Jorge'
      }
    }
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect (wrapper.find('.navbar').exists()).toBeTruthy();
    expect (wrapper.find('h1').text()).toBe('Marvel Screen');
  })
});