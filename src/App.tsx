import './App.css'
import Header from "./Header/header.tsx";
import Hero from "./Hero/hero.tsx";
import Footer from "./Footer/footer.tsx";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage.tsx";
import VisionMission from "./VisionMission";
import ManufacturingUnit from "./ManufacturingUnit";
import Services from "./Services";
import StrengthsShowcase from "./Strength";
import Customers from "./Customers";
import Capacity from "./Capacity";
import Products from "./Products";
import CompanyStats from "./CompanyStats";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OurBusiness from "./OurBusiness/index.tsx";

// Home page component with all sections
function HomePage() {
    return (
        <>
            <Hero/>
            <WelcomeMessage/>
            <VisionMission/>
            <OurBusiness/>
            <ManufacturingUnit/>
            <CompanyStats/>
            <Services/>
            <Customers/>
            <Capacity/>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <main className="flex-grow">
                    <Routes>
                        {/* Home page with all sections */}
                        <Route path="/" element={<HomePage/>}/>

                        {/* Individual component routes */}
                        <Route path="/hero" element={<Hero/>}/>
                        <Route path="/welcome" element={<WelcomeMessage/>}/>
                        <Route path="/vision-mission" element={<VisionMission/>}/>
                        <Route path="/manufacturing" element={<ManufacturingUnit/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/customers" element={<Customers/>}/>
                        <Route path="/strengths" element={<StrengthsShowcase/>}/>
                        <Route path="/capacity" element={<Capacity/>}/>
                        <Route path="/stats" element={<CompanyStats/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App