//Routing
import { routing } from "./app.routing";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//Forms
import { FormsModule } from "@angular/forms";

//Componentes de la aplicación. Se deben poner en 'declarations'
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, NavbarComponent],
  imports: [BrowserModule, FormsModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
