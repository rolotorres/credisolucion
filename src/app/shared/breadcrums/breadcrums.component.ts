import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { filter } from 'rxjs/operators'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  label: string = '';

  constructor(private router: Router, public title: Title, public meta: Meta) {
    this.getDataRoute().subscribe(data => {

      this.label = data.titulo;
      this.title.setTitle(this.label);

      let metaTag: MetaDefinition = {
        name: 'description',
        content: this.label
      };

      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events
      .pipe(filter(evento => evento instanceof ActivationEnd))
      .pipe(filter((evento: ActivationEnd) => evento.snapshot.firstChild === null))
      .pipe(map((evento: ActivationEnd) => evento.snapshot.data));
  }

}
