import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthService {
    private static secret = "your_jwt_secret";

    static async register(username: string, password: string) {
        const userRepository = getRepository(User);
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = userRepository.create({ username, password: hashedPassword });
        await userRepository.save(user);
        return user;
    }

    static async login(username: string, password: string) {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { username } });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const token = jwt.sign({ userId: user.id }, this.secret, { expiresIn: '1h' });
        return { token };
    }
}

export default AuthService;