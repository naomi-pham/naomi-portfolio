import React from "react"
import BodySection from "../../components/section/BodySection"
import IconData from "../../data/IconData"
import TitleSection from "../../components/section/SectionTitle";
import ContactWrap from "./ContactWrap";
import ContactItemWrap from "./ContactItemWrap";

export default function Contact() {

    return (
        <section id="contact">
            <BodySection>
                <TitleSection>
                    Contact
                </TitleSection>
                <p>
                    I'm easily reachable at:
                </p>
                <ContactWrap>
                    {IconData.map(icon => (
                        <ContactItemWrap key={icon.id}>
                            <a 
                                className="flex flex-col items-center gap-1"
                                href={`${icon.iconLink}`}
                                target="_blank" 
                            >
                                <i 
                                    className={`text-2xl bx bxl-${icon.iconName} p-1.5
                                            text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500`}>
                                </i>
                                <span 
                                    className="text-base text-zinc-700 dark:text-zinc-200 capitalize">
                                    {icon.name}
                                </span>
                            </a>
                        </ContactItemWrap>
                    ))}
                </ContactWrap>
            </BodySection>
        </section>
    )
}