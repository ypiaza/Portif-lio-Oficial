export interface itemProjects {
    id: number,
    project: string,
    link: string,
    img: string,
    description: string
}

export const projects : itemProjects[] = [
    {id: 1, project: 'Clone Spotify', link:'/', img:'../src/assets/spotify/img1.png', description: 'Feito em React, JavaScript, Tailwind CSS'},
    {id: 2, project: 'To Do List', link:'https://ypiaza.github.io/To-Do-List/', img:'../src/assets/ToDoList/img2.png', description: 'Feito puramente em Html, CSS e javascript'},
    {id: 3, project: 'Clone Spotify', link:'/', img:'../src/assets/spotify/img1.png', description: 'Feito em React, JavaScript, Tailwind CSS'},
]

export interface itemMoreProjects {
    title: string,
    link: string,
    description: string
}

export const moreProjects : itemMoreProjects[] = [
    {title: 'Mais projetos em desenvolvimento', link: '/', description:'Acesse meu GitHub.'}
]