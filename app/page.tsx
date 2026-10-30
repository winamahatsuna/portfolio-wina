
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

const roles = [
  "UI/UX Designer",
  "Frontend Developer",
  "Website & Mobile Designer",
  "Quality Assurance Enthusiast",
];

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and functional websites.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "GitHub",
      "Visual Studio Code",
    ],
  },
  {
    title: "UI/UX & Product Design",
    description: "Designing intuitive and user-friendly digital experiences.",
    skills: [
      "Figma",
      "Maze",
      "User Research",
      "User Flow",
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Design System",
      "Miro",
      "Balsamiq",
      "Canva",
    ],
  },
  {
    title: "Quality Assurance",
    description: "Evaluating functionality and usability to improve product quality.",
    skills: [
      "Manual Testing",
      "UI Testing",
      "Test Case",
      "Usability Testing",
      "User Acceptance Testing",
      "System Usability Scale",
    ],
  },
  {
    title: "Other Tools",
    description: "Additional tools for supporting creative and collaborative work.",
    skills: [
      "Visual Paradigm",
      "CapCut",
    ],
  },
];


const projects = [
  {
    number: "01",
    title: "Website PMBM MIN 3 Karanganyar",
    category: "UI/UX Design & Web Development",
    description:
      "Perancangan dan pengembangan antarmuka website Penerimaan Murid Baru Madrasah menggunakan metode Design Thinking. Berfokus pada kebutuhan orang tua, panitia, dan tata usaha.",
    tags: ["Figma", "Design Thinking", "UAT", "SEQ", "SUS"],
    image: "/projects/pmbm-cover.png",
    link: "https://www.behance.net/gallery/257843473/Website-PMBM-MIN-3-Karanganyar",
  },
  {
    number: "02",
    title: "QE Deployment",
    category: "Web Development",
    description:
      "Pengembangan website untuk mendukung dokumentasi dan pengelolaan data deployment, termasuk informasi proyek, lokasi, status, dan dokumentasi foto.",
    tags: ["Laravel", "PHP", "Web Development"],
    image: null,
    link: null,
  },
  {
    number: "03",
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "Website portfolio personal untuk memperkenalkan profil, menampilkan keterampilan, project, sertifikat, dan pengalaman.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: null,
    link: null,
  },
  {
    number: "04",
    title: "QateringGo",
    category: "UI/UX Design & Mobile App Design",
    description:
      "Sebuah konsep marketplace katering digital yang dirancang untuk menghubungkan pelanggan dengan penyedia jasa katering. Platform ini bertujuan untuk mempermudah proses pencarian, pemilihan, dan pemesanan layanan katering melalui satu platform digital yang terintegrasi.",
    tags: ["UI/UX Design", "Marketplace", "Catering"],
    image: "/projects/qateringgo-cover.png",
    link: "https://www.behance.net/gallery/257755261/QateringGO",
  },

];


const experiences = [
  {
    role: "Internship – QE Deployment Project",
    organization: "PT Telkom Indonesia",
    description:
      "Terlibat dalam pengembangan website QE Deployment untuk mendukung dokumentasi dan pengelolaan informasi pekerjaan deployment.",
  },
];

