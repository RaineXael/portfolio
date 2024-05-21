import CLOUDS from 'vanta/dist/vanta.clouds.min'
import React from 'react';

import github from '../../assets/icons/github-fill.svg'
import gitlab from '../../assets/icons/gitlab-fill.svg'
import twitter from '../../assets/icons/twitter-fill.svg'
import feed from '../../assets/icons/rss-fill.svg'

function MainMenuContent() {
    return (
        <Title />
    );
}


function Title() {
    return (
        <div className="bg-indigo-500 w-1/2 rounded-br-full rounded-tr-full select-none px-16 my-64">
            <div className="w-60 w-full">
            <h1 className="text-8xl font-bold text-indigo-50 py-2 w-full text-center w-full">RaineXael</h1>
            <div className='flex flex-row justify-evenly py-4 w-full'>
                <a href="https://github.com/RaineXael">
                    <img className="h-8 w-8 fill-indigo-50" src={github} alt="GitHub" />
                </a>
                <a href="https://gitlab.com/brandon.olynyk">
                    <img className="h-8 w-8 fill-indigo-50" src={gitlab} alt="GitLab" />
                </a>
                <a href="https://x.com/RaineXael">
                    <img className="h-8 w-8 fill-indigo-50" src={twitter} alt="Twitter" />
                </a>
                <a href="">
                    <img className="h-8 w-8 fill-indigo-50" src={feed} alt="Feed" />
                </a>

            </div>
            </div>
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
            skyColor: 0x572878,
            cloudColor: 0xd5adde,
            cloudShadowColor: 0x181b50,
            speed: 0.60
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

