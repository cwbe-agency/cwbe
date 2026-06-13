"use client";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

import { WHY_CWBE } from "@/data/contact/why-cwbe";

export default function WhyWorkWithCWBE() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <Container>

        <SectionHeading
          eyebrow="Why Choose CWBE"
          title="More Than Just Another Website Agency."
          description="We focus on building websites that help businesses get found, build trust and generate enquiries."
          center
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {WHY_CWBE.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
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
                    group-hover:bg-[var(--primary)]
                  "
                >
                  <Icon
                    className="
                      h-6
                      w-6
                      text-[var(--primary)]
                      transition-all
                      duration-300
                      group-hover:text-white
                    "
                  />
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

        {/* Bottom Trust Statement */}

        <div
          className="
            mt-12
            rounded-3xl
            border
            border-blue-100
            bg-blue-50
            p-6
            md:p-8
          "
        >
          <p
            className="
              text-center
              text-slate-700
              leading-relaxed
              max-w-4xl
              mx-auto
            "
          >
            Most agencies ask for payment before showing anything.
            We start by creating a free homepage prototype so you can
            evaluate the design direction before making any commitment.
          </p>
        </div>

      </Container>
    </section>
  );
}