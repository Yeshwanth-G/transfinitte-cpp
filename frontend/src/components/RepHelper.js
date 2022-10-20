import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Student } from '../screens/Student';
import Details from '../screens/details';
import { CicRep } from '../screens/Cicrep';
import AddCompany from './forms/addAnnouncements';
export default function RepHelper() {
    return (
        <Routes>
            <Route path='/' element={<CicRep/>} />
            <Route path='/addform' element={<AddCompany/>}/>
            <Route path='/details' element={<Details/>}/>
        </Routes>
    )
}