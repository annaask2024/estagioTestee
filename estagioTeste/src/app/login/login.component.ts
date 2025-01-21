import { Component } from '@angular/core'; // Importa o Component decorator
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa as classes necessarias para o uso do FormGroup e FormBuilder

@Component({
  selector: 'app-login', // Define o selector do componente
  templateUrl: './login.component.html', // Define o arquivo HTML do componente
  styleUrls: ['./login.component.css'] // Define o arquivo CSS do componente
})
export class LoginComponent {
  loginForm: FormGroup; // Cria uma instancia do FormGroup para controlar o formulario de login
  statusMessage: { success: boolean, message: string } | null = null; // Cria uma variavel para armazenar o status do formulario

  constructor(private fb: FormBuilder) {
    // Começando o formulario com validações
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Validação de e-mail
      password: ['', [Validators.required, Validators.minLength(6)]]  // Validação de senha
    });
  }

  // Getter para os controles do formulário
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Função chamada no submit do formulário
  onSubmit() {
    if (this.loginForm.valid) {
      // Aqui você simula a autenticação e retorna uma mensagem de sucesso
      this.statusMessage = {
        success: true,
        message: 'Login realizado com sucesso!'
      };
    } else {
      // Se o formulário for inválido, mostra uma mensagem de erro
      this.statusMessage = {
        success: false,
        message: 'Por favor, preencha todos os campos corretamente.'
      };
    }
  }
}
