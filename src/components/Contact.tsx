import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  subject: z.string().min(2, {
    message: "Le sujet doit contenir au moins 2 caractères.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-africanet-orange" />,
      title: "Téléphone",
      details: ["+242 068 102 023", "+242 040 120 016"]
    },
    {
      icon: <Mail className="h-5 w-5 text-africanet-orange" />,
      title: "Email",
      details: ["contact@africnet.com", "support@africnet.com"]
    },
    {
      icon: <MapPin className="h-5 w-5 text-africanet-orange" />,
      title: "Adresse",
      details: ["123 Rue Principale", "Pointe-Noire, Congo"]
    }
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://facebook.com"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://instagram.com"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-africanet-blue">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-white">Contactez-Nous</h2>
        <p className="text-center text-white/80 max-w-3xl mx-auto mt-6 mb-12">
          Une question, un projet ou besoin d'un devis ? Contactez-nous et notre équipe vous répondra dans les plus brefs délais.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-6">Envoyez-nous un message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="votre.email@exemple.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sujet</FormLabel>
                      <FormControl>
                        <Input placeholder="Sujet de votre message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Votre message..." 
                          className="min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="bg-africanet-orange hover:bg-africanet-orange/90 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Envoyer le message
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-6">Informations de contact</h3>
            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-africanet-orange/10 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-africanet-blue">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-africanet-blue mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                {socialMedia.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-africanet-blue text-white rounded-full hover:bg-africanet-orange transition-colors"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-africanet-blue mb-4">Discutez avec nous</h4>
              <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M5.339 21.333l.363-1.324a8.55 8.55 0 01-1.154-4.325c0-4.722 3.839-8.56 8.561-8.56 2.285 0 4.439.89 6.056 2.506a8.524 8.524 0 012.505 6.055c0 4.723-3.838 8.56-8.56 8.56a8.556 8.556 0 01-4.066-1.035l-3.705 1.123zm8.517-14.944c-5.112 0-9.27 4.159-9.27 9.271 0 1.602.409 3.164 1.186 4.543l.185.297-.786 2.87 2.953-.886.29.172a9.23 9.23 0 004.694 1.274c5.112 0 9.27-4.158 9.27-9.271 0-2.477-.965-4.806-2.715-6.556a9.2 9.2 0 00-6.557-2.714z" fillRule="nonzero"/>
                </svg>
                WhatsApp
              </Button>
            </div>
            
            <div className="mt-8 h-64 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123857.52609549382!2d-17.552278906249982!3d14.716679199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c17d92d5db21f!2sDakar%2C%20Senegal!5e0!3m2!1sen!2sus!4v1620796534267!5m2!1sen!2sus!4v1620796534267!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="AFRIC'NET Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
