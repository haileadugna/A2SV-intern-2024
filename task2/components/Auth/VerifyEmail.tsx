"use client";
import React, { useState, FormEvent, useRef, useEffect } from "react";
import { useAppDispatch } from "@/redux/hook";
import Link from "next/link";
import { useVerifyEmailMutation } from "@/redux/slice/auth";
import { useRouter } from "next/navigation";

const EmailVerifyForm = () => {
  const [otp, setOtp] = useState<string>("");
  const [verifyEmail, { isLoading, error }] = useVerifyEmailMutation();   
  const inputRef = useRef<HTMLInputElement[]>([]);
  const router = useRouter()

    let email = "";
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("email");
      email = storedEmail ? JSON.parse(storedEmail) : "";
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (otp.length !== 4) {
      console.error("Please fill all OTP fields");
      return;
    }
    try {
      await verifyEmail({
        email: email,
        otp: otp,
      });
      router.push('/opportunities')
      console.log("Otp verified successfully");
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newOtp = otp.substring(0, index) + value + otp.substring(index + 1);
    setOtp(newOtp);

    if (value && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };

  return (
    <section className="flex items-center justify-center mt-60">
      <div style={{ maxWidth: "70%" }}>
        <div className="mb-10">
          <h2 className="text-2xl mb-2 text-gray-300">Verify OTP</h2>
          <p className="text-gray-200">
            Enter the 4-digit verification code sent to +{email} to
            complete your account creation
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            {[1, 2, 3, 4].map((index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 md:w-16 lg:w-20 h-12 text-xl text-center border border-gray-500 rounded focus:outline-none focus:border-primary"
                value={otp[index - 1] || ""}
                onChange={(e) => handleInputChange(index - 1, e.target.value)}
                ref={(input) => {
                  if (input) {
                    inputRef.current[index - 1] = input;
                  }
                }}
              />
            ))}
          </div>

          <div className="mt-9 flex flex-col md:flex-row justify-between">
           

            <button
              className="px-16 py-2 bg-primary text-white bg-slate-800 rounded"
              type="submit"
              title={isLoading ? "Verifying..." : "Continue"}
            > submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailVerifyForm;