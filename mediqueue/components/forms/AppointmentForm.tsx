"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import SubmitButton from "../SubmitButton";
import {
  UserFormValidation,
  CreateAppointmentSchema,
  getAppointmentSchema,
} from "@/lib/validation";
import { createUser } from "@/lib/actions/patient.actions";
import { FormFieldType } from "./PateintForm";
import Image from "next/image";
import { SelectItem } from "@/components/ui/select";
import { Doctors, IdentificationTypes } from "@/constants/index";
import { createAppointment } from "@/lib/actions/appointment.action";

export default function AppointmentForm({
  userId,
  patientId,
  type = "create",
}: {
  userId: string;
  patientId: string;
  type: "create" | "cancel" | "schedule";
}) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const AppointmentFormValidation = getAppointmentSchema(type);

  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      primaryPhysician: "",
      schedule: new Date(),
      reason: "",
      note: "",
      cancellationReason: "",
    },
  });

  async function onSubmit(values: z.infer<typeof AppointmentFormValidation>) {
    setIsLoading(true);

    let status;

    switch (type) {
      case "schedule":
        status = "scheduled";
        break;
      case "cancel":
        status = "cancelled";
        break;
      default:
        status = "pending";
        break;
    }

    try {
      if (type === "create" && patientId) {
        const appointmentData = {
          userId,
          patient: patientId,
          primaryPhysician: values.primaryPhysician,
          schedule: new Date(values.schedule),
          reason: values.reason!,
          note: values.note,
          status: status as Status,
        };
        const appointment = await createAppointment(appointmentData);

        if (appointment) {
          form.reset();
          router.push(
            `/patients/${userId}/new-appointment/success?appointmentId=${appointment.id}`
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  let buttonLabel;

  switch (type) {
    case "cancel":
      buttonLabel = "Cancel Appointment";
      break;
    case "create":
      buttonLabel = "Request Appointment";
      break;
    case "schedule":
      buttonLabel = "Schedule Appointment";
      break;
    default:
      break;
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1 mt-[5%] mr-[15%] max-w-[70%] ml-[5%]">
        <section className="mb-12 space-y-4">
          <h1>New Appointment</h1>
          <p className="text-dark-700">
            Request a new appointment by filling out the form below.
          </p>
        </section>

        {type === "create" && (
          <>
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="primaryPhysician"
              label="Doctor"
              placeholder="Select a Doctor"
            >
              {Doctors.map((doctor, i) => (
                <SelectItem key={doctor.name + i} value={doctor.name}>
                  <div className="flex cursor-pointer items-center gap-2 text-emerald-50">
                    <Image
                      src={doctor.image}
                      width={32}
                      height={32}
                      alt="doctor"
                      className="rounded-full border border-dark-500"
                    />
                    <p>{doctor.name}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="schedule"
              label="Expected Appointment Date"
              showTimeSelect
              dateFormat="MM/dd/yyyy - h:mm aa"
            />

            <div className="flex flex-col gap-6 xl:flex-row text-dark-700">
              <CustomFormField
                fieldType={FormFieldType.SELECT}
                control={form.control}
                name="identificationType"
                label="Identification Type"
                placeholder="Select ID Type"
              >
                {IdentificationTypes.map((type, i) => (
                  <SelectItem key={type} value={type}>
                    <div className="flex cursor-pointer items-center gap-2 text-emerald-50">
                      {type}
                    </div>
                  </SelectItem>
                ))}
              </CustomFormField>
            </div>

            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="reason"
                label="Reason for Appointment"
                placeholder="Enter the reason for your appointment"
              />
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="notes"
                label="Notes"
                placeholder="Enter any additional information or requests here"
              />
            </div>
          </>
        )}

        {type === "cancel" && (
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="cancellationReason"
            label="Reason for Cancellation"
            placeholder="Please provide a reason for cancelling the appointment"
          />
        )}

        <SubmitButton
          isLoading={isLoading}
          className={`${
            type === "cancel" ? "shad-danger-btn" : "shad-primary-btn"
          } w-full `}
        >
          {buttonLabel}
        </SubmitButton>
      </form>
    </Form>
  );
}
function CreateAppointment(appointmentData: any) {
  throw new Error("Function not implemented.");
}
