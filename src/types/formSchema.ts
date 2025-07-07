// types/formSchema.ts
import { z } from "zod";
import { differenceInYears, parseISO } from "date-fns";

const today = new Date();

export const formSchema = z.object({
  fullName: z
    .string()
    .min(2)
    .max(40)
    .regex(/^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż\s-]+$/, "Dozwolone tylko litery PL/EN"),

  birthDate: z.string().refine((dateStr) => {
    const parsed = parseISO(dateStr);
    return differenceInYears(today, parsed) >= 18;
  }, "Musisz mieć co najmniej 18 lat"),

  address1: z.string().min(5).max(60),
  address2: z.string().max(60).optional(),
  zipCode: z
    .string()
    .min(2)
    .max(10)
    .regex(/^[A-Za-z0-9\s-]+$/, "Nieprawidłowy kod pocztowy"),

  region: z.string().min(1, "Wymagane"),
  city: z.string().min(1, "Wymagane"),
  country: z.enum(["PL", "DE", "US"], {
    required_error: "Wybierz kraj",
  }),

  photo1: z
    .any()
    .nullable()
    .refine((file) => !!file && file instanceof File, "Zdjęcie jest wymagane")
    .refine((file) => file?.size <= 2 * 1024 * 1024, "Maksymalny rozmiar 2MB")
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file?.type),
      "Dozwolone formaty: JPG, PNG, WEBP",
    )
    .refine(
      async (file) => {
        const bitmap = await createImageBitmap(file);
        return (
          bitmap.width >= 512 &&
          bitmap.height >= 512 &&
          bitmap.width <= 1024 &&
          bitmap.height <= 1024
        );
      },
      { message: "Rozmiar zdjęcia: min. 512x512, max. 1024x1024 px" },
    ),

  photo2: z.optional(
    z
      .any()
      .nullable()
      .refine((file) => !file || file instanceof File, "Nieprawidłowy plik")
      .refine(
        (file) => !file || file.size <= 2 * 1024 * 1024,
        "Maksymalny rozmiar 2MB",
      )
      .refine(
        (file) =>
          !file ||
          ["image/jpeg", "image/png", "image/webp"].includes(file?.type),
        "Dozwolone formaty: JPG, PNG, WEBP",
      )
      .refine(
        async (file) => {
          if (!file) return true;
          const bitmap = await createImageBitmap(file);
          return (
            bitmap.width >= 512 &&
            bitmap.height >= 512 &&
            bitmap.width <= 1024 &&
            bitmap.height <= 1024
          );
        },
        { message: "Rozmiar zdjęcia: min. 512x512, max. 1024x1024 px" },
      ),
  ),
});

export type FormData = z.infer<typeof formSchema>;
