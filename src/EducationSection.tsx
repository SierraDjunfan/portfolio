export const EducationSection = () => {

    const overview = `
    I initially became interested in programming when I needed better and more customised solutions to my own productivity workflows.
    I began tutoring under Ryan Hayward, a professional, Brisbane-based, full-stack developer/consultant with many years experience. 
    Once I had developed a basic understanding, I continued learning in the form of online courses, collaboration, and, most importantly, developing personal projects.
    I do not have a formal university degree related to development but I am confident that I have the learning skills and the motivation to pick up any new required technologies.
    Below, I have listed a selection of courses which I have completed or books I have read that have continued to educate me over time.
    `

    interface CourseData {
        heading: string,
        instructor: string,
        platform: string,
        year: string,
        description: string
    }

    const allCourseData: CourseData[] = [
        {
            heading: "React: The Complete Guide 2024",
            instructor: "Maximilian Schwarzmüller",
            platform: "Udemy",
            year: "2024",
            description: "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more."
        },
        {
            heading: "Agile Crash Course",
            instructor: "Mauricio Rubio",
            platform: "Udemy",
            year: "2024",
            description: "Agile Project Management Basics, Agile Project Management Essentials plus Agile Certification."
        },
        {
            heading: "Get Git Smart Course",
            instructor: "Ben Tristem",
            platform: "Udemy",
            year: "2021",
            description: "Use Version Control  with GIT, SourceTree & GitHub from Scratch in Unity Video Game Design."
        },
        {
            heading: "Programming Design Patterns for Unity: Write Better Code",
            instructor: "GameDev.tv Team",
            platform: "Udemy",
            year: "2022",
            description: "How to apply programming best practices to your Unity projects, improve your game development skills and solve problems."
        },
        {
            heading: "Math for Video Games",
            instructor: "GameDev.tv Team",
            platform: "Udemy",
            year: "2022",
            description: "Learn Math for Video Game Design & Coding through Solving fun Video Game Problems."
        },
        {
            heading: "Precalculus 1: Basic Notions",
            instructor: "Hania Uscka-Wehlou & Martin Wehlou",
            platform: "Udemy",
            year: "2024",
            description: "A solid preparation for Calculus, with elements of discrete mathematics: logic, sets, functions, relations, and proofs."
        },
        {
            heading: "Fast WPF in C# for Beginners",
            instructor: "Mega Learning",
            platform: "Udemy",
            year: "2023",
            description: "Easily Learn WPF in C# to Design Real Apps , MVVM , SQL in WPF for beginners , XAML & Windows Presentation Foundation."
        },
        {
            heading: "Complete C# Unity Game Developer 2D",
            instructor: "GameDev.tv",
            platform: "Udemy",
            year: "2023",
            description: "Learn Unity in C# & Code Your First Five 2D Video Games for Web, Mac & PC. The Tutorials Cover Tilemap."
        },
    ]

    return (
        <section id="education-section-container">
            <div id="education-overview">
                <h1>OVERVIEW</h1>
                <p>- I began hobbyist programming as a means to create customised solutions to my everyday problems</p>
                <p>- I soon developed a passion for development and decided to pursure it more seriously</p>
                <p>- I began foundational tutoring under Ryan Hayward, a professional, Brisbane-based, full-stack developer/consultant with many years experience.</p>
                <p>- I continued learning in the form of online courses, collaboration, and, most importantly, developing personal projects. </p>
                <p>- Despite lacking tertiary training, I am confident that I have the learning skills to pick up any new technologies. </p>
                <p>- Below, I have listed relevant online courses and books. </p>
            </div>
            <div id="listed-items">
                <h1>ONLINE COURSES</h1>
                <ul>
                    {allCourseData.map(course =>
                        <li>
                            <h2>{course.heading}</h2>
                            <p>Instructor: {course.instructor}</p>
                            <p>Platform: {course.platform}</p>
                            <p>Year: {course.year}</p>
                            <p>Description: {course.description}</p>
                        </li>
                    )}
                </ul>
                <h1>BOOKS</h1>
                <ul>
                    <li>
                        <h2>The Art of Readable Code - Dustin Boswell & Trevor Foucher 2011</h2>
                        <p>I used to live by the words "Good code is less code." This book made me realise that good code is actually code which can be interpreted, expanded and reused easily by both the original programmer and any new collaborators even at the expense of potentially more characters.</p>
                    </li>
                    <li>
                        <h2>Clean Code - Robert C. Martin 2008</h2>
                        <p>Although this is an older book, the core concepts really helped me to make decisions about when to put in extra time up front in order to save time later.</p>
                    </li>
                    <li>
                        <h2>Level Up Your Code with Game Programming Patterns - Wilmer Lin 2021</h2>
                        <p>This book was a great resource for understanding the philosophy behind choosing time-tested design patterns to create code expandability and avoid reinventing the wheel.</p>
                    </li>
                    <li>
                        <h2>Game Programming Patterns - Robert Nystrom 2014</h2>
                        <p>Although the book is centered around game design, I was able to develop knowledge of universally useful design patterns such as Command, Observer, Object Pool etc</p>
                    </li>
                </ul>

            </div>
        </section>
    )
}