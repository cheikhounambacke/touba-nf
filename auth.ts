import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import clientPromise from "./libs/mongodb";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise), // Ensure this is correctly set
  session: { strategy: "database" },
  ...authConfig,
});
