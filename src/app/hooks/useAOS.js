import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = () => {
    useEffect(() => {
        AOS.init({
            duration: 2500,
            once: false,
        });
    }, []);
};

export default useAOS;