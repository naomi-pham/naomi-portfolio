import React from "react"
import Home from "./components/Home"
import Articles from "./components/Articles"
import Nav from "./components/Nav"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"


export default function App() {

    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    const [visible, setVisible] = React.useState(false)
    const [portfolioVisible, setPortfolioVisible] = React.useState(false)

    return (
        <div 
            className={`w-screen h-screen mx-auto lg:px-44 lg:py-12 py-10 px-10"
                        ${darkMode ? "dark" : "light"}`}
        >
            <div className="container mx-auto">
                {!visible && <Nav 
                                darkMode={darkMode} 
                                toggleDarkMode={toggleDarkMode} 
                />}
                {!visible && <Home darkMode={darkMode} />}
                {visible && <Portfolio />}
                {visible && <Articles />}
                {visible && <Contact />}
            </div>
        </div>
    )
}

// https://codesandbox.io/s/10st98?file=/src/App.jsx

/* 

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <SwiperSlide><Home /></SwiperSlide>
    <SwiperSlide><Portfolio /></SwiperSlide>
    <SwiperSlide><Articles /></SwiperSlide>
    <SwiperSlide><Contact /></SwiperSlide>
</Swiper>

*/