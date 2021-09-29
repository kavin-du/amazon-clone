import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.api.getJson().subscribe(resp => {
      // console.log('resp ', resp);
      this.items = resp;
      
    })
  }

  
}
