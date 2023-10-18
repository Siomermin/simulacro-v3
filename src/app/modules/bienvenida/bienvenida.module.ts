import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienvenidaRoutingModule } from './bienvenida-routing.module';

import { BienvenidaComponent } from './pages/bienvenida.component';
import { GithubService } from './services/github.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BienvenidaComponent],
  imports: [CommonModule, BienvenidaRoutingModule, HttpClientModule],
  providers: [GithubService],
})
export class BienvenidaModule {}
