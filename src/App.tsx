import './App.css'
import Header from "./Header/header.tsx";
import Hero from "./Hero/hero.tsx";
import OurBusiness from "./OurBusiness";
import Footer from "./Footer/footer.tsx";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage.tsx";
import VisionMission from "./VisionMission";
import ManufacturingUnit from "./ManufacturingUnit";
import Services from "./Services";
import StrengthsShowcase from "./Strength";
import Customers from "./Customers";
import Capacity from "./Capacity";
import Products from "./Products";

function App() {
    return (
        <div className="flex flex-col">
            <Header/>
            <Hero/>
            <OurBusiness/>
            <WelcomeMessage/>
            <VisionMission/>
            <ManufacturingUnit/>
            <Services/>
            <Products/>
            <Customers/>
            <StrengthsShowcase/>
            {/*<Review/>*/}
            {/*<Faqs/>*/}
            <Capacity/>
            <Footer/>
        </div>
    )
}

export default App