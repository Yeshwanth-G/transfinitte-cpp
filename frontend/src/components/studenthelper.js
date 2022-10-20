import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Student } from '../screens/Student';
import Details from '../screens/details';
export default function StudentHelper() {
    return (
        <Routes>
            <Route path='/' element={<Student />} />
            <Route path='/details' element={<Details />} />
        </Routes>
    )
}