import React from 'react';

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
                <div className="row">

                    <div className="d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg className="bi"></svg>
                        </a>
                        <span className="text-muted">© 2021 GlobalWebCore.com</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;