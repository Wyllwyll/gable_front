import React, { FC, PropsWithChildren, useState } from "react";
import { Tcomposants } from "../Configurateur/tipage/Tcomposants";
import { TOrders } from "../PanelUser/tipage/TOrders";




interface SelectionContextType {
    selections: { [key: string]: Tcomposants | undefined };
    setSelections: (value: { [key: string]: Tcomposants | undefined }) => void;
    order: TOrders | null;
    setOrder: (value: TOrders | null) => void;
}

interface SelectionProviderProps extends PropsWithChildren<{}> {
    value?: SelectionContextType;
}

export const SelectionContext = React.createContext<SelectionContextType>({
    selections: {},
    setSelections: () => { },
    order: null,
    setOrder: () => { },
});

export const SelectionProvider: FC<SelectionProviderProps> = ({ children, value }) => {
    const [selections, setSelections] = useState<{ [key: string]: Tcomposants | undefined }>(
        value?.selections ?? {}
    );
    const [order, setOrder] = useState<TOrders | null>(null);

    return (
        <SelectionContext.Provider value={{ selections, setSelections, order, setOrder }}>
            {children}
        </SelectionContext.Provider>
    );
};

