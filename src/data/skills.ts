export interface itemSkill{
    skill: string,
    icon : React.ElementType
}

import React from "react";
import { FaReact, FaGithub, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiJavascript } from "react-icons/si";

export const skills: itemSkill[] = [
    {
        skill: 'React',
        icon: FaReact
    },{
        skill: 'React',
        icon: FaGithub
    },{
        skill: 'React',
        icon: FaHtml5
    },{
        skill: 'React',
        icon: FaCss3
    },{
        skill: 'React',
        icon: RiTailwindCssFill
    },{
        skill: 'React',
        icon: RiNextjsFill
    },{
        skill: 'React',
        icon: SiTypescript
    },{
        skill: 'React',
        icon: SiJavascript
    },
]