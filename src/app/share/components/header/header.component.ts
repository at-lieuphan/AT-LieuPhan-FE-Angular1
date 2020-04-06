import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }
  
  ngOnInit(): void {
  }

  routerNews() {
    this.router.navigate(['/news'], { queryParams: {page:1}});
  }

  logout() {
    this.authService.logOut();
  }
}
