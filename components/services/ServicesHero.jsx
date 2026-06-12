"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Search,
  Bot,
  MessageCircle,
  FileText,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
  },
  {
    icon: Search,
    title: "Google SEO",
  },
  {
    icon: Bot,
    title: "AI Visibility",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
  },
  {
    icon: FileText,
    title: "CMS Blog System",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
  },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

          {/* LEFT */}

          <div>
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-soft">
              Website Development Services
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              Everything Your Business Needs
              <span className="gradient-text block">
                To Win Online.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Professional websites, Google SEO, AI visibility,
              WhatsApp integration, blogs and ongoing support —
              everything needed to build trust and generate enquiries.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-[#1E293B] hover:bg-[#0f172a] text-white"
              >
                <Link href="/free-prototype">
                  Get Free Prototype
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="#pricing">
                  View Pricing
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
              <span>✓ Mobile First</span>
              <span>✓ SEO Ready</span>
              <span>✓ Fast Loading</span>
              <span>✓ AI Optimized</span>
            </div>
          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Included With Every CWBE Website
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Built specifically for local businesses that need
                  visibility, credibility and enquiries.
                </p>
              </div>

              <div className="grid gap-3">

                {SERVICES.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all hover:border-[#2563EB]/40 hover:shadow-soft"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                        <Icon className="h-5 w-5 text-[#2563EB]" />
                      </div>

                      <div>
                        <div className="font-semibold text-slate-900">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}