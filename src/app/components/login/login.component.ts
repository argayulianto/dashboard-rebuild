import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uVal
  pVal
  user = "";
  pass = "";
  loginData;
  valid;
  data;
  validate_role: Boolean = false;
  error_message: String = '';
  loading_and_disabled: Boolean = false;
  ipadd

  constructor(private _routes: Router, private _service: ServicesService) { }

  ngOnInit() {
  }

  getIpAdd(){
    this._service.getData('get_ip').subscribe(
      res => {
        this.ipadd = res.ip;
        
      }
    );
  }

  onSubmit() {
    this.loginData = {
      "app": "muf-dashboard-login",
      "method": "login",
      "data": {
        "uid": this.user,
        "pwd": this.pass,
        "ip": this.ipadd,
        "app": "MDSB"
      }
    };
    console.log(this.loginData)
    this.getLog("post", this.loginData)
  }

  getLog(types, loginData) {
    this.loading_and_disabled = true;
    this.error_message = '';
    this.validate_role = false;
    this._service.postLogin(types, loginData).subscribe(result => {
      this.data = result["result"];
      console.log(result)
      if (this.data['status'] == true) {
        this.validateRole(result['result'].data.resultUserProfileMenu);
      }
      else {
        this.valid = "notValid"
        this.error_message = result['result'].message;
        this.loading_and_disabled = false;
      }
    });
  }

  validateRole(role: any) {
    if(role.length > 0){
      this.validate_role = true;
    }
    if (this.validate_role === true) {
      this._routes.navigate(['/landing']);
      this.valid = "";
      localStorage.setItem('currentUser', JSON.stringify(this.data));
    } else {
      this.error_message = 'User tidak memiliki role'; 
    }
    this.loading_and_disabled = false;
  }

}
