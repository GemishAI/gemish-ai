"use client";

import { useAuth } from "@/auth/client/hooks";
import { Button } from "@/components/ui/button";
import { GithubIcon, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const providers = ["github", "google"] as const;
type Provider = (typeof providers)[number];

export default function Login() {
  const { signIn } = useAuth();
  const [loadingProvider, setLoadingProvider] = useState<Provider | null>(null);

  async function handleSocialLogin(provider: Provider) {
    setLoadingProvider(provider);
    try {
      await signIn.social({
        provider,
        callbackURL: "/chat",
        fetchOptions: {
          onError(context) {
            console.log(context);
            toast.error("Authentication failed. Please try again later.");
            setLoadingProvider(null);
          },
        },
      });
    } catch (error) {
      toast.error("Authentication failed. Please try again later.");
      setLoadingProvider(null);
    }
  }

  return (
    <div className="w-full flex flex-col gap-10 items-center justify-center">
      <div className="w-full space-y-7">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-2xl font-medium font-urbanist">
            Gemish
          </Link>
          <p className="text-muted-foreground text-pretty">
            Sign in to your account to get the most out of Gemish AI
          </p>
        </div>
        <div className="space-y-4 flex flex-col">
          <Button
            onClick={() => {
              handleSocialLogin("github");
            }}
            variant="outline"
            disabled={loadingProvider !== null}
            size={"lg"}
          >
            {loadingProvider === "github" ? (
              <Loader2 size={18} className="animate-spin mr-3" />
            ) : (
              <GithubIcon className="mr-3" size={18} />
            )}
            Continue with GitHub
          </Button>

          <Button
            onClick={() => {
              handleSocialLogin("google");
            }}
            variant="outline"
            disabled={loadingProvider !== null}
            size={"lg"}
          >
            {loadingProvider === "google" ? (
              <Loader2 size={18} className="animate-spin mr-3" />
            ) : (
              <div className="mr-3">
                <svg
                  width="18"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </div>
            )}
            Continue with Google
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline hover:text-primary duration-200 transition-all ease-in-out"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline hover:text-primary duration-200 transition-all ease-in-out"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
