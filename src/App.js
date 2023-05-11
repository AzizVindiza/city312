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


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="discount" element={<DiscountsPage/>}/>
            <Route path="afisha" element={<AfishaPage/>}/>
            <Route path="entry" element={<Entry/>}/>
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
