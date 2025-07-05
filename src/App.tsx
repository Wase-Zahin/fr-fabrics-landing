import './App.css'
import Header from "./Header/header.tsx";
import Hero from "./Hero/hero.tsx";
import Sec1 from "./Sec1/sec1.tsx";
import Footer from "./Footer/footer.tsx";

function App() {
    return (
        <div className="flex flex-col">
            <Header/>
            <Hero/>
            <Sec1/>
            {/*<Sec2/>*/}
            {/*<Sec3/>*/}
            {/*<Sec4/>*/}
            {/*<Sec5/>*/}
            {/*<Review/>*/}
            {/*<Faqs/>*/}
            <Footer/>
        </div>
    )
}

export default App