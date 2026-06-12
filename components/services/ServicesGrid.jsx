"use client";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

import { SERVICES } from "@/data/services/services";

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28">
      <Container>

        <SectionHeading
          eyebrow="Services"
          title="Everything You Need To Grow Online."
          description="A complete website solution designed for local businesses that want visibility, credibility and more enquiries."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {SERVICES.map((service, index) => {
            const Icon = service.icon;

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
                  hover:border-[#2563EB]/20
                  hover:shadow-xl
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
                    transition-all
                    duration-300
                    group-hover:bg-[#2563EB]
                  "
                >
                  <Icon
                    className="
                      h-6
                      w-6
                      text-[#2563EB]
                      transition-all
                      duration-300
                      group-hover:text-white
                    "
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}