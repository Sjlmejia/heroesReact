import { AppRouter } from './routers/AppRouter'
import {AuthContext} from './componentes/auth/authContext'
import {useReducer} from 'react'
import { authReducer } from './componentes/auth/authReaducer';
import { useEffect } from 'react';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => { 
    if(!user) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);  
  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
