import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'; 
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameinput') nameInputRef: ElementRef;
  @ViewChild('amountinput') amountInputRef: ElementRef;
  @Output() ingAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
 
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmoumnt = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmoumnt);
    this.ingAdded.emit(newIngredient);
  }
}
