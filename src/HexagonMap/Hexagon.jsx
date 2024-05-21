//import { defineHex, Grid, rectangle } from 'honeycomb-grid'
import Hexagon from 'react-hexagon'
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
export function HexMap() {
    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
    // // 1. Create a hex class:
    // const Tile = defineHex({ dimensions: 30 })

    // // 2. Create a grid by passing the class and a "traverser" for a rectangular-shaped grid:
    // const grid = new Grid(Tile, rectangle({ width: 10, height: 10 }))

    // // 3. Iterate over the grid to log each hex:
    // console.log(grid);
    // return(grid.map(el=>{return <div key={el.q+el.r} >{JSON.stringify(el)}</div>}));

    return (
        <div className="flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide"
            {...events}
            ref={ref}>
            <div className='row'>
                <Hexagon
                    className='small-hex'
                    style={{ stroke: '#42873f', width: 100 }}
                />
                <Hexagon
                    className='small-hex'
                    style={{ stroke: '#42873f', width: 100 }}
                />
                <Hexagon
                    className='small-hex'
                    style={{ stroke: '#42873f', width: 100 }}
                />
            </div>
        </div>


    );
}