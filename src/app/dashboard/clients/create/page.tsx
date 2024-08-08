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

import { clientCategories } from "@/lib/clientCategories";
import { SubmitButton } from "@/components/SubmitButton";
import { Label } from "@/components/ui/label";

export default function CreateClientPage() {
  return (
    <form className="max-w-[700px] mx-auto">
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
              <Input type="text" className="w-full" placeholder="Client Name" />
            </div>

            <div className="flex flex-col gap-3">
              <Label>Active Client</Label>
              <Switch />
            </div>

            <div className="flex flex-col gap-3">
              <Label>Category</Label>
              <Select>
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
