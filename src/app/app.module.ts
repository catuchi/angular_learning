import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { GreetingsPipePipe } from './pipes/greetings-pipe.pipe';

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, ChildTwoComponent, GreetingsPipePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
