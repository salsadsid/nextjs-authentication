import NextAuth from "next-auth";
import { connectToDB } from "@utils/database.js";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@models/user";
import { compare } from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        await connectToDB();

        // check user existance
        const result = await User.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No user Found with Email Please Sign Up...!");
        }

        // compare()
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        console.log(checkPassword);
        // incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }
        console.log(result);
        return result;
      },
    }),
  ],
  secret: "XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session }) {
      console.log(session, "session");
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      session.user.id = sessionUser._id.toString();

      return session;
    },
  },
});

export { handler as GET, handler as POST };
