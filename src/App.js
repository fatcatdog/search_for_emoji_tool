import React from 'react';
import Header from './Header';
import index from './index';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';
import filterEmoji from './filterEmoji';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji('', 1000),
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 1000),
    });
  }


  render() {
    return (
      <div>
        <Header/>
        <SearchInput
          textChange={this.handleSearchChange}
        />
        <EmojiResults
          emojiData={this.state.filteredEmoji}
        />
        <ScrollUpButton />
      </div>
    );
  }
}
export default App;
