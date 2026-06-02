import * as React from "react";

/**
 * Reveals `text` one character at a time after `startDelay`, then `speed` ms
 * per character. Returns the revealed substring and whether it has finished.
 */
export function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = React.useState("");
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          if (interval) clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
