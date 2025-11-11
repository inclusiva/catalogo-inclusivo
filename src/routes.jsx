import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Layout from './layout'


export default function AppRoutes() {
    <Routes>
        <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path="/movie/:id" element={ <MovieDetails /> } />
            <Route path="*" element={ <NotFound/> }/>
        </Route>
    </Routes>
}