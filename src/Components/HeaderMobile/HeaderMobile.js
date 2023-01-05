import React, {useState} from 'react'
import './HeaderMobile.css' 
import './../Header/Header.css' 
import Logo from './../img/Logo.png';
import WLG from './../img/WallStreetGroup.png';
import Menu from './../Svg/Menu'
import classNames from 'classnames'
import Exit from './../Svg/Exit'
import {NavLink} from 'react-router-dom';

const HeaderMobile = (props) => {
    const [active, setActive] = useState(0)

    let onClick = () => {
        active ? setActive(0) : setActive(1)
    }

    let menuClass = classNames({
        'mobile-menu': true,
        'menu-active': active==1
    });

    return (
        <>
            <div class={menuClass}>
                <div className='menu-header'>
                    <div className='menu-header-icon' onClick={() => onClick()}>
                        <Exit />
                    </div>
                </div>
                <div className='menu-container'>
                    <div className='menu-container-item'>
                        <NavLink to="/Crypto" onClick={() => onClick()} className="control-item-text">Крипта</NavLink>
                    </div>
                    {/* <div className='menu-container-item'>
                        <NavLink to="#" onClick={() => onClick()} className="control-item-text">Робот</NavLink>
                    </div> */}
                    <div className='menu-container-item'>
                        <NavLink to="/FAQ" onClick={() => onClick()} className="control-item-text">Вопрос-ответ</NavLink>
                    </div>
                    {/* <div className='menu-container-item'>
                        <NavLink to="#" onClick={() => onClick()} className="control-item-text">О нас</NavLink>
                    </div> */}
                </div>
            </div>
            <div className='header-mobile'>
                <div className="logo-block-mobile">
                    <NavLink to="/Crypto" className="logo-a-mobile">
                        <img src={Logo} />
                    </NavLink>
                    <div className="logo-text">
                        <NavLink to="/Crypto" className="logo-text-a">
                            <img src={WLG} />
                        </NavLink>
                    </div> 
                </div>
                <div className="menu-cont" onClick={() => onClick()}>
                    <Menu onClick={() => onClick()}/>
                </div>
            </div>
        </>
        
    )
}

export default HeaderMobile