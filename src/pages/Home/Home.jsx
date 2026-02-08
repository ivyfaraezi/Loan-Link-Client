import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { loansAPI } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import {
  FiArrowRight,
  FiCheckCircle,
  FiDollarSign,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const { user } = useAuth();
  const [featuredLoans, setFeaturedLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedLoans();
  }, []);

  const fetchFeaturedLoans = async () => {
    try {
      const response = await loansAPI.getAll({ limit: 6, showOnHome: true });
      setFeaturedLoans(response.data.loans || []);
    } catch (error) {
      console.error("Error fetching loans:", error);
    } finally {
      setLoading(false);
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "David Martinez",
      role: "Restaurant Owner",
      image: "https://i.pravatar.cc/150?img=11",
      text: "LoanLink made it possible to renovate my restaurant during tough times. The entire application took just 10 minutes and funds were in my account the next day!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "E-commerce Seller",
      image: "https://i.pravatar.cc/150?img=5",
      text: "I needed quick capital to stock up for the holiday season. LoanLink offered the best rates I could find, and their support team guided me through every step.",
      rating: 5,
    },
    {
      id: 3,
      name: "James Okafor",
      role: "Tech Startup Founder",
      image: "https://i.pravatar.cc/150?img=12",
      text: "As a first-time borrower, I was nervous, but LoanLink's transparent process and zero hidden fees gave me complete confidence. Truly a game-changer!",
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Home - LoanLink | Microloan Management System</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-violet-600 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),_transparent_60%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-slate-950 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
                <FiCheckCircle size={14} /> Trusted by 10,000+ users
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Get Your <span className="text-accent-300">Microloan</span>{" "}
                Today
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed">
                Your trusted partner for fast, hassle-free microloans. Whether
                you're growing a business or managing personal needs, we offer
                tailored lending solutions with transparent terms and instant
                digital processing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/all-loans"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-700 font-semibold rounded-full hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
                >
                  Explore Loans <FiArrowRight />
                </Link>
                <Link
                  to={user ? "/dashboard/my-loans" : "/register"}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  {user ? "Go to Dashboard" : "Get Started"}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-400/30 to-primary-400/30 rounded-3xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1724781189475-a332f44de593?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Loan Management"
                  className="relative rounded-3xl shadow-2xl ring-1 ring-white/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FiUsers />, label: "Active Users", value: "10,000+" },
              {
                icon: <FiDollarSign />,
                label: "Loans Disbursed",
                value: "$5M+",
              },
              { icon: <FiCheckCircle />, label: "Success Rate", value: "98%" },
              {
                icon: <FiTrendingUp />,
                label: "Average Approval",
                value: "24hrs",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center text-2xl text-primary-600 dark:text-primary-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Loans Section */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="section-title font-heading">
              Explore Our Loan Options
            </h2>
            <p className="section-subtitle">
              Find the perfect microloan plan designed to match your financial
              goals
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {featuredLoans.map((loan, index) => (
                <motion.div
                  key={loan._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={
                        loan.image ||
                        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400"
                      }
                      alt={loan.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 badge-info">
                      {loan.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-3">
                      {loan.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 text-sm">
                      {loan.description}
                    </p>
                    <div className="flex justify-between items-center mb-5 py-3 border-y border-slate-100 dark:border-slate-700">
                      <div>
                        <span className="text-xs text-slate-400 uppercase tracking-wide">
                          Interest
                        </span>
                        <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                          {loan.interestRate !== undefined &&
                          loan.interestRate !== null
                            ? `${loan.interestRate}%`
                            : "--"}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-400 uppercase tracking-wide">
                          Max Limit
                        </span>
                        <div className="text-lg font-bold text-slate-900 dark:text-white">
                          ${loan.maxLimit?.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/loan/${loan._id}`}
                      className="block w-full text-center btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/all-loans"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Loans <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h2 className="section-title font-heading">
              Simple & Fast Process
            </h2>
            <p className="section-subtitle">
              From application to approval — experience a seamless journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 dark:from-primary-800 dark:via-primary-600 dark:to-primary-800"></div>
            {[
              {
                step: "01",
                title: "Create Account",
                description:
                  "Sign up and complete your profile with basic information",
                icon: "📝",
              },
              {
                step: "02",
                title: "Apply for Loan",
                description: "Choose a loan and fill out the application form",
                icon: "💼",
              },
              {
                step: "03",
                title: "Get Approved",
                description: "Receive approval and get your funds deposited",
                icon: "✅",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/50 dark:to-primary-800/30 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-5 border border-primary-200 dark:border-primary-700 relative z-10">
                  {item.icon}
                </div>
                <span className="inline-block text-xs font-bold tracking-widest text-primary-500 uppercase mb-2">
                  Step {item.step}
                </span>
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="section-title font-heading">Voices of Trust</h2>
            <p className="section-subtitle">
              Hear from people who transformed their dreams into reality
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white dark:bg-slate-800 p-7 rounded-2xl border border-slate-100 dark:border-slate-700 h-full relative">
                  <div className="absolute top-5 right-6 text-4xl text-primary-100 dark:text-primary-900/50 font-serif">
                    "
                  </div>
                  <div className="flex items-center mb-5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4 ring-2 ring-primary-200 dark:ring-primary-700 ring-offset-2 ring-offset-white dark:ring-offset-slate-800"
                    />
                    <div>
                      <h4 className="font-heading font-semibold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-5 text-sm leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="section-title font-heading">
              The LoanLink Advantage
            </h2>
            <p className="section-subtitle">
              Built on trust, powered by technology — here's what sets us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🚀",
                title: "Instant Disbursal",
                desc: "Funds in your account within hours",
              },
              {
                icon: "📊",
                title: "Smart Analytics",
                desc: "Track your loan health in real-time",
              },
              {
                icon: "🔄",
                title: "Flexible Plans",
                desc: "Customize your repayment schedule",
              },
              {
                icon: "🛡️",
                title: "No Hidden Fees",
                desc: "100% transparent pricing",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900 p-7 rounded-2xl text-center border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 via-primary-600 to-violet-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.1),_transparent_60%)]"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Take the First Step Today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-100">
              Thousands have already unlocked their potential with LoanLink.
              Your journey to financial freedom starts here.
            </p>
            <Link
              to={user ? "/all-loans" : "/register"}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-full hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
            >
              {user ? "Browse Loans" : "Apply Now"} <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
