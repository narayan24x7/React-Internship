import { useCallback, useEffect, useRef, useState } from "react";

function useAnalyzeText() {
    const [text, setText] = useState('');
    const [stats, setStats] = useState({
        wordCount: 0,
        charCount: 0,
        longestWord: "",
        typingSpeed: 0,
    });

    const startTimeRef = useRef(null);

    const analyzeText = useCallback((input) => {
        const words = input.trim().split(/\s+/).filter(Boolean);
        const charCount = input.length;
        const wordCount = words.length;

        const longestWord = words.reduce((prev, curr) =>
            curr.length > prev.length ? curr : prev, "");

        const timeSpent = (Date.now() - startTimeRef.current) / 1000 / 60; // minutes
        const typingSpeed = timeSpent > 0 ? Math.round(wordCount / timeSpent) : 0;

        setStats({
            wordCount,
            charCount,
            longestWord,
            typingSpeed
        });
    }, []);

    useEffect(() => {
        if (text.length === 1 && !startTimeRef.current) {
            startTimeRef.current = Date.now();
        }
        analyzeText(text);
    }, [text, analyzeText]);

    return { text, setText, stats };
}

export default useAnalyzeText;
