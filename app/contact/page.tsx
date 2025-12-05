"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, Mail, MapPin, Phone, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner"; // Recomendado: npm i sonner

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

// Schema de validação com Zod (mais seguro e poderoso que validação manual)
const contactSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Insira um email válido."),
  title: z.string().min(3, "O assunto é obrigatório."),
  content: z
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres.")
    .max(1000, "Mensagem muito longa."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_4a07myl", // ← Substitua pelo teu Service ID
        "template_v38yfpo", // ← Substitua pelo teu Template ID
        {
          name: data.name,
          email: data.email,
          title: data.title,
          message: data.content,
          time: "Wiliet Code",
        },
        "wxaOH2twPjQwSh203" // ← Substitua pela tua Public Key do EmailJS
      );

      toast.success("Mensagem enviada com sucesso! Responderemos em breve.");
      reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero com vídeo de fundo otimizado */}
      <section className="relative h-screen max-h-[700px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://www.pexels.com/pt-br/download/video/5452545/"
            type="video/mp4"
          />
          {/* Fallback se não tiver vídeo local */}
          <source
            src="https://cdn.coverr.co/videos/coverr-programmer-working-at-night-6098/1080p.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Contactos</h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                Estamos aqui para te ajudar. Tens dúvidas sobre cursos,
                parcerias ou queres fazer parte da comunidade Wiliet Code?
              </p>
            </div>

            <div className="hidden lg:block relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661299251279-117a49a32548?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Equipe Wiliet Code"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto px-6 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <Card className="p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-3">Envie-nos uma Mensagem</h2>
            <p className="text-muted-foreground mb-8">
              Preencha o formulário e responderemos o mais rápido possível.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="João Silva"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="joao@exemplo.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="title">Assunto</Label>
                <Input
                  id="title"
                  {...register("title")}
                  placeholder="Ex: Dúvida sobre curso de React"
                  disabled={isSubmitting}
                />
                {errors.title && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="content">Mensagem</Label>
                <Textarea
                  id="content"
                  {...register("content")}
                  rows={6}
                  placeholder="Escreva aqui a sua mensagem..."
                  disabled={isSubmitting}
                />
                {errors.content && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.content.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className=" mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>

            {/* Mapa responsivo */}
            <div className="mt-10 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.102423099205!2d13.404708142874354!3d-12.581609376248178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bafd11fb3eebbcf%3A0x8530d50d1789ce3!2sCol%C3%A9gio%20Wiliete!5e1!3m2!1spt-PT!2sao!4v1764950525046!5m2!1spt-PT!2sao"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Wiliet Code"
              />
            </div>
          </Card>

          {/* Informações de contacto */}
          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">
                Informações de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <address className="not-italic text-muted-foreground">
                      Instituto Wiliet
                      <br />
                      Avenida Principal, Bairro Central
                      <br />
                      Benguela, Angola
                    </address>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">
                      info@wilietcode.ao
                      <br />
                      suporte@wilietcode.ao
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-muted-foreground">
                      +244 923 456 789
                      <br />
                      +244 912 345 678
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Horário de Atendimento
              </h3>
              <dl className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <dt>Segunda – Sexta</dt>
                  <dd className="font-semibold text-foreground">
                    08:00 – 17:00
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sábado</dt>
                  <dd className="font-semibold text-foreground">
                    09:00 – 13:00
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>Domingo</dt>
                  <dd className="font-semibold text-red-600">Fechado</dd>
                </div>
              </dl>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Perguntas Frequentes</h3>
              <div className="space-y-4">
                {[
                  {
                    q: "A plataforma é gratuita?",
                    a: "Sim! A Wiliet Code Academy é 100% gratuita para alunos do Instituto Wiliet e comunidade.",
                  },
                  {
                    q: "Preciso de conhecimentos prévios?",
                    a: "Não. Todos os cursos começam do zero e avançam passo a passo.",
                  },
                  {
                    q: "Posso praticar os projetos?",
                    a: "Sim! Recomendamos fortemente que pratiques todos os exemplos e projetos.",
                  },
                ].map((item, i) => (
                  <details key={i} className="group">
                    <summary className="cursor-pointer font-medium list-none">
                      <span className="group-open:text-primary">{item.q}</span>
                    </summary>
                    <p className="mt-2 text-muted-foreground text-sm pl-6">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
