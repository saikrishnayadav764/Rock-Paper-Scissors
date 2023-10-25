import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import './App.css'
import {useEffect, useState} from 'react'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => {
  const [clicked, setClicked] = useState(false)
  const [userValue, setUserValue] = useState('')
  const [oppValue, setOppValue] = useState('')
  const [text, setText] = useState('')
  const [score, setScore] = useState(0)

  const ClickHandler = id => {
    setClicked(true)
    const userImg = choicesList.filter(item => item.id === id)[0].imageUrl
    const randVal = choicesList[Math.floor(Math.random() * 3)].id
    const oppImg = choicesList.filter(item => item.id === randVal)[0].imageUrl
    if (id === 'PAPER' && randVal === 'ROCK') {
      setScore(prevState => prevState + 1)
      setText('YOU WON')
    } else if (id === 'SCISSORS' && randVal === 'PAPER') {
      setScore(prevState => prevState + 1)
      setText('YOU WON')
    } else if (id === 'ROCK' && randVal === 'SCISSORS') {
      setScore(prevState => prevState + 1)
      setText('YOU WON')
    } else if (id === randVal) {
      setText('IT IS DRAW')
    } else {
      setScore(prevState => prevState - 1)
      setText('YOU LOSE')
    }
    setUserValue(userImg)
    setOppValue(oppImg)
  }

  const playAgain = () => {
    setClicked(false)
  }

  //   useEffect(() => {

  //   }, [clicked])

  console.log(userValue)
  console.log(oppValue)

  const renderSecond = () => (
    <div className="imgWrapper">
      <div className="box">
        <p>YOU</p>
        <img alt="your choice" src={userValue} />
      </div>
      <div className="box">
        <p>OPPONENT</p>
        <img alt="opponent choice" src={oppValue} />
      </div>
      <div className="box">
        <p className="lose">{text}</p>
        <button onClick={playAgain} type="button" className="bn">
          PLAY AGAIN
        </button>
      </div>
    </div>
  )

  return (
    <div className="wholeContainer">
      <div className="top-box">
        <div className="s1">
          <h1 className="none">Rock Paper Scissors</h1>
          <p>Rock</p>
          <p>Paper</p>
          <p>Scissors</p>
        </div>
        <div className="scoreBox">
          <p>Score</p>
          <p>{score}</p>
        </div>
      </div>
      {!clicked ? (
        <div className="imgWrapper">
          {choicesList.map(({id, imageUrl}) => (
            <div id={id} className="box">
              <button
                data-testid={`${id.toLowerCase()}Button`}
                onClick={() => ClickHandler(id)}
                className="btn"
                type="button"
              >
                <img alt={id} src={imageUrl} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        renderSecond()
      )}

      <Popup
        id="popup"
        trigger={
          <button type="button" className="button">
            RULES
          </button>
        }
        modal
      >
        {close => (
          <>
            <div className="wrapper">
              <img
                className="rules"
                alt="rules"
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              />
            </div>
            <button
              className="close"
              onClick={() => {
                close()
              }}
              type="button"
            >
              <RiCloseLine />
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}

export default App
