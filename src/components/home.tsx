import userImage from '../assets/images/about/avatar.jpg'
import cvFile from '../assets/images/cv.webp'
import {
    FaFacebookF,
    FaTwitter,
    FaDribbble,
    FaLinkedinIn,
    FaDownload,
    FaGithub,
} from 'react-icons/fa'

const HomePage = () => {
    return (
        <>
            <div
                className="flex h-[100vh] flex-col items-center justify-center md:h-[90vh]  lg:h-[80vh]  xl:h-[71vh]"
                data-aos="fade"
            >
                <img
                    className="h-[250px] w-[250px] rounded-full 2xl:h-[280px] 2xl:w-[280px]"
                    src={userImage.src}
                    alt=""
                />
                <h3 className="mb-1 mt-6 text-5xl font-semibold dark:text-white">
                    Shane Jeffery
                </h3>
                <p className="mb-4 text-[#7B7B7B]">
                    Full Stack Software Engineer & Team Lead
                </p>

                <div className="flex space-x-3">
                    <a
                        href="https://www.linkedin.com/in/shaneajeffery/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="socialbtn text-theme1">
                            <FaLinkedinIn />
                        </span>
                    </a>
                    <a
                        href="https://github.com/shaneajeffery"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="socialbtn text-theme1">
                            <FaGithub />
                        </span>
                    </a>
                </div>

                <a
                    href={cvFile}
                    download
                    className="mt-6 flex items-center rounded-[35px] from-theme1 to-theme2 px-8 py-3 text-lg transition  duration-200 ease-linear hover:bg-gradient-to-l dark:bg-[#212425]  dark:text-theme1 dark:hover:text-black"
                >
                    <span className="mr-2">
                        <FaDownload />
                    </span>
                    Download CV
                </a>
            </div>
        </>
    )
}

export default HomePage
