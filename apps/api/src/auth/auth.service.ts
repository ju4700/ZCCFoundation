import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async register(data: { name: string; email: string; password: string }) {
    // TODO: Hash password and save user
    const { password: _password, ...safeData } = data;
    return { message: 'User registered', data: safeData };
  }

  async login(data: { email: string; password: string }) {
    // TODO: Validate credentials and issue JWT
    return { message: 'Login successful', email: data.email };
  }
}
