import './ProjectsSection.scss'
import minsweeperImage from '../Assets/minesweeper.jpg'
import teamPickerImage from '../Assets/teamPicker.jpg'
import indecisionImage from '../Assets/indecision.jpg'
import tabletopImage from '../Assets/tabletop.jpg'
import gameDev from '../Assets/gameDev.jpg'

interface ProjectDescription {
    goal: string,
    learning: string[],
    outcome: string[]
}

export const ProjectSection = () => {

    const newThingDescription =
        `
    My client requested a simple and minimalist landing page for their design business.
    This project gave me valuable experience with agile development and productive client communication.
    The website displays responsive design and reactive CSS which provides important feedback to the user.
    `

    const minesweeperDescription: ProjectDescription = {
        goal: "Create a nice looking, unique React project with heavy user interaction for educational purposes",
        learning: [
            "- I discovered the surprising challenge of managing timers within a React environment.",
            "- I learned the benefits of carefully planning UI to improve user experience.",
            "- I actually required recursion for the first time."
        ],
        outcome: [
            "- I've received good feedback from users competing for high scores.",
            "- If I were to redo the project, I would revise the code to improve readability, specifically by reducing the number of ternary operators used.",
            "- The website is currently not mobile friendly. I am looking to add this in the near future but I have learned the importance of 'responsive as you go'"
        ]
    }

    const teamGeneratorDescription: ProjectDescription = {
        goal: "Create an application for my friends and I to use to create random teams when playing online multiplayer games",
        learning: [
            "- I learned about the pros and cons (as well as the security) of local storage.",
            "- After spending many hours staring at my project while working on it, I realised how useful it is to implement a dark-mode.",
            "- For ease of use, I have started working on a Discord bot version of the application using the Discord API.",
        ],
        outcome: [
            "- The project has been a success and my friend group has adopted this application as our official team shuffler.",
            "- If I were to redo this project, I would focus on making the website responsive so that the mobile experience is improved."
        ]
    }

    const indecisionDescription: ProjectDescription = {
        goal: "Solve the problem of slow and inefficient decision making in a social group context.",
        learning: [
            "- I discovered how the scope of a project can seem small up front, but easily get out of hand once extra features are required.",
            "- I am unhappy with the responsiveness of the website design and am currently implementing a more mobile friendly design."
        ],
        outcome: [
            "- I think that the app is a fun and productive way of making group decisions.",
            "- After using the application, I realise the need for grouped options and would ideally like to save data on an external server rather than locally."
        ]
    }

    const modsDescription: ProjectDescription = {
        goal: "Create a collection of useful tools for the public to use while developing Tabletop Simulator mods.",
        learning: [
            "- I enjoyed the challenge of working in a 3D environment rather than my standard 2D web environments.",
            "- I gained experience working with a new language (Lua) and some external APIS (Tabletop Simulator, Unity, etc)"
        ],
        outcome: [
            "- I personally use the tools very often so I can vouch for the success of their functionality.",
            "- I have only recently published the mods publicly so I am excited to receive feedback or help the community with updates where possible."
        ]
    }

    const unityDescription: ProjectDescription = {
        goal: "Create a 2D multiplayer shooter game using Unity and Photon.",
        learning: [
            "- Being my first major collaborative project, I learned the importance of good version control and clean, sharable code.",
            "- I gained experience using C# as well as client/server interaction in a multiplayer game context.",
            "- The complexity of video game development inspired me to take more time to learn design patterns."
        ],
        outcome: [
            "- The game is still in progress so I am unable to reveal too much at this point!",
        ]
    }

    const projects = [
        // {projectName: "DESIGNER LANDING PAGE >>", projectLink: "www.google.com", codeLink: "www.google.com", description: newThingDescription, image: designAgencyImage},
        { projectName: "MINESWEEPER CLONE >>", projectLink: "https://sierradjunfan.github.io/boomsweeper/", codeLink: "https://github.com/SierraDjunfan/boomsweeper", description: minesweeperDescription, image: minsweeperImage },
        { projectName: "TEAM GENERATOR >>", projectLink: "https://sierradjunfan.github.io/team-generator/", codeLink: "https://github.com/SierraDjunfan/team-generator", description: teamGeneratorDescription, image: teamPickerImage },
        { projectName: "INDECISION >>", projectLink: "https://sierradjunfan.github.io/Indecision/", codeLink: "https://github.com/SierraDjunfan/Indecision", description: indecisionDescription, image: indecisionImage },
        { projectName: "TABLETOP SIMULATOR MODS >>", projectLink: "https://steamcommunity.com/sharedfiles/filedetails/?id=3245607903", codeLink: "https://github.com/SierraDjunfan/tabletop-simulator-mods", description: modsDescription, image: tabletopImage },
        { projectName: "UNITY GAME DEVELOPMENT >>", projectLink: "https://sierradjunfan.github.io/hungry-fellas-website/", codeLink: "www.google.com", description: unityDescription, image: gameDev }
    ]

    return (
        <div id="projects-container">
            {projects.map(p => <div key={p.projectName} className='project-image-container'>
                <a target="_blank" href={p.projectLink} className="project-image-link">
                    <img src={p.image} alt={p.projectName} />
                    <div className="project-image-overlay">
                        <span className="overlay-text">VIEW PROJECT</span>
                    </div>
                </a>
                <div className="project-text">
                    <div className="project-title-container">
                        {p.projectName !== "UNITY GAME DEVELOPMENT >>" && <a target="_blank" href={p.codeLink} className={"view-code-button"}>CODE</a>}
                        <a target="_blank" className='project-name' href={p.projectLink}>{p.projectName}</a>
                    </div>
                    <div className='project-description'>
                        <div>
                            <p>GOAL - {p.description.goal}</p>
                        </div>
                        <div>
                            <h4>MY EXPERIENCE</h4>
                            {p.description.learning.map(point => <p key={point}>{point}</p>)}
                        </div>
                        <div>
                            <h4>OUTCOME</h4>
                            {p.description.outcome.map(point => <p key={point}>{point}</p>)}
                        </div>
                    </div>
                </div></div>)}
        </div>
    )
}