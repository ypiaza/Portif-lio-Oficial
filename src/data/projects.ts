export interface itemProjects {
    project: string,
    link: string,
    img: string,
    description: string
}

export const projects : itemProjects[] = [
    {project: 'Clone Spotify', link:'/', img:'../src/assets/spotify/img1.png', description: 'Feito em React, JavaScript, Tailwind CSS'}
]

export interface itemMoreProjects {
    title: string,
    link: string,
    description: string
}

export const moreProjects : itemMoreProjects[] = [
    {title: 'Mais projetos em desenvolvimento', link: '/', description:'Acesse meu GitHub.'}
]