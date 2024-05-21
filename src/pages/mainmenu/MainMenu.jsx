import CLOUDS from 'vanta/dist/vanta.clouds.min'
import React from 'react';

import github from '../../assets/icons/github-fill.svg'
import gitlab from '../../assets/icons/gitlab-fill.svg'
import twitter from '../../assets/icons/twitter-fill.svg'
import feed from '../../assets/icons/rss-fill.svg'

function MainMenuContent() {
    return (
        <div className='overflow-scroll h-dvh'>
            <Title />
            <div className="bg-indigo-50 p-16">

                <h1 className="text-4xl font-bold text-indigo-900 py-2 w-full text-center w-full ">Projects</h1>
                {/* <p>Dolor erat eos sanctus nostrud at stet no. Stet no amet qui duo. Kasd velit iriure sit ipsum stet. At tempor erat feugiat sit illum at erat at dolore vulputate duo ut eos elitr. Erat luptatum et. Nonummy amet facer nibh tation delenit eirmod duo sanctus no sed rebum dolor volutpat suscipit invidunt vel magna. Erat nonumy ut eirmod. Consetetur ipsum dolore amet lorem ex consequat. Et kasd et ullamcorper wisi labore accusam eleifend. Diam takimata dolores amet tation dolore duo dolores. Laoreet amet sit et sit accusam amet aliquyam et sed dolore eros lorem tempor id. Ipsum elit clita sit possim kasd gubergren dolor ut lorem dolore iusto at enim facilisis dolore sed magna dolore. At sit ea dolor lorem consectetuer sanctus delenit justo et diam stet facer dolore augue sed. Et praesent kasd sanctus at dolore sit lobortis et est amet minim ea.</p>
                <p>Sanctus clita consetetur. Blandit kasd wisi lorem sanctus aliquyam consetetur imperdiet no kasd dolores sadipscing est molestie elit vero congue lorem. Blandit eum dolor erat et nonummy facer tempor sit iusto takimata magna sed eirmod minim sed sed accumsan stet. Gubergren magna at tempor duis takimata clita feugiat vulputate duo gubergren lorem ut dolores eum. Amet dolore sanctus no amet gubergren vero eos ipsum. Eirmod est dolore rebum lorem enim consectetuer volutpat. Et erat rebum ex dolore blandit clita dolore illum minim dignissim aliquyam diam rebum ut. Sed et ipsum iusto vel sanctus dolor ut dolore justo sea dolores consetetur elit kasd qui blandit ut. Sea ut amet in nulla accusam augue lorem eu amet vel kasd accumsan laoreet justo voluptua lorem amet. Duis zzril ut facilisis justo dolores. Erat invidunt invidunt dolor et sit sadipscing sadipscing sed sanctus. Stet magna ea. Sit facer ipsum ea.</p>
                <p>Diam et eos dolore et sanctus ipsum tincidunt te et magna odio dolor sadipscing nostrud. Diam sit justo dolor ea stet et ipsum suscipit. Quis at enim at diam. Nonummy sed duo stet dolor nostrud sadipscing diam sea qui invidunt ea sit hendrerit labore elitr consetetur ea rebum. Elitr takimata dolores ipsum eirmod. Takimata sea rebum laoreet. Illum rebum diam amet dolor voluptua delenit sed duo sed et sadipscing eum iriure dolor sit facilisis eu justo. Amet clita elitr clita et quis sit at et ipsum ea. Dolore nulla consequat. Et diam rebum et sed vero. Duis sadipscing ipsum accusam sit odio eos kasd diam amet eos gubergren tempor sanctus. Hendrerit sed ullamcorper velit et molestie eos sea kasd nonumy no ex dolore dolore diam soluta et voluptua. Amet esse eos hendrerit sit nonumy lorem elitr sea erat id. Rebum amet est nonumy invidunt erat.</p>
                <p>Amet vero duo ipsum dolore euismod nonumy elitr et vero clita ut ut lorem kasd autem et iusto ullamcorper. Esse elitr rebum sed sit et consetetur suscipit voluptua elitr sit. Et et nisl hendrerit diam et tation accusam lorem sea eum duo ipsum consetetur clita eu. Feugiat consequat enim eos voluptua labore accusam gubergren sanctus molestie ut esse illum ea diam accumsan nonumy ut stet. Dolor takimata sit labore et aliquam no eum. Gubergren sed clita duis accusam volutpat at liber duo sadipscing.</p>
                <p>Dolor erat eos sanctus nostrud at stet no. Stet no amet qui duo. Kasd velit iriure sit ipsum stet. At tempor erat feugiat sit illum at erat at dolore vulputate duo ut eos elitr. Erat luptatum et. Nonummy amet facer nibh tation delenit eirmod duo sanctus no sed rebum dolor volutpat suscipit invidunt vel magna. Erat nonumy ut eirmod. Consetetur ipsum dolore amet lorem ex consequat. Et kasd et ullamcorper wisi labore accusam eleifend. Diam takimata dolores amet tation dolore duo dolores. Laoreet amet sit et sit accusam amet aliquyam et sed dolore eros lorem tempor id. Ipsum elit clita sit possim kasd gubergren dolor ut lorem dolore iusto at enim facilisis dolore sed magna dolore. At sit ea dolor lorem consectetuer sanctus delenit justo et diam stet facer dolore augue sed. Et praesent kasd sanctus at dolore sit lobortis et est amet minim ea.</p>
            */}<p>This site is still under construction.</p>
            <p>It is in much better shape than last time though.</p>
            </div> 
        </div>
    );
}





function Title() {
    return (
        <div className="border-indigo-900 border-4 bg-indigo-500 w-1/2 rounded-br-full rounded-tr-full select-none px-16 my-96 drop-shadow-md">
            <div className="w-60 w-full py-2">
                <h1 className="text-6xl font-bold text-indigo-50  w-full text-center w-full">RaineXael</h1>
                <div className='flex flex-row justify-evenly py-2 w-full'>
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

