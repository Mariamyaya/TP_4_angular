import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


public products:any;
public keyword: string= "";
  constructor(){}
  ngOnInit(): void {
    this.products =[
      {"id":1, "name":"computer","price": 4300},
      {"id":2, "name":"printer","price": 3500},
      {"id":3, "name":"Smartphone","price": 1500},
      {"id":4, "name":"Mouse","price": 100},
   ];
  }

  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1)
    }

    search() {
      let result : any[]= [];
      for (let p of this.products){
        if(p.name.includes(this.keyword)){
          result.push(p);
        }
      }
      this.products=result;
      }
}
