import { ContentType } from './App'
import './NavigationBar.scss'

export interface NavigationBarProps {
    selectedContent: ContentType
    onNavBarButtonPressed: (contentType: ContentType) => void
}

export const NavigationBar = (props: NavigationBarProps) => {


    return (<div className="tabbed-navigation-bar">
        <button className={props.selectedContent === ContentType.Projects ? "navigation-button-selected" : "navigation-button"} onClick={() => props.onNavBarButtonPressed(ContentType.Projects)}>PROJECTS</button>
        <button className={props.selectedContent === ContentType.Learning ? "navigation-button-selected" : "navigation-button"} onClick={() => props.onNavBarButtonPressed(ContentType.Learning)}>EDUCATION</button>
        <button className={props.selectedContent === ContentType.Personal ? "navigation-button-selected" : "navigation-button"} onClick={() => props.onNavBarButtonPressed(ContentType.Personal)}>INTERESTS</button>
        <button className={props.selectedContent === ContentType.Contact ? "navigation-button-selected" : "navigation-button"} onClick={() => props.onNavBarButtonPressed(ContentType.Contact)}>CONTACT</button>
    </div>
    )
}