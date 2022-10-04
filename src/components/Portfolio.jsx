import React from "react"
import ProjectData from "../ProjectData"

export default function Portfolio(props) {
    const ProjectElements = ProjectData.map(project => {
        return <div key={project.id}>
                    <h3 className="text-xl font-semibold leading-loose flex gap-3">
                        {project.title}
                        <span className="flex gap-1.5">
                            <a href={project.githubLink}><img src="./src/assets/github-icon.svg" /></a>
                            <a href={project.demoLink}><img src="./src/assets/link-icon.svg" /></a>
                        </span>
                    </h3>
                    <p className="">
                        {project.desc} 
                    </p>
                    <ul className="flex gap-3 opacity-60">
                        <li>{project.tags[0]}</li>
                        <li>{project.tags[1]}</li>
                        <li>{project.tags[2]}</li>
                    </ul>
                </div>
    })
    return (
        <section className="mb-12">
            <h2 className="text-3xl font-semibold leading-loose mb-3 flex gap-1 place-items-center">
                <span>           
                    <img 
                        src={props.darkMode ? 
                        "./src/assets/section-title-icon-dark.svg" : "./src/assets/section-title-icon-light.svg"}
                     />
                </span>
                Projects
            </h2>
            <div className="flex flex-col gap-5">
                {ProjectElements}
            </div>
        </section>
    )
}