import React from "react"

export default function Contact(props) {

    return (
        <section className="mb-12">
            <h2 className="text-3xl font-semibold leading-loose flex gap-1 mb-3 place-items-center">
                <span>           
                    <img 
                        src={props.darkMode ? 
                        "./src/assets/section-title-icon-dark.svg" : "./src/assets/section-title-icon-light.svg"}
                     />
                </span>
                Contact
            </h2>
            <p>I'm easily reachable at:</p>
        </section>
    )
}