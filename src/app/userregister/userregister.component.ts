import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import{ UserService} from '../user.service';
import {IUser} from '../iuser';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  user:IUser=
  {
   Id:null,
    Email:null,
    Password:null,
    Name:null,DateOfBirth:null,
    MobileNumber:null,
    City:null,
    State:null,
    Qualification:null,
    YearOfPassing:null};

  constructor(private userservice:UserService,private route: Router) { }
  saveUser(user:IUser){​​​​    
    this.userservice.addUser(this.user).subscribe(()=>
    {​​​​      
      alert("Record Added");     
     this.route.navigate(['/']);   
   }​​​​,error=>{
    alert(error.Message);
   }); 
 }​​​​

  ngOnInit(): void {
  }

}
