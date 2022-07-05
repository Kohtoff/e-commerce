import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../scss/header.scss';
import IconBtn from '../IconBtn/IconBtn';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

export default function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header__adress">
          <p className="adress">Zaporozhzhye, Soborna street, 26</p>
          <p className="phone">+380991234560</p>
        </div>
        <div className="header__logo">
          <Link to={'/'}>
            <Logo />
          </Link>
          <span className="header__slogan">Lorem ipsum dolor sit.</span>
        </div>
        <div className="header__buttons">
          <IconBtn type="fav">favourites</IconBtn>
          <NavLink to="/cart">
            <IconBtn type="cart">cart</IconBtn>
          </NavLink>
          <IconBtn type="search">search</IconBtn>
        </div>
      </header>
      <NavBar
        data={[
          { title: 'shorts', path: '/shorts' },
          { title: 'dresses', path: '/shorts' },
          { title: 'shirts', path: '/shorts' },
          { title: 'jackets', path: '/shorts' },
        ]}
      />
    </div>
  );
}
