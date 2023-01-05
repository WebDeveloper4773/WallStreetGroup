import React, {useState} from 'react'
import './Header.css' 
import Logo from './../img/Logo.png';
import WLG from './../img/WallStreetGroup.png';
import classNames from 'classnames'
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [active, setActive] = useState(1)

    let onClick = (q) => {
        setActive(q)
    }

    let item1 = classNames({
        'control-item': true,
        'control-active-1': active==1
    });
    let item2 = classNames({
        'control-item': true,
        'control-active-2': active==2
    });
    let item3 = classNames({
        'control-item': true,
        'last': true,
        'control-active-3': active==3
    });
    let item4 = classNames({
        'control-item': true,
        'control-active-4': active==4
    });

    return (
        <div className='header'>
            <div className="logo-block">
                <div className="logo-img">
                    <NavLink to="/Crypto" onClick={() => onClick(1)} className="logo-a">
                        <img src={Logo} />
                    </NavLink>
                </div>
                <div className="logo-text">
                    <NavLink to="/Crypto" onClick={() => onClick(1)} className="logo-text-a">
                        <img src={WLG} />
                    </NavLink>
                </div> 
            </div>
            <div className='control-block'>
                <div className={item1} onClick={() => onClick(1)}>
                    <NavLink to="/Crypto" className="control-item-text">Крипта</NavLink>
                </div>
                {/* <div className={item2} onClick={() => onClick(2)}>
                    <NavLink to="#" className="control-item-text">Робот</NavLink>
                </div> */}
                <div className={item3} onClick={() => onClick(3)}>
                    <NavLink to="/FAQ" className="control-item-text">Вопрос-ответ</NavLink>
                </div>
                {/* <div className={item4} onClick={() => onClick(4)}>
                    <NavLink to="#" className="control-item-text">О нас</NavLink>
                </div> */}
            </div>
        </div>
    )
}

export default Header