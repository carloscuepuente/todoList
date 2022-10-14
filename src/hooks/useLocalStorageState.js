import { useState, useEffect } from "react"


export default function useLocalStorageState(key, defaultValue) {
    // reservar en el state las referencias basadas en los valores que hay en localStorage
    // si no hay nada bajo ese key, darle un valor inicial
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
        } catch (error) {
            val = defaultValue
        }
        return val
    });

    // usar useEffect para actualizar localStorage cuando el state cambia
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state),
            [state]);
    })

    return (
        [state, setState]
    )
}
