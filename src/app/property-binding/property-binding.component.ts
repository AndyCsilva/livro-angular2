import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  verParagrafo: boolean;

  constructor() { }

  ngOnInit() {
  }

  mostrar(): void {
    this.verParagrafo = !this.verParagrafo;
  }

}
