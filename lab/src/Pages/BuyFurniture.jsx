import HeaderComp from '../Components/HeaderComp/HeaderComp'
import FooterComp from '../Components/FooterComp/FooterComp'
import ShopItem from '../Components/ShopItem/ShopItem'

export default function HomePage(){
    return(
        <>
            <HeaderComp />
            <ShopItem/>
            <FooterComp />
        </>
    )
}