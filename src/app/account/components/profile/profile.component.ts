import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, private authService: AuthService) { }
  isTyping: boolean = false;
  resultUser: any;

  ngOnInit(): void {
    console.log(this.activeRouter.snapshot.data);
    this.resultUser = this.authService.getAllUser();
    console.log(this.resultUser);
  }

  checkType() {
    this.isTyping = true;
  }
}
