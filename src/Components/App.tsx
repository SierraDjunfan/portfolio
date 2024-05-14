import './App.scss'
import { useState } from 'react'
import { ProjectSection } from './ProjectsSection'
import { EducationSection } from './EducationSection'
import { InterestsSection } from './InterestsSection'
import { ContactSection } from './ContactSection'
import { NavigationBar } from './NavigationBar'
import { Header } from './Header'
import { Footer } from './Footer'

export enum ContentType {
  Projects,
  Learning,
  Personal,
  Contact
}

interface AppState {
  selectedContent: ContentType
}

function App() {

  const [state, setState] = useState({ selectedContent: ContentType.Projects })

  function selectedContentWasChanged(selectedContent: ContentType) {
    setState({ ...state, selectedContent: selectedContent })
  }

  return (
    <div id="page">
      <Header />
      <main>
        <NavigationBar selectedContent={state.selectedContent} onNavBarButtonPressed={selectedContentWasChanged}></NavigationBar>
        <section id="content-section">
          {state.selectedContent === ContentType.Projects && <ProjectSection />}
          {state.selectedContent === ContentType.Learning && <EducationSection />}
          {state.selectedContent === ContentType.Personal && <InterestsSection />}
          {state.selectedContent === ContentType.Contact && <ContactSection />}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App


