/* eslint-disable react/prop-types */
import { Projects } from "../Projects";



export function ProjectRoulette(){
    return(
        <div className="">
            {Projects.map(cat=>{
                return (<ProjectCategory name={cat.category} data={cat.data} key={cat.category}/>)
            })}
        </div>
    );
}
//h-4/5 w-full flex flex-row space-x-6 > * + * overflow-x-scroll items-center justify-center justify-items-center
function ProjectCategory({name,data}){
    return(
        <>
        <h1 className="text-2xl font-bold text-indigo-900 py-2 w-full text-center w-full">{name}</h1>
        <div className="flex flex-row space-x-6 > * + * overflow-x-scroll items-center justify-center justify-items-center">
            {data.map(proj =>{
                return(
                    <ProjectBox key={proj.title} name={proj.title} desc={proj.desc} url={proj.urls[0]?.url}/>
                   
                );
            })}
        </div>
        </>  
    );
}

function ProjectBox({name,desc, url}){
    return(
        <a href={url}>
        <div className="drop-shadow-md bg-opacity-75 bg-green-300 h-64 w-64 border-indigo-900 border-4 flex flex-col rounded-lg text-center flex-shrink-0">           
                <h1 className="text-xl font-bold">{name}</h1>
                <p>{desc}</p>           
        </div>
        </a>
    );
}
