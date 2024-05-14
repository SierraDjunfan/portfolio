import './InterestsSection.scss'

export const InterestsSection = () => {

    interface Interest {
        title: string,
        description: string
    }

    const allInterests: Interest[] = [
        {
            title: "LEARNING",
            description: `
            Anything and everything! The world is so interesting and nothing gives me the same satisfaction as understanding new information or learning a new skill.
            One of the reasons I'm so excited to get into the world of development is that there is always something new to learn. Technology moves at such a fast
            rate that I will always be challenged to understand and possibly adopt new and better ways of doing things.`           
        },
        {
            title: "PC GAMING",
            description: `
            One of my favourite things to do in my downtime is to hop on Discord with a group of buddies and play some quality video games.
            I love SO many games but some of my favourites are Dota 2, Portal 2, Helldivers 2, Against the Storm, Dave the Diver, Total War: Warhammer 3 and I
            need to stop there or else I'll be writing all day. I've met some of my closest friends through gaming and I hope that everyone can experience
            at least some of the beautiful and wonderfully designed masterpieces that exist on Steam today.`
        },
        {
            title: "GAME DEVELOPMENT",
            description: `
            My first game development project was a little IOS app called "Scrappy Stories" which was made with Swift and Xcode and only existed on the
            App Store for a short amount of time due to exuberant Apple Developer fees. It was so fulfilling to release the app and see friends and family
            legitimately enjoy it. Since then I've moved on to more meaty projects in Unity and I hope to eventually release a game on Steam.`
        },
        {
            title: "MUSIC PRODUCTION",
            description: `
            As mentioned, I formally studied music at uni, but soon realised that I love to compose and produce music in my on time and on my own terms.
            I produce music in Cubase with a fairly simple setup using a Universal Audio interface, a nice Rode K2 mic and a number of different fun MIDI controllers.
            I focus more on digital production more than instrumentation despite playing a few instruments at a fairly basic level. I have done some commercial projects 
            but most of all, I just like to sit down at my PC on a rainy evening and write for fun. I have released one track on Spotify but the majority of my musical
            endeavours remain hidden away on my PC. Maybe they'll see the light of day sometime! Who knows?`
        },
        {
            title: "HISTORY",
            description: `
            I find learning about the past to be so eye-opening and just plain cool. It's fun to spot all the similarities between ourselves and the past versions of humans
            all throughout history. Humans have achieved some incredible things and I find myself constantly inspired by the genius historical figures who were able to create
            something out of almost nothing. I find the history of recorded sound in particular to be super interesting and I am currently making my way through the World History Project
            which is a free course on Khan Academy.`
        },
        {
            title: "READING",
            description: `
            As a child, I would hide under the covers and read in the dark until my parents caught me. During early adulthood I didn't create
            enough time to read but in the last couple of years I have rekindled my love for reading and I'm so glad that I did! Some of my favourite books are 
            the Stormlight Archives, The Farseer Trilogy and [...The Subtle Art] by Mark Manson.`
        },
        {
            title: "TABLETOP GAMING",
            description: `
            I love to host board game evenings and I'm always looking for new enthusiasts to play through my collection with. 
            Some of my recent favourite tabletop games are Spirit Island, Scythe, Gaia Project and Decrypto.`
        },
        {
            title: "3D PRINTING",
            description: `
            My most recent hobby is 3D printing which I mostly use to 3D design and print everyday tools or utensils that will make my life more organised!
            I would eventually love to learn some electronic circuitry basics so that I can combine these two hobbies to make some fun stuff.`
        },
    ]

    return (
        <section id='interests-container'>
            <div id="about-me">
                <h3>WHO AM I?</h3>
                <p>- I love to create things from scratch</p>
                <p>- While I enjoyed studying Music Technology at university, I decided to focus on music production as a personal hobby only</p>
                <p>- I often wish there were more hours in the day to explore the vast array of new skills or hobbies I'd like to learn or try.</p>
                <p>- Below are a few examples of my interests:</p>
            </div>
        <ul>
            {allInterests.map( item => 
            <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </li>)}
        </ul>

        <h3></h3>
    </section>
    )
}