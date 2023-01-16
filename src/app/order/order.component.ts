import { Component, OnInit } from '@angular/core';
import { Product } from '../Modal/product';
import { ProductService } from '../Shared/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private productService:ProductService) { }
products:Product[] =[];
product:Product=new Product();
  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(){
    this.productService.getAllProduct().subscribe((result)=>{
      this.products=result.data.getAllProducts;
     
    })
  }


}
