import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:5000/users?username=${username}&password=${password}`);
    if (res.data.length > 0) {
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='text-left flex-4'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className='bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br rounded-bl rounded-tl focus:ring-2 focus:ring=blue-300 disabled:bg-gray-400'>Login</button>
      </form>
    </div>
  );
}

export default Login;
