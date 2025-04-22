"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">
            <span className="text-gray-900 dark:text-white">Abhishek</span>
            <span className="text-gray-600 dark:text-gray-400">Sahni</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#about" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
              About
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              Projects
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
              Skills
            </Link>
            <Link
              href="#certifications"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              Certifications
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="https://github.com/abhisahni00" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/abhishek-sahni" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white" />
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm <span className="text-gray-700 dark:text-gray-300">Abhishek Sahni</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-300">
              Machine Learning Enthusiast
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Passionate about leveraging AI and machine learning to solve real-world problems. Exploring the
              intersection of data science and practical applications.
            </p>
            <div className="flex space-x-4">
              <Button
                className="bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-600 hover:bg-gray-100 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800"
                asChild
              >
                <a href="https://drive.google.com/file/d/1Tn7lf839XgPkxe-a_e7_bh54_ORxH9wD/view?usp=drive_link" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image
                src="/Profile.jpg?height=320&width=320"
                alt="Abhishek Sahni"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm a dedicated machine learning enthusiast with a passion for developing intelligent systems that can
                learn and adapt. My journey in the field of AI began during my undergraduate studies, where I was
                fascinated by the potential of algorithms to mimic human intelligence.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Since then, I've been continuously exploring various aspects of machine learning, from supervised and
                unsupervised learning to deep neural networks and reinforcement learning. I believe in the power of AI
                to transform industries and improve lives.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-gray-600 dark:border-gray-400 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">
                    Lovely Professional University, Punjab
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">B.Tech CSE-Data Science with ML | CGPA: 6.63</p>
                  <p className="text-gray-500 dark:text-gray-500">Aug'2022 – Present</p>
                </div>
                <div className="border-l-2 border-gray-600 dark:border-gray-400 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">D.A.V Public School, Ambala Cantt</h4>
                  <p className="text-gray-600 dark:text-gray-400">Senior Secondary | Percentage: 68.4</p>
                  <p className="text-gray-500 dark:text-gray-500">Apr'2021 – Jul'2022</p>
                </div>
                <div className="border-l-2 border-gray-600 dark:border-gray-400 pl-4">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">D.A.V Public School, Ambala Cantt</h4>
                  <p className="text-gray-600 dark:text-gray-400">Secondary | Percentage: 76.2</p>
                  <p className="text-gray-500 dark:text-gray-500">Apr'2019 – Jul'2020</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Now above Skills */}
        <section id="projects" className="py-16 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/HeartDisease.png?height=200&width=400"
                  alt="Heart Disease Prediction"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Heart Disease Prediction
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Built classification models including Logistic Regression to predict heart disease using clinical
                  data. Performed exploratory data analysis, feature selection, and evaluation using metrics like
                  accuracy and classification reports.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Logistic Regression</Badge>
                  <Badge variant="outline">Naive Bayes</Badge>
                  <Badge variant="outline">EDA</Badge>
                </div>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-600 hover:bg-gray-100 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800"
                    asChild
                  >
                    <a
                      href="https://github.com/abhisahni00/Heart-Disease-Prediction"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/Sentimental.jpg?height=200&width=400"
                  alt="Sentimental Analysis"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Sentimental Analysis on IMDB Reviews</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Developed a sentiment analysis model on IMDB movie reviews using TF-IDF vectorization with Logistic
                  Regression and Multinomial Naive Bayes. Conducted comprehensive text preprocessing, and evaluated
                  models using accuracy_score and classification reports.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">NLP</Badge>
                  <Badge variant="outline">TF-IDF</Badge>
                  <Badge variant="outline">Naive Bayes</Badge>
                </div>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-600 hover:bg-gray-100 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800"
                    asChild
                  >
                    <a
                      href="https://github.com/abhisahni00/Sentimental-Analysis-on-IMDB-Reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/WineQuality.jpg?height=200&width=400"
                  alt="Wine Quality Prediction"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Wine Quality Prediction</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Conducted a comprehensive wine quality analysis using machine learning to predict and evaluate wine
                  quality based on chemical and sensory attributes. Utilized the Random Forest algorithm for
                  classification, achieving 93% accuracy.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Random Forest</Badge>
                  <Badge variant="outline">Feature Selection</Badge>
                  <Badge variant="outline">Python</Badge>
                </div>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-600 hover:bg-gray-100 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800"
                    asChild
                  >
                    <a href="https://github.com/abhisahni00/Wine-Prediction" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 - EDA on BlinkIt */}
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/Blinkit.png?height=200&width=400"
                  alt="EDA on BlinkIt Sales Dataset"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  EDA on BlinkIt Sales Dataset
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Performed Exploratory Data Analysis (EDA) on 4,568 BlinkIt sales data to uncover patterns in product
                  performance and identify key drivers influencing sales. Leveraged Python (Pandas) for dataset cleaning
                  and preparation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  
                  <Badge variant="outline">Feature Selection</Badge>
                  <Badge variant="outline">Python</Badge>
                </div>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-600 hover:bg-gray-100 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800"
                    asChild
                  >
                    <a href="https://github.com/abhisahni00/EDA-on-Blinkit-Sales" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section - Now below Projects */}
        <section id="skills" className="py-16 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    Python
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    Java
                  </Badge>
                  
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    HTML
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    CSS
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    JavaScript
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Tools/Frameworks</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    Pandas
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    NumPy
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    Matplotlib
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    Scikit-Learn
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    Tableau
                  </Badge>
                 
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Databases</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    MySQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Other Skills</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    Data Cleaning
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    Data Visualization
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    Machine Learning
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    Predictive Modeling
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    Feature Engineering
                  </Badge>
                  <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 text-sm">
                    Statistical Analysis
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-1/3 h-48 md:h-auto relative">
                <Image
                  src="/MLiHub.png?height=200&width=200"
                  alt="Machine Learning Certificate"
                  fill
                  className="object-cover"
                />
                
              </div>
              <CardContent className="p-6 md:w-2/3">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Machine Learning and its Application
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Issued by: iHUB Divya Sampark, IIT Roorkee</p>
                <p className="text-gray-500 dark:text-gray-500">September 2024</p>
                <div className="flex justify-between">

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-600 hover:bg-gray-100 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800"
                    asChild
                  >
                    <a
                      href="https://drive.google.com/file/d/1aGUK8TQzTI9-s6BQfyAT3oQLIaa1m4em/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    MLiHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-1/3 h-48 md:h-auto relative">
                <Image
                  src="/JavaEbox.png?height=200&width=200"
                  alt="Java Basics Certificate"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 md:w-2/3">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Java Basics for Beginners: Learn Java Fundamentals 
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Issued by: eBox</p>
                <p className="text-gray-500 dark:text-gray-500">April 2024 - July 2024</p>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-600 hover:bg-gray-100 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-800"
                    asChild
                  >
                    <a
                      href="https://drive.google.com/file/d/1u-v3uc0v_sUGm5zH5mj2hFCGuLCHVLLo/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    JavaEbox
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">abhisheksahni011@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-3" />
                    <a
                      href="https://www.linkedin.com/in/abhishek-sahni"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                    >
                      linkedin.com/in/abhishek-sahni
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-3" />
                    <a
                      href="https://github.com/abhisahni00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                    >
                      github.com/abhisahni00
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Open to:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>Freelance projects</li>
                    <li>Research collaborations</li>
                    <li>Full-time opportunities</li>
                    <li>Learning opportunities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:text-white"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-700 dark:hover:bg-gray-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Abhishek Sahni. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="https://github.com/abhisahni00" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white" />
              </Link>
              <Link href="https://www.linkedin.com/in/abhishek-sahni" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white" />
              </Link>
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abhisheksahni011@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <Mail className="h-5 w-5 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white" />
</a>


            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
