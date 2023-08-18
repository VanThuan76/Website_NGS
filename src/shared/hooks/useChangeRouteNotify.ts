import React from 'react'

type Props = {
    warnMessage : string
}

export default function useChangeRouteNotify({warnMessage }: Props) {
    const warnWhenListener = React.useCallback(
        (e: { preventDefault: () => void; returnValue: string }) => {
            e.preventDefault();

            e.returnValue = warnMessage;

            return e.returnValue;
        },
        [warnMessage],
    );

    React.useEffect(() => {
        if (warnWhen) {
            window.addEventListener("beforeunload", warnWhenListener);
        }

        return () => {
            window.removeEventListener("beforeunload", warnWhenListener);
        };
    }, [warnWhen, warnWhenListener]);
    React.useEffect(() => {
        const routeChangeStart = () => {
            if (warnWhen) {
                const allowTransition = window.confirm(warnMessage);
                if (allowTransition) {
                    setWarnWhen?.(false);
                } else {
                    router.events.emit("routeChangeError");
                    throw "Abort route change due to unsaved changes prompt. Ignore this error.";
                }
            }
        };
        router.events.on("routeChangeStart", routeChangeStart);

        return () => router.events.off("routeChangeStart", routeChangeStart);
    }, [warnWhen, warnMessage, setWarnWhen]);
}