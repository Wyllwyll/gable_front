import { Ttypes } from "./Ttype"

export type Tcomposants={
    name: "string",
    description: "string",
    price: number,
    marque: "string",
    chipset: "string",
    socket: "string",
    format_cm: "string",
    slot_nvme: number,
    slot_sata: number,
    ram_number: number,
    ram_frequence: "string",
    ram_capacite: "string",
    format_alim: "string",
    format_boitier: "string",
    ssd_nvme: number,
    ssd_sata: number,
    hdd_sata: number,
    pci: number,
    types: Ttypes,
    
}