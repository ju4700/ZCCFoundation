import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(data: { name: string; email: string; password: string }) {
    // TODO: Hash password and save user
    const { name, email } = data;
    return { message: 'User registered', data: { name, email } };
  }

  login(data: { email: string; password: string }) {
    // TODO: Validate credentials and issue JWT
    return { message: 'Login successful', email: data.email };
  }
}
