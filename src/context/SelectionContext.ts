import React from "react";
import { Tcomposants } from "../Configurateur/Components/tipage/Tcomposants";

export const selectionsContext = React.createContext<({
    selections: Tcomposants[],
    setSelections: (value: Tcomposants[]) => void;
})>
    ({
        selections: [],
        setSelections: (value: Tcomposants[]) => { }
    });