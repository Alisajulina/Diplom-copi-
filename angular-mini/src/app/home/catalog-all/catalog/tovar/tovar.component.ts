import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/Service/http.service';

@Component({
  selector: 'app-tovar',
  templateUrl: './tovar.component.html',
  styleUrls: ['./tovar.component.scss']
})
export class TovarComponent implements OnInit {

  id;
  constructor(private activateRoute: ActivatedRoute, private http: HttpService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {

  }

  addIzb() {
    this.http.get('WishList/AddWish?prodid=' + this.id).subscribe(data => {

    });
  }

}
