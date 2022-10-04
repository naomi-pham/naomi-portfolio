import React from "react"
import ArticleData from "../ArticleData"

export default function Articles(props) {
    const ArticleElements = ArticleData.map(article => {
        return <div key={article.id}>
                    <h3 className="text-xl font-semibold leading-loose">
                        {article.title}
                    </h3>
                    <p>
                        {article.desc} 
                    </p>
                    <ul className="flex gap-3 opacity-60">
                        <li>{article.tags[0]}</li>
                        <li>{article.tags[1]}</li>
                        <li>{article.tags[2]}</li>
                    </ul>
                    <div className="mt-1">
                        <a href={article.articleLink} target="_blank"><img src="./src/assets/link-icon.svg" /></a>
                    </div>
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
                Articles
            </h2>
            <div className="flex flex-col gap-8">
                {ArticleElements}
            </div>
        </section>
    )
}