import React from "react";

// Award Images (update paths)
import award01 from "../../../images/award/img01.png";
import award02 from "../../../images/award/img02.png";
import award03 from "../../../images/award/img03.png";
import award04 from "../../../images/award/img04.png";
import award05 from "../../../images/award/img05.png";
import award06 from "../../../images/award/img06.png";
import award07 from "../../../images/award/img07.png";
import award08 from "../../../images/award/img08.png";

const awards1 = [
    award01,
    award02,
    award03,
    award04,
    award05,
    award06,
    award07,
    award08,
];

const awards2 = [
    award01,
    award02,
    award07,
    award08,
    award03,
    award04,
    award05,
    award06,
];

const awards3 = [
    award01,
    award03,
    award02,
    award04,
    award06,
    award05,
    award08,
    award07,
];

const AwardSection2: React.FC = () => {
    return (
        <section className="award pos-rel">
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-6 wow fadeInLeft" data-wow-duration="600ms">
                        <div className="sec-title mb-30">
                            {/* <span className="sub-title mb-20">Our awards</span> */}
                            <h2 className="title title-line_height mb-5">
                                Supporting Australia's Sports Industry
                            </h2>
                            <p className="content">
                                Australia has one of the world's most active sporting communities. Sports venues play a vital role in bringing communities together, supporting grassroots participation and promoting healthier lifestyles. VenueGlide is proud to support this industry by providing modern technology that helps operators focus less on administration and more on delivering outstanding sporting experiences. Our platform enables venue owners to improve operational efficiency while creating better experiences for members, coaches, players and visitors.
                            </p>

                            <div className="team-btn mt-40">

                            </div>
                        </div>
                    </div>

                    {/* RIGHT - MARQUEES */}
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="600ms">
                        <div className="integration-logo-wrap ul_li">

                            {/* Marquee 1 */}
                            <div className="award-logo-inner marquee-first">
                                {awards1.map((img, i) => (
                                    <div className="integration-logo award-logo" key={i}>
                                        <img src={img} alt="award logo" />
                                    </div>
                                ))}
                            </div>

                            {/* Marquee 2 */}
                            <div className="award-logo-inner marquee2">
                                {awards2.map((img, i) => (
                                    <div className="integration-logo award-logo" key={i}>
                                        <img src={img} alt="award logo" />
                                    </div>
                                ))}
                            </div>

                            {/* Marquee 3 */}
                            <div className="award-logo-inner marquee-first">
                                {awards3.map((img, i) => (
                                    <div className="integration-logo award-logo" key={i}>
                                        <img src={img} alt="award logo" />
                                    </div>
                                ))}
                            </div>

                            {/* SHAPES */}
                            <div className="xb-shape">
                                <div className="shape shape--1"></div>
                                <div className="shape shape--2"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <span className="award-gradiant"></span>
        </section>
    );
};

export default AwardSection2;
