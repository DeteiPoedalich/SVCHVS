import HeaderComp from '../Components/HeaderComp/HeaderComp'
import FooterComp from '../Components/FooterComp/FooterComp'
import GetStartedComp from '../Components/GetStartedComp/GetStartedComp'
import ShopByRoomComp from '../Components/ShopByRoomComp/ShopByRoomComp'
import SliderComp from '../Components/SliderComp/SliderComp'
import SponsorsComp from '../Components/SponsorsComp/SponsorsComp'
import AboutUsComp from '../Components/AboutUsCop/AboutUsComp'

export default function AboutUs(){
    return(
        <>
            <HeaderComp />
                <AboutUsComp/>
            <FooterComp />
        </>
    )
}
