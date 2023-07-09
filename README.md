# IPCC AR6 Synthesis Report Quiz

The IPCC AR6 Synthesis Report Quiz has been created to test the user's knowledge based on the report findings, and will provide explanations and further depth to any understanding the user had on our current global warming status.
The quiz' main target market group includes both the public (average joe or jaspreet!), and those with knowledge in the sector currently: private sector, public sector, investors, scientists and activists, all working towards reducing gloabl warming. This target market group has such a huge varitety of typical users, and therefore the quiz has been designed for those with any level of knowledge. If a user doesn't have any context to the questions, then they can simply guess and recieve the correct answer and facts to boost their knowledge. For users that are already focussing work in the sctor, the quiz provides extra depth and controversial facts as to how we advance our efforts to reducing warming.

An ideal user would be members from product development in RnD across industry sectors, asset managers, policy makers, UN advisory group memebers and so forth; (typically those who have not read the report page to page) and in order to educate on the means neccessary to achieve, and in some way redirect our efforts, for reduction of gloabl warming.
![amiresponsive.co.uk](INSERT IMAGE HERE)

# User Feedback

- "I think this is amazing, really easy to navigate on my phone. We (the team, captain and I) would use the site to keep the team up to date and recruit new players. This shows a great showcase the team and key individuals. Excited to use for our next season" Jed Begley, BCFCLS Captain.

# Features

### Wireframe:

This is a basic format used to formalise a theory for the website. Ideas for the site are displayed here, including a suggestion for the transitition as the quiz progresses. Since creating the website, placement of the items and styling have been reconsidered. 
![Wireframe](assets/images/readme/wireframe-iphone13.jpg)

### Flowchart planning 
This is a basic structure for both html sections and javascript, and I produced this to run through the plan for the quiz. Breaking this down in to thoughts on each function, event listeners for my html buttons (onlclick), loops and conditional statements helped to simplify how I wrote out the javascript, each function step by step. 
![Wireframe](assets/images/readme/p2-ipcc-flowchart.jpg)

## Existing Features

### Quiz Bio

Featured on window load, hidden display once 'Test Your Knowledge Here!' button is clicked by event listener. 
Text explains the importance of the quiz and what the user should gain from testing their knowledge. 
Unordered list and basic html format reduce when screen width is smaller. 
This section allows the user to progress to the quiz. 

### Footer

Fixed throughout, displays link to the IPCC AR6 report where a user can read in full, should they wish. Aria labelled accordingly. 

## Quiz area

### Question 
### Timer
### Select Option Buttons
### Question Number and Current Score (Total Correct)

### Questions.js and explanatation.js 
## Separate files: 
This quiz has two addtional files set up to store both the quiz dataset and explanations dataset. The quiz containts: question number, question, (correct) answer and all options. The explanation data set contains the question number and relevant explanation. 
Due to the context of this quiz, the explnatation has been added to reveal more depth to the user's understanding and knowldge as a takeaway from the quiz. 
Both the reveal answer and explanation are built to load simulatnouesly as the user selects their answer option for the question. 

## Changing options lenegth per question 
The questions.js quiz dataset has a different number of options to select per question. Most online quiz examples use a basic format of four routine options, labelled with dataset 1 and so forth. This quiz uses a loop to return all select options per object (question). 

## Mulitple true answers in javascript array 
The questions.js quiz dataset has two unique questions 'numb 3' and 'numb 13'. Both of these questions are trick questions to the user, and have multple answers as the correct answer. Code has been written with an array of corrrect answers  for each, then checked via a loop under the main function for reveal answer.

## Final Result Takeaway
Sets a conditonal statement to notify the user if they scored 50% and above or less then 50%.

### Features left to implement

1. Nested questions inside a question in javascript. Ie. Q11 Part A..., Q11 Part B.... . 
2. Graphs or assigned links to each explanation/ when answer revealled. 
3. List of all sources with a button to release this - would be especially useful for any scientists, research and developemtn or product development users. 
4. Option to pdf the questions and answers dataset. 
5. Most arrays have been accessed using JSON dot notation, for more complex addtions to the quiz would use indexing.

## Design

- Background photo and basic colour scheme mirroring the IPCC Synthesis Report website:
![IPCC Website Styling](assets/images/readme/ipcc-styling.png)

