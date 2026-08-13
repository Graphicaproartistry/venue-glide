// import Marquee from "react-fast-marquee";
// import logo01 from "../../images/brand/logo01.png";
// import logo02 from "../../images/brand/logo02.png";
// import logo03 from "../../images/brand/logo03.png";
// import logo04 from "../../images/brand/logo04.png";
// import logo05 from "../../images/brand/logo05.png";
// import logo06 from "../../images/brand/logo06.png";

// const BrandSection: React.FC = () => {
//     return (
//         <section className="brand pt-170 pb-150" >
//             <div className="container">
//                 <div className="xb-brand-wrap xb-border">
//                     <div className="brand-sub-title xb-border">
//                         <p>
//                         Integrates With <span>Your Favourite</span>Business Tools
//                         </p>
//                     </div>


//                     <Marquee speed={40} gradient={false} pauseOnHover={false}>
//                         <div className="brand-marquee marquee-left">
//                             <div className="xb-brand-inner ul_li_between">
//                                 {[logo01, logo02, logo03, logo04, logo05, logo06].map(
//                                     (logo, index) => (
//                                         <div className="xb-brand-item" key={index}>
//                                             <img src={logo} alt={`logo ${index + 1}`} />
//                                         </div>
//                                     )
//                                 )}
//                             </div>
//                         </div>
//                     </Marquee>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BrandSection;

import Marquee from "react-fast-marquee";
import Comparison from "../ai-chatbot-components/IntegrationSection/Comparison";


const BrandSection: React.FC = () => {
    const integrations = [
        "Stripe",
        "Xero",
        "QuickBooks",
        "Square",
        "Zapier",
        "Twilio",
        "Microsoft 365",
        "Google Calendar",
        "Mailchimp",
        "Door Access Systems",
        "Accounting Software",
        "Payment Gateways",
    ];

    return (
        <>
        <section className="brand pt-170 pb-150">
            <div className="container">
                <div className="xb-brand-wrap xb-border">

                    <div className="brand-sub-title xb-border">
                        <p>
                            Integrates With <span>Your Favourite</span> Business Tools
                        </p>
                    </div>

                    <Marquee
                        speed={40}
                        gradient={false}
                        pauseOnHover={false}
                        direction="left"
                    >
                        {integrations.map((item, index) => (
                            <div className="integration-item" key={index}>
                                <svg
                                    className="integration-icon"
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        fill="#0866ff"
                                    />
                                    <path
                                        d="M8 12.5L10.5 15L16 9.5"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <span>{item}</span>
                            </div>
                        ))}
                    </Marquee>

                </div>
            </div>
        </section>
        <Comparison/>

    </>
    );
};

export default BrandSection;