import React from 'react'
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
  <div className="flex justify-center items-center gap-5 text-xl mb-5">
          <Link
            href="mailto:rahul.verma.ai377@gmail.com"
            target="_blank"
            aria-label="Email"
            className="transition-colors hover:text-primary"
          >
            <FaEnvelope />
          </Link>

          <Link
            href="https://github.com/rahulverma307"
            target="_blank"
            aria-label="GitHub"
            className="transition-colors hover:text-primary"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/rahul-verma-10b3a129a/"
            target="_blank"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
          >
            <FaLinkedin />
          </Link>
        </div>
  )
}

export default Contact