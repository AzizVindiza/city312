import "./sass/style.sass"

import {
    createRoutesFromElements,
    createBrowserRouter,
    Route, RouterProvider
} from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import DiscountsPage from "./pages/DiscountsPage/DiscountsPage";
import AfishaPage from "./pages/AfishaPage/AfishaPage";
import Entry from "./pages/Entry/Entry";
import RegisterPartner from "./pages/RegisterPartner/RegisterPartner";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import ChoosePage from "./pages/ChoosePage/ChoosePage";
import FramePage from "./pages/FramePage/FramePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ClientsPage from "./pages/Home/ClientsPage/ClientsPage";
import PartnerFlowers from "./pages/PartnterFlowers/PartnerFlowers";
import Profile from "./pages/ProfilePage/Profile";
import EditSection from "./pages/ProfilePage/EditSection/EditSection";
import BankSection from "./pages/ProfilePage/BankSection/BankSection";
import BankCardSection from "./pages/ProfilePage/BankCardSection/BankCardSection";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="discount" element={<DiscountsPage/>}/>
            <Route path="afisha" element={<AfishaPage/>}/>
            <Route path="entry" element={<Entry/>}/>
            <Route path="registerPartner" element={<RegisterPartner/>}/>
            <Route path="registerUser" element={<RegisterUser/>}/>
            <Route path="choosePage" element={<ChoosePage/>}/>
            <Route path="frame" element={<FramePage/>}/>
            <Route path="contact" element={<ContactPage/>}/>
            <Route path="partner" element={<PartnerFlowers/>}/>
            <Route path="clients" element={<ClientsPage/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="profile/edit" element={<EditSection/>}/>
            <Route path="profile/bank" element={<BankSection/>}/>
            <Route path="profile/card" element={<BankCardSection/>}/>
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
