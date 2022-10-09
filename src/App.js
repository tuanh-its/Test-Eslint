import Login from 'pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register/index.jsx';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
