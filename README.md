# Captain Caption FRONTEND

## Links

[Trello Board](https://trello.com/b/uDdjyRBW/captain-caption-user-stories-features)

[Figma DM + WF](https://www.figma.com/file/GoLyX821kkeUm6x4f7d8GR/Capn'-Caption?node-id=0%3A1)

[frontend repo](https://github.com/captain-caption/frontend)

[backend repo](https://github.com/captain-caption/backend)

## Deadlines

- Final Presentation Date: June 3.

## Members

- Sam Brindle
- Ben Choe
- Yu-Wei Hsieh
- Vinny Shipley
- Dylan Ullrich

## Wire Frame

![Wire Frame](/img/wireframe.png)

## Domain Model

![Domain Model](/img/Domain%20Model.png)

### Cooperation Plan

- What are the key strengths of each person on the team?

- Sam Brindle: Debugging
- Ben Choe: Coding
- Yu-Wei Hsieh: Server side coding
- Vinny Shipley: Communication
- Dylan Ullrich: Planning

- How can you best utilize these strengths in the execution of your project?

We are open about our strengths, and happy to help others in the group with subjects that they may not feel as strong in. 

- In which professional competencies do you each want to develop greater strength?

- Sam Brindle: Business acumen
- Ben Choe: Professionalism
- Yu-Wei Hsieh: Quality Control
- Vinny Shipley: Handling ambiguity
- Dylan Ullrich: Technical

- Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?

We will have each team member review each submission/merge as they occur, so that we can all maintain the same level of understanding on the project.

### Conflict Plan

- What will be your group’s process to resolve conflict, when it arises?

Take a vote, we have five members.

- What will your team do if one person is taking over the project and not letting the other members contribute?

Speak with instructor and speak with group member to see how all members can contribute more equally.

- How will you approach each other and the challenges of the project knowing that it is impossible for all members to be at the exact same place in understanding and skill level?

We can support each other, patiently, to develop skills that might not be our strengths.

- How will you raise concerns to members who are not adequately contributing?

Elect a team member to speak with the member, and see how we can better support them.

- How and when will you escalate the conflict if your resolution attempts are unsuccessful?

Speak with Sheyna.

### Communication Plan

- What hours will you be available to communicate?

Daily morning check-ins on Remo. We will try to keep our working hours during class time, but we are open to working additional time if needed.

- What platforms will you use to communicate (ie. Slack, phone …)?

Slack is main form of communication. Remo is where we will meet. Zoom is a backup.

- How often will you take breaks?

Once an hour for 10 minutes.

- What is your plan if you start to fall behind?

Reassess MVP, and meet as a group to discuss options.

- How will you communicate after hours and on the weekend?

Slack.

- What is your strategy for ensuring everyone’s voice is heard?

Ask everyone if they would like to contribute to the subject being discussed.

- How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?

Continue to treat each other with respect and let all team members know we are open to communication about any issues.

### Work Plan

- How you will identify tasks, assign tasks, know when they are complete, and manage work in general?

During our morning meetings we will assess what each team member or group of team members will be accomplishing for the day. The entirety of the project and the steps needed to complete will be outlined on Trello.

- What project management tool will be used?

Trello.

### Git Process

- What components of your project will live on GitHub?

All components will be present on GitHub with the exception of sensitive information, which will be sanitized.

- How will you share the repository with your teammates?

GitHub Organization.

- What is your Git flow?

1. Main Production Branch **(2 Personal Approval required for merge from STAGING to MAIN)**

2. Staging Branch **(2 Personal Approval required for merge from STAGING to MAIN)**

3. Individual branches w/feature

Individuals or team members will work off of their named branch w/ feature included. Individual branches will get merged to staging with two team members present. We will merge to staging throughout the day and then merge to main for final checks for the day.

Project Prep 2

## The Project

- Summary of idea.

Captain Caption. Capture audio from web browser and present text subtitles in the browser.

- What problem or pain point does it solve? a. Keep it high level without going into too much detail. (3-4 sentences is enough)

In the world of remote work, accessibility has taken new meanings. Transcribed speech is essential for accessibility for those who are deaf and hard of hearing. Our goal is to make the remote workplace more accessible for all.

- Minimum Viable Product (MVP) definition.

Browser listens to audio and then presents speech as text in the browser.

## Requirements

### Vision

- What is the vision of this product?
  - To incorporate accessibility for the deaf and hard of hearing. Additionally, allowing for inclusion of people who speak a language other than the presenter.
- What pain point does this project solve?
  - This project solves the need for deaf and hard of hearing to be included in an online presentation.
- Why should we care about your product?
  - Everyone deserves a spot at the table and this product will allow those who could not previously participate in online class/seminar.

## Scope (In/Out)

### In

- This app will take in audio and turn it into text
- This app will allow you to translate the text into another language
- Users will be able to choose to store text on a DB
- Users will be able to request all the text they have stored on the DB

### Out

- This app will not translate text to speech
- This app will not do speech to text for any language other than English

## MVP

- What will your MVP functionality be?
  - Take in input from a live mic and turn it into text with a possible language translation and store it to a DB if the user would like.
- What are your stretch goals?
  - Allow for DB data to be pulled by each individual user.
- Functional Requirements
  - A user can input audio from their live microphone for speech to text

## Data Flow

The user will hit begin/start button to start recording their voice
When they are done they will hit the stop button
The data will be sent to the speech to text API and the text will be returned
The data will then be sent to the backend
If chosen, the text will be sent to the DB and to the translation API to return the data to the user

## Non-Functional Requirements

1. Usability: The font will be displayed in a large manner for readability
2. Compatitbility: Having an internet connection