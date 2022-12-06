import "../navBar/profile.css"
import prof from "../navBar/profile.jpg"
import ResponsiveAppBar from '../navBar';

export default function Profile(){

    return(
        <div>
        <ResponsiveAppBar />
        <div className="box">
            <div className="c1">
                <img className="img" src={prof} alt="profile"/>
            </div>
            <div className="c2">
                <h2 className="name">Sample name</h2>
            </div>
            <div className="c3">

            </div>
        </div>
        </div>
    )

}