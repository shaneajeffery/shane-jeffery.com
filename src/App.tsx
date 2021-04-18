import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createContext, ReactElement, useEffect, useState } from 'react';

import ContentIntro from './components/content/intro/intro';
import ContentProfile from './components/content/profile/profile';
import ContentEducation from './components/content/education/education';
import Loader from './components/loader/loader';
import SideMenu from './components/side-menu/side-menu';

import { UserData } from './types/userData';

type ContextProps = {
    userData: UserData;
};

export const AppContext = createContext<Partial<ContextProps>>({});

const App = (): ReactElement => {
    const [userData, setUserData] = useState<UserData>({
        name: '',
        email: '',
        title: '',
        bio: '',
        born: '',
        linkedin: '',
        facebook: '',
        github: '',
        education: [{}],
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData().then((data) => {
            setUserData(data);
        });
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [userData]);

    const getData = async () => {
        const res = await fetch('./data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        return await res.json();
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <AppContext.Provider
            value={{
                userData: userData,
            }}
        >
            <SideMenu />

            <section id="content-body" className="container animated">
                <div className="row" id="intro">
                    <div className="col-md-10 col-sm-10 col-md-offset-2 col-sm-offset-1 clearfix top-colors">
                        <div className="top-color top-color1"></div>
                        <div className="top-color top-color2"></div>
                        <div className="top-color top-color3"></div>
                        <div className="top-color top-color1"></div>
                        <div className="top-color top-color2"></div>
                    </div>
                </div>

                <div className="col-md-10 col-sm-10 col-md-offset-2 col-sm-offset-1 resume-container">
                    <div className="row">
                        <div className="header-buttons col-md-10 col-md-offset-1">
                            <a href="mailto" className="btn btn-default btn-top-resume">
                                <FontAwesomeIcon icon={faDownload} />
                                <span className="btn-hide-text">Download my resume</span>
                            </a>

                            <a href="mailto" className="btn btn-default btn-top-message">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span className="btn-hide-text">Send me a message</span>
                            </a>
                        </div>
                    </div>

                    <ContentIntro />

                    <div className="timeline-wrap">
                        <div className="timeline-bg">
                            <ContentProfile />
                            <ContentEducation />
                        </div>
                    </div>
                </div>
            </section>
        </AppContext.Provider>
    );
};

export default App;
