import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/Service/http.service';

@Component({
  selector: 'app-catalog-all',
  templateUrl: './catalog-all.component.html',
  styleUrls: ['./catalog-all.component.scss']
})
export class CatalogAllComponent implements OnInit {

  Catalog;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.GetCatalog();
  }


  GetCatalog() {
    this.http.get('Product/GetList').subscribe(data => {
      this.Catalog = data;
      console.log(data);
    });
  }
}