const certificates = [
  {
    title: "System Analyst",
    category: "BNSP Professional Certification",
    description:
      "Professional competency certification in system analysis.",
    status: "Certified",
    icon: "🏅",
  },
  {
    title: "English Proficiency Test (EPrT)",
    category: "Telkom University",
    description:
      "English language proficiency assessment.",
    status: "Test Completed",
    icon: "🌐",
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
          className="flex min-h-screen scroll-mt-20 flex-col items-center justify-center bg-[#572333] px-6 pb-16 pt-32 text-center text-white"
        >
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center">

            <p className="mb-7 rounded-full border border-[#D6A0AA]/40 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#F4DDE2] sm:text-sm">
              Welcome to my portfolio
            </p>

            <div className="relative mb-8">
              <div className="absolute -inset-2 rounded-full border-2 border-[#D6A0AA]/70" />

              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[#D6A0AA] bg-[#FFF8F7] shadow-2xl sm:h-48 sm:w-48">
                <Image
                  src="/profile.jpeg"
                  alt="Foto profil Wina"
                  width={400}
                  height={400}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <p className="mb-3 text-sm text-white/70">
              Hello, I'm
            </p>

            <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              <span className="text-[#D6A0AA]">
                Wina Mahatsuna Atsmara Hanifah
              </span>
            </h1>

            <div className="mt-6 flex min-h-10 items-center justify-center text-lg font-semibold sm:text-2xl">
              <span
                key={roles[roleIndex]}
                className="animate-[fadeIn_0.5s_ease-in-out] text-[#D6A0AA]"
              >
                {roles[roleIndex]}
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              I enjoy creating user-friendly, visually appealing, and
              responsive digital experiences. I love combining design
              and technology to build digital products that are functional,
              accessible, and meaningful.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#D6A0AA] px-7 py-3 font-semibold text-[#572333] transition hover:-translate-y-1 hover:bg-white"
              >
                View My Projects ↗
              </a>

              <a
                href="/Wina-CV.pdf"
                download
                className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:border-[#D6A0AA] hover:bg-white/10"
              >
                Download CV ↓
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["UI/UX Design", "Frontend Development", "Quality Assurance"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80"
                  >
                    {item}
                  </span>
                )
              )}
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

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A85F75]">
              Get to know me
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              About Me
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-justify text-base leading-8 text-[#765B60]">
              Hello! I'm Wina Mahatsuna Atsmara Hanifah, an Information
              Systems student at Telkom University with a strong interest
              in UI/UX Design, Web Development, Mobile Design, and
              Quality Assurance.

              {" "}I enjoy exploring the intersection of design and
              technology to create digital experiences that are intuitive,
              user-friendly, and visually appealing. I have an interest
              in understanding user needs, designing interfaces, and
              developing responsive websites.

              {" "}I am a collaborative person who enjoys working in a
              team, sharing ideas, and learning from different perspectives.
              I am also eager to explore new technologies, improve my skills,
              and adapt to new challenges.

              {" "}My goal is to grow as a UI/UX Designer and Frontend
              Developer while continuously developing my knowledge in
              digital product design and software quality assurance.
            </p>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
              {[
                {
                  title: "Creative Design",
                  description:
                    "Creating intuitive interfaces and meaningful user experiences.",
                },
                {
                  title: "Web Development",
                  description:
                    "Transforming design concepts into responsive websites.",
                },
                {
                  title: "Team Collaboration",
                  description:
                    "Sharing ideas, communicating, and learning together.",
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
          className="scroll-mt-20 bg-[#F4DDE2] px-6 py-24 text-[#572333] sm:py-28"
        >
          <div className="mx-auto max-w-6xl">

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77A87]">
                Tools & Expertise
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                My Skills
              </h2>

              <p className="mt-4 text-[#765B60]">
                Skills and tools that I use and continue to develop.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="rounded-2xl border border-[#D6A0AA]/40 bg-[#FFF8F7] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#572333] font-bold text-[#D6A0AA]">
                      0{index + 1}
                    </span>

                    <h3 className="text-xl font-bold">
                      {category.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#765B60]">
                    {category.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#D6A0AA]/50 bg-white px-3 py-2 text-xs font-medium text-[#6B2636] transition hover:bg-[#6B2636] hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        

{/* PROJECTS */}
<section
  id="projects"
  className="scroll-mt-20 bg-[#FFF8F7] px-6 py-24 text-[#572333] sm:py-28"
>
  <div className="mx-auto max-w-6xl">

    {/* SECTION HEADER */}
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A85F75]">
        Selected Work
      </p>

      <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
        My Projects
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#765B60]">
        A selection of projects where I explore design,
        technology, and user-centered digital experiences.
      </p>
    </div>

    {/* PROJECT CARDS */}
    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {projects.map((project) => (
        <article
          key={project.number}
          className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8C6CC] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(107,38,54,0.12)]"
        >

          {/* PROJECT PREVIEW */}
          <div className="relative aspect-[4/3] overflow-hidden bg-[#F4DDE2]">

            {project.image ? (
              <Image
                src={project.image}
                alt={`Preview ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[#572333] p-6">

                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#D6A0AA]/30" />

                <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full border border-[#D6A0AA]/30" />

                <div className="relative flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F0C7CE]">
                    Featured Work
                  </span>

                  <span className="text-sm font-bold text-[#D6A0AA]">
                    {project.number}
                  </span>
                </div>

                <div className="relative">
                  <p className="text-xs uppercase tracking-widest text-[#D6A0AA]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                    {project.title}
                  </h3>
                </div>

              </div>
            )}

            {/* PROJECT NUMBER */}
            {project.image && (
              <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#572333] shadow-sm backdrop-blur-sm">
                {project.number}
              </span>
            )}

          </div>

          {/* PROJECT INFORMATION */}
          <div className="flex flex-1 flex-col p-6">

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A85F75]">
              {project.category}
            </p>

            <h3 className="mt-3 text-xl font-bold leading-snug text-[#572333] transition-colors group-hover:text-[#A85F75]">
              {project.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-7 text-[#765B60]">
              {project.description}
            </p>

            {/* PROJECT TAGS */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#E8C6CC] bg-[#FFF8F7] px-3 py-1.5 text-xs font-medium text-[#765B60]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* PROJECT LINK */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-between border-t border-[#F0DDE1] pt-5 text-sm font-semibold text-[#572333] transition-colors hover:text-[#A85F75]"
              >
                <span>View Case Study</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            )}

          </div>
        </article>
      ))}

    </div>
  </div>
</section>

        {/* CERTIFICATES */}
        <section
          id="certificate"
          className="scroll-mt-20 bg-[#F4DDE2] px-6 py-24 text-[#572333] sm:py-28"
        >
          <div className="mx-auto max-w-5xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A85F75]">
              Learning Journey
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Certificates
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#765B60]">
              Courses, certifications, and learning experiences
              that support my design and development journey.
            </p>

            <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
              {certificates.map((certificate, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E8C6CC] bg-[#FFF8F7] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-3xl shadow-sm">
                      {certificate.icon}
                    </div>

                    <span className="rounded-full bg-[#F3E1E5] px-4 py-2 text-xs font-semibold text-[#6B2636]">
                      {certificate.status}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#A85F75]">
                    {certificate.category}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#765B60]">
                    {certificate.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* EXPERIENCE */}
        <section
          id="experience"
          className="scroll-mt-20 bg-[#FFF8F7] px-6 py-24 text-[#572333] sm:py-28"
        >
          <div className="mx-auto max-w-4xl">

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B77A87]">
                My Journey
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Experience
              </h2>
            </div>

            <div className="mt-12 space-y-6">
              {experiences.map((experience) => (
                <div
                  key={experience.role}
                  className="rounded-2xl border border-[#E8C6CC] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#B77A87]">
                    Professional Experience
                  </p>

                  <h3 className="mt-3 text-xl font-bold">
                    {experience.role}
                  </h3>

                  <p className="mt-2 font-medium">
                    {experience.organization}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#765B60]">
                    {experience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

          
        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-20 bg-[#FFF8F7] px-6 py-24 text-[#572333] sm:py-28"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A85F75]">
                Get in Touch
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                Let's Connect!
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#765B60] sm:text-base">
                Feel free to reach out. I'd love to connect and explore
                new opportunities, creative ideas, and collaborations.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: "in",
                  label: "LINKEDIN",
                  value: "www.linkedin.com/in/winamahatsuna",
                },
                {
                  icon: "✉",
                  label: "EMAIL",
                  value: "winamhtsna@gmail.com",
                },
                {
                  icon: "⌖",
                  label: "LOCATION",
                  value: "Bandung, Indonesia",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#E8C6CC] bg-[#F4DDE2] p-7 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#572333] text-xl font-bold text-[#D6A0AA]">
                    {item.icon}
                  </div>

                  <p className="mt-5 text-xs font-bold tracking-[0.18em] text-[#A85F75]">
                    {item.label}
                  </p>

                  <p className="mt-3 break-all text-sm font-medium leading-6 text-[#572333]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#572333] px-6 py-8 text-center">
          <p className="text-xs leading-6 text-white/75">
            © 2026 Wina Mahatsuna Atsmara Hanifah.
            All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
