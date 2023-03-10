import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NewInput from "./pages/NewInput";
import NewOutput from "./pages/NewOutput";
import EditInput from "./pages/EditInput";
import EditOutput from "./pages/EditOutput";
import NotFound from "./pages/NotFound";


export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/nova-entrada" element={<NewInput />} />
                <Route path="/nova-saida" element={<NewOutput />} />
                <Route path="/editar-entrada/:registerId" element={<EditInput />} />
                <Route path="/editar-saida/:registerId" element={<EditOutput />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}