import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authconfig } from "./auth.config";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("wrong credentials!");
    }
    const passwordsMatch = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!passwordsMatch) {
      throw new Error("wrong credentials!");
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login!");
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authconfig,
  providers: [
    CredentialsProvider({
      authorize: async (credentials) => {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
