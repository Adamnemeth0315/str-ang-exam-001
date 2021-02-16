import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  phrase: string = '';
  heroList$: Observable<Hero[]> = this.heroService.getAll();
  columnKey: string = '';

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onColumnSelect(key: string) {
    this.columnKey = key;
  }
}

