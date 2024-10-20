"use client";

import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  Pricing &amp; Plans
                </Link>
              </li>

              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  Our method
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  User policy
                </Link>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/blogs"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  Financial statements
                </Link>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  Report a vulnerability
                </Link>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              Content Library
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/underconstruction"
                >
                  Knowledge base
                </Link>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://pub.dev/publishers/horizondevelopers.cloud/packages"
                >
                  Flutter Packages
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © Horizon Developers
                <span className="text-gray-700"> 2024 </span>
              </p>
              <ul className="inline-flex gap-2">
                <li>
                  <a
                    href="https://example.com/link1"
                    className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#7289da]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com/link2"
                    className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://example.com/link3"
                    className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://example.com/link5"
                    className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/27631192050"
                    className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#128c7e]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.google.com/maps/dir//5th+floor,+Hycastle+House,+58+Loop+St,+Cape+Town+City+Centre,+Cape+Town,+8001/@-33.9205746,18.3375356,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1dcc5d5a82b95cfd:0x4bcf2ca814893bc0!2m2!1d18.4199368!2d-33.920602?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
                    className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#128c7e]"
                  >
                   <svg viewBox="-2 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1397 4.05909C20.4929 1.35303 17.2979 0 13.5549 0C9.81179 0 6.61688 1.35303 3.97014 4.05909C1.32338 6.76515 0 10.0317 0 13.8586C0 17.6855 1.32338 20.952 3.97014 23.6582L11.1323 30.9808C12.4615 32.3397 14.6483 32.3397 15.9775 30.9808L23.1397 23.6582C25.7864 20.952 27.1097 17.6855 27.1097 13.8586C27.1097 10.0317 25.7864 6.76515 23.1397 4.05909ZM13.5549 19.0556C13.8886 19.0556 14.2192 19.0223 14.5465 18.9556C14.8739 18.8891 15.1917 18.7906 15.5001 18.66C15.8084 18.5294 16.1014 18.3693 16.3789 18.1798C16.6564 17.9901 16.9131 17.7747 17.1491 17.5334C17.2668 17.4131 17.3785 17.2871 17.4841 17.1556C17.5897 17.024 17.6888 16.8874 17.7813 16.7459C17.8738 16.6044 17.9593 16.4585 18.0378 16.3084C18.1162 16.1583 18.1872 16.0047 18.251 15.8474C18.3147 15.6901 18.3707 15.5301 18.419 15.3672C18.4674 15.2043 18.5078 15.0394 18.5404 14.8725C18.5728 14.7055 18.5972 14.5374 18.6135 14.368C18.6298 14.1986 18.6379 14.0288 18.6379 13.8586C18.6379 13.6884 18.6298 13.5186 18.6135 13.3492C18.5972 13.1798 18.5728 13.0117 18.5404 12.8447C18.5078 12.6778 18.4674 12.5129 18.419 12.35C18.3707 12.1871 18.3147 12.0271 18.251 11.8698C18.1872 11.7125 18.1162 11.5589 18.0378 11.4088C17.9593 11.2587 17.8738 11.1128 17.7813 10.9713C17.6888 10.8298 17.5897 10.6933 17.4841 10.5617C17.3785 10.4301 17.2668 10.3041 17.1491 10.1838C16.9131 9.94249 16.6564 9.72705 16.3789 9.53748C16.1014 9.34789 15.8084 9.18781 15.5001 9.05723C15.1917 8.92664 14.8739 8.82806 14.5465 8.76148C14.2192 8.69491 13.8886 8.66163 13.5549 8.66163C13.2211 8.66163 12.8906 8.69491 12.5632 8.76148C12.2359 8.82806 11.918 8.92664 11.6097 9.05723C11.3013 9.18781 11.0084 9.34789 10.7309 9.53748C10.4534 9.72705 10.1966 9.94249 9.96059 10.1838C9.84288 10.3041 9.73122 10.4301 9.6256 10.5617C9.51999 10.6933 9.42094 10.8298 9.32845 10.9713C9.23596 11.1128 9.15048 11.2587 9.072 11.4088C8.99352 11.5589 8.92243 11.7126 8.85872 11.8698C8.79501 12.0271 8.73899 12.1871 8.69067 12.35C8.64235 12.5129 8.60194 12.6778 8.56946 12.8447C8.53698 13.0117 8.51259 13.1798 8.49628 13.3492C8.47996 13.5186 8.47179 13.6884 8.47179 13.8586C8.47179 14.0288 8.47996 14.1986 8.49628 14.368C8.51259 14.5374 8.53698 14.7055 8.56946 14.8725C8.60194 15.0394 8.64235 15.2043 8.69067 15.3672C8.73899 15.5301 8.79501 15.6902 8.85872 15.8474C8.92243 16.0047 8.99352 16.1583 9.072 16.3084C9.15048 16.4585 9.23596 16.6044 9.32845 16.7459C9.42094 16.8874 9.51999 17.024 9.6256 17.1556C9.73122 17.2871 9.84288 17.4131 9.96059 17.5334C10.1966 17.7747 10.4534 17.9901 10.7309 18.1798C11.0084 18.3693 11.3013 18.5294 11.6097 18.66C11.918 18.7906 12.2359 18.8891 12.5632 18.9556C12.8906 19.0223 13.2211 19.0556 13.5549 19.0556Z" fill="url(#paint0_radial_103_1597)"></path> <defs> <radialGradient id="paint0_radial_103_1597" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5549) rotate(90) scale(32 27.1097)"> <stop stop-color="#ed333b"></stop> <stop offset="1" stop-color="#ed333b"></stop> </radialGradient> </defs> </g></svg>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
