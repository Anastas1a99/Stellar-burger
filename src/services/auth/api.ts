import { request } from '../utils/request';
import { setUser, clearUser } from './slice';

export const checkUserAuth = () => async (dispatch: AppDispatch) => {
  try {
    const res = await request('auth/user');
    dispatch(setUser(res.user));
  } catch {
    dispatch(clearUser());
  }
};

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
  const res = await request('auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  dispatch(setUser(res.user));
  localStorage.setItem('accessToken', res.accessToken);
  localStorage.setItem('refreshToken', res.refreshToken);
};