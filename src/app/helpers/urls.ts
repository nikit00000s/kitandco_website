import {NavUrl} from "../models/url";

export const primaryUrls: NavUrl[] = [
    {
        icon: 'home',
        view: 'Главная',
        help: 'Главная страница',
        link: '/home'
    },
    {
        icon: 'articles',
        view: 'Статьи',
        help: 'Можно почитать интересные статьи!',
        link: '/articles'
    },
    {
        icon: 'dark_mode',
        view: 'Сказки',
        help: 'Почитай сказку на ночь!',
        link: '/tales'
    },
    {
        icon: 'sports_esports',
        view: 'Игры',
        help: 'Играй и учисть одновременно!',
        link: '/games'
    },
    {
        icon: 'play_circle',
        view: 'Видео',
        help: 'Смотри познавательные видео!',
        link: '/video'
    },
    {
        icon: 'pets',
        view: 'О Kit & Co',
        help: 'Что такое Kit & Co?',
        link: '/about-us'
    }
]