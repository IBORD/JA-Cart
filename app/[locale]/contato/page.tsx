"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormData,
} from "../../../validators/validator";
import { Button } from "../../../components/atoms/Button";
import { Input } from "../../../components/atoms/Input";
import { useTranslations } from "next-intl";

export default function ContatoPage() {
  const t = useTranslations("contato");
  const tGlobal = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Dados enviados:", data);
    reset();
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-[var(--foreground)]">
        {t("pageTitle")}
      </h1>

      {isSubmitSuccessful ? (
        <p className="text-green-500 text-center mb-6">
          {t("submitSuccessMessage")} 💌
        </p>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 bg-[#111] text-[var(--foreground)] p-6 rounded-lg shadow-lg border border-gray-700"
        >
          <div>
            <label htmlFor="nome" className="block text-sm font-medium">
              {t("form.nameLabel")}
            </label>
            <Input
              id="nome"
              {...register("nome")}
              aria-invalid={errors.nome ? "true" : "false"}
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">
                {t(
                  `validation.name.${
                    errors.nome.message?.includes("3 caracteres")
                      ? "minLength"
                      : "maxLength"
                  }`
                )}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              {t("form.emailLabel")}
            </label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {t("validation.email.invalid")}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium">
              {t("form.messageLabel")}
            </label>
            <textarea
              id="mensagem"
              rows={4}
              className="mt-1 block w-full px-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-600"
              {...register("mensagem")}
              aria-invalid={errors.mensagem ? "true" : "false"}
            ></textarea>
            {errors.mensagem && (
              <p className="text-red-500 text-sm">
                {t(
                  `validation.message.${
                    errors.mensagem.message?.includes("10 caracteres")
                      ? "minLength"
                      : "maxLength"
                  }`
                )}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="consentimento"
              {...register("consentimento")}
              aria-invalid={errors.consentimento ? "true" : "false"}
            />
            <label htmlFor="consentimento" className="text-sm">
              {t("form.consentLabel")}
            </label>
          </div>
          {errors.consentimento && (
            <p className="text-red-500 text-sm">
              {t("validation.consent.required")}
            </p>
          )}

          <Button
            type="submit"
            className="w-full bg-red-600 text-white font-medium py-2 rounded hover:bg-red-700 transition"
          >
            {tGlobal("submit")}
          </Button>
        </form>
      )}
    </section>
  );
}