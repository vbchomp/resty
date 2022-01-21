import './header.scss';

function Header( {title} ) {
  return (
    <header>
      <h1 title="Header" className="header"> 
        {title} 
      </h1>
    </header>
  );
}

export default Header;
