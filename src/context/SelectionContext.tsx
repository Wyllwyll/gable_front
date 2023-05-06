import React, { FC, PropsWithChildren, useState } from "react";
import { Tcomposants } from "../Configurateur/tipage/Tcomposants";
import { TOrders } from "../PanelUser/tipage/TOrders";



//définit les types pour les objets selections et order, ainsi que les fonctions setSelections et setOrder qui modifient ces objets.
interface SelectionContextType {
    selections: { [key: string]: Tcomposants | undefined };
    setSelections: (value: { [key: string]: Tcomposants | undefined }) => void;
    order: TOrders | null;
    setOrder: (value: TOrders | null) => void;
}
// ajoute une propriété value qui peut être utilisée pour définir des valeurs initiales pour le contexte.
interface SelectionProviderProps extends PropsWithChildren<{}> {
    value?: SelectionContextType;
}

export const SelectionContext = React.createContext<SelectionContextType>({
    selections: {},
    setSelections: () => { },
    order: null,
    setOrder: () => { },
});
// fournit les valeurs de selections et order à partir de l'objet value fourni ou d'un objet vide s'il n'est pas fourni. Il renvoie également le Provider du contexte avec les valeurs fournies.
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

