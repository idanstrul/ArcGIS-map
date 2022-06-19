import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kapow-Maps-Exam';

  public mapViewCenter = [31.4117, 35.0818]
  public mapViewScale = 1000

  handleChangeScale() {
    console.log('Change Scale!');

  }

  handlePanToIsrael() {
    console.log('Pan To Israel!');

  }

  handleReturnToPrevLocation() {
    console.log('Return To Previous Location!');

  }
}
