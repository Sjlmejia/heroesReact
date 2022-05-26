import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../componentes/search/SearchScreen";

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}) );
describe('Pruebas en <SearchScreen />', () => { 
  test('debe de mostrar', () => { 
    const wrapper = mount(
    	<MemoryRouter initialEntries={['/search']}>
				<SearchScreen />
			</MemoryRouter>
    );
		expect(wrapper).toMatchSnapshot();
  });
	test('debe de mostrar Batman y el inpunt con el valor del query String', () => {
		const wrapper = mount(
    	<MemoryRouter initialEntries={['/search?q=batman']}>
				<SearchScreen />
			</MemoryRouter>
    );
		expect(wrapper.find('input').prop('value')).toBe('batman');
	});
	test('debe de mostrar un mensaje de error', () => {
		const wrapper = mount(
    	<MemoryRouter initialEntries={['/search?q=batman!']}>
				<SearchScreen />
			</MemoryRouter>
    );
		expect(wrapper.find('.alert').text().trim()).toBe('No hay resultados: batman!');
	})

	test('debe de llamar el navigate a la nueva pantalla', () => {
		const wrapper = mount(
    	<MemoryRouter initialEntries={['/search']}>
				<SearchScreen />
			</MemoryRouter>
    );

		const input = wrapper.find('input');
		input.simulate('change', {
			target: {
				name: 'searchText',
				value: 'batman'
			}
		})

		const form = wrapper.find('form');
		form.prop('onSubmit')({
			preventDefault(){}
		})

		expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
	})
})