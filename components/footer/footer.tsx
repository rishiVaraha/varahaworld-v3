"use client";
import { useState } from "react";

import { ReactComponent as ArrowForward } from "@/public/icons/arrow-forward.svg";
import { ReactComponent as Logo } from "@/public/icons/logo.svg";
import { SuccessToast, ErrorToast } from "@/components/custom/toast";
import { BASE_URL } from "@/constant/site";

import AnimatedButton from "@/components/custom/animated-button";
import Loader from "@/components/custom/loader";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const pathnames = usePathname();

  const handleSubscribe = () => {
    const formData = new FormData();

    if (!email) {
      ErrorToast({
        errorMessage: "Email is required",
        descMessage: "Please enter your email address",
      });
      return;
    }

    setIsLoading(true);
    formData.append("data", JSON.stringify({ email: email }));

    fetch(`${BASE_URL}/mailinglist`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          SuccessToast({
            successMessage: "Subscribed successfully",
            descMessage: "Thank you for subscribing to our newsletter",
          });
        } else {
          ErrorToast({
            errorMessage: "Failed to subscribe",
            descMessage: "Please try again later",
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <footer
      className={cn(
        "sticky -bottom-full z-10 mt-4 md:mt-6 lg:-bottom-1/2 lg:mt-12",
        pathnames?.includes("contact") && window.innerWidth < 1024
          ? "hidden"
          : "block"
      )}
    >
      {/* Blue Section */}
      <div className="overflow-hidden pb-14 shadow-2xl shadow-muted drop-shadow-lg">
        <div className="relative flex h-full flex-col items-center justify-between gap-4 px-4">
          {/* Header Text */}
          <div className="flex max-w-fit flex-col items-center justify-center gap-6 pb-5 pt-10 text-center text-[24px] md:text-[35px] lg:text-[45px]">
            <h1 className="font-playfairitalic  text-foreground/80">
              Participate in this monumental mission by{" "}
              <br className="hidden md:block" />
              <span className="font-bold font-playfair text-foreground">
                {" "}
                Joining, Collaborating, Partnering,
              </span>{" "}
              <br className="hidden md:block" /> or simply cheering us on!
            </h1>

            <Link href="/contact">
              <AnimatedButton
                className="flex h-10 w-[200px] items-center justify-center rounded-lg px-4 text-sm uppercase text-primary-foreground lg:h-12 lg:w-[260px]"
                // onClick={scrollToTop}
              >
                Become a Partner
                <ArrowForward />
              </AnimatedButton>
            </Link>
          </div>

          {/* blur div */}
          <div className="absolute -bottom-20 left-1/3 flex size-52 gap-4 rounded-full bg-gradient-to-t from-[#4170DB] to-[#aae1fd63]  blur-[70px]" />

          <div className="absolute -bottom-14 right-1/3 size-40 transform rounded-full bg-gradient-radial from-orange-400 blur-[70px]" />
        </div>
      </div>

      {/* white section  */}
      <div className="relative flex h-full flex-wrap items-center justify-between gap-8 rounded-b-3xl bg-foreground px-4 py-10 text-background sm:px-8  lg:flex-nowrap lg:rounded-b-[64px] xl:gap-20 xl:px-24 2xl:gap-52">
        {/* Other Section */}
        <div className="flex w-full flex-wrap justify-between gap-10 xl:flex-1">
          {/* Explore */}
          <div className="flex flex-col gap-2 uppercase md:gap-4">
            <h1 className="text-sm font-bold md:text-base lg:text-xl">
              Explore
            </h1>
            <div className="flex flex-col gap-3 child:text-sm">
              <a href="#">Home</a>
              <a href="#">About us</a>
              <a href="#">Services</a>
              <a href="#">Gallery</a>
              <a href="#">Blog/News</a>
            </div>
          </div>

          {/* Follow us */}
          <div className="flex flex-col gap-2 uppercase md:gap-4">
            <h1 className="text-sm font-bold md:text-base lg:text-xl">
              Follow us
            </h1>
            <div className="flex flex-col gap-3 child:text-sm">
              <Link
                href="https://www.facebook.com/varahatechlabs/"
                target="_blank"
              >
                Facebook
              </Link>
              <a
                href="https://www.instagram.com/varahaheritage/"
                target="_blank"
              >
                Instagram
              </a>
              <a href="https://x.com/varahatechlabs" target="_blank">
                Twitter
              </a>
              <a
                href="https://in.linkedin.com/company/varaha-heritage"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Get in touch */}
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="text-sm font-bold uppercase md:text-base lg:text-xl">
              Get in touch
            </h1>
            <div className="flex flex-col gap-3 child:text-sm">
              <a href="tel:+91 9354189701">+91 9354189701</a>
              <a href="mailto:info@varahaworld.com:">info@varahaworld.com</a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex w-full flex-col gap-4 rounded-b-xl border border-muted bg-background p-3 text-foreground md:p-8 lg:w-[500px] lg:rounded-none 2xl:w-[600px]">
          <div className="w-full space-y-3 md:w-[400px] lg:w-[350px]">
            <h1 className="text-base font-bold uppercase lg:text-xl">
              Newsletter
            </h1>
            <p className="text-sm md:text-base">
              Subscribe to recieve inspiring ideas, project updates, and
              everyday experiments.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:space-x-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address here"
              className="h-9 flex-[1.5] rounded-lg border-b border-primary bg-background text-sm text-foreground sm:h-11 md:text-base"
            />

            {/* on hover border animation to right */}

            <AnimatedButton
              className="h-9 w-36 sm:h-11 lg:w-[130px] xl:w-[176px]"
              onClick={handleSubscribe}
            >
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  Subscribe
                  <ArrowForward className="text-primary-foreground" />
                </>
              )}
            </AnimatedButton>
          </div>
        </div>

        {/* Back to top button */}
        <button
          className="group absolute bottom-10 left-5 hidden size-12 -rotate-90 items-center justify-center overflow-hidden rounded-full border border-background bg-primary text-background xl:flex"
          //   onClick={scrollToTop}
          title="Back to top"
        >
          <ArrowForward
            className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-8
          "
          />
          <ArrowForward className="absolute -translate-x-12 transform transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
        </button>
      </div>
      <div className="ml-4 mr-8 flex flex-col-reverse justify-between gap-4 py-4 md:mr-24 lg:flex-row">
        <Logo className="size-20 lg:size-32" />
        <div className="flex h-full w-full justify-between gap-4 child:font-normal lg:w-[600px] lg:child:font-bold">
          <p className="text-xs md:text-sm">
            Copyright ©{new Date().getFullYear()} All Right Reserved
          </p>
          <a href="#" className="text-xs md:text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-xs md:text-sm">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
