import github from '../assets/icons/github-fill.svg'
import gitlab from '../assets/icons/gitlab-fill.svg'
import twitter from '../assets/icons/twitter-fill.svg'
//import feed from '../assets/icons/rss-fill.svg'
export function TitleBarBasic() {
    return (
        <div className="m-auto border-indigo-900 border-4 bg-opacity-25 bg-indigo-500 w-3/4 rounded-full select-none py-6 px-8 my-24 drop-shadow-md w">
            <div className="w-60 w-full py-2">
                <h1 className="text-6xl font-bold text-indigo-50 w-full text-center w-full">RaineXael</h1>
                <div className='max-w-md m-auto pt-4 flex flex-row justify-evenly w-full'>
                    <a className="rounded-full border-2 p-2 border-indigo-900 bg-opacity-50 bg-indigo-500" href="https://github.com/RaineXael">
                        <img className="h-12 w-12 color-indigo-50" src={github} alt="GitHub" />
                    </a>
                    <a className="rounded-full border-2 p-2 border-indigo-900 bg-opacity-50 bg-indigo-500" href="https://gitlab.com/brandon.olynyk">
                        <img className="h-12 w-12 fill-indigo-50" src={gitlab} alt="GitLab" />
                    </a>
                    <a className="rounded-full border-2 p-2 border-indigo-900 bg-opacity-50 bg-indigo-500" href="https://x.com/RaineXael">
                        <img className="h-12 w-12 fill-indigo-50" src={twitter} alt="Twitter" />
                    </a>
                    {/* <a className="rounded-full border-2 p-2 border-indigo-900 bg-opacity-50 bg-indigo-500" href="https://raixaiblog.netlify.app/">
                        <img className="h-12 w-12 fill-indigo-50" src={feed} alt="Feed" />
                    </a> */}

                </div>
            </div>
        </div>
    );
}