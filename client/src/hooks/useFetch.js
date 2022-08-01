import { useCallback, useContext, useMemo, useReducer } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const initialState = { error: undefined, data: undefined };

export const useFetch = (url) => {
  const fetchReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case 'loading':
        return { ...initialState };
      case 'fetched':
        return { ...initialState, data: action.payload };
      case 'error':
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const { user } = useContext(AuthContext);
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = useCallback(
    async (method = 'GET', endpoint, data) => {
      if (!endpoint) return;

      const options = {
        method,
        headers: {},
      };

      if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
      }

      const token = user?.accessToken;

      if (token) {
        options.headers['X-Authorization'] = token;
      }

      dispatch({ type: 'loading' });

      try {
        const response = await fetch(`${url}${endpoint}`, options);

        if (!response.ok) {
          // if (response.status == 403) {
          //   localStorage.removeItem(localStorageAuthKey);
          // }

          const error = await response.json();
          throw new Error(error.message);
        }

        try {
          dispatch({
            type: 'fetched',
            payload: await response.json(),
          });
        } catch {
          dispatch({ type: 'fetched', payload: response });
        }
      } catch (error) {
        dispatch({ type: 'error', payload: error.message });
      }
    },
    [user, url]
  );

  const get = useMemo(() => fetchData.bind({}, 'GET'), [fetchData]);
  const post = useMemo(() => fetchData.bind({}, 'POST'), [fetchData]);
  const patch = useMemo(() => fetchData.bind({}, 'PATCH'), [fetchData]);
  const del = useMemo(() => fetchData.bind({}, 'DELETE'), [fetchData]);

  return [state, { get, post, patch, del }];
};
