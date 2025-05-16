import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secret-code';

    receberTentativa(tentativa: string[]) {
    console.log('Tentativa recebida do filho:', tentativa);
    // Aqui você pode processar, verificar ou armazenar a tentativa
  
  }
}
