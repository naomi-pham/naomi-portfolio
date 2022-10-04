import React from "react"
import IconData from "../IconData"

export default function Icon() {
    const IconElements = IconData.map(icon => {
        return <li key={icon.id} className="social-icon">
                    <a 
                        className="flex flex-col place-items-center gap-2 text-sm" 

                        href={`${icon.iconLink}`}
                        target="_blank"
                    >
                        <span>
                            <img className="w-8 h-8" src={`./src/assets/${icon.imageName}-icon.svg`} />
                        </span>
                        {icon.name}
                    </a>
                </li>
    })

    return (
        <ul className="flex place-items-center gap-8 my-5">
            {IconElements}
        </ul>
    )
}
