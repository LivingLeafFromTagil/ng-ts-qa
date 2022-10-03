import { Component, Input, OnInit } from '@angular/core';
import { qaStructure } from 'src/app/models/qaStructure';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() qa!: qaStructure;
  answerValue = '';
  backgroundColor = '';

  checkAnswer(answers: qaStructure): void {
    console.log(this.answerValue);
    console.log(answers.rightAnswer);
    if (this.answerValue === answers.rightAnswer) {
      this.backgroundColor = 'green';
    }
    else {
      this.backgroundColor = 'red';
    }
  }
}
