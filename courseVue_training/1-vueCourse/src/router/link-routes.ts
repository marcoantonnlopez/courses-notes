interface RouterLink {
    name: string;
    path: string;
    title: string;
}

export const routerLinks: RouterLink[] = [
    { path: '/', name: 'home', title: 'Inicio' },
    { path: '/about', name: 'about', title: 'Nosotros' },
    { path: '/characters', name: 'characters', title: 'Personajes' },
]