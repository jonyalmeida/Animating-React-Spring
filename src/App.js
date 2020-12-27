import React, { Component } from "react";
import { useSpring, animated } from "react-spring";

import "./App.css";

export default function App() {
    const fade = useSpring({
        from: {
            opacity: 0,
        },
        opacity: 1,
    });

    console.log(fade);

    return (
        <animated.div className='App' style={fade}>
            <header className='App-header'>
                <button className='menu-button'>Menu</button>
            </header>
        </animated.div>
    );
}
