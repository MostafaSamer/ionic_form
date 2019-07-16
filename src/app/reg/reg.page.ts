import { Component, OnInit } from '@angular/core';
import { Userg } from '../userg'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {

    user = new Userg;
    mess:String;
    reg_form() {
        this.mess = "FirstName: " + this.user.f_name
                  + ", SecondName: " + this.user.s_name
                  + ", Email: " + this.user.email
                  + ", Pass: " + this.user.pass
                  + ", Address: " + this.user.adress
                  + ", Phone: " + this.user.phone;
        alert(this.mess);
    }

  constructor() { }

  ngOnInit() {
  }

}
