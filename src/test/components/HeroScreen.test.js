import { mount } from "enzyme";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { HeroScreen } from "../../componentes/hero/HeroScreen";
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}) );

describe('Pruebas en el hero screen', () => { 
  test('no debe de mnostrar el heroScreen si no hay heroe en el URl ', () => { 
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <Routes>
        <Route path="/hero" element={<HeroScreen />} />
        <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find('h1').text().trim()).toBe('No hero page');
  })

  test('ndebe mostrar el heroe ', () => { 
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
        <Route path="/hero/:heroId" element={<HeroScreen />} />
        <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(true);
  })
});