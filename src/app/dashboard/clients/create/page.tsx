"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { parseWithZod } from "@conform-to/zod";
import { useForm } from "@conform-to/react";
import { clientCategories } from "@/lib/clientCategories";
import { SubmitButton } from "@/components/SubmitButton";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { createClient } from "@/actions/client";
import { clientSchema } from "@/schemas/client";
import { clientStatus } from "@/lib/clientStatus";

export default function CreateClientPage() {
  const [lastResult, action] = useFormState(createClient, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: clientSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="max-w-[700px] mx-auto"
    >
      <div className="flex  items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/clients">
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">New Client</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Client Details</CardTitle>
          <CardDescription>
            In this form you can create your client
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input
                type="text"
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={fields.name.initialValue}
                className="w-full"
                placeholder="Client Name"
              />
              <p className="text-red-500">{fields.name.errors}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Work Suspended</Label>
              <Switch
                key={fields.workSuspended.key}
                name={fields.workSuspended.name}
                defaultValue={fields.workSuspended.initialValue}
              />
              <p className="text-red-500">{fields.workSuspended.errors}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Label>Category</Label>
              <Select
                key={fields.category.key}
                name={fields.category.name}
                defaultValue={fields.category.initialValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {clientCategories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-red-500">{fields.category.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Status</Label>
              <Select
                key={fields.status.key}
                name={fields.status.name}
                defaultValue={fields.status.initialValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  {clientStatus.map((status) => (
                    <SelectItem key={status.id} value={status.name}>
                      {status.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-red-500">{fields.category.errors}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton text="Create Client" />
        </CardFooter>
      </Card>
    </form>
  );
}
