import { Route, Routes } from "react-router";
import Home from "./pages/home";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";


export default function AppRoutes() {
    <Routes>
        <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path="/movie/:id" element={ <MovieDetails /> } />
            <Route path="*" element={ <NotFound/> }/>
        </Route>
    </Routes>
}