import React from 'react';
import './Header.css';
import smallLeft from '../../assets/icons/small-left.png';
import smallRight from '../../assets/icons/smallp-right.png';
import search from '../../assets/icons/seacrh.png';

const Header = () => {
    return(
        <nav ClassName="header__navigation">
                <div ClassName="navigation">
                    <button ClassName="arrow-left">
                        <img src={smallLeft} alt="" />
                    </button>
                    <button ClassName="arrow-right">
                        <img src={smallRight} alt="" />
                    </button>
                </div>
                <div ClassName="header__search">
                    <img src={search} alt="" />
                    <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
                        placeholder="O que você quer ouvir?" value="" />
                </div>
                <div ClassName="header__login">
                    <button ClassName="subscribe">Inscreva-se</button>
                    <button ClassName="login">Entrar</button>
                </div>
            </nav>
    )
}

export default Header;