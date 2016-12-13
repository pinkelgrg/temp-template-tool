import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  currentView  = "home";

  propertyMenuClicked () {
    this.currentView = "property";
  }
  homeMenuClicked () {
    this.currentView = "home";
  }
}
