import React from "react";
import Link from "next/link";
import Image from "next/image";

const Success = () => {
  return (
    <div className="flex h-screen max-h-screen px-[5%] justify-center items-center">
      <div className="sucess-img flex flex-col items-center justify-center gap-6">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          ></Image>
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          ></Image>
          <h2 className="header mb-6 max-w-[600px] text-center text-gray-200">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>

          <p className="text-gray-100">We will be in touch shortly to confirm</p>
        </section>

        <section className="request-details">
          <p>Request appointment details: </p>
          <div className="flex items-center gap-3"></div>
        </section>
      </div>
    </div>
  );
};

export default Success;
