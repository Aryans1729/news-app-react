import "./NavLinks.css";

const NavLinks = ({ saveNewsType, saveLoader }) => {
  return (
    <div>
      <nav>
        <div className='main-nav container flex'>
          <h2
            className='News-logo-heading'
            onClick={() => {
              saveNewsType("everything");
              saveLoader(true);
            }}
          >
            News-app
          </h2>

          <div className='nav-links'>
            <ul className='flex'>
              <li
                className='hover-link nav-items'
                onClick={() => {
                  saveNewsType("ipl");
                  saveLoader(true);
                }}
              >
                IPL
              </li>
              <li
                className='hover-link nav-items'
                onClick={() => {
                  saveNewsType("finance");
                  saveLoader(true);
                }}
              >
                Finance
              </li>
              <li
                className='hover-link nav-items'
                onClick={() => {
                  saveNewsType("education");
                  saveLoader(true);
                }}
              >
                Education
              </li>
              <li
                className='hover-link nav-items'
                onClick={() => {
                  saveNewsType("politics");
                  saveLoader(true);
                }}
              >
                Politics
              </li>
              <li
                className='hover-link nav-items'
                onClick={() => {
                  saveNewsType("science");
                  saveLoader(true);
                }}
              >
                Science
              </li>
            </ul>
          </div>
          {/* <div class='search-bar flex'>
            <input
              type='text'
              placeholder='What do u want to know today..'
              class='news-input'
              onChange={searchNews}
            />
            <button class='search-button'>Search</button>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default NavLinks;
