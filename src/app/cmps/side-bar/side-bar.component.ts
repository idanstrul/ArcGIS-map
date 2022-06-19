import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  @Output() onPanToIsrael = new EventEmitter<void>()
  @Output() onChangeScale = new EventEmitter<void>()
  @Output() onReturnToPrevLocation = new EventEmitter<void>()

  ngOnInit(): void {
  }

}
