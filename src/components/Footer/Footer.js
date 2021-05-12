import React from 'react'

function Footer() {
    return (
        <div className="footer">
        <div className="inner-footer">
      
          <div className="footer-items">
            <h1>Smart Outlets</h1>
            <p>Keep an eye on your energy consumption.</p>
          </div>
      
          <div className="footer-items">
            <h3>Quick Links</h3>
            <div className="border1"></div>
              <ul>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Search</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="#"><li>About</li></a>
              </ul>
          </div>
      
          <div className="footer-items">
            <h3>Contact us</h3>
            <div className="border1"></div>
              <ul>
                <li><i className="fa fa-map-marker" aria-hidden="true"></i>Vives Kortrijk</li>
                <li><i className="fa fa-phone" aria-hidden="true"></i>Mourad Essebane</li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i>mourad.essebane@student.vives.be</li>
              </ul> 
            
              <div className="social-media">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-google-plus-square"></i></a>
              </div> 
          </div>
        </div>
        
        <div className="footer-bottom">
          Copyright &copy; Vives Kortrijk 2021-2022.
        </div>
      </div>
    )
}

export default Footer
