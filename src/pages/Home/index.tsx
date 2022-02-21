import * as C from "./styles"
import Announcement from "../../components/Announcement"
import Navbar from "../../components/Navbar"
import Slider from "../../components/Slider"
import Categories from "../../components/Categories"
import Products from "../../components/Products"
import Newsletter from "../../components/Newsletter"
import Footer from "../../components/Footer"

const HomePage = () => {
    return (
        <C.HomeContainer>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </C.HomeContainer>
    )
}

export default HomePage