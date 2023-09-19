import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[]=[];

  constructor(
    private service: GithubFollowersService,
    private route: ActivatedRoute){}

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
    switchMap((combined: any) => {
      let id = combined[0].get('id')
      let page = combined[1].get('page')

      return this.service.getAll()
    })
    )
    .subscribe((followers: any[]) => this.followers = followers)


  }
}
