
export function ProjectRoulette(){
    return(
        <div className="h-4/5 w-full flex flex-row space-x-6 > * + *">
            <ProjectBox/>
            <ProjectBox/>
            <ProjectBox/>
            <ProjectBox/>
        </div>
    );
}

function ProjectBox(){
    return(
        <div className="bg-opacity-50 bg-indigo-500 h-4/5 w-64 border-indigo-900 border-4 flex flex-col rounded-lg">
            <h1>Project Name</h1>
            <p>Short Description</p>
        </div>
    );
}
