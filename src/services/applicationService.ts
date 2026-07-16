import { supabase } from "../lib/supabase";

export async function submitCollegeApplication(data: any) {
  return await supabase
    .from("college_applications")
    .insert([data]);
}

export async function submitPartnerApplication(data: any) {
  return await supabase
    .from("partner_applications")
    .insert([data]);
}