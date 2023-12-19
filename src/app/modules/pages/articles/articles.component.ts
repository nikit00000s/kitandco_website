import {Component, OnInit} from '@angular/core';
import {Article} from "../../../models/article";
import {allArticles} from "../../../helpers/all-articles";
import {FormControl} from "@angular/forms";
import {BehaviorSubject, combineLatest, map, Observable, startWith} from "rxjs";
import {PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public articles: Article[] = allArticles;
  public articleFinderControl!: FormControl;
  public filteredOptions!: Observable<string[]>;
  public filteredArticles!: Observable<Article[]>;
  public paginatorEvents = new BehaviorSubject<PageEvent>({pageIndex: 0, pageSize: 5, length: 1});

  constructor(private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
    const searchBy = this.route.snapshot.queryParams['search'];
    this.articleFinderControl = new FormControl(searchBy || '')

    this.filteredOptions = this.articleFinderControl.valueChanges.pipe(
        startWith(searchBy || ''),
        map(value => this._filter(value || '')),
    );
    // this.filteredArticles = this.filteredOptions.pipe(
    //     map(x => this.getFilteredArticles(x))
    // )
    this.filteredArticles = combineLatest([this.filteredOptions, this.paginatorEvents]).pipe(
        map(([value, pagEv]) => this.getFilteredArticlesPaginated(value, pagEv.pageIndex, pagEv.pageSize))
    )

  }

  private getFilteredArticlesPaginated(filteredOptions: string[], pageIndex: number, pageSize: number) {
    let filteredArticles = this.getFilteredArticles(filteredOptions);
    return filteredArticles.slice(pageSize * pageIndex, (pageIndex + 1) * pageSize)
  }


  getFilteredArticles(filteredOptions: string[]) {
    return this.articles.filter(article => filteredOptions.includes(article.name))
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const regex = new RegExp(value, "i");

    let articles = [];
    for (const article of this.articles) {
      if (regex.test(article.name) || article.tags.some(tag => regex.test(tag)))
        articles.push(article)
    }
    // return this.articles.filter(article => article.tags.some(tag => tag.includes(filterValue))).map(article => article.name);
    return articles.map(article => article.name);
  }


  handlePageEvent($event: PageEvent) {
    this.paginatorEvents.next($event)
  }


}
