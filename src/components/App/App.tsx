import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Converter } from '../Converter';
import { Courses } from '../Courses';
import { Layout } from '../Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Converter />} />
          <Route path="courses" element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
