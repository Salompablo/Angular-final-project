import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm : string = '';

  constructor(private CartService : CartService) { }

  ngOnInit(): void {
    this.CartService.getProducts()
    .subscribe(res=>{
    this.totalItem = res.length;
    })
  }
  
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.CartService.search.next(this.searchTerm);
  }

}
