"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  ChartBar,
  Users,
  Star,
  TrendingUp,
  Target,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

// Animation variants with proper typing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

export default function Home() {
  const features = [
    {
      name: "Verified Farmers",
      description:
        "All farmers undergo thorough KYC and document verification including NIN, CAC, and farm location validation.",
      icon: ShieldCheck,
      color: "var(--primary-500)",
    },
    {
      name: "Transparent Returns",
      description:
        "Clear investment terms with defined returns. Track your investment growth in real-time.",
      icon: ChartBar,
      color: "var(--primary-600)",
    },
    {
      name: "Risk-Managed Tiers",
      description:
        "Six-tier ranking system ensures appropriate funding limits based on farmer credibility and experience.",
      icon: Star,
      color: "var(--primary-700)",
    },
    {
      name: "Diverse Portfolio",
      description:
        "Invest in both seasonal crops and livestock. Build a balanced agricultural investment portfolio.",
      icon: Users,
      color: "var(--primary-500)",
    },
  ];

  const investmentStats = [
    { value: "₦250M+", label: "Total Investments", icon: TrendingUp },
    { value: "1.2K+", label: "Verified Farmers", icon: Users },
    { value: "8.5K+", label: "Active Investors", icon: ChartBar },
    { value: "96%", label: "Success Rate", icon: Target },
  ];

  const trustIndicators = [
    "Bank-level Security",
    "Regulatory Compliant",
    "24/7 Support",
    "Instant Updates",
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="shrink-0 flex items-center">
                <div className="w-8 h-8 bg-(--primary-500) rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  AgriFund Hub
                </span>
              </div>
            </motion.div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Features", "How It Works", "Farmers", "Investors"].map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      href="#"
                      className="text-gray-700 hover:text-(--primary-500) transition-colors font-medium relative group"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-(--primary-500) group-hover:w-full transition-all duration-300"></span>
                    </motion.a>
                  )
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-(--primary-500) transition-colors font-medium"
                >
                  Sign In
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/signup"
                  className="bg-(--primary-500) text-white px-6 py-2 rounded-lg font-medium hover:bg-(--primary-600) transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-(--primary-50) to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
              >
                Grow Your Wealth with{" "}
                <span className="gradient-text">Smart Farming</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-xl text-gray-600 max-w-2xl leading-relaxed"
              >
                Connect directly with verified Nigerian farmers. Invest in
                agriculture with confidence through our secure, transparent
                platform. Earn competitive returns while supporting local
                agriculture.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/investments"
                    className="bg-(--primary-500) text-white px-8 py-4 rounded-xl font-semibold hover:bg-(--primary-600) transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    Explore Investments
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/farmers"
                    className="border-2 border-(--primary-500) text-(--primary-500) px-8 py-4 rounded-xl font-semibold hover:bg-(--primary-50) transition-all duration-300 flex items-center justify-center group"
                  >
                    For Farmers
                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="mt-12 flex flex-wrap gap-6"
              >
                {trustIndicators.map((indicator, index) => (
                  <div key={indicator} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-(--primary-500)" />
                    <span className="text-gray-600 font-medium">
                      {indicator}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Visual - Placeholder for future graphic */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-linear-to-br from-(--primary-500) to-(--primary-700) rounded-3xl p-8 text-white float-animation">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Smart Investments</h3>
                  <p className="text-(--primary-100)">
                    Growing together with Nigerian agriculture
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-(--secondary-gold) rounded-full"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -right-6 w-12 h-12 bg-(--primary-100) rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Stats Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-(--primary-50) transition-colors duration-300 group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-(--primary-500) rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-(--primary-600) transition-colors">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-(--primary-500) group-hover:text-(--primary-700) transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-2 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-(--cream-canvas) border border-(--secondary-gold)/20 rounded-2xl"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-(--secondary-gold) rounded-full animate-pulse"></div>
                <span className="ml-2 text-sm font-semibold text-(--rich-soil)">
                  Live Investment Opportunity
                </span>
              </div>
              <h4 className="mt-2 font-semibold text-gray-900 text-lg">
                Maize Farm Investment - Kaduna
              </h4>
              <div className="mt-3 flex justify-between text-sm text-gray-600">
                <span>Target: ₦2.5M</span>
                <span>Raised: 78%</span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  className="bg-(--primary-500) h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "78%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose AgriFund Hub?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We've built a platform that prioritizes security, transparency,
              and growth for both farmers and investors.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="w-14 h-14 bg-(--primary-50) rounded-2xl flex items-center justify-center group-hover:bg-(--primary-100) transition-colors duration-300"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon
                    className="w-7 h-7"
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-(--primary-600) transition-colors">
                  {feature.name}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-linear-to-r from-(--primary-500) to-(--primary-700) relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Start Your Agricultural Investment Journey?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-xl text-green-100 mb-10"
          >
            Join thousands of investors and farmers building the future of
            Nigerian agriculture.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/register?type=investor"
                className="bg-white text-(--primary-500) px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Start Investing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/register?type=farmer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center"
              >
                Apply as Farmer
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-(--primary-500) rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="ml-2 text-xl font-bold">AgriFund Hub</span>
              </div>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Connecting farmers with capital, empowering investors with
                opportunities. Building a sustainable agricultural future for
                Nigeria.
              </p>
            </motion.div>

            {[
              {
                title: "Platform",
                links: ["Features", "How It Works", "Pricing", "FAQ"],
              },
              {
                title: "Company",
                links: ["About Us", "Blog", "Careers", "Contact"],
              },
              {
                title: "Legal",
                links: [
                  "Privacy Policy",
                  "Terms of Service",
                  "Disclaimer",
                  "Compliance",
                ],
              },
            ].map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + sectionIndex * 0.1 }}
              >
                <h3 className="font-semibold text-gray-200 text-lg mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
          >
            <p>
              &copy; 2024 AgriFund Hub. All rights reserved. Building the future
              of Nigerian agriculture.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
