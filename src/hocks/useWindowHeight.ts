import {useEffect, useState} from "react";




export const useWindowHeight = () => {

    const [height, setHeight] = useState(window.innerHeight);

    const getWindowHeight = () => {
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", getWindowHeight);
        return () => {
            window.removeEventListener("resize", getWindowHeight);
        }
    });

    return height;
}