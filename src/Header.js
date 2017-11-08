import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="component-header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1F369.png"
          role="presentation"
          width="32"
          height="32"
        />
        Emoji Search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1F354.png"
          role="presentation"
          width="32"
          height="32"
        />
      </header>
    );
  }
}
export default Header;
