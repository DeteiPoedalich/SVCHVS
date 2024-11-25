import HeaderComp from '../Components/HeaderComp/HeaderComp'
import FooterComp from '../Components/FooterComp/FooterComp'
import "../Pages/notFound.css"
import {Link} from "react-router-dom"

export default function notFound(){
    return(
        <>
            <HeaderComp/>
            <div className='div'>
                <p className='notfound'>
                    404
                </p>
                <Link to="/">
                    <p>Return</p>
                </Link>
            </div>
            <FooterComp/>
        </>
    )
}