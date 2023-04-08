import { FcReading, FcLibrary, FcAndroidOs, FcGlobe, FcAssistant } from "react-icons/fc";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr"
import File from "../Lalit-CV.pdf";
import { FiFacebook } from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Body = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    });
    return (
        <>
            <header>
                <div className='container-fluid'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <p className="navbar-brand name ms-5" to="#">I'm Dev</p>
                            <button className="navbar-toggler" id="button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a style={{ marginLeft: "7px" }} className="nav-link" aria-current="page" href="#wellcome">WELLCOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={{ marginLeft: "7px" }} className="nav-link" href="#about-heading">ABOUT ME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={{ marginLeft: "7px" }} className="nav-link" href="#projects">PROJECTS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={{ marginLeft: "7px" }} className="nav-link" href="#contacts">CONTACTS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <hr className="hr-line"></hr>
                </div>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <section className="wellcome" id="wellcome">
                            <div className="heading">
                                <p>Wellcome!</p>
                            </div>
                            <div className="main-par">
                                <p>
                                    Hello! I'm Lalit Saini<b><i>(Full Stack developer)</i></b> I'm very excited and happy for your visit! You are very welcome, feel free to explore and come back whenever you want, friend. <b>Here, you will always be welcome and received in the best way.</b>
                                </p>
                            </div>
                            <div className="btn">
                                <a href={File} download={File}>
                                    <button type="button" className="button">Download CV</button>
                                </a>
                            </div>
                        </section>
                        <section>
                            <div className="col-12 main-body">
                                <div className="waves-1">
                                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                                    </svg>
                                </div>
                                <div className="about" data-aos="zoom-in">
                                    <div className="about-heading" id="about-heading">
                                        <h1>About Me</h1>
                                    </div>
                                    <div className="about-details">
                                        <p>
                                            My name is<b> Lalit Saini</b> I've been a programmer since 2021,After Completing
                                            Bachelor degree commerce.
                                        </p>
                                        <p>
                                            I Stared my learning journey as a Full stack dev. I decided that I would enter the world of WEB programming , where day after day, I have been striving to be a FULL STACK, where at first the focus was working with <b>HTML, CSS, javascript,</b> I carry out my activities with Javascript<b>(React.js)</b> , and on Back-End <b>Node.JS (ExpressJS),</b> for database I go with<b> MongoDB...</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 main-body">
                                <div className="academic" data-aos="zoom-in">
                                    <div className="academic-heading zoom-in">
                                        <h1>Academic details</h1>
                                    </div>
                                    <div className="academic-details">
                                        <p>
                                            <FcReading /> High school completed at <b>Rakesh Academy Senior Secondary School , Pilani</b>(Commerce,Present-2018)
                                        </p>
                                        <p>
                                            <FcReading /> Bachelor of Commerce completed at <b>Rakesh PG College, Pilani</b>(Present-2022, 3Year)
                                        </p>
                                    </div>
                                </div>
                                <div className="professional" data-aos="zoom-in">
                                    <div className="Professional-heading">
                                        <h1>Professional Qualification</h1>
                                    </div>
                                    <div className="Professional-details">
                                        <p>
                                            <FcAndroidOs /> MERN course by prepbytes<b>(Present-2022-2023, 6Month)</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="languages" data-aos="zoom-in" >
                                    <div className="languages-heading">
                                        <h1>Languages</h1>
                                    </div>
                                    <div className="languages-details">
                                        <p>
                                            <FcGlobe /> <b>Hindi-</b> Spoken and written fluently
                                        </p>
                                        <p>
                                            <FcGlobe /> <b>English-</b> Spoken and written fluently
                                        </p>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-heading">
                                        <h1>Skills</h1>
                                    </div>
                                    <div className="col-12" data-aos="zoom-in">
                                        <div className="row gap-8">
                                            <div className="img-text">
                                                <img className="image-fluid" src="images/html-5.png" alt="" />
                                                <p>HTML-5</p>
                                            </div>
                                            <div className="img-text">
                                                <img className="image-fluid" src="images/css-3.png" alt="" />
                                                <p>CSS</p>
                                            </div>
                                            <div className="img-text">
                                                <img className="image-fluid" src="images/js.png" alt="" />
                                                <p>JAVASCRIPT</p>
                                            </div>
                                            <div className="img-text">
                                                <img className="image-fluid" src="images/atom.png" alt="" />
                                                <p>React Js</p>
                                            </div>
                                            <div className="img-text">
                                                <img className="image-fluid" src="images/axios.png" alt="" />
                                                <p>Axios</p>
                                            </div>
                                            <div className="img-text">
                                                <img className="image-fluid" src="images/pngwing.com.png" alt="" />
                                                <p>NODE JS</p>
                                            </div>
                                            <div className="img-text">
                                                <img className="image-fluid" src="images/mongodb.png" alt="" />
                                                <p>MONGO DB</p>
                                            </div>
                                            <div className="img-text">
                                                <img className="image-fluid" src="images/gitbase.png" alt="" />
                                                <p>GIT</p>
                                            </div>
                                            <div className="img-text">
                                                <img className="image-fluid" src="images/github.png" alt="" />
                                                <p>GITHUB</p>
                                            </div>
                                            <div className="img-text">
                                                <img className="image-fluid" src="images/vscode.png" alt="" />
                                                <p>VS CODE</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tilt-1">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                                </svg>
                            </div>
                            <div className="projects" id="projects">
                                <div className="project-heading">
                                    <h1 className="text-white" >PROJECTS</h1>
                                </div>
                                <div className="col-12" data-aos="zoom-out">
                                    <div className="row gap-8">
                                        <div className="img-text-1">
                                            <img className="image-fluid" src="images/weather-update.png" alt="" />
                                            <Popup trigger=
                                                {<Link to="#" className="btn page-opt">To see</Link>}
                                                position="right center">
                                                <img src="images/weather-update.png" alt="" className="w-100" />
                                                <Link to="https://github.com/Lalit03-Saini/Weather" target="blank" style={{ width: "100%", margin: "5px 0px" }} className="btn page-opt" >Code repo.</Link>
                                                <Link to="https://wetherinfo.netlify.app/" target="blank" style={{ width: "100%", margin: "5px 0px" }} className="btn page-opt" >Project preview</Link>
                                            </Popup>
                                        </div>
                                        <div className="img-text-1">
                                            <img className="image-fluid" src="images/shopping-app.png" alt="" />
                                            <Popup trigger=
                                                {<Link to="#" className="btn page-opt">To see</Link>}
                                                position="right center">
                                                <img src="images/shopping-app.png" alt="" className="w-100" />
                                                <Link to="https://github.com/Lalit03-Saini/Shopping-Client" target="blank" style={{ width: "100%", margin: "5px 0px" }} className="btn page-opt" >Code repo.</Link>
                                                <Link to="https://get-all-here.netlify.app/" target="blank" style={{ width: "100%", margin: "5px 0px" }} className="btn page-opt" >Project preview</Link>
                                            </Popup>
                                        </div>
                                        <div className="img-text-1">
                                            <img className="image-fluid" src="images/login-page.png" alt="" />
                                            <Popup trigger=
                                                {<Link to="#" className="btn page-opt">To see</Link>}
                                                position="right center">
                                                <img src="images/login-page.png" alt="" className="w-100" />
                                                <Link to="https://github.com/Lalit03-Saini/login-page" target="blank" style={{ width: "100%", margin: "5px 0px" }} className="btn page-opt" >Code repo.</Link>
                                                <Link to="https://login-page03.netlify.app/" target="blank" style={{ width: "100%", margin: "5px 0px" }} className="btn page-opt" >Project preview</Link>
                                            </Popup>
                                        </div>
                                        <div className="img-text-1">
                                            <img className="image-fluid" src="images/blog-app.png" alt="" />
                                            <Popup trigger=
                                                {<Link to="#" className="btn page-opt">To see</Link>}
                                                position="right center">
                                                <img src="images/blog-app.png" alt="" className="w-100" />
                                                <Link to="https://github.com/Lalit03-Saini/React-node-project" target="blank" style={{ width: "100%", margin: "5px 0px" }} className="btn page-opt" >Code repo.</Link>
                                                <Link to="https://react-blog-app03.netlify.app/" target="blank" style={{ width: "100%", margin: "5px 0px" }} className="btn page-opt" >Project preview</Link>
                                            </Popup>
                                        </div>
                                        <div className="img-text-1">
                                            <img className="image-fluid" src="images/html-page.png" alt="" />
                                            <Popup trigger=
                                                {<Link to="#" className="btn page-opt">To see</Link>}
                                                position="right center">
                                                <img src="images/html-page.png" alt="" className="w-100" />
                                                <Link to="https://github.com/Lalit03-Saini/Html-Project" target="blank" style={{ width: "100%", margin: "5px 0px" }} className="btn page-opt" >Code repo.</Link>
                                                <Link to="https://lalit03-saini.github.io/Html-Project/" target="blank" style={{ width: "100%", margin: "5px 0px" }} className="btn page-opt" >Project preview</Link>
                                            </Popup>
                                        </div>
                                        <div className="img-text-1">
                                            <img className="image-fluid" src="images/to-do.png" alt="" />
                                            <Popup trigger=
                                                {<Link to="#" className="btn page-opt">To see</Link>}
                                                position="right center">
                                                <img src="images/to-do.png" alt="" className="w-100" />
                                                <Link to="https://github.com/Lalit03-Saini/To-do-web" target="blank" style={{ width: "100%", margin: "5px 0px" }} className="btn page-opt" >Code repo.</Link>
                                                <Link to="https://lalit03-saini.github.io/To-do-web/" target="blank" style={{ width: "100%", margin: "5px 0px" }} className="btn page-opt" >Project preview</Link>
                                            </Popup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="tilt-2">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                            </svg>
                        </div>
                        <footer className="footers">
                            <div className="contacts" id="contacts">
                                <h1>THANK YOU FOR YOUR Time</h1>
                                <p>I wish you the best of luck and thank you very much for visiting my personal portfolio website. Connect with me on the social media below:</p>
                            </div>
                            <div className="contacts-details">
                                <h1>Contacts</h1>
                            </div>
                            <p><FcAssistant /><Link to="tel: + 91 7877097203"> +91 7877097203</Link></p>
                            <pre><p><FcLibrary /> Ward no.29,Behind water work,<br></br>     Pilani,Rajasthan-333031</p></pre>
                            <div className="row">
                                <div className="col-12 sociallink gap-8">
                                    <Link className="linkedin col-6" to="https://www.linkedin.com/in/lalit-saini03/" target="blank" >< BsLinkedin /> LINKEDIN</Link>
                                    <Link className="instagram col-6" to="https://instagram.com/r.lalit03?igshid=ZDdkNTZiNTM=" target="blank" ><  AiFillInstagram /> INSTAGRAM</Link>
                                    <Link className="facebook col-6" to="https://www.facebook.com/R.Lalitsaini0318?mibextid=ZbWKwL" target="blank" >< FiFacebook />FACEBOOK</Link>
                                    <Link className="whatsapp col-6" to="https://wa.me/7877097203" target="blank"><RiWhatsappFill />Whatsapp</Link>
                                    <Link className="github col-6" to="https://github.com/Lalit03-Saini" target="blank"><BsGithub />Git hub</Link>
                                    <Link className="gmail col-6" to="mailto:lalitdaiya54@gmail.com" target="blank">< GrMail />G-Mail</Link>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Body;