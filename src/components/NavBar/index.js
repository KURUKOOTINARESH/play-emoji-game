// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props
  const scoreResultCom = !gameOver && (
    <div className="scores-con">
      <p className="nav-text score">Score: {score}</p>
      <p className="nav-text">Top Score: {topScore}</p>
    </div>
  )

  return (
    <div className="nav-bar">
      <div className="logo-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="nav-text">Emoji Game</h1>
      </div>
      {scoreResultCom}
    </div>
  )
}
export default NavBar
