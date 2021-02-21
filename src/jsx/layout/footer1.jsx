import React, { } from 'react';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'



function Footer1() {

    return (
        <>
            <div className="footer col-12">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="copyright">
                                <p>© Copyright 2021 <Link to={'#'}>Kargo Pratik</Link> Tüm Hakları Saklıdır.</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="footer-social">
                                <ul>
                                    <li><Link to={'#'}><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link to={'#'}><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link to={'#'}><i className="fa fa-linkedin"></i></Link></li>
                                    <li><Link to={'#'}><i className="fa fa-youtube"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer1;