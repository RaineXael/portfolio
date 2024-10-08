import CLOUDS from 'vanta/dist/vanta.clouds.min'
import React from 'react';
//import kaizo from '../../assets/kaizo.mp3'
//import { ProjectRoulette } from '../../Components/ProjectRoulette';
//import { TitleBar } from '../../Components/TitleBar';
// import { DescriptionBar } from '../../Components/DescriptionBar';
import {TitleBarBasic} from '../../Components/TitleBarBasic'
function MainMenuContent() {
    return (
        <div className='text-center h-screen'>
            {/* <audio autoPlay="true" loop="true">
            <source src={kaizo} type="audio/mpeg"/>
            </audio>  */}
            <TitleBarBasic/>
            {/* <TitleBar/> */}
            {/* <DescriptionBar/> */}
            {/* <div className="bg-opacity-25 bg-indigo-500 h-auto border-indigo-900 drop-shadow-md border-4 border-x-0 p-8 my-16">
                <h1 className="text-4xl font-bold text-indigo-900 py-4 w-full text-center w-full">Projects</h1>
                <ProjectRoulette/>
            </div> */}
        </div>
    );
}

export function MainMenu() {
    return (
        <Background />
    );
}

class Background extends React.Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        CLOUDS({
            el: this.vantaRef.current,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            skyColor: 0xa557dc,
            cloudColor: 0x8a75cf,
            cloudShadowColor: 0x8906ff,
            sunColor: 0xd7ba38,
            sunGlareColor: 0x7041e3,
            sunlightColor: 0xdbaae6,
            speed: 1
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return <div ref={this.vantaRef} className='background'>
            <MainMenuContent />
        </div>
    }
}

