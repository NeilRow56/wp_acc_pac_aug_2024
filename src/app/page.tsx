import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function LandingPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <section className="flex flex-col  items-center justify-center bg-background">
      <Hero />
      {!user ? (
        <div className="space-x-6 ">
          <Button className="bg-blue-600" asChild>
            <LoginLink>Sign in</LoginLink>
          </Button>
          <Button variant="secondary" className=" " asChild>
            <RegisterLink>Create Account</RegisterLink>
          </Button>
        </div>
      ) : (
        <Button className="bg-blue-600" asChild>
          <Link className="text-white" href="/dashboard">
            Dashboard
          </Link>
        </Button>
      )}
      <div className="mx-auto mt-10 flex gap-8 max-w-sm justify-center"></div>
    </section>
  );
}
