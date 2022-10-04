import React from "react"
import IconData from "../IconData"

export default function Home(props) {
    const IconElements = IconData.map(icon => {
        return <a
                    href={`${icon.iconLink}`}
                    target="_blank"
                >
                    <li 
                        key={icon.id} 
                        className={`flex flex-col place-items-center p-1.5 h-12 w-12 rounded-full
                                    ${props.darkMode ? "box-shadow-dark" : "box-shadow-white"}`}
                    >
                        <img 
                            className="w-7 h-7 place-self-auto mt-3" 
                            src={`./src/assets/${icon.imageName}-icon.svg`} 
                        />
                    </li>
                </a>
    })
    return (
        <section 
            id="home" 
            className="flex flex-col place-items-center gap-10 lg:px-10 text-center mt-20"
        >
            <div className={`w-44 h-44 mb-5 rounded-full flex place-content-center
                            ${props.darkMode ? "box-shadow-dark" : "box-shadow-white"}`}
            >
                <img 
                    src="./src/assets/avatar-cv.png" 
                    className="w-36 h-36 rounded-full self-center rotate-"
                />
            </div>
            <h1 
                className="text-5xl font-normal">Heya! I'm <span className="font-medium text-teal-500">Naomi</span>
            </h1>
            <p>
                I’m a front-end developer born and raised in Vietnam but currently living in Germany. 
                My coding journey began in early 2022 when I started learning to code with Scrimba. 
                Right now I’m looking for a job to kickstart my front-end career. 
                I’m also working on a side project of React neumorphic templates. 
            </p>
            <ul 
                className="flex place-items-center gap-5"
            >
                {IconElements}  
            </ul>
        </section>
    )
}