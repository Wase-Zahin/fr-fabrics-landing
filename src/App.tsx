import './App.css'
import Header from "./Header/header.tsx";
import Hero from "./Hero/hero.tsx";
import Sec1 from "./Sec1/sec1.tsx";
import Footer from "./Footer/footer.tsx";
import Sec2 from "./Sec2/sec2.tsx";
import VisionMission from "./VisionMission";
import ManufacturingUnit from "./ManufacturingUnit";
import Services from "./Services";

function App() {
    return (
        <div className="flex flex-col">
            <Header/>
            <Hero/>
            <Sec1/>
            <Sec2/>
            <VisionMission/>
            <ManufacturingUnit/>
            <Services/>
            {/*<Review/>*/}
            {/*<Faqs/>*/}
            <Footer/>
        </div>
    )
}

export default App