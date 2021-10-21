import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-changing-text',
  templateUrl: './changing-text.component.html',
  styleUrls: ['./changing-text.component.scss'],
})
export class ChangingTextComponent implements OnInit, OnDestroy {
  @Input() strings: string[] = [
    'Game Programming',
    'Game Design',
    'Godot Language',
    'Unity Dev',
    'Salsa Dancer',
    'Blockchain',
    'Project Planner',
    'Multilingual',
    'Learner',
    'Traveler',
  ];

  timerSub: Subscription = new Subscription();
  currStringCount = 0;
  constructor() {}

  ngOnInit(): void {
    this.strings = _.shuffle(this.strings);
    this.timerSub = interval(2500).subscribe((x) => {
      this.setNextStringInList();
    });
  }
  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }

  setNextStringInList() {
    this.currStringCount++;
    if (this.currStringCount === this.strings.length) {
      this.strings = _.shuffle(this.strings);
      this.currStringCount = 0;
    }
  }
}
