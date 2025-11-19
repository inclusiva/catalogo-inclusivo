import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Layout from './layout'


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}