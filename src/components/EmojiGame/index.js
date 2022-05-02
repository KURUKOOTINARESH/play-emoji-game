/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    selectedEmojisList: [],
    topScore: 0,
    gameOver: false,
  }

  onEmojiClick = id => {
    const {emojisList} = this.props
    const {selectedEmojisList, topScore} = this.state
    const isPreviouslySelected = selectedEmojisList.includes(id)

    if (isPreviouslySelected) {
      const score = selectedEmojisList.length
      if (score > topScore) {
        this.setState({
          topScore: score,
          gameOver: true,
        })
      } else {
        this.setState({gameOver: true})
      }
    } else {
      if (selectedEmojisList.length === emojisList.length - 1) {
        this.setState({
          topScore: emojisList.length,
          gameOver: true,
        })
      }
      this.setState(prevState => ({
        selectedEmojisList: [...prevState.selectedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onPlayAgain = () => {
    console.log('click')
    this.setState({selectedEmojisList: [], gameOver: false})
  }

  render() {
    const {selectedEmojisList, topScore, gameOver} = this.state
    const shuffledEmojiList = this.shuffledEmojisList()
    const score = selectedEmojisList.length
    const winLoseText = score === 12 ? 'Won' : 'Lose'
    const winLoseScoreText = score === 12 ? 'Best Score' : 'Score'
    const winLoseImg =
      score === 12
        ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    const emojiCom = (
      <ul className="emojis-con">
        {shuffledEmojiList.map(eachItem => (
          <EmojiCard
            details={eachItem}
            key={eachItem.id}
            onEmojiClick={this.onEmojiClick}
          />
        ))}
      </ul>
    )
    const winLoseCom = (
      <WinOrLoseCard
        winLoseText={winLoseText}
        winLoseScoreText={winLoseScoreText}
        winLoseImg={winLoseImg}
        score={score}
        onPlayAgain={this.onPlayAgain}
      />
    )
    const displayCom = gameOver ? winLoseCom : emojiCom
    return (
      <div className="app-con">
        <div className="nav-con">
          <NavBar score={score} topScore={topScore} gameOver={gameOver} />
        </div>
        <div className="content-con">{displayCom}</div>
      </div>
    )
  }
}
export default EmojiGame
