import Time from './Time'

function Header() {
  return (
    <div className="container header">
    <div className="row">
      <div className="col"><h3 className='logotype'>PB©</h3></div>
      <div className="col"></div> 
      <div className="col"><p className="main-text">Creative Director & Designer</p></div>
      <div className="col">
        <ul className="main-text">
        <li>About</li>
        <li>Services</li>
        <li>Contact Me</li>
        </ul>
      </div>
      <div className="col">
        <div className='row'>
        <p className="main-text">Dark Mode</p>
        </div>
        <div className='row'>
        <ul className="main-text">
        <li><Time /></li>
        <li>10.3157° N, 123.8854° E</li>
        <li>Cebu City, Philippines</li>
        </ul>
        </div>
        <div className='row'>
        <a href="mailto:patrickgattoc@gmail.com" className='main-text'>patrickgattoc@gmail.com</a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col"><p className="main-text">Scroll Down To View More</p></div>
    </div>
  </div>
  );
}

export default Header;
