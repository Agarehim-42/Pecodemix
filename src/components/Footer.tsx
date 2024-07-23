import React from 'react'

const footer: React.FC = () => {
    return (
        <footer className="footbg py-5">
            <div className="container">
            <div className="main row ">
                
                <div className="adress row px-2 col-12 col-md-6 col-lg-3">
                    <img className="" src="./assets/images/footer/Artintpht.svg" alt=""/>
                        <p className="text-light py-4">Lorem ipsum is placeholder text <br/> commonly used in the graphic, print,
                            and <br/> layouts and visual mockups.</p>
                            <div className="mail d-flex py-2">
                                <a href="">
                                    <img src="./assets/images/footer/mail.svg" alt=""/>
                                </a>
                                <h6 className="px-3 text-light">Company@gmail.com</h6>
                            </div>
                            <div className="phone d-flex py-2">
                                <a href="">
                                    <img src="./assets/images/footer/phone.svg" alt=""/>
                                </a>
                                <h6 className="px-3 text-light">Phone: (064) 332-1233</h6>
                            </div>
                            <div className="location d-flex py-2">
                                <a href="">
                                    <img src="./assets/images/footer/location.svg" alt=""/>
                                </a>
                                <h6 className="px-3 text-light">450 Wall Street, USA, New York</h6>
                            </div>

                        </div>

                            <div className="informations row col-12 col-md-12 col-lg-2">
                                <h5 className="information text-light py-3">INFORMATION</h5>
                                <h6>New Collection</h6>
                                <h6>About Store</h6>
                                <h6>Contact Us</h6>
                                <h6>Latest News</h6>
                                <h6>Our Sitemap</h6>
                                <h6>Orders History</h6>
                            </div>
                            <div className="menus row col-12 col-md-12 col-lg-2">
                                <h5 className="menu text-light py-3">FOOTER MENU</h5>
                                <h6>Instagram profile</h6>
                                <h6>New Collection</h6>
                                <h6>Contact Us</h6>
                                <h6>Latest News</h6>
                                <h6>Terms & Conditions</h6>
                                <h6>Purchase Theme</h6>
                            </div>
                            <div className="useful-links  row col-12 col-md-12 col-lg-2">
                                <h5 className="useful-link text-light py-3">USEFUL LINKS</h5>
                                <h6>New Collection</h6>
                                <h6>About Store</h6>
                                <h6>Contact Us</h6>
                                <h6>Latest News</h6>
                                <h6>Our Sitemap</h6>
                                <h6>Orders History</h6>
                            </div>
                            <div className="about-stores row col-12 col-md-12 col-lg-3">
                                <h5 className="about-store text-light py-3">ABOUT THE STORE</h5>
                                <h6>Lorem ipsum is placeholder text <br/> commonly used in the graphic, print, and <br/> layouts and visual
                                    mockups.</h6>
                                    <h6 className="text-light">www.company.com</h6>
                                    <div className="py-3">
                                        <a href="">
                                            <img src="./assets/images/footer/sosialnetwork.svg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="py-5 text-light d-flex">
                                        <a href="">
                                            <img className="img-global mx-2" src="./assets/images/footer/earth.svg" alt=""/>
                                        </a>
                                        <h6 className="mx-2 my-2">English</h6>
                                        <a href="">
                                            <img className="img-yes" src="./assets/images/footer/yes.svg" alt=""/>
                                        </a>
                                    </div>

                                </div>
                            </div>
            </div>
            
                        </footer>
                        )
}

                        export default footer