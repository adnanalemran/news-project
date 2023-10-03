import React from 'react';
import moment from 'moment';
import logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="Logo" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;
