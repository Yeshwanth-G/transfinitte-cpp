import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CicRep } from './Cicrep';
import Details from './details';
import AddCompany from '../components/forms/addAnnouncements';
export function Admin() {
    return (
        <Routes>
            <Route path='/' element={<CicRep/>} />
            <Route path='/addform' element={<AddCompany/>}/>
            <Route path='/details' element={<Details/>}/>
        </Routes>
    )
}