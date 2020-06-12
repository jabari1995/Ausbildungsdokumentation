import React from "react";

function Footer() {
  return (
    // <FooterContainer className="main-footer">
    <div className="footer-middle bg-dark">
      <div className="container">
        <div className="row justify-content-between">
          {/* Column 1 */}
          <div className="col-md-12 col-sm-8">
            <h6 className="Links-oben">
              Weitere Informationen zu deiner Ausbildung:
            </h6>
            <ul className="list-unstyled">
              <li>
                <a href="https://ausbildungsplaner.csi.bauer-de.bauermedia.group/Ausbildungsplaner/">
                  Ausbildungsplaner
                </a>
              </li>
              <li>
                <a href="https://www.itech-bs14.de/startseite">ITECH BS14</a>
              </li>
              <li>
                <a href="https://intranet.bauermedia.com/SitePages/Homepage.aspx">
                  Bauer Inside
                </a>
                <div className="Links-unten">
                  &copy;{new Date().getFullYear()}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
      </div>
    </div>
    // {/* </FooterContainer> */}
  );
}

export default Footer;
