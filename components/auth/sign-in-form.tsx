import Image from "next/image";
import React from "react";

const SignInForm = () => {
  return (
    <div className="flex h-[500px] w-[800px] rounded-xl shadow-md border">
      <div className="flex-1 flex flex-col items-center justify-center bg-sign-in-bg bg-cover rounded-l-xl">
        <Image
          src="/images/TRIOE_LOGO.png"
          alt="sign-in-bg"
          width={100}
          height={100}
        />
        <h1 className="text-4xl font-bold tracking-wider">TRIOE</h1>
      </div>
      <div className="flex-1 rounded-r-xl p-10 flex flex-col items-center justify-start">
        <p className="text-2xl font-semibold tracking-wider">SIGN IN</p>
      </div>
    </div>
  );
};

export default SignInForm;
