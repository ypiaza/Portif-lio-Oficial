import React from "react"
import { MdAdd } from "react-icons/md";
import { IoCopy } from "react-icons/io5";


export interface itemBtn {
    link: string,
    name: string,
    color: string,
    icon: React.ElementType
}

export const btn: itemBtn[] = [
    {
        link: 'https://wa.me/5579998671726',
        name: 'Fale comigo',
        color: '#4D66FF',
        icon: MdAdd
    },{
        link: '/',
        name: 'Meu email',
        color: '#161616',
        icon: IoCopy
    }
]