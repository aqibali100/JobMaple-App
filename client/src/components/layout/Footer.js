import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <div className="footer-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer">
                                <p>© {currentYear} <span>JobMaple</span>. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
