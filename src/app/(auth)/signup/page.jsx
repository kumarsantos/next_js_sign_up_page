"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import QuoteIcon from "../../../assets/quote.png";
import StephenLogo from "../../../assets/stephen.png";
import GoogleLogo from "../../../assets/socialIcons/google.png";
import Logo from "../../../assets/logo.png";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

import { schema } from "@/utils/schema";
import { displayErrors } from "@/utils/helper";
import { formElements, socialButtonLinks } from "@/utils/constants";
import FormElements from "@/components/FormElements";

const Signup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user, setUser] = useState({});
  const [termsAndCondition, setTermsAndCondtion] = useState(false);
  const userId = searchParams.get("userId");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      company_name: "",
      email: "",
      mobile: "",
      password: "",
      country: "",
      state: "",
    },
    values: user,
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/crud", {
        method: userId ? "PUT" : "POST",
        body: JSON.stringify(data),
      });
      await res.json();
      router.push("/home");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(`/api/crud?userId=${userId}`);
        const { data } = await res.json();
        setUser(data);
      } catch (error) {
        toast.error("Something went wrong");
        console.log(error);
      }
    };
    userId && getUserData();
  }, [userId]);

  return (
    <div className="flex relative h-full ">
      <section className=" relative bg-blue-100 px-14 lg:max-w-[40%] md:max-w-[40%] hidden md:inline-block lg:inline-block w-full lg:min-h-screen md:min-h-screen space-y-8">
        <div className="flex items-center md:pl-6 lg:pl-6 space-x-1 w-full py-2 border-b border-slate-200 absolute top-0 left-0">
          <Image
            src={Logo}
            className="bg-blue-400"
            alt="quote-icon"
            height={32}
            width={32}
          />
          <div>
            <p className="text-[10px] leading-3">zoho</p>
            <p className="font-medium leading-4">Books</p>
          </div>
        </div>
        <div className="!mt-[120px]">
          <div className="flex items-center">
            <span className="w-full h-[1px] bg-slate-300" />
            <Image src={QuoteIcon} alt="quote-icon" height={64} width={64} />
            <span className="w-full h-[1px] bg-slate-300" />
          </div>
        </div>
        <p className=" tracking-wider text-center">
          I've not seen anything as affordable and easy to use as Zoho Books.
          The reports are simple to run and can be scheduled to generate
          automatically. As a small business owner, I no longer worry about
          ageing receivables with the automatic payment reminders in Zoho Books.
        </p>
        <div className="flex items-center border-t border-b py-4 border-slate-300">
          <div className="mr-2">
            <Image src={StephenLogo} alt="quote-icon" height={64} width={64} />
          </div>
          <div>
            <h2 className="uppercase font-semibold tracking-widest">
              Stephen j. lalla
            </h2>
            <p className="text-[14px] font-medium">
              CEO, Dynamic Image Marketing System, Inc, US
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex justify-center w-full lg:min-h-screen md:min-h-screen lg:h-full md:h-full min-h-screen h-full bg-gray-100">
        <div className=" bg-white flex items-center justify-end pr-6 lg:py-3 md:py-3 space-x-1 w-full py-2 border-b border-slate-200 absolute top-0 left-0">
          <p className="font-semibold text-gray-400 text-md">
            Already have a Zoho account?{" "}
            <Link href={"/login"} className="text-blue-600 ml-1 ">
              Sign in
            </Link>
          </p>
        </div>
        <div className="mt-16 max-w-[24rem]">
          <h1 className=" font-bold text-2xl">
            Experience the full-featured PREMIUM plan for 14 days.
          </h1>
          <form
            className="flex flex-col gap-y-2 mt-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            {formElements.map((element, idx) =>
              FormElements({ element, idx, register })
            )}
            <p className="text-red-500 text-[12px] ">
              {displayErrors(errors)}{" "}
            </p>
            <p className="font-medium text-sm my-1 mt-2">
              {" "}
              Your data will be in US data center
            </p>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                onChange={(e) => setTermsAndCondtion(e.target.checked)}
              />
              <p className="text-[12px]">
                I agree to the{" "}
                <Link
                  className="text-blue-600 underline underline-offset-2"
                  href={"/home"}
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  className="text-blue-600 underline underline-offset-2"
                  href={"/home"}
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
            <button
              disabled={!termsAndCondition}
              className="w-full cursor-pointer bg-blue-400 text-white py-2 my-4"
            >
              {userId ? "Update Account" : "Create Account"}
            </button>
          </form>
          <div className="flex items-center mt-2">
            <p className="font-medium text-sm mr-2">or sign in using</p>
            <div className="flex items-center space-x-1">
              <Link href="https://google.com">
                <Image
                  src={GoogleLogo}
                  height={48}
                  width={96}
                  alt="google-icon"
                  className="border rounded-md border-slate-100 cursor-pointer"
                />{" "}
              </Link>
              {socialButtonLinks.map((item, idx) => (
                <Link href={item.href} key={idx}>
                  <Image
                    className="cursor-pointer"
                    src={item.icon}
                    height={24}
                    width={24}
                    alt={item.alt}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
