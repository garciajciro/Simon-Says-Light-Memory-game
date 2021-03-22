# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Juan Garcia

Time spent: 5.5 hours spent in total

[Link to project](https://glitch.com/edit/#!/different-deep-rabbit?path=README.md%3A11%3A25)

[Link to project On seperate window](https://different-deep-rabbit.glitch.me/)

## Required Functionality

The following **required** functionality is complete:

- [o] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [o] "Start" button toggles between "Start" and "Stop" when clicked.
- [o] Game buttons each light up and play a sound when clicked.
- [o] Computer plays back sequence of clues including sound and visual cue for each button
- [o] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [o] User wins the game after guessing a complete pattern
- [o] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [o] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [o] Buttons use a pitch (frequency) other than the ones in the tutorial
- [o] More than 4 functional game buttons
- [o] Playback speeds up on each turn
- [o] Computer picks a different pattern each time the game is played
- [o] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
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

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

[Link For Sound](https://www.the-art-of-web.com/javascript/creating-sounds/)

[Link For Math Library](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

[Link For Syntax and Methods](https://www.w3schools.com/)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

- [One of the biggest challenges in creating this project was trying to figure out why the sound would stop working after the page first loads, or why it wouldn't work at all when I showed it in a new window. It turns out that google chrome in 2018 stop allowing websites to autoplay videos/sounds. This meant that to play a video/sound you had to use the resume() function that the audio context library has. Once I found out about the function I decided to implement it and that's when the next problem occurred. It wouldn't run or it would only run in certain cases. It turns out that the only way it would resume it would through user interaction with the page, so if they clicked on something that had the resume() function then it would start playing, but this meant that in the Js file the call and declaration for the resume() function would have to come after the user clicked. Because of this, I placed the resume() for when the user clicks on the start game, and also when the user clicks a square. Just in case that the user decides to click a square instead of clicking Start. Another problem that I encountered was trying to figure out the guess function and trying to fix it. I did have to look at the code given, and it turned out that I had my guess and my progress variables were switched. Once I switched them again the program worked perfectly. Other than all of this the rest of the program went
  pretty well.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

- [I have so many questions about web development. Right now, I'm wondering how many API's and other frameworks are there to make websites more interesting and have more user interactions. Also, I'm wondering on how to make my own library and framework. All of this stuff is really interesting to me, I have also touched a little bit of backend
  before and connecting information to a database so I would like to learn more about that. ]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

- [If I had a few more hours I think I would just make it a little bit nicer visually. Like clean the background, maybe add more pictures or different colors in the background that would make the actual game components "pop" out. I would also implement a clock which honestly I think would be a fun little challenge, and maybe decorate the clock, as in making the timer an actual clock that ticks down. With more time I would also check if there are any bugs and then fix them.]

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
