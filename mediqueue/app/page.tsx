import Image from "next/image";
import Link from "next/link";
import { PatientForm } from "@/components/forms/PateintForm";
export default function Home() {
  return (
    <div className="flex mt-[5%]">
      <section className="remove-scrollbar container my-auto text-white pb-[20%] pl-[10%] mt-[5%]">
        <Image
          src="/assets/icons/logo-full.svg"
          alt="patient"
          width={1000}
          height={1000}
          className="mb-12 h-10 w-fit"
        ></Image>

        <PatientForm />
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
          © Mediqueue
          </p>
          <Link 
          href="/?admin=true"
          className="text-green-500"
          >
            Admin
          </Link>
        </div>
      </section>
      
      <Image
      src="/assets/images/onboarding-img.png"
      alt="patient"
      height={1000}
      width={1000}
      className="side-img max-w-[50%] max-h-[100%]"
      >
      </Image>
    </div>
  );
}
