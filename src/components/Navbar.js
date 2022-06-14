import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//
import Loader from './pages/Loader';
import './Navbar.css';

import { gql, useQuery } from '@apollo/client';

const GET_COMPANY_INFO = gql`
{
    company {
      name
      summary
    }
  }`

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const { data, loading, error } = useQuery(GET_COMPANY_INFO);
  if (loading) return <Loader />
  if (error) return 'Error'
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {data.company.name}
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/falcon9' className='nav-links' onClick={closeMobileMenu}>
                FALCON 9
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/falconheavy'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FALCON HEAVY
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/starship'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                STARSHIP
              </Link>
            </li>

           
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
