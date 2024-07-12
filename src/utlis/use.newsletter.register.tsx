import {useCallback} from "react";
import { useFireEvents } from "@/utlis/use.fire.events";
import { useUtmSaver } from "@/utlis/utm.saver";

export const useNewsletterRegister = () => {
    const utmSaver = useUtmSaver();
    const fireEvents = useFireEvents();

    return useCallback(async (email: string) => {
        fireEvents('register-newsletter', {
            ...utmSaver()
        });

        return fetch('/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                ...utmSaver()
            }),
        });
    }, [utmSaver]);
}