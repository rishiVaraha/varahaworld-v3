"use client";

import AnimatedButton from "@/components/custom/animated-button";
import Wrapper from "@/components/wrapper";
import { ReactComponent as ArrowForward } from "@/public/icons/arrow-forward.svg";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

export function ContactForm() {
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    purpose: "Partnership",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const checkFormValidity = (e: Event) => {
    const form = e.currentTarget as HTMLFormElement;
    setIsFormValid(form.checkValidity());
  };

  useEffect(() => {
    const form = formRef.current;
    if (form) {
      form.addEventListener("input", checkFormValidity);
      form.addEventListener("change", handleChange);
      return () => {
        form.removeEventListener("input", checkFormValidity);
        form.removeEventListener("change", handleChange);
      };
    }
  }, []);

  console.log(formData);
  return (
    <div className="bg-background relative z-10 lg:min-h-screen">
      <Wrapper className="my-4 flex min-h-screen flex-col gap-4 sm:my-8 lg:my-12 lg:min-h-0 lg:gap-10">
        <div>
          <h1 className="font-playfair text-sm md:text-base lg:text-xl">
            Send a Message
          </h1>

          {/* border */}
          <div className="h-px w-full bg-foreground/50" />
        </div>
        <div className="flex flex-col justify-between gap-4 sm:gap-5 md:gap-10 lg:flex-row lg:gap-[150px] xl:gap-[180px]">
          <div className="flex-[1] xl:flex-[.85]">
            <h1 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[56px]">
              Please fill in this form and we&apos;ll get back to you as soon as
              we can.
            </h1>
          </div>

          {/* form using grid method */}
          <form
            ref={formRef}
            id="form"
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 grid flex-[1.5] grid-cols-1 gap-4 font-playfair md:gap-8 lg:mt-8"
          >
            <div className="grid gap-4 md:gap-6 xl:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                className="block w-full border border-gray-300 bg-transparent p-2.5 text-sm text-primary focus:border-blue-600 focus:outline-none md:p-3"
                required
              />
              <input
                name="mobile"
                type="tel"
                placeholder="Mobile Number*"
                className="block w-full border border-gray-300 bg-transparent p-2.5 text-sm text-primary focus:border-blue-600 focus:outline-none md:p-3"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="E-mail*"
                className="block w-full border border-gray-300 bg-transparent p-2.5 text-sm text-primary focus:border-blue-600 focus:outline-none md:p-3"
                required
              />
              <input
                name="company"
                type="text"
                placeholder="Company/Organization"
                className="block w-full border border-gray-300 bg-transparent p-2.5 text-sm text-primary focus:border-blue-600 focus:outline-none md:p-3"
              />
            </div>
            {/* Radio Purpose of contact */}
            <div className="grid w-fit gap-3 md:gap-4">
              <label>Purpose of Contact</label>
              <div className="grid w-fit grid-cols-1 gap-4 child:text-sm md:grid-flow-col md:child:text-base lg:gap-8">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="purpose"
                    id="Partnership"
                    value="Partnership"
                    defaultChecked
                    className="size-4 bg-transparent"
                  />
                  <label htmlFor="Partnership">Partnership</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="purpose"
                    id="Collaboration"
                    value="Collaboration"
                    className="size-4 bg-transparent"
                  />
                  <label htmlFor="Collaboration">Collaboration</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="purpose"
                    id="Education"
                    value="Education"
                    className="size-4 bg-transparent"
                  />
                  <label htmlFor="Education">Education</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="purpose"
                    id="Others"
                    value="Others"
                    className="size-4 bg-transparent"
                  />
                  <label htmlFor="Others">Others</label>
                </div>
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              className="block max-h-40 w-full resize-none border border-gray-300 bg-transparent p-3 text-sm text-primary focus:border-blue-600 focus:outline-none lg:max-h-60"
              required
              rows={15}
            />
            <div className="mt-5">
              <AnimatedButton
                className="hidden h-10 w-[150px] items-center justify-center px-4 font-sans text-sm uppercase text-primary-foreground lg:flex lg:h-12 lg:w-[170px]"
                type="submit"
              >
                Submit
                <ArrowForward />
              </AnimatedButton>
            </div>
          </form>
        </div>
      </Wrapper>

      {/*  Mobile Submit Button */}

      <div className="sticky bottom-0 z-50 w-full bg-background p-2 text-center text-foreground lg:hidden">
        <button
          form="form"
          className={cn(
            "flex w-full items-center justify-center bg-primary py-3 uppercase text-primary-foreground",
            !isFormValid && "bg-primary/50 text-primary"
          )}
          disabled={!isFormValid}
        >
          Submit
          <ArrowForward />
        </button>
      </div>
    </div>
  );
}
