import './Header.scss'

export const Header = () => {

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

    return (
        <header>
            <h1>SARA HAYWARD</h1>
            <h2>Front end developer with visual design skills</h2>
            <div id="techs-list">
                {techs.map(t => <span key={t}>{t}</span>)}
            </div>
            <div id="greeting">
                <span className="text-emphasis">{greeting}</span><span id='introduction'>{introduction}</span>
            </div>
        </header>
    )
}