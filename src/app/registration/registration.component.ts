import { Component, OnInit } from '@angular/core';
import { Users } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  users:Users[]=[]

  constructor(private UserService: UserService) { }

  submit(n:string,e:string,ph:string,pw:string){
    let u={
      name:n,
      email:e,
      phNo:Number(ph),
      pwd:pw,
      loggedIn:null
    }
    this.users.push(u)
    console.log(this.users[0].name)
  }

  ngOnInit(): void {
    this.UserService.postUserDataAPI(this.users).subscribe(data => console.log(data));
  }

}
