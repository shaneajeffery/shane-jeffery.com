import React, { ReactElement, useContext } from 'react';
import { AppContext } from '../../../app';

import Avatar from '../../../assets/images/avatar.png';

const ContentIntro = (): ReactElement => {
    const { userData } = useContext(AppContext);

    if (!userData || Object.keys(userData).length === 0 || userData.constructor !== Object) {
        return <div />;
    }

    return (
        <div className="profile-intro row">
            <div className="col-md-4 profile-col">
                <div className="profile-pic">
                    <div className="profile-border">
                        <img src={Avatar} alt="avatar" />
                    </div>
                </div>
            </div>

            <div className="col-md-7">
                <h1 className="intro-title1">
                    Hello, I&#39;m <span className="color1 bold">{userData.name}!</span>
                </h1>

                <h2 className="intro-title2">{userData.title}</h2>

                <p>{userData.bio}</p>
            </div>
        </div>
    );
};

export default ContentIntro;
