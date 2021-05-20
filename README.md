**Memory Game** is a Light & Sound Memory game

[Link to project](https://glitch.com/edit/#!/different-deep-rabbit?path=README.md%3A11%3A25)

[Link to project On seperate window](https://different-deep-rabbit.glitch.me/)

## Required Functionality

The following functionality is complete:

- [o] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [o] "Start" button toggles between "Start" and "Stop" when clicked.
- [o] Game buttons each light up and play a sound when clicked.
- [o] Computer plays back sequence of clues including sound and visual cue for each button
- [o] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [o] User wins the game after guessing a complete pattern
- [o] User loses the game after an incorrect guess

The following features are implemented:

- [o] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [o] Buttons use a pitch (frequency) other than the ones in the tutorial
- [o] More than 4 functional game buttons
- [o] Playback speeds up on each turn
- [o] Computer picks a different pattern each time the game is played
- [o] Player only loses after 3 mistakes (instead of on the first mistake)

The following **additional** features are implemented:

- [I had to impement a function that would reset the speed after it had been sped up during the guess function. I then placed the resetSpeed function in the winGame and loseGame functions.]
- [I could also implement something that wouldn't allow the user to click on the squares while they squares are going through the pattern.]

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Lighting up:
![](https://i.imgur.com/4rMQAPk.gif)

Playing:
![](https://i.imgur.com/Lxdz7OC.gif)


Winning:
![](https://i.imgur.com/JAyZBvE.gif)


Decreasing attempts:
![](https://i.imgur.com/DHVQM6i.gif)

Losing:
![](https://i.imgur.com/nJWFf7o.gif)


## Reflection Questions


[Link For Sound](https://www.the-art-of-web.com/javascript/creating-sounds/)

[Link For Math Library](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

[Link For Syntax and Methods](https://www.w3schools.com/)


## License

    Copyright Juan Garcia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
