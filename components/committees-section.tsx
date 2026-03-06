"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Conference Leadership
const leadershipTeam = [
  {
    role: "Chief Patron",
    name: "Dr. Karunesh Kumar Shukla",
    designation: "Director, MANIT Bhopal",
    image: "/images/prof-kk-shukla.jpg",
  },
  {
    role: "Patron",
    name: "Prof. S.P.S. Rajput",
    designation: "Dean ID, MANIT Bhopal",
    image: "/images/dr-sps-rajput.jpg",
  },
  {
    role: "Chairman",
    name: "Dr. K. R. Aharwal",
    designation: "HOD, ME, MANIT Bhopal",
    image: "/images/dr-kr-aharwal.png",
  },
  {
    role: "Co-Chairman",
    name: "Dr. C. M. Krishna",
    designation: "HOC, CEPDSM, MANIT Bhopal",
    image: "/images/dr-cmk.jpg",
  },
]

// Organizing Secretaries
const organizingSecretaries = [
  {
    name: "Dr. Rajesh Purohit",
    designation: "Professor, ME, MANIT Bhopal",
    image: "/images/dr-20rajesh-20purohit.jpg",
    objectPosition: "center 35%",
  },
  {
    name: "Dr. Emon Barua",
    designation: "Asst. Professor, ME, MANIT Bhopal",
    image: "/images/8-20feb-20mech-20profile-20new-20faculty.png",
  },
  {
    name: "Dr. Soumya Ranjan Guru",
    designation: "Asst. Professor, ME, MANIT Bhopal",
    image: "/images/soumya-20ranjan-20guru.png",
  },
  {
    name: "Dr. Jitendra Adhikari",
    designation: "Asst. Professor, CEPDSM, MANIT Bhopal",
    image: "/images/jitendra-20adhikari.png",
  },
]

// Core Committee
const coreCommittee = [
  { name: "Dr. Aningi Mokhalingam", designation: "Asst. Prof., ME" },
  { name: "Dr. Lal Singh Devsoth", designation: "Asst. Prof., ME" },
  { name: "Dr. Asish Kumar Panda", designation: "Asst. Prof., ME" },
]

// Advisory Committee
const advisoryCommittee = [
  { name: "Dr. Sumeet Walia", institution: "RMIT University, Australia" },
  { name: "Dr. Tarun Gupta", institution: "Western Michigan University" },
  { name: "Dr. Manoj Gupta", institution: "National University of Singapore" },
  { name: "Dr. Chetan Nikhare", institution: "The Behrend College, USA" },
  { name: "Dr. Bibhudutta Rout", institution: "University of North Texas" },
  { name: "Dr. Nitin Muttil", institution: "Victoria University, Australia" },
  { name: "Dr. Tapati Sarkar", institution: "Uppsala University, Sweden" },
  { name: "Dr. Rakesh Joshi", institution: "University of New South Wales" },
  { name: "Dr. Moola Mohan Reddy", institution: "Curtin University Malaysia" },
  { name: "Dr. B. Ravi", institution: "NITK Surathkal" },
  { name: "Dr. Ramesh Singh", institution: "IIT Bombay" },
  { name: "Dr. J. Ramkumar", institution: "IIT Kanpur" },
  { name: "Dr. Alankar Alankar", institution: "IIT Bombay" },
  { name: "Dr. Swadesh Kumar Singh", institution: "GRIET, Hyderabad" },
  { name: "Dr. Inderdeep Singh", institution: "IIT Roorkee" },
  { name: "Dr. Aloke Kanjilal", institution: "Shiv Nadar University, Delhi, NCR" },
  { name: "Dr. Susanta Panda", institution: "IIT Kharagpur" },
  { name: "Dr. Dillip Kumar Pratihar", institution: "IIT Kharagpur" },
  { name: "Dr. Rajeev Kumar", institution: "IIT Mandi" },
  { name: "Dr. A.M Kuthe", institution: "VNIT Nagpur" },
]

// Technical Program Committee
const technicalCommittee = [
  "Dr. R.M. Sarviya",
  "Dr. Siraj Ahmed",
  "Dr. J. L. Bhagoria",
  "Dr. R. K. Dwivedi",
  "Dr. V. K. Soni",
  "Dr. Atul Lanjewar",
  "Dr. Akhilesh Barve",
  "Dr. Manoj Arya",
  "Dr. R. S. Rana",
  "Dr. Ajay Pandey",
  "Dr. Amit Telang",
  "Dr. Alok Singh",
  "Dr. T. N. Verma",
  "Dr. P.K. Soni",
  "Dr. Vishal Parashar",
  "Dr. Amit Suhane",
  "Dr. M. Vishwakarma",
  "Dr. Arvind Kumar",
  "Dr. Ajay Verma",
  "Dr. Abhinav Varshney",
  "Dr. Vinod Yadav",
  "Dr. Mohammad Taufik",
  "Dr. Narendra Gajbhiye",
  "Dr. Vijay Panchore",
  "Dr. Deepak Kumar",
  "Dr. Sudhansu Kumar",
  "Dr. Vikash Kumar",
  "Dr. Ashish Das",
  "Dr. N. Jayanth",
  "Dr. Kuldeep Yadav",
]

export function CommitteesSection() {
  return (
    <section id="organizing-committee" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-heading">Committees</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-lg shadow-primary/30" />
        </motion.div>

        {/* Section 1: Conference Leadership */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-primary mb-8"
          >
            Conference Leadership
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10 relative ${
                  member.image ? "pt-20 mt-16 overflow-visible" : ""
                }`}
              >
                {member.image ? (
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-4 border-primary/50 flex items-center justify-center overflow-hidden shadow-xl shadow-primary/20">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{member.name.split(" ").slice(-1)[0][0]}</span>
                  </div>
                )}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {member.role}
                </span>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-1">{member.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.designation}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Organizing & Core Committee */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-primary mb-8"
          >
            Organizing Secretaries
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {organizingSecretaries.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10 pt-20 mt-16 overflow-visible relative"
              >
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-4 border-primary/50 flex items-center justify-center overflow-hidden shadow-xl shadow-primary/20">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
                  />
                </div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  Organizing Secretary
                </span>
                <h4 className="text-gray-900 dark:text-white font-semibold mb-1">{member.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.designation}</p>
              </motion.div>
            ))}
          </div>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-primary mb-6"
          >
            Core Committee
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {coreCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center bg-gray-50 dark:bg-gray-900 border-l-4 border-primary rounded-r-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="text-gray-900 dark:text-white font-semibold">{member.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.designation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Advisory Committee */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-primary mb-8"
          >
            Advisory Committee
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advisoryCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:border-primary/50 transition-all duration-300 cursor-default"
              >
                <h4 className="text-gray-900 dark:text-white font-medium">{member.name}</h4>
                <p className="text-primary text-sm">{member.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4: Technical Program Committee */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-primary mb-4"
          >
            Technical Program Committee
          </motion.h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Dept. of Mechanical Engineering, MANIT Bhopal</p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {technicalCommittee.map((name, index) => (
                <div
                  key={name}
                  className="text-gray-700 dark:text-gray-300 text-sm py-2 px-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
