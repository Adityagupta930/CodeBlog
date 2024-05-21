import React from "react";
// import "../assets/style/Footer.css";
// import "../assets/style/home.css";

const Footer = () => {
  return (
    <div>
        <footer>
        <div class="footer-main">
          <div class="footer-div1">
            <h3 id="h2"> Code-Blog</h3>
            <p>
              Get the latest coding tips and insights! <br /> Subscribe to
              CodeBlog's newsletter.
            </p>

            <div class="subscribe-form">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" class="subscribe-button">
                →
              </button>
            </div>
          </div>
          <div class="footer-div2">
            <div class="footer-link">
              <h3 style="text-align: center;">Company</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div class="footer-link">
              <h3>Documentation</h3>
              <ul>
                <li>
                  <a href="#">Help Centre</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div class="footer-link">
              <h3>Social</h3>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-last"></div>
        <div class="copyright">
          <p id="p1">© Code-Blog Inc. All Rights Reserved 2024</p>
          <p id="p2">
            <a href="#">Terms & Conditions</a>
          </p>
        </div>
        </footer>
    </div>

  );
};

export default Footer;
