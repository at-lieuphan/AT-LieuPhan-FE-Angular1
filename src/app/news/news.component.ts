import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('aaaaaaaa');
    this.activatedRoute.queryParamMap.subscribe(p => {
      // console.log(p.params);
      console.log(p);
    })
  }

  backHome() {
    this.route.navigate(['home']);
  }


}
