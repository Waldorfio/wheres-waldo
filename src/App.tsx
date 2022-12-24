import React from 'react'
import './styles/style.css'

import Footer from './components/footer'

function App () {
  return (
    <div>

      <div className="book-container">

        <div id="cover">
          <div className="effect"></div>
          <img src="https://www.booktopia.com.au/blog/wp-content/uploads/2010/01/9781406305890.jpg?w=160"></img>
        </div>

        <div id="contents">
          <div id="header">
            <h3>A <span className="blue">WHERE'S</span> <span className="red">WALLY</span> GAME made by... Wally!</h3>
          </div>
          <form method="POST" action=''>
            <label id="username">
              Username:
              <input name='username' type="text" placeholder="Username"></input>
            </label>
            <label id="checkbox">
              Leaderboard?
              <input name='checkbox' type="checkbox"></input>
            </label>
            <label id="difficulty">
              Difficulty:
              <select name="platform">
                <option>Level 1 (Easy)</option>
                <option>Level 1 (Medium)</option>
                <option>Level 3 (Hard)</option>
              </select>
            </label>
            <input type="submit" value="START GAME" className="start-btn"></input>
          </form>
        </div>

    </div>

    < Footer />

    </div>
  )
}

export default App
