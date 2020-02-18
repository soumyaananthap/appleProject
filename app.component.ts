import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  ngAfterViewInit() {
    let navBar = document.querySelector('.app__main--nav');
    let navButton = document.querySelector('.nav_action_button');

    navButton.addEventListener('click', () => {
      navBar.classList.toggle('open');
      console.log('open');
    });
  }

}
