export interface itemSkill{
    skill: string,
    icon : Element;
}

import { FaReact, FaGithub, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiJavascript } from "react-icons/si";

export const skills: itemSkill[] = [
    {
        skill: 'React',
        icon: <FaReact />;
    }
]