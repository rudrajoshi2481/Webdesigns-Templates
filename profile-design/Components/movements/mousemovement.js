import {useState,useEffect} from "react"

const useMousePos = () => {
    const [mousePos,setMousePos] = useState({x:null,y:null})

    const updatePos = (ev) => {
        setMousePos({x:ev.clientX,y:ev.clientY}); 
    }

    useEffect(() => {
        window.addEventListener("mousemove",updatePos);

        return () => window.removeEventListener("mousemove",updatePos)
    },[])

    return mousePos
}


export default useMousePos;
