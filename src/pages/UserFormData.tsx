/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import type { FormData } from "@/types/formSchema";
import { formSchema } from "@/types/formSchema";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialFormState: FormData = {
  fullName: "",
  birthDate: "",
  address1: "",
  address2: "",
  zipCode: "",
  city: "",
  region: "",
  country: "PL",
  photo1: null as any,
  photo2: null as any,
};

export default function UserFomrData() {
  const [form, setForm] = useState<FormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm((prev) => ({ ...prev, [name]: files?.[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (value: FormData["country"]) => {
    setForm((prev) => ({ ...prev, country: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.photo1) {
      setErrors((prev) => ({
        ...prev,
        photo1: "Zdjęcie 1 jest wymagane",
      }));
      setIsSubmitting(false);
      return;
    }

    console.log("Raw form state:", form);

    const result = await formSchema.safeParseAsync(form);

    if (!result.success) {
      const newErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormData;
        newErrors[key] = err.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Validated form data:", result.data);
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto space-y-6 p-6 border rounded-xl shadow"
    >
      <h2 className="text-xl font-bold">Formularz użytkownika</h2>

      <div className="space-y-2">
        <Label>Imię i nazwisko</Label>
        <Input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Jan Kowalski"
        />
        <p className="text-red-500 text-sm">{errors.fullName}</p>
      </div>

      <div className="space-y-2">
        <Label>Data urodzenia</Label>
        <Input
          name="birthDate"
          type="date"
          value={form.birthDate}
          onChange={handleChange}
        />
        <p className="text-red-500 text-sm">{errors.birthDate}</p>
      </div>

      <div className="space-y-2">
        <Label>Adres – linia 1</Label>
        <Input name="address1" value={form.address1} onChange={handleChange} />
        <p className="text-red-500 text-sm">{errors.address1}</p>
      </div>

      <div className="space-y-2">
        <Label>Adres – linia 2 (opcjonalne)</Label>
        <Input name="address2" value={form.address2} onChange={handleChange} />
        <p className="text-red-500 text-sm">{errors.address2}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Kod pocztowy</Label>
          <Input name="zipCode" value={form.zipCode} onChange={handleChange} />
          <p className="text-red-500 text-sm">{errors.zipCode}</p>
        </div>

        <div>
          <Label>Miasto</Label>
          <Input name="city" value={form.city} onChange={handleChange} />
          <p className="text-red-500 text-sm">{errors.city}</p>
        </div>

        <div>
          <Label>Region / województwo</Label>
          <Input name="region" value={form.region} onChange={handleChange} />
          <p className="text-red-500 text-sm">{errors.region}</p>
        </div>

        <div>
          <Label>Kraj</Label>
          <Select value={form.country} onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Wybierz kraj" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PL">Polska</SelectItem>
              <SelectItem value="DE">Niemcy</SelectItem>
              <SelectItem value="US">USA</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-red-500 text-sm">{errors.country}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Zdjęcie 1</Label>
          <Input
            name="photo1"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          <p className="text-red-500 text-sm">{errors.photo1}</p>
        </div>
        <div>
          <Label>Zdjęcie 2 (opcjonalne)</Label>
          <Input
            name="photo2"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          <p className="text-red-500 text-sm">{errors.photo2}</p>
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="mt-6">
        {isSubmitting ? "Wysyłanie..." : "Wyślij formularz"}
      </Button>
    </form>
  );
}
