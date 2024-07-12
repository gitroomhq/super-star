import {usePlausible} from 'next-plausible'
import {useCallback} from "react";

export const useFireEvents = () => {
    const plausible = usePlausible();
    return useCallback((name: string, props?: object) => {
        plausible(name, {props});
    }, []);
}