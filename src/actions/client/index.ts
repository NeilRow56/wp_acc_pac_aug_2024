"use server";

import db from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { clientSchema } from "@/schemas/client";

export async function createClient(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: clientSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await db.client.create({
    data: {
      name: submission.value.name,
      status: submission.value.status,
      workSuspended: submission.value.workSuspended === true ? true : false,
      category: submission.value.category,
      userId: user.id,
    },
  });

  redirect("/dashboard/clients");
}
