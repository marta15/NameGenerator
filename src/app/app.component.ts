import { Component } from '@angular/core';
import { NameGenerator } from './NameGenerator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numChar: number = 10;
  nameType: string = "";
  results: string[] = [];


  onLengthChange(ev: Event) {
    this.numChar = parseInt((ev.target as HTMLInputElement).value);
  }

  onTypeChange(ev: Event) {
    this.nameType = (ev.target as HTMLInputElement).value;
  }

  onButtonClick() {
    this.results = NameGenerator.generate(this.nameType, this.numChar);
  }

  generateName() {

  }
}
