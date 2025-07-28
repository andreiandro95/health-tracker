import { ChartLine, HeartPulse } from "lucide-react";
import {
  FaBed,
  FaBell,
  FaChartLine,
  FaCheckCircle,
  FaLock,
  FaWeight,
} from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="flex items-center">
            <HeartPulse className="mr-2 text-2xl text-blue-500" />
            <span className="text-xl font-bold text-blue-600">HealthTrack</span>
          </h1>
          <nav>
            <a
              href="#login"
              className="rounded-full bg-blue-600 px-6 py-2 font-medium text-white transition duration-300 hover:bg-blue-700"
            >
              Login / Register
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-12 md:mb-0 md:w-1/2">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Take Control of Your Health
              </h1>
              <p className="mb-8 text-xl opacity-90">
                Track, monitor, and understand your health metrics in one place.
                From blood oxygen to sleep patterns, we've got you covered.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#login"
                  className="rounded-full border-2 border-blue-600 bg-white px-8 py-3 text-center font-bold text-blue-600 transition duration-300 hover:border-2 hover:border-white hover:bg-blue-600 hover:text-white"
                >
                  Get Started
                </Link>
                <Link
                  href="#features"
                  className="rounded-full border-2 border-white px-8 py-3 text-center font-bold transition duration-300 hover:bg-white hover:text-blue-600"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:w-1/2">
              <div className="relative max-w-md">
                <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-blue-400 opacity-20"></div>
                <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-blue-400 opacity-20"></div>
                <div className="border-opacity-20 relative rounded-2xl border border-white bg-white/10 p-6 shadow-xl backdrop-blur-lg backdrop-filter">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-80">Today&apos;s Summary</p>
                      <h3 className="text-xl font-bold">Your Health Stats</h3>
                    </div>
                    <div className="rounded-full bg-white/20 p-2">
                      <ChartLine className="text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-sm opacity-80">Blood Oxygen</p>
                      <p className="text-2xl font-bold">98%</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-sm opacity-80">Blood Pressure</p>
                      <p className="text-2xl font-bold">120/80</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-sm opacity-80">Weight</p>
                      <p className="text-2xl font-bold">72kg</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-sm opacity-80">Sleep</p>
                      <p className="text-2xl font-bold">7.5h</p>
                    </div>
                  </div>
                  <div className="border-opacity-20 mt-6 border-t border-white pt-4">
                    <Link
                      href={"/admin"}
                      className="block w-full rounded-lg bg-white/20 py-2 text-center text-sm font-medium transition duration-300 hover:bg-white/30"
                    >
                      View Full Report
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Comprehensive Health Tracking
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Monitor all aspects of your wellbeing with our intuitive dashboard
              and detailed analytics.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="feature-card rounded-xl bg-white p-8 shadow-md transition duration-300">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100">
                <HeartPulse className="text-2xl text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Vital Signs</h3>
              <p className="mb-4 text-gray-600">
                Track blood oxygen, blood pressure, heart rate, and other
                critical health metrics with easy-to-use input forms.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-blue-500" />
                  <span>Detailed history</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-blue-500" />
                  <span>Visual trends</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-blue-500" />
                  <span>Custom reminders</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="feature-card rounded-xl bg-white p-8 shadow-md transition duration-300">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-green-100">
                <FaWeight className="text-2xl text-green-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Weight & Nutrition</h3>
              <p className="mb-4 text-gray-600">
                Monitor your weight changes and nutritional intake with
                comprehensive tracking and goal setting.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Progress charts</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>BMI calculator</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  <span>Custom targets</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="feature-card rounded-xl bg-white p-8 shadow-md transition duration-300">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-purple-100">
                <FaBed className="text-2xl text-purple-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Sleep Analysis</h3>
              <p className="mb-4 text-gray-600">
                Record and analyze your sleep patterns to improve sleep quality
                and overall wellbeing.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-purple-500" />
                  <span>Sleep duration tracking</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-purple-500" />
                  <span>Quality assessment</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-purple-500" />
                  <span>Sleep recommendations</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="feature-card rounded-xl bg-white p-8 shadow-md transition duration-300">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-yellow-100">
                <FaChartLine className="text-2xl text-yellow-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Trends & Analytics</h3>
              <p className="mb-4 text-gray-600">
                Visualize your health data with beautiful charts and graphs to
                spot patterns and improvements.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-yellow-500" />
                  <span>Custom time periods</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-yellow-500" />
                  <span>Correlation analysis</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-yellow-500" />
                  <span>Exportable reports</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="feature-card rounded-xl bg-white p-8 shadow-md transition duration-300">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100">
                <FaBell className="text-2xl text-red-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Reminders & Alerts</h3>
              <p className="mb-4 text-gray-600">
                Never miss a measurement with customizable reminders and health
                alerts.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-red-500" />
                  <span>Measurement reminders</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-red-500" />
                  <span>Health threshold alerts</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-red-500" />
                  <span>Medication tracking</span>
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="feature-card rounded-xl bg-white p-8 shadow-md transition duration-300">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-100">
                <FaLock className="text-2xl text-indigo-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Secure & Private</h3>
              <p className="mb-4 text-gray-600">
                Your health data is encrypted and protected with
                enterprise-grade security measures.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-indigo-500" />
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-indigo-500" />
                  <span>Biometric authentication</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-indigo-500" />
                  <span>Data ownership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Trusted by Health-Conscious Individuals
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Join thousands who have taken control of their health journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-8">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <span className="font-bold text-blue-600">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">John D.</h4>
                  <p className="text-sm text-gray-500">Hypertension patient</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Tracking my blood pressure daily has helped me and my doctor
                make better treatment decisions. The trends feature is
                invaluable."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-8">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <span className="font-bold text-purple-600">SM</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah M.</h4>
                  <p className="text-sm text-gray-500">Fitness enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The sleep tracking combined with my workout data helped me
                optimize my recovery. I've never felt better!"
              </p>
              <div className="mt-4 flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-8">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <span className="font-bold text-green-600">RT</span>
                </div>
                <div>
                  <h4 className="font-bold">Robert T.</h4>
                  <p className="text-sm text-gray-500">Weight loss journey</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Seeing all my health metrics in one place keeps me motivated.
                The weight tracking with body measurements is perfect for my
                goals."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="login" className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Take Control of Your Health?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            Join HealthTrack today and start your journey to better health
            awareness and management.
          </p>

          <div className="border-opacity-20 mx-auto max-w-md rounded-2xl border border-white bg-white/10 p-8 shadow-xl backdrop-blur-lg backdrop-filter">
            <h3 className="mb-6 text-xl font-bold">Create Your Free Account</h3>

            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="border-opacity-30 placeholder-opacity-70 focus:ring-opacity-50 w-full rounded-lg border border-white bg-white/20 px-4 py-3 text-white placeholder-white focus:ring-2 focus:ring-white focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Create password"
                  className="border-opacity-30 placeholder-opacity-70 focus:ring-opacity-50 w-full rounded-lg border border-white bg-white/20 px-4 py-3 text-white placeholder-white focus:ring-2 focus:ring-white focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-white px-6 py-3 font-bold text-blue-600 transition duration-300 hover:bg-gray-100"
              >
                Sign Up Free
              </button>
            </form>

            <div className="border-opacity-20 mt-6 border-t border-white pt-4">
              <p className="text-sm opacity-80">
                Already have an account?{" "}
                <a href="#" className="font-bold hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="mb-8 md:mb-0">
              <div className="mb-4 flex items-center">
                <i className="fas fa-heartbeat mr-2 text-2xl text-blue-400"></i>
                <span className="text-xl font-bold">HealthTrack</span>
              </div>
              <p className="max-w-xs text-gray-400">
                Your personal health companion for tracking, monitoring, and
                improving your wellbeing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <h4 className="mb-4 font-bold text-gray-300">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-white"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-white"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-white"
                    >
                      Mobile App
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-bold text-gray-300">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-white"
                    >
                      Guides
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-white"
                    >
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-bold text-gray-300">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-white"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
            <p className="mb-4 text-gray-400 md:mb-0">
              © 2023 HealthTrack. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 transition hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 transition hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 transition hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 transition hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
