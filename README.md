



<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-output.gif" alt="rock paper scissors output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Playing View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-playing-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Game Results View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-game-results-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Game Rules View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-rules-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>



<details>
<summary>Functionality added</summary>
<br/>

The app is having the following functionalities

- When we click on the **Rules** button, it  triggers a popup, and rules image will be displayed
- Initially, the score displayed will be `0`
- The App is provided with `choicesList`. It consists of a list of choice objects with the following properties in each choice object

  |   Key    | Data Type |
  | :------: | :-------: |
  |    id    |  String   |
  | imageUrl |  String   |

- When any of the three buttons (i.e Rock, Paper, Scissors) is clicked, then the [Game Results View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-game-results-output.png) will be displayed
- In the Game Results View, the opponent choice will be generated randomly among these three buttons (i.e Rock, Paper, Scissors)
- When the **Rock** button is clicked, then the rock image will be displayed as our choice in the Game Results View
- When the **Paper** button is clicked, then the paper image will be displayed as our choice in the Game Results View
- When the **Scissors** button is clicked, then the scissors image will be displayed as our choice in the Game Results View

  #### Game Rules

    <details>
    <summary>Click to view the Game Rules</summary>
    <br/>
    <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png" alt="rules image" style="width:500px" />
    <br/>

  - Game result based on choices

    - When our choice is **paper** and the opponent choice is **rock**, then the result will be `YOU WON`
    - When our choice is **scissors** and the opponent choice is **rock**, then the result will be `YOU LOSE`
    - When our choice is **rock** and the opponent choice is **paper**, then the result will be `YOU LOSE`
    - When our choice is **scissors** and the opponent choice is **paper**, then the result will be `YOU WON`
    - When our choice is **rock** and the opponent choice is **scissors**, then the result will be `YOU WON`
    - When our choice is **paper** and the opponent choice is **scissors**, then the result will be `YOU LOSE`
    - When our choice and the opponent choice match, then the result will be `IT IS DRAW`

    </details>

- When the result is `YOU WON`, then the score wil be incremented by one
- When the result is `IT IS DRAW`, then there won't be any change in the score
- When the result is `YOU LOSE`, then the score will be decremented by one
- When the **PLAY AGAIN** button is clicked, then the [Playing View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-playing-output.png) will be displayed


### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png](https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png) alt should be **rules**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #223a5f; width: 150px; padding: 10px; color: white">Hex: #223a5f</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto
- Bree Serif

</details>


