import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
<app-header class="fixed top-0 left-0 right-0 w-full z-50" />
<div class="h-[calc(100%-64px)] overflow">
    <router-outlet />
</div>
  `,
  styles: [],
})
export class App {
}
