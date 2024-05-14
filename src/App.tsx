import React, { useState } from 'react'
import './App.scss'
import { ProjectSection } from './ProjectsSection'
import { EducationSection } from './EducationSection'
import { InterestsSection } from './InterestsSection'
import { ContactSection } from './ContactSection'

enum ContentType {
  Projects,
  Learning,
  Personal,
  Contact
}

interface AppState {
  selectedContent: ContentType
}

function App() {

  const [state, setState] = useState({selectedContent: ContentType.Projects})

  const techs = ["TYPESCRIPT", "JAVASCRIPT", "REACT", "C#", "HTML", "CSS", "SASS", "SWIFT", "LUA"]
  const greeting = "Hi there!"
  const introduction = `
  My name is Sara, and I’m an aspiring developer with a 
  background in UI/UX design and IT. I specialize in front-end 
  development using TypeScript and React, but I aim to become 
  a full-stack developer eventually. I thoroughly enjoy learning 
  and self-improvement, and I'm eager to continue exploring ways 
  to write cleaner and more efficient code. Feel free to view my 
  work and learn more about me below.
  `

  function selectedContentWasChanged(selectedContent: ContentType) {
    setState({...state, selectedContent: selectedContent})
  }

  return (
    <div id="page">
      <header>
        <h1>SARA HAYWARD</h1>
        <h2>Front end developer with visual design skills</h2>
        <div id="techs-list">
          {techs.map( t => <span key={t}>{t}</span>)}
        </div>
        <div id="greeting">
          <span className="text-emphasis">{greeting}</span><span id='introduction'>{introduction}</span>
        </div>

      </header>
      <main>
        <section>
          <p>
            
          </p>
        </section>
        <div className="tabbed-navigation-bar">
        <button className={state.selectedContent === ContentType.Projects ? "navigation-button-selected" : "navigation-button"} onClick={ () => selectedContentWasChanged(ContentType.Projects)}>PROJECTS</button>
        <button className={state.selectedContent === ContentType.Learning ? "navigation-button-selected" : "navigation-button"} onClick={ () => selectedContentWasChanged(ContentType.Learning)}>EDUCATION</button>
        <button className={state.selectedContent === ContentType.Personal ? "navigation-button-selected" : "navigation-button"} onClick={ () => selectedContentWasChanged(ContentType.Personal)}>INTERESTS</button>
        <button className={state.selectedContent === ContentType.Contact ? "navigation-button-selected" : "navigation-button"} onClick={ () => selectedContentWasChanged(ContentType.Contact)}>GET IN TOUCH</button>
        </div>
        <section id="content-section">
          {state.selectedContent === ContentType.Projects && <ProjectSection></ProjectSection>}
          {state.selectedContent === ContentType.Learning && <EducationSection></EducationSection>}
          {state.selectedContent === ContentType.Personal && <InterestsSection></InterestsSection>}
          {state.selectedContent === ContentType.Contact && <ContactSection></ContactSection>}
        </section>
      </main>
      <footer></footer>
    </div>
  )
}

export default App


