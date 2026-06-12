"use client";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

import { CUSTOM_BUILD_BENEFITS } from "@/data/services/custom-build";

export default function WhyCustomBuild() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <Container>

        <SectionHeading
          eyebrow="Built Differently"
          title="Why We Build Websites From Scratch"
          description="Most website builders rely heavily on templates. We build custom websites designed around your business and future growth."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {CUSTOM_BUILD_BENEFITS.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-card
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                  "
                >
                  <Icon className="h-6 w-6 text-[#2563EB]" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

        <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">

          <p className="text-center text-slate-700 leading-relaxed">
            We primarily build modern websites using industry-standard
            technologies such as React and Next.js. This gives your
            business a fast, scalable and future-ready website instead
            of relying solely on pre-built templates.
          </p>

        </div>

      </Container>
    </section>
  );
}