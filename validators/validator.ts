import { z } from "zod";

export const contactFormSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." })
    .max(100),
  email: z.string().email({ message: "Por favor, insira um email válido" }),
  mensagem: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." })
    .max(1000),
  consentimento: z.boolean().refine((val) => val === true, {
    message: "Você deve concordar com os termos de aceite.",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
