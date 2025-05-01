import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  username: string = '';
  password: string = '';
  confirmpassword: string = '';
  isPasswordMatch: boolean = false;

  public onUsernameInputChanged(e: Event) {
    this.username = (<HTMLInputElement>e.target).value;
  }
  public onPasswordInputChanged(e: Event) {
    this.password = (<HTMLInputElement>e.target).value;
  }
  public onRePasswordInputChanged(e: Event) {
    this.confirmpassword = (<HTMLInputElement>e.target).value;

    this.isPasswordMatch =
      this.password !== this.confirmpassword ? false : true;
  }
}
