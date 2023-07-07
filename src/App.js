import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage"
import WeatherPage from "./pages/WeatherPage"
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weather/:id" element={<WeatherPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
