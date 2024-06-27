import {NavLink} from "react-router-dom";
import './header.scss'
import {useAppContext} from "../../context/appContext";
import Login from "../login/login";

export function Header() {

    const { shortList } = useAppContext();

    return (

        <div className="header">
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