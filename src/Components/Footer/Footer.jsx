import React from 'react';
import '../../scss/footer.scss';
import InstagramLogo from '../InstagramLogo/InstagramLogo';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

export default function Footer() {
  const links = [
    { title: 'contacts', link: '' },
    { title: 'About', link: '' },
    { title: 'services', link: '' },
    { title: 'How to order', link: '' },
    { title: 'Delivery and payment', link: '' },
    { title: 'Guarantees', link: '' },
    { title: 'how to select size', link: '' },
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <Logo />
        <NavBar data={links} />
        <div className="footer__contacts">
          <InstagramLogo />
          <div className="adresses">
            <h4>Shops</h4>
            <p>
              Zaporizhzhya, av. Soborniy 15
              <br />
              +380 (099) 563 0230
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p className="bottom-bar__copyrights">© 2022 all rights reserved</p>
        <p className="bottom-bar__terms-of-use">terms of use and politics</p>
      </div>
    </footer>
  );
}
