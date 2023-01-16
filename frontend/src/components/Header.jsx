import React from 'react';
import logo from '/logo.png'

function Header() {
    return (
        <header className="bg-light py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="flex-shrink-0">
                        <img src={logo} alt="Logo" height="70px" />
                    </div>
                    <div className="text-center ms-4 border-3 border-start px-4 mb-2">
                        <h1 className="display-4 fw-bolder">Les Argonautes</h1>
                        <p className="lead fw-normal text-black-50 mb-0">Constitution de l'équipage du navire l'Argo avec Jason</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;