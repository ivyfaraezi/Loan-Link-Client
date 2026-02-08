import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FiTarget, FiEye, FiAward, FiUsers } from "react-icons/fi";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Emily Carter",
      role: "CEO & Co-Founder",
      image: "https://i.pravatar.cc/300?img=32",
      bio: "Fintech visionary with 12+ years in digital lending",
    },
    {
      name: "Rafiq Hasan",
      role: "Chief Technology Officer",
      image: "https://i.pravatar.cc/300?img=59",
      bio: "Full-stack architect & AI enthusiast",
    },
    {
      name: "Nadia Sultana",
      role: "VP of Product",
      image: "https://i.pravatar.cc/300?img=44",
      bio: "User-centric design & product strategy leader",
    },
    {
      name: "Carlos Mendez",
      role: "Chief Risk Officer",
      image: "https://i.pravatar.cc/300?img=53",
      bio: "Expert in credit risk modeling & compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - LoanLink</title>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-slate-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-violet-600 text-white py-16">
          <div className="container-custom text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Who We Are
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl max-w-2xl mx-auto"
            >
              A mission-driven team reshaping how people access microfinance —
              one loan at a time
            </motion.p>
          </div>
        </div>

        {/* Our Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  How It All Began
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  LoanLink was born in 2021 when a group of finance and tech
                  professionals saw a glaring gap — millions of hardworking
                  people were shut out from traditional lending. We set out to
                  change that with a digital-first approach to microfinance.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  What started as a small initiative in Dhaka has grown into a
                  platform trusted by thousands across the country. Our
                  technology automates the complex parts of lending so borrowers
                  can focus on what matters — building their future.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  We believe everyone deserves a fair shot at financial
                  opportunity. That belief drives every feature we build and
                  every decision we make.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Financial empowerment"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-slate-50 dark:bg-slate-800">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                  <FiTarget
                    className="text-primary-600 dark:text-primary-400"
                    size={32}
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  To break down barriers in financial access by delivering a
                  fast, fair, and fully digital microloan experience — putting
                  borrowers first at every step of the journey.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                  <FiEye
                    className="text-primary-600 dark:text-primary-400"
                    size={32}
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  To be the most trusted name in digital microfinance worldwide
                  — where anyone, anywhere, can access the capital they need to
                  grow, build, and thrive.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">What We Stand For</h2>
              <p className="section-subtitle">
                Our values shape every interaction and product we build
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🔍",
                  title: "Radical Transparency",
                  description:
                    "Every fee, rate, and term is upfront — no fine print, ever",
                },
                {
                  icon: "🌍",
                  title: "Inclusion First",
                  description:
                    "Designed for underserved communities and first-time borrowers",
                },
                {
                  icon: "🧠",
                  title: "Smart Technology",
                  description:
                    "AI-powered decisions for faster, fairer loan approvals",
                },
                {
                  icon: "💚",
                  title: "Customer Obsession",
                  description:
                    "Your success is our success — we go the extra mile",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-gradient-to-r from-primary-700 via-primary-600 to-violet-600 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "15,000+", label: "Borrowers Served" },
                { number: "$8.2M+", label: "Total Funds Disbursed" },
                { number: "99.2%", label: "Repayment Success" },
                { number: "<12hrs", label: "Avg. Approval Time" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">The People Behind LoanLink</h2>
              <p className="section-subtitle">
                A diverse team united by a shared passion for financial
                inclusion
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-primary-200 dark:border-primary-800"
                  />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="section-padding bg-slate-50 dark:bg-slate-800">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Milestones & Recognition</h2>
              <p className="section-subtitle">
                Achievements that fuel our drive to do more
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FiAward size={48} />,
                  title: "Fintech Startup of the Year 2024",
                  org: "South Asia Digital Finance Summit",
                },
                {
                  icon: <FiUsers size={48} />,
                  title: "Best User Experience in Lending",
                  org: "UX Design Awards 2025",
                },
                {
                  icon: <FiTarget size={48} />,
                  title: "Top 5 Microfinance Innovators",
                  org: "World Microfinance Forum",
                },
              ].map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-900 p-8 rounded-xl text-center"
                >
                  <div className="text-primary-600 dark:text-primary-400 flex justify-center mb-4">
                    {award.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {award.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {award.org}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
