import {NavLink} from "react-router-dom";
import './header.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
// import Login from "../login/login";

export function Header() {

    const shortList  = useSelector((state: RootState) => state.job.shortList);

    return (

        <div className="header" role="banner">
            <div className="logo">
                Job Hunting
            </div>
            <div className="nav">
                <ul>
                    <li><NavLink className={({isActive}) => (isActive ? 'active' : '')}
                                 to="/">Home</NavLink></li>
                    <li className="relative"><NavLink className={({isActive}) => (isActive ? 'active' : '')}
                                                      to="/shortlisted">ShortListed</NavLink>
                        {shortList.length > 0 &&
                            <span className="count">{shortList.length}</span>}
                    </li>
                </ul>
            </div>
            {/*<Login></Login>*/}
        </div>

    )
}