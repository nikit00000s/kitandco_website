import {Component} from "@angular/core";

export interface Article {
    content: ArticleContent,
    tags: string[],
    name: string,
    preview?: string;
    main_article?: string
}

export interface ArticleContents {
    [key: string]: any
}

export type ArticleContent = ArticleContents[]
