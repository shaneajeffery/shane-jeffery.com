import React, { ReactElement, useContext } from 'react';
import { AppContext } from '../../../app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContentProfile = (): ReactElement => {
    const { userData } = useContext(AppContext);

    if (!userData || Object.keys(userData).length === 0 || userData.constructor !== Object) {
        return <div />;
    }

    return (
        <section className="timeline profile-infos">
            <div className="line row timeline-margin">
                <div className="content-wrap">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height"></div>
                    <div className="col-md-9 bg1 full-height"></div>
                </div>
            </div>

            <div className="line row">
                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height"></div>

                <div className="col-md-8 content-wrap bg1">
                    <h2 className="section-title">Profile</h2>
                </div>

                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
            </div>

            <div className="line row">
                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point"></div>

                <div className="col-md-8 content-wrap bg1">
                    <div className="line-content">
                        <h3 className="section-item-title-1">Full Name</h3>

                        <p>{userData.name}</p>
                    </div>
                </div>

                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
            </div>

            <div className="line row">
                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point"></div>

                <div className="col-md-8 content-wrap bg1">
                    <div className="line-content">
                        <h3 className="section-item-title-1">Born</h3>

                        <p>{userData.born}</p>
                    </div>
                </div>

                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
            </div>

            <div className="line row">
                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point"></div>

                <div className="col-md-8 content-wrap bg1">
                    <div className="line-content">
                        <h3 className="section-item-title-1">Email</h3>

                        <p>{userData.email}</p>
                    </div>
                </div>

                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
            </div>

            <div className="line row">
                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point"></div>

                <div className="col-md-8 content-wrap bg1">
                    <div className="line-content">
                        <h3 className="section-item-title-1">Find Me On</h3>

                        <a href={userData.facebook} className="btn btn-default" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href={userData.linkedin} className="btn btn-default" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href={userData.github} className="btn btn-default" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>

                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
            </div>
        </section>
    );
};

export default ContentProfile;
