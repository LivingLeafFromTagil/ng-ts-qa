import { Component, OnInit } from '@angular/core';
import data from 'src/app/data/qa';
import { qaStructure } from 'src/app/models/qaStructure';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  qaData: qaStructure[] = data;
}
