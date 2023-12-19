import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../../../../models/article";
import {allArticles} from "../../../../helpers/all-articles";

@Component({
  selector: 'app-selected-article',
  templateUrl: './selected-article.component.html',
  styleUrls: ['./selected-article.component.scss']
})
export class SelectedArticleComponent implements OnInit {
  public article!: Article;

  constructor(private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    const articleName = this.route.snapshot.paramMap.get('name');
    this.article = this.findArticle(articleName || '')
  }

  findArticle(articleName: string) {
    return allArticles.find(article => article.name == articleName)!
  }

  navigateByTag(tag: string) {
    this.router.navigate(['/articles'], {queryParams: {'search': tag}})
  }

}
