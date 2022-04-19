import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../componentes/auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes"

describe('Pruebas en <DashboadRoutes />', () => {
  const contextValue ={
    user: {
      logged: true,
      name: 'Jorge'
    }
  }
  test('debe de mostrarse correctamente Marvel', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text()).toBe('Jorge');
  });

  test('debe de mostrarse correctamente DC', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/dc']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect (wrapper.find('h1').text()).toBe('Dc Screen');
  });
})
