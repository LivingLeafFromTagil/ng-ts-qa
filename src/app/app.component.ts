import { Component, OnInit } from '@angular/core';
import { qaStructure } from './models/qaStructure';
import data from './data/qa'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Тестовое задание №2: Q&A';
  qaData: qaStructure[] = data;
  answerValue = '';
  backgroundColor = '';
  wrongColor = '';

  ngOnInit(): void {

  }
  
  
  
}
