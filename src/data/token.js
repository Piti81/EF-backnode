import jwt from 'jsonwebtoken';
import { config as configDotenv } from 'dotenv';

configDotenv();

const secret_key = process.env.JWT_SECRET_KEY || "juyak238976nkl";
console.log(secret_key);

export const generateToken = (userData) => {
  const user = { id: userData.id, email: userData.email };
  const expiration = { expiresIn: '1h' };
  return jwt.sign(user, secret_key, expiration);
};
