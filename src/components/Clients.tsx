import React from 'react';

const Clients: React.FC = () => {
    return (
        <section className="client-section py-5 ">
            <div className="container">
            <div className="clients row ">
                <div data-aos="fade-right" className="clients-left-side row col-12 col-md-6 col-lg-6">
                    <h3 className="text-light py-2">
                        What our clients say about <br /> our awesome solutions
                    </h3>
                    <p className="text-light py-2">
                        To take a trivial example, which of us ever undertakes <br /> laborious physical exercise,
                        except to obtain some <br /> advantage from it who do not know.
                    </p>
                    <p className="text-light py-2">
                        Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing.
                    </p>
                    <p className="text-light py-2">
                        Lorem ipsum is placeholder previewing layouts and visual <br /> mockups.
                    </p>
                    <p className="text-light py-2">
                        Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing industries for previewing <br /> layouts and visual mockups.
                    </p>
                </div>
                <div data-aos="fade-left" className="clients-right-side row col-12 col-md-6 col-lg-6 px-5 ">
                    <img className="mobileman w-100 py-4 " src="./assets/images/cclient/mobileman.svg" alt="Client illustration" />
                </div>  
            </div>

            </div>
        </section>
    );
};

export default Clients;
