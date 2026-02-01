import { APPOINTMENT_COLLECTION_ID, databases, DATABASE_ID, PATIENT_COLLECTION_ID, ENDPOINT, BUCKET_ID, PROJECT_ID } from "@/lib/appwrite.config";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";

export const createAppointment = async ( appointment: CreateAppointmentParams ) => {
  try {
    const newAppointment = await databases.createDocument(
          DATABASE_ID!,
          APPOINTMENT_COLLECTION_ID!,
          ID.unique(),
          appointment
        );
    
        return parseStringify( newAppointment );
  }
  catch (error) {
    console.error("An error occurred while creating a new appointment:", error);
  }
}