import './header.scss';

const Header = () => {
  return (
    <div className='navbar-fixed'>
      <nav className='blue darken-2'>
        <div className='nav-wrapper'>
          <a href='#!' className='brand-logo'>
            Cinema
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a href='sass.html'>My Link</a>
            </li>
            <li>
              <a href='badges.html'>Components</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
