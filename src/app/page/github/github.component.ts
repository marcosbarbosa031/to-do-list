import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  disabled = false;
  repos: Observable<any>;
  searchForm = new FormGroup({
    username: new FormControl('')
  });

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit() {
    console.log();
  }

  submit() {
    if (this.f().username.length) {
      this.repos = this.githubService.getRepositories(this.f().username);
      this.disabled = true;

      this.repos.subscribe(repo => {
        this.disabled = false;
        console.log(repo);
      });
    }
    this.disabled = false;
    console.log('aehoo');
  };

  f() {
    return this.searchForm.value;
  }

}
