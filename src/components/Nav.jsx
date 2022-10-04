import React from "react"

export default function Nav(props) {
    return (
        <nav className="flex place-content-between">
            <img src="./src/assets/logo-icon.svg" />
            <div className="flex lg:gap-20 gap-8">
                <ul className="flex lg:gap-20 gap-8 text-lg">
                    <li className="font-bold">Home</li>
                    <li >About</li>
                    <li >Portfolio</li>
                    <li >Contact</li>
                </ul>    
                <img className="w-5 h-5 mt-0.5" onClick={props.toggleDarkMode} src={props.darkMode ?           
                    "./src/assets/sun.svg" : 
                    "./src/assets/moon.svg"} 
                />
            </div>
        </nav>
    )
}