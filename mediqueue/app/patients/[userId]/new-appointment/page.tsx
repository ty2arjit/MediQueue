import Image from "next/image";
import Link from "next/link";
import { PatientForm } from "@/components/forms/PateintForm";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { get } from "http";
import { getPatient } from "@/lib/actions/patient.actions";

export default async function NewAppointment({ params: {userId }} : SearchParamProps) {
  const patient = await getPatient(userId);
  return (
    <div className="flex mt-[5%]">
      <section className="remove-scrollbar sub-container my-auto text-white pb-[20%] pl-[10%] mt-[5%] justify-between flex-1">
        <Image
          src="/assets/icons/logo-full.svg"
          alt="patient"
          width={1000}
          height={1000}
          className="mt-[1%] ml-[5%] h-10 w-fit"
        ></Image>

        <AppointmentForm 
        patientId={patient?.$id}
        userId={userId}
        type="create"
        />
        
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left ml-[5%]">
          © Mediqueue
          </p>
          <Link 
          href="/?admin=true"
          className="text-green-500 mr-[25%]"
          >
            Admin
          </Link>
        </div>
      </section>
      
      <Image
      src="/assets/images/appointment-img.png"
      alt="appointment"
      height={1000}
      width={1000}
      className="side-img max-w-[25%] bg-bottom"
      >
      </Image>
    </div>
  );
}
