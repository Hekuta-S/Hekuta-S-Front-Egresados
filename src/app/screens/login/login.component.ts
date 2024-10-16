import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  value: string | undefined;
  password: string = '';
  username: string = '';
   faUser = faUser;
   lockIcon = faLock;

   constructor(private userService: UserService) {}

   registrarUsuario(){
    this.userService.registerUser(this.username, this.password).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente', response);
      },
      (error) => {
        console.error('Error al registrar el usuario', error);
      }
    );
   }

   onSubmit() {
     
   }
}