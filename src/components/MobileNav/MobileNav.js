import React from 'react';
import './style.css';

const MobileNav = ({ open, children, closeMobileNav }) => {
    let className = 'MobileNav ';
    let BackdropClassName = 'Backdrop '
    className += open ? 'MobileNav__open' : 'MobileNav__closed';
    BackdropClassName += open ? 'Backdrop__open' : 'Backdrop__closed';

    return (
        <>
            <div className={className}>
                <div className='MobileNav__Content'>
                    {children}
                </div>
            </div>
            <div 
                className={BackdropClassName}
                onClick={closeMobileNav}
            >
            </div>
        </>
    )
};

export default MobileNav;