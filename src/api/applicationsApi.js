import supabaseClient, { supabaseUrl } from "../utils/supabase";

export async function applyToJob(token, _, jobData) {
  const supabase = await supabaseClient(token);

  const random = Math.floor(Math.random() * 50000);
  const fileName = `resume-${random}-${jobData.candidate_id}`;

  const { error: uploadResumeError } = await supabase.storage
    .from("resume")
    .upload(fileName, jobData.resume);
  if (uploadResumeError) {
    console.error("Error while uploading resume job:", uploadResumeError);
    return null;
  }

  const resume = `${supabaseUrl}/storage/v1/object/public/resumes/${fileName}`;

  const { data, error } = await supabase
    .from("applications")
    .insert([{ ...jobData, resume }])
    .select();

  if (error) {
    console.error("Error while applying to job:", error);
  }

  return data;
}
