import { Component } from '@angular/core';
import { HttpconsumeService } from 'src/app/httpconsume.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any;
  password: any;
  message:any

constructor(private service:HttpconsumeService){}
doLogin(){
  let resp=this.service.login(this.username,this.password);
  resp.subscribe(data=>{
    console.log(data)
  })
}
}
