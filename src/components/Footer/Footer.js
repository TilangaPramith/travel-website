import "./FooterStyles.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="top"> 
            <div>
                <h1>Trave My Sri Lanka</h1>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-behance-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
            </div>
            </div>
            <div className="bottom"> 

            <div>
                <h4>help</h4>
                <a href="/contact">Support</a>
                <a href="/contact">Troubleshooting</a>
                <a href="/contact">Contact us</a>
                
            </div>

            <div>
                <h4>Others</h4>
                <a href="/">Terms of Service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
                
            </div>
            </div>
        </div>
    )
}

export default Footer;