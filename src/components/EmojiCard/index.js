// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, onEmojiClick} = props
  const {id, emojiName, emojiUrl} = details
  const onClickEmoji = () => {
    onEmojiClick(id)
  }

  return (
    <li className="emoji-con">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
