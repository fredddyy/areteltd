"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormProps {
  serviceOptions: string[];
}

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}

export function ContactForm({ serviceOptions }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState({ status: "submitting", message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      organisation: formData.get("organisation") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      setFormState({
        status: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setFormState({
        status: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send enquiry");
      }

      setFormState({
        status: "success",
        message: "Thank you for your enquiry. We'll be in touch soon.",
      });
      (e.target as HTMLFormElement).reset();
    } catch {
      setFormState({
        status: "error",
        message:
          "Something went wrong. Please try again or email us directly.",
      });
    }
  }

  if (formState.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Enquiry Sent
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          {formState.message}
        </p>
        <Button
          variant="ghost"
          className="mt-6 text-accent hover:text-accent/80"
          onClick={() => setFormState({ status: "idle", message: "" })}
        >
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Organisation */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            required
            className="h-11 rounded-xl border-border/60 bg-background text-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="organisation" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
            Organisation
          </Label>
          <Input
            id="organisation"
            name="organisation"
            placeholder="Your company or institution"
            className="h-11 rounded-xl border-border/60 bg-background text-sm"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
            Business Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            className="h-11 rounded-xl border-border/60 bg-background text-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+234 800 000 0000"
            className="h-11 rounded-xl border-border/60 bg-background text-sm"
          />
        </div>
      </div>

      {/* Service of Interest */}
      <div className="space-y-2">
        <Label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
          Service of Interest
        </Label>
        <Select name="service">
          <SelectTrigger className="h-11 rounded-xl border-border/60 bg-background text-sm">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
            <SelectItem value="Other">Other / Not Sure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
          Project Description <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project, the problem you're trying to solve, or any specific requirements..."
          required
          rows={5}
          className="rounded-xl border-border/60 bg-background text-sm resize-none"
        />
      </div>

      {/* Error message */}
      {formState.status === "error" && (
        <p className="text-sm text-destructive">{formState.message}</p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={formState.status === "submitting"}
        className="w-full bg-navy hover:bg-navy-light text-white gap-2.5 rounded-xl h-12 text-[0.9rem] font-semibold shadow-none sm:w-auto sm:px-8"
      >
        {formState.status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