- Colour scheme worked around tints of  s#5493cd Blue:
![#5493cd tints](assets/images/readme/tints.jpg)

- Complimentary tones of light grey and white used in fonts and div backgrounds to improve over all styling and readability. 
- All elements have been centred to allow a common theme and easy scrolling / movement throughout the quiz for the user.
- Capitalised fonts and letter spacing have been used to increase contrast for readibilty where the background image is dark and text is light. 

### Validator Testing

## HTML


## CSS


## Code Testing

- Test-knowl button:
- Select-option buttons:
- Questions remaining and  total correct count per answer:
- Restart-quiz button:
- Final score and correct statement: 
  ![Testing Excel Sheet](assets/images/screenshots-readme/testing-excel.jpg)

## Media Response

- All elements are designed to adjust items in to a column as media devices get smaller.
- All headings, paragraph text, the footer, and specialised ids have been reduced to 90% as the screen size is reduced. 

Examples:

## Lighthouse

- Main points of feedback were due to the paint colour, sizing of headings and header per page and speed to load these.
- The site displays a red colour for both the user team's home colours and representation and further for accessibility.
- One of the team players has a blinding in one eye and the bold titles and title colours make this more accessible for this user.
- Could re-consider the design for better performance.
  ![Lighthouse Checks](assets/images/screenshots-readme/lighthouse.jpg)

## Wave

- No errors or contrast errors on all pages
- There were contrast errors due to the light text colour (white) and the dark background image. In order to eliminate contrast errors, background opacity has been set per divided section to provide a more fluid readability. 
- Some divs have increased opcacity with background lighter opacity in order to highlight some sections (ie. the question section).
  ![Wave Checks](assets/images/screenshots-readme/wave.png)

### Solved Bugs

- All js files were showing error messages due to syntax errors, these have been corrected.
- Test-knowl issues on starting the quiz. I logged the console each time pressed to check in Dev Tools, of which js errors explained on the syntax. Error message read that it didn't like the 'export' action I set for internal js files. Tis has been removed. 

### Unsolved Bugs

- Social Page Twitter Timeline rendering in Firefox not so good - unsure how to implement change.

## Deployment

- The site was deployed to GitHub pages.
  The live link can be found here - https://jodiehillkitcherside.github.io/project1-bcfcls/

## Credits

### Inspired websites and tutor/mentor suggestions

- [Stackoverflow - Hide div onload](https://stackoverflow.com/questions/39307329/hide-div-onload-in-javascript) taught me how to hide elements until event listeners clicked!
- [Stackoverflow - Loop options and questions](https://stackoverflow.com/questions/66765795/for-loops-for-multiple-choice-questions) taught me how to create a loop to extract options and questions.
- [Stackoverflow - Timer](https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz) taught me how to create a timer.
- [Stackoverflow - Window Onload](https://stackoverflow.com/questions/39307329/hide-div-onload-in-javascript) taught me how to reset the quiz and postion my elements on load of the browser. 

https://www.scaler.com/topics/javascript/import-js-file-in-js/#

- Tutor Ed helped me identify how to change the x-index of elements layered on the screen. 
- 

- Header, Nav and Footer first inspired by the Love Running Project, which have been really edited fit for this website.
- Thanks to the Code Institute Tutors: Sean, Sarah, Gemma and Joanne who really helped with media response confusion for various sections and items across media device sizes.
- Thanks to my mentor Lauren-Nicole Popich who has been all start amazing at simplifying the break down of displaying items flex and how to assemble multple sections, divs within divs. The use of sketching intention and working through what needed a div or needed to be put in to another div section, then flexed, has really provided help.

### Content

- All quiz quesitons, multiple choice answers, correct answers and explanations taken from [IPCC AR6 Synthesis Report Policy Makers Summary](https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf) 
- No API used to form questions, all researched and created by myself. 
- Bio text and takeaway written by myself, with context to the report and current industry I work in. You can see more about the company I currently work for here: [Climate Action](https://www.climateaction.org/)

### Media

- Background image sourced directly from the IPCC Article AR6 Syntehsis Report landing page. 

### Inspiration

- The IPCC AR6 Synthesis Longer Report is 85 pages in itself and 34 pages in the Policy Makers Summary, of which this quiz is based off of the figures and report findings. 
The average user will either not have heard of this report, or would not have had the chance to read all of it in detail. 
There are numerous articles which summarise big findings, but again most of which would have only been read by those who know about the report and work closely to the research within the industry. 
This quiz website is inspired based on the lack of educatation for the general user and can be played by any user. 
You can see snippets of the report I read to create the quiz here: 
![IPCC AR6 Snippets](assets/images/readme/report-snippets.JPG)
