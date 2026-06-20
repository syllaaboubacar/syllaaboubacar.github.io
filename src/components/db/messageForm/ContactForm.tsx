"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// Initialisez avec vos clés EmailJS (à mettre dans .env.local)
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

export function ContactForm() {
  const t = useTranslations("Contact.form");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      toast.success(t("success"));
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error(t("error"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">{t("name")}</label>
        <Input name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">{t("email")}</label>
        <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">{t("message")}</label>
        <Textarea name="message" rows={5} value={formData.message} onChange={handleChange} required />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? t("sending") : t("send")}
      </Button>
    </form>
  );
}