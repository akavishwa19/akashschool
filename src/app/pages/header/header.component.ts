import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import {
  NgbDatepickerModule,
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  email: any = '';
  password: any = '';
  name: any = '';
  mobile: any = '';
  @ViewChild('loginmodel', { static: true }) loginmodel: TemplateRef<any>;
  @ViewChild('registermodel', { static: true }) registermodel: TemplateRef<any>;

  baseurl = environment.baseurl + '/user';
  show_login_loader: boolean;
  show_register_loader: boolean;
  userdata: any;
  loggedin: boolean;
  closeResult: string;

  constructor(
    private modal: NgbModal,
    private http: HttpClient,
    private offcanvasService: NgbOffcanvas,
    private router: Router
  ) {
    this.userdata = JSON.parse(localStorage.getItem('user'));

    if (this.userdata == null || this.userdata == undefined) {
      this.loggedin = false;
    } else {
      this.loggedin = true;
    }
  }

  ngOnInit(): void {}

  login() {
    this.modal.dismissAll(this.registermodel);
    this.modal.open(this.loginmodel, {
      size: 'md',
      centered: true,
      animation: true,
    });
  }

  open(content) {
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  loginwithemail(f: NgForm) {
    this.show_login_loader = true;

    if (this.email == '') {
      Swal.fire('Error', 'Enter Email', 'error');
    } else {
      this.show_login_loader = true;
      let data = {
        email: this.email,
        password: this.password,
      };

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          // 'Authorization': 'Bearer ' + this.token
        }),
      };

      this.http.post(this.baseurl + '/login', data, httpOptions).subscribe(
        (res: any) => {
          console.log(res);
          localStorage.setItem('user', JSON.stringify(res));
          this.loggedin = true;
          Swal.close();
          f.reset();
          this.show_login_loader = false;
          this.userdata = JSON.parse(localStorage.getItem('user'));

          this.modal.dismissAll();

          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Logged In Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (err) => {
          console.log(err.error.message);
          this.show_login_loader = false;
          Swal.fire('error', '' + err.error.message, 'error');
        }
      );
    }
  }

  openrigister() {
    this.modal.dismissAll(this.loginmodel);
    this.modal.open(this.registermodel, {
      size: 'md',
      centered: true,
      animation: true,
    });
  }

  forgot() {}

  reload() {}

  registerwithemail(reg: NgForm) {
    this.show_register_loader = true;

    if (this.email == '') {
      Swal.fire('Error', 'Enter Email', 'error');
    } else {
      this.show_register_loader = true;
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        mobile: this.mobile,
      };

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          // 'Authorization': 'Bearer ' + this.token
        }),
      };

      this.http.post(this.baseurl + '/register', data, httpOptions).subscribe(
        (res: any) => {
          console.log(res);
          localStorage.setItem('user', JSON.stringify(res));
          this.loggedin = true;
          Swal.close();
          reg.reset();
          this.show_register_loader = false;
          this.modal.dismissAll();
          this.userdata = JSON.parse(localStorage.getItem('user'));

          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Registered Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (err) => {
          console.log(err.error.message);
          Swal.fire('error', '' + err.error.message, 'error');
        }
      );
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
    this.loggedin = false;
  }

  feepayment() {
    Swal.fire('Coming Soon', 'Feature Coming Soon', 'info');
  }

  dashboard() {
    Swal.fire('Coming Soon', 'Feature Coming Soon', 'info');
    // if (this.userdata.role == 'ADMIN') {
    //   this.router.navigate(['/admin']);
    // } else {
    //   this.router.navigate(['/portal']);
    // }
  }

  orders() {
    if (this.userdata.role == 'ADMIN') {
      this.router.navigate(['/admin/orders']);
    } else {
      this.router.navigate(['/portal/orders']);
    }
  }
}
