import React, { ReactElement } from 'react';

export const Loader = (): ReactElement => {
    return (
        <div className="loader" id="page-loader">
            <div className="loading-wrapper">
                <div className="tp-loader spinner"></div>

                <div className="side-menu-name">
                    Shane <strong>Jeffery</strong>
                </div>

                <p className="side-menu-job">Full Stack Engineer</p>
            </div>
        </div>
    );
};
