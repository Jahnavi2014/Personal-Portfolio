import { useEffect, useState } from "react";

interface Props {
  words: string[];
  speed?: number;
  pause?: number;
}

export const Typewriter = ({ words, speed = 100, pause = 1500 }: Props) => {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setWordIdx((wordIdx + 1) % words.length);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return <span className="typing-cursor text-gradient">{text}</span>;
};
