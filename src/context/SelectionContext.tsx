import React, { FC, PropsWithChildren, useState } from "react";
import { Tcomposants } from "../Configurateur/tipage/Tcomposants";




interface SelectionContextType {
    selections: { [key: string]: Tcomposants | undefined };
    setSelections: (value: { [key: string]: Tcomposants | undefined }) => void;
}

interface SelectionProviderProps extends PropsWithChildren<{}> {
    value?: SelectionContextType;
}

export const SelectionContext = React.createContext<SelectionContextType>({
    selections: {},
    setSelections: () => { },
});

export const SelectionProvider: FC<SelectionProviderProps> = ({ children, value }) => {
    const [selections, setSelections] = useState<{ [key: string]: Tcomposants | undefined }>(
        value?.selections ?? {}
    );

    return (
        <SelectionContext.Provider value={{ selections, setSelections }}>
            {children}
        </SelectionContext.Provider>
    );
};




/* interface SelectionContextType {
    selections: { [key: string]: Tcomposants | undefined };
    setSelections: (value: { [key: string]: Tcomposants | undefined }) => void;
}

export const SelectionContext = React.createContext<SelectionContextType | null>(null);

export const SelectionProvider: FC<PropsWithChildren> = ({ children }) => {
    const [selections, setSelections] = useState<{ [key: string]: Tcomposants | undefined }>({});
    return (
        <SelectionContext.Provider value={{ selections, setSelections }}>
            {children}
        </SelectionContext.Provider>
    );
}; */