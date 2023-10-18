import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent {

  user: any;

  constructor(private githubSvc: GithubService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetchUser();

  }

  fetchUser() {
    this.githubSvc.getUser().subscribe((userData) => {
      this.user = userData;
      console.log(this.user);
    });
  }

}
