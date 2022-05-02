// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {winLoseText, winLoseScoreText, winLoseImg, score, onPlayAgain} = props

  return (
    <div className="win-lose-con">
      <div className="result-con">
        <h1 className="result-text">You {winLoseText}</h1>
        <p className="result-text">{winLoseScoreText}</p>
        <p>{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={winLoseImg} className="win-lose-img" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
