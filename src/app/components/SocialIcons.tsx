"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialIcons() {
    return (
        <div className="fixed bottom-6 left-6 flex flex-col items-center gap-4 z-50">

            {/* GitHub */}
            <a
                href="https://github.com/Yousician-01"
                target="_blank"
                className="text-[#3E2F25] hover:text-[#A47551] hover:scale-110 transition duration-300 ease-out"
            >
                <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/atharva-raut-86b30b393/"
                target="_blank"
                className="text-[#3E2F25] hover:text-[#A47551] hover:scale-110 transition duration-300 ease-out"
            >
                <FaLinkedin size={20} />
            </a>

            {/* Instagram */}
            <a
                href="https://instagram.com/the_yousician"
                target="_blank"
                className="text-[#3E2F25] hover:text-[#A47551] hover:scale-110 transition duration-300 ease-out"
            >
                <FaInstagram size={20} />
            </a>

            {/* Email */}
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=atharvasandeepraut01@email.com&su=Let's%20Connect&body=Hi,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0AThanks!"
                target="_blank"
                className="text-[#3E2F25] hover:text-[#A47551] hover:scale-110 transition duration-300 ease-out"
            >
                <MdEmail size={22} />
            </a>

            {/* Vertical line */}
            <div className="w-[1px] h-16 bg-[#E5D9CC] mt-2"></div>

        </div>
    );
}