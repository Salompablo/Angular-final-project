import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /** BehaviourSubject: observable con el que almaceno y paso el valor suscrito  */

  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  /** Función para almacenar cualquier artículo agregado */

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  
  /** Función para agregar al carrito */

  addtoCart(product : any){
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  /** Función para obtener el precio total */

  getTotalPrice(){
    let wholeTotal = 0;
    this.cartItemList.map((a:any)=>{
      wholeTotal += a.total;
    })
    return wholeTotal;
  }

  /** Función para quitar un producto del carrito */

  removeCartItem(product : any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  /** Función para remover todos los productos del carrito */

  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
