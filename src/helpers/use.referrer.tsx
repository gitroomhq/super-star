import {useEffect} from "react";

export const useReferrer = () => {
    useEffect(() => {
        if (typeof window === "undefined" || localStorage.getItem('referrer')) {
            return ;
        }

        if (document.referrer && document.referrer.indexOf('github20k.com') === -1) {
            localStorage.setItem('referrer', document.referrer);
        }
    }, []);

    return () => {
        return localStorage.getItem('referrer');
    }
}