// import React from 'react'
// import './Footer.css'
// import assets from '../../assets/assets'

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//       <div className="footer-content">
//         <div className="footer-content-left">
//                 <img src={assets.logo} alt="" />
//                 <p>Sure, here's a dummy text for a food app footer:

// "Explore a world of culinary delights with our food app. From savory to sweet, we've got your cravings covered. Browse through our extensive menu, place your order, and let the flavors tantalize your taste buds. Whether you're a foodie or just looking for a quick bite, our app is your ultimate culinary companion. Download now and embark on a gastronomic adventure!"</p>
// <div className="footer-social-icons">
//     <img src={assets.facebook_icon} alt="" />
//     <img src={assets.twitter_icon} alt="" />
//     <img src={assets.linkedin_icon} alt="" />
// </div>
// <div className="footer-content-center">
//     <h2>COMPANY</h2>
//     <ul>
//         <li>Home</li>
//         <li>About us</li>
//         <li>Delivery</li>
//         <li>Privacy policy</li>
//     </ul>
//     </div>
//   <div className="footer-content-right">
//    <h2>GET IN TOUCH</h2>
//    <ul>
//     <li>+1-212-456-7890</li>
//     <li>contact@tomato.com</li>
//    </ul>
//   </div>
//     </div>
//     </div>
//         <hr />
//         <p className="Footer-copyright">Copyright 2024 Tomato.com - all Right Reserved.</p>
    
//   )
// }

// export default Footer
import React from 'react';
import './Footer.css'; // Import CSS file
import assets from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>

                    Explore a world of culinary delights with our food app. From savory to sweet, we've got your cravings covered. Browse through our extensive menu, place your order, and let the flavors tantalize your taste buds. Whether you're a foodie or just looking for a quick bite, our app is your ultimate culinary companion. Download now and embark on a gastronomic adventure!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-789</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 Tomato.com - All Rights Reserved.</p>
        </div>
    )
}

export default Footer;

