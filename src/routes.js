import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Planilhas from "./components/Pages/Planilhas";
import Contato from "./components/Pages/Contato";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Planilha from "./components/Planilha";

export default function Router() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/planilhas" element={<Planilhas />}></Route>
                <Route path="/contato" element={<Contato />}></Route>
                <Route path="/planilha" element={<Planilha />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}