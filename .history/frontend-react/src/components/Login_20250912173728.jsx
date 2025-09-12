/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import axiosInstance from '../axiosInstance';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const userData = { username, password };
    console.log('userData ==>', userData);

    try {
      const response = await axiosInstance.post('/token/', userData);
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      console.log('Login successful');
      setIsLoggedIn(true);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      setError(error.response?.data?.detail || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6 bg-light-dark p-5 rounded'>
          <h3 className='text-light text-center mb-4'>Login to our Portal</h3>
          <form onSubmit={handleLogin}>
            <div className='mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className='mb-3'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <div className='text-danger mb-3'>{error}</div>}

            <button
              type='submit'
              className='btn btn-info d-block mx-auto'
              disabled={loading}
            >
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin /> Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;