
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

const roles = [
  "UI/UX Designer",
  "Frontend Developer",
  "Web Designer",
  "Creative Designer",
  "Product Designer",
  "User Researcher",
  "Interaction Designer",
  "Web Developer",
  "Visual Designer",
  "Prototyping Enthusiast",
];

const skills = [
  "UI Design",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "User Flow",
  "Usability Testing",
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
];

const projects = [
  {
    title: "PMBM MIN 3 Karanganyar",
    category: "UI/UX Design",
    description:
      "Perancangan antarmuka website penerimaan murid baru dengan pendekatan Design Thinking.",
    tags: ["Figma", "UI/UX", "Design Thinking"],
  },
  {
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "Website portfolio personal untuk menampilkan karya, keterampilan, dan pengalaman.",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Website Redesign",
    category: "Web Design",
    description:
      "Konsep desain ulang website dengan fokus pada navigasi yang jelas dan pengalaman pengguna.",
    tags: ["Research", "Wireframe", "Prototype"],
  },
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <main className="overflow-hidden">
        {/* HOME */}
        <section
          id="home"
          className="flex min-h-screen scroll-mt-20 flex-col items-center justify-center bg-[#6B2636] px-6 pb-16 pt-32 text-center text-white"
        >
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
            <p className="mb-7 rounded-full border border-[#D6A0AA]/40 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#F0C7CE] sm:text-sm">
              Welcome to my portfolio
            </p>

            {/* FOTO PROFIL */}
            <div className="relative mb-8">
              <div className="absolute -inset-2 rounded-full border-2 border-[#D6A0AA]/70" />

              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[#D6A0AA] bg-[#FFF8F7] shadow-2xl shadow-black/20 sm:h-48 sm:w-48">
                <Image
                  src="/profile.jpeg"
                  alt="Foto profil Wina"
                  width={400}
                  height={400}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>

              <span className="absolute bottom-2 right-1 h-5 w-5 rounded-full border-4 border-[#6B2636] bg-[#D6A0AA]" />
            </div>

            <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              <span className="text-[#D6A0AA]">
                Wina Mahatsuna Atsmara Hanifah
               </span>
            </h1>
           
            {/* PROFESI BERGANTI OTOMATIS */}
            <div className="mt-6 flex min-h-10 items-center justify-center gap-2 text-lg font-semibold sm:text-2xl">
              <span className="text-white/80">I&apos;m a</span>
              <span
                key={roles[roleIndex]}
                className="animate-[fadeIn_0.5s_ease-in-out] text-[#D6A0AA]"
              >
                {roles[roleIndex]}
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              I enjoy designing intuitive user experiences and
              building responsive websites. I love exploring
              creative ideas, learning new technologies, and
              turning concepts into meaningful digital products.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#D6A0AA] px-7 py-3 font-semibold text-[#6B2636] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore My Work ↗
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition duration-300 hover:border-[#D6A0AA] hover:bg-white/10"
              >
                About Me
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {["UI/UX", "Frontend", "Web Design"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="#about"
              aria-label="Scroll to About Me"
              className="mt-12 animate-bounce text-2xl text-[#D6A0AA]"
            >
              ↓
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-20 bg-[#FFF8F7] px-6 py-24 text-[#6B2636] sm:py-28"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77A87]">
              Get to know me
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              About Me
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#765B60]">
              I am interested in UI/UX design and frontend
              development. I enjoy understanding user needs,
              creating clean interfaces, and transforming designs
              into responsive and functional websites. I am always
              excited to learn, experiment, and improve my skills.
            </p>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
              {[
                {
                  title: "Design",
                  description: "Creating intuitive and engaging interfaces.",
                },
                {
                  title: "Development",
                  description: "Building responsive web experiences.",
                },
                {
                  title: "Learning",
                  description: "Exploring tools and new technologies.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#D6A0AA]/40 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#765B60]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="scroll-mt-20 bg-white px-6 py-24 text-[#6B2636] sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77A87]">
                Tools & expertise
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                My Skills
              </h2>
              <p className="mt-4 text-[#765B60]">
                A collection of skills I am exploring and developing.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#D6A0AA]/50 bg-[#FFF8F7] px-5 py-3 text-sm font-medium transition hover:border-[#6B2636] hover:bg-[#6B2636] hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="scroll-mt-20 bg-[#FFF8F7] px-6 py-24 text-[#6B2636] sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77A87]">
                Selected work
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                My Projects
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-2xl border border-[#D6A0AA]/40 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-40 items-center justify-center bg-[#6B2636] p-6 text-center">
                    <span className="text-5xl font-bold text-[#D6A0AA]/80">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#B77A87]">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#765B60]">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#FFF0F2] px-3 py-1 text-xs text-[#6B2636]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATE */}
        <section
          id="certificate"
          className="scroll-mt-20 bg-white px-6 py-24 text-[#6B2636] sm:py-28"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77A87]">
              Learning journey
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Certificates
            </h2>
            <p className="mt-5 leading-7 text-[#765B60]">
              Courses, certifications, and learning experiences
              that support my design and development journey.
            </p>

            <div className="mt-8 rounded-2xl border border-dashed border-[#D6A0AA] bg-[#FFF8F7] p-10">
              <p className="font-medium">
                Your certificates will appear here.
              </p>
              <p className="mt-2 text-sm text-[#765B60]">
                Add your certificate images and details when ready.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="scroll-mt-20 bg-[#FFF8F7] px-6 py-24 text-[#6B2636] sm:py-28"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77A87]">
              My journey
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Experience
            </h2>
            <p className="mt-5 leading-7 text-[#765B60]">
              A place to showcase internships, organizations,
              freelance work, and other relevant experiences.
            </p>

            <div className="mt-8 rounded-2xl border border-[#D6A0AA]/40 bg-white p-8">
              <p className="font-semibold">
                Your experience goes here.
              </p>
              <p className="mt-2 text-sm text-[#765B60]">
                Add your actual role, organization, and dates.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-20 bg-white px-6 py-24 text-center text-[#6B2636]"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77A87]">
              Let&apos;s connect
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mt-5 leading-7 text-[#765B60]">
              I would love to connect, collaborate, and learn
              about new opportunities.
            </p>
            <a
              href="mailto:your-email@example.com"
              className="mt-8 inline-block rounded-full bg-[#6B2636] px-7 py-3 font-semibold text-white transition hover:bg-[#D6A0AA] hover:text-[#6B2636]"
            >
              Contact Me ↗
            </a>
          </div>
        </section>

        <footer className="bg-[#6B2636] px-6 py-8 text-center text-white">
          <p className="font-semibold">
            Wina Mahatsuna Atsmara Hanifah
          </p>
          <p className="mt-2 text-sm text-white/65">
            Designed with care © 2026
          </p>
        </footer>
      </main>
    </>
  );
}
