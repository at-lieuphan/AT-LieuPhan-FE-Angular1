import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // isLogin: boolean;
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    
  }

  routerNews() {
    this.router.navigate(['/news'], { queryParams: {page:1}});
  }

}
