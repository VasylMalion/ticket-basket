// core
import React from "react";

// icons
import {AiFillLinkedin} from "react-icons/ai";
import {FaFacebookSquare} from "react-icons/fa";
import {GrInstagram} from "react-icons/gr";
import {ImGithub} from "react-icons/im";

// styles
import {Navbar} from "react-bootstrap";
import "./footer.css";

export const Footer = () => {

    return <>
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0 justify-content-center">
                <section>
                    <a
                        target="_blank"
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.facebook.com/vasia.malion.3/"
                        role="button"
                    >
                        <FaFacebookSquare className="icon-size"/>
                    </a>
                    <a
                        target="_blank"
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.instagram.com/malion_vasia/"
                        role="button"
                    >
                        <GrInstagram className="icon-size"/>
                    </a>
                    <a
                        target="_blank"
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://www.linkedin.com/in/vasyl-malion-8690ba1b5/"
                        role="button"
                    >
                        <AiFillLinkedin className="icon-size"/>
                    </a>
                    <a
                        target="_blank"
                        className="btn btn-outline-light btn-floating m-1"
                        href="https://github.com/VasylMalion"
                        role="button"
                    >
                        <ImGithub className="icon-size"/>
                    </a>
                </section>
            </div>
            <div className="text-center p-3 copyright display-footer" >
                © 2021 Copyright: Vasyl Malion
            </div>
        </footer>
    </>
}