/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useContext } from 'react';
import { AppContext } from '../../../app';

const ContentEducation = (): ReactElement => {
    const { userData } = useContext(AppContext);

    if (!userData || !userData || Object.keys(userData).length === 0 || userData.constructor !== Object) {
        return <div />;
    }

    return (
        <section className="timeline education" id="education">
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
                    <h2 className="section-title">Education</h2>
                </div>

                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
            </div>

            {userData.education.map((educationNode: any, index: React.Key | null | undefined) => {
                return (
                    <div className="line row" key={index}>
                        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                        <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-education"></div>

                        <div className="col-md-8 content-wrap bg1">
                            <div className="line-content line-content-education">
                                <h3 className="section-item-title-1">{educationNode.universityName}</h3>

                                <h4 className="graduation-time">Graduated {educationNode.graduationDate}</h4>

                                <div className="graduation-description">
                                    <p>{educationNode.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                    </div>
                );
            })}
        </section>
    );
};

export default ContentEducation;
