import { authReducer } from "../../componentes/auth/authReaducer";
import { types } from "../../componentes/types/types";

describe('pruebas de aurhReducer', () => { 
  test('debe de retornar el estado por defecto', () => {
    const state = authReducer({logged:false}, {});
    expect(state).toEqual({logged:false});
  })

  test('debe de autenticar y colocar el name del usuario', () => {
    const action ={
      type: types.login,
      payload: {
        name: 'Jorge',
      }
    }
    const state = authReducer({logged:false}, action);
    expect(state).toEqual({
      logged: true,
      name: 'Jorge'
    });
  });
  test('debe borrar el nombre del usuario y el logged false', () => {
    const action ={
      type: types.logout,
    }
    const state = authReducer({logged:true, name:'Jorge'}, action);
    expect(state).toEqual({logged:false});
  });
 });