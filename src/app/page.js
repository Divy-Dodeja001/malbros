"use client";

import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import ContactFormModal from "./components/ContactFormModal";

const logos = [
  "/partnerLogos/logo4.webp",
  "/partnerLogos/logo1.webp",
  "/partnerLogos/logo2.webp",
  "/partnerLogos/logo3.webp",
  "/partnerLogos/logo5.webp",
];

const PROJECTS_DATA = [
  {
    id: "lemon-tree-dial",
    title: "Lemon Tree Hotels – DIAL Lounge & Banquet",
    cover: "/projects/LemonTreeHotelsDIALLounge&Banquet.jpg",
    gallery: [
      "/projects/LTDial/1.webp",
      "/projects/LTDial/2.webp",
      "/projects/LTDial/3.webp",
      "/projects/LTDial/4.webp",
      "/projects/LTDial/5.webp",
    ],
  },

  {
    id: "dlf-camellias",
    title: "DLF Camellias",
    cover: "/projects/DLFCamelias.jpg",
    gallery: [
      "/projects/DLF/1.jpg",
      "/projects/DLF/2.jpg",
      "/projects/DLF/3.jpg",
      "/projects/DLF/4.jpg",
    ],
  },

  {
    id: "lemon-tree-kolkata",
    title: "Lemon Tree Premier, Kolkata",
    cover: "/projects/LemonTreeKolkata.jpg",
    gallery: [
      "/projects/LTKolkata/1.webp",
      "/projects/LTKolkata/2.webp",
      "/projects/LTKolkata/3.webp",
      "/projects/LTKolkata/4.webp",
      "/projects/LTKolkata/5.webp",
      "/projects/LTKolkata/6.webp",
      "/projects/LTKolkata/7.webp",
      "/projects/LTKolkata/8.webp",
      "/projects/LTKolkata/9.webp",
    ],
  },

  {
    id: "keys-prima-dehradun",
    title: "Keys Prima Hotels India, Dehradun",
    cover: "/projects/KeysHotelDehradun.jpg",
    gallery: [
      "/projects/KeyH/1.jpg",
      "/projects/KeyH/2.jpg",
      "/projects/KeyH/3.jpg",
      "/projects/KeyH/4.jpg",
      "/projects/KeyH/5.jpg",
    ],
  },

  {
    id: "aurika-udaipur",
    title: "Aurika, Udaipur – Luxury by Lemon Tree Hotels",
    cover: "/projects/AurikaUdaipur.jpg",
    gallery: [
      "/projects/Aurika/1.webp",
      "/projects/Aurika/2.webp",
      "/projects/Aurika/3.webp",
      "/projects/Aurika/4.webp",
      "/projects/Aurika/5.webp",
      "/projects/Aurika/6.webp",
      "/projects/Aurika/7.webp",
      "/projects/Aurika/8.webp",
      "/projects/Aurika/9.webp",
    ],
  },

  {
    id: "arista-ambition",
    title: "Arista by Ambition",
    cover: "/projects/AristaAmbition.jpg",
    gallery: [
      "/projects/Arista/1.webp",
      "/projects/Arista/2.webp",
      "/projects/Arista/3.webp",
      "/projects/Arista/4.webp",
      "/projects/Arista/5.webp",
      "/projects/Arista/6.webp",
      "/projects/Arista/7.webp",
      "/projects/Arista/8.webp",
      "/projects/Arista/9.webp",
    ],
  },

  {
    id: "lemon-tree-mumbai",
    title: "Lemon Tree Premier, Mumbai",
    cover: "/projects/LemonTreeMumbai.jpg",
    gallery: [
      "/projects/LTMumbai/1.webp",
      "/projects/LTMumbai/2.webp",
      "/projects/LTMumbai/3.webp",
      "/projects/LTMumbai/4.webp",
      "/projects/LTMumbai/5.webp",
      "/projects/LTMumbai/6.webp",
      "/projects/LTMumbai/7.webp",
      "/projects/LTMumbai/8.webp",
      "/projects/LTMumbai/9.webp",
    ],
  },
];

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [modalData, setModalData] = useState({
    isJob: false, // ✅ IMPORTANT
    source: "",
  });
  const [open, setOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlides =
    PROJECTS_DATA[activeProjectIndex]?.gallery?.map((src) => ({ src })) ?? [];
  return (
    <div className={styles.page}>
      <Header setModalData={setModalData} />
      <div className="">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          speed={1300}
          slidesPerView={1}
          className="primarySwiper"
        >
          <SwiperSlide>
            <div className="position-relative">
              <div
                className="position-absolute w-100"
                style={{ bottom: "13%", zIndex: 3 }}
              >
                <div className="d-flex w-100 justify-content-center">
                  <div className="text-light text-center px-3">
                    <h1 className="fw-bold">Built to Bring Design to Life</h1>
                    <p>
                      Delivering furniture and interior solutions for
                      hospitality, corporate, and commercial environments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-overlay"></div>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/hero-fold/Mobile/1.jpg"
                />
                <img
                  src="/hero-fold/Desktop/1.jpg"
                  alt="hero-fold"
                  className="w-100"
                  style={{ height: "auto", objectFit: "cover" }}
                />
              </picture>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative">
              <div
                className="position-absolute w-100"
                style={{ bottom: "13%", zIndex: 3 }}
              >
                <div className="d-flex w-100 justify-content-center">
                  <div className="text-light text-center px-3">
                    <h1 className="fw-bold">
                      Where Craftsmanship Meets Capability
                    </h1>
                    <p>
                      Combining manufacturing expertise with strong quality
                      control across every project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-overlay"></div>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/hero-fold/Mobile/2.jpg"
                />
                <img
                  src="/hero-fold/Desktop/2.jpg"
                  alt="hero-fold"
                  className="w-100"
                  style={{ height: "auto", objectFit: "cover" }}
                />
              </picture>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative">
              <div
                className="position-absolute w-100"
                style={{ bottom: "13%", zIndex: 3 }}
              >
                <div className="d-flex w-100 justify-content-center">
                  <div className="text-light text-center px-3">
                    <h1 className="fw-bold">Execution You Can Depend On</h1>
                    <p>
                      Trusted by industry leaders to provide end-to-end
                      execution and project management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-overlay"></div>
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/hero-fold/Mobile/3.jpg"
                />
                <img
                  src="/hero-fold/Desktop/3.jpg"
                  alt="hero-fold"
                  className="w-100"
                  style={{ height: "auto", objectFit: "cover" }}
                />
              </picture>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-5 py-md-3">
        <div
          className="d-flex align-items-center text-center justify-content-between border-top border-bottom border-dark"
          ref={ref}
        >
          <div className="p-md-5 p-4 w-100">
            <h4 className="counter">
              {inView && <CountUp end={17} duration={4} />}+
            </h4>
            <p className="m-0">years of experience</p>
          </div>
          <div className="divider"></div>
          <div className="p-md-5 p-4  w-100">
            <h4 className="counter">
              {inView && <CountUp end={100} duration={4} />}+
            </h4>
            <p className="m-0">projects delivered</p>
          </div>
          <div className="divider"></div>
          <div className="p-md-5 p-4 w-100">
            <h4 className="counter">
              {inView && <CountUp end={40} duration={4} />}K+
            </h4>
            <p className="m-0">sq. ft. facility</p>
          </div>
        </div>
      </div>
      <div className="my-5">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          centeredSlides={false}
          slidesPerView={1.6} // roughly 4 visible slides
          spaceBetween={20}
          speed={6000} // higher = slower continuous motion
          autoplay={{
            delay: 1, // continuous effect
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          grabCursor={false}
          className="brand-marquee d-flex justify-content-center align-items-center"
          breakpoints={{
            768: {
              slidesPerView: 3.9,
              spaceBetween: 45,
            },
          }}
        >
          {logos.map((src, i) => (
            <SwiperSlide
              key={i}
              className="h-100 d-flex justify-content-center align-items-center"
            >
              <div className="d-flex justify-content-center align-items-center px-lg-3">
                <img src={src} alt={`logo-${i}`} className="img-fluid" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="my-md-5 py-md-3">
        <div
          className=""
          style={{
            backgroundImage: `url("/background-vector.png")`,
            backgroundColor: "black",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="d-md-flex justify-content-between">
            <div className="text-light col-md-6 px-md-5 px-3 py-5 d-flex justify-content-between flex-column">
              <div
                className="d-flex align-items-center mb-3"
                style={{ gap: "0.7em" }}
              >
                <div
                  className="rounded-5 m-0"
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#E5AA00",
                  }}
                ></div>
                <h6
                  className="text-uppercase text-light m-0"
                  style={{ letterSpacing: "0.2em" }}
                >
                  ABOUT US
                </h6>
              </div>
              <div className="mb-md-5">
                <h3 className="mb-3 mb-md-5 fw-bold">
                  The Makers Behind Exceptional Spaces
                </h3>
                <p>
                  Based in Delhi and shaped by over seventeen years of
                  experience, Malbros Furnitures is a leading interior
                  contracting and bespoke furniture manufacturing firm that
                  delivers turnkey interiors and bespoke furniture for
                  hospitality, corporate, healthcare, and luxury residences. Our
                  45,000 sq ft facility and team of 150+ specialists bring
                  together advanced manufacturing and human craftsmanship,
                  working as one.
                </p>
                <p>
                  Trusted by Radisson, Hyatt, Lemon Tree Hotels, Burman Estates,
                  and Arista by Ambition, Malbros collaborates with architects
                  and designers to turn vision into reality. Designed with care,
                  engineered for longevity.
                </p>
              </div>
            </div>
            <div>
              <img src="/about-us.jpg" className="w-100"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="services-section">
        <div className="px-md-5 px-3 pb-4 pb-md-5 my-5 ">
          <div className="mb-3">
            <div
              className="d-flex align-items-center mb-3"
              style={{ gap: "0.7em" }}
            >
              <div
                className="rounded-5 m-0"
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#E5AA00",
                }}
              ></div>
              <h6
                className="text-uppercase text-muted m-0"
                style={{ letterSpacing: "0.2em" }}
              >
                SERVICES WE OFFER
              </h6>
            </div>
            <div>
              <h3 className="mb-4 services-heading">
                Services Tailored for Lasting Impact
              </h3>
            </div>
          </div>
          <div>
            <div>
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2800, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                speed={2000}
                slidesPerView={1.2}
                spaceBetween={15}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    allowTouchMove: true, // disable dragging/swiping on desktop
                  },
                }}
                allowTouchMove={true} // enabled for mobile by default
                className="secondarySwiper leadership-swiper"
              >
                <SwiperSlide className="rounded-2 service-card mb-4">
                  <div className="mb-3">
                    <img
                      src="/services/fall-ceiling.jpg"
                      alt="services"
                      className="w-100"
                      style={{
                        height: "auto",
                        objectFit: "cover",
                        borderTopLeftRadius: "7px",
                        borderTopRightRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="p-3 services-body-div">
                    <h5 className="mb-2 primary-color">
                      False Ceilings, Partitions & Panelling
                    </h5>
                    <p className="mb-0">
                      Structural elements that shape how a space looks and
                      feels, executed for durability and precision.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-2 service-card mb-4">
                  <div className="mb-3">
                    <img
                      src="/services/furniture.jpg"
                      alt="services"
                      className="w-100"
                      style={{
                        height: "auto",
                        objectFit: "cover",
                        borderTopLeftRadius: "7px",
                        borderTopRightRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="p-3 services-body-div">
                    <h5 className="mb-2 primary-color">
                      Bespoke Loose Furniture
                    </h5>
                    <p className="mb-0">
                      Custom-built, high-quality furniture designed to fit
                      luxury spaces perfectly.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-2 service-card mb-4">
                  <div className="mb-3">
                    <img
                      src="/services/interior-solutions.jpg"
                      alt="services"
                      className="w-100"
                      style={{
                        height: "auto",
                        objectFit: "cover",
                        borderTopLeftRadius: "7px",
                        borderTopRightRadius: "7px",
                      }}
                    />
                  </div>
                  <div className="p-3 services-body-div">
                    <h5 className="mb-2 primary-color">
                      Turnkey Interior Solutions
                    </h5>
                    <p className="mb-0">
                      Project delivery from design to execution, ensuring a
                      seamless process and timely completion.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="mb-5 px-md-5 px-3 py-md-3">
          <div className="mb-3">
            <div
              className="d-flex align-items-center mb-3"
              style={{ gap: "0.7em" }}
            >
              <div
                className="rounded-5 m-0"
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#E5AA00",
                }}
              ></div>
              <h6
                className="text-uppercase text-muted m-0"
                style={{ letterSpacing: "0.2em" }}
              >
                OUR PROJECTS
              </h6>
            </div>
            <div>
              <h3 className="mb-4 services-heading">
                Projects That Inspire Confidence
              </h3>
            </div>
          </div>
          <div>
            <div>
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                speed={2000}
                slidesPerView={1.2}
                spaceBetween={16}
                breakpoints={{
                  768: {
                    slidesPerView: 3.5,
                    spaceBetween: 25,
                    allowTouchMove: true,
                  },
                }}
                allowTouchMove={true} // enabled for mobile by default
                className="secondarySwiper leadership-swiper"
              >
                {PROJECTS_DATA.map((project, index) => (
                  <SwiperSlide className="pb-0" key={index}>
                    <div
                      className="project-card"
                      onClick={() => {
                        setActiveProjectIndex(index);
                        setActiveSlideIndex(0);
                        setOpen(true);
                      }}
                      aria-label={`Open ${project.title} gallery`}
                    >
                      <div className="mb-3">
                        <img
                          src={project.cover}
                          alt={project.id}
                          className="w-100 rounded-2"
                          style={{ height: "auto", objectFit: "cover" }}
                        />
                      </div>
                      <div>
                        <p className="mb-3 mb-md-4 primary-color">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="text-light"
          style={{
            backgroundImage: `url("/background-vector.png")`,
            backgroundColor: "black",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="py-5 px-md-5 px-3">
            <div className="d-md-flex justify-content-between mb-4">
              <div className="col-md-6">
                <h3 className="mb-4">Our In-House Strength</h3>
                <p>
                  At Malbros Furnitures, we believe control over every stage of
                  execution is what sets us apart.
                </p>
              </div>
              <div></div>
            </div>
            <div>
              <Swiper
                slidesPerView={1.2}
                spaceBetween={15}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    allowTouchMove: false, // disable dragging/swiping on desktop
                  },
                }}
                allowTouchMove={true} // enabled for mobile by default
                className="secondarySwiper"
              >
                <SwiperSlide className="">
                  <div className="mb-3">
                    <img
                      src="/in-house-strength/1.jpg"
                      alt="in-house-strength"
                      className="w-100 rounded-2"
                      style={{ height: "auto", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h5 className="">Manufacturing Facility</h5>
                    <p>
                      A modern, in-house factory equipped with advanced
                      woodworking and finishing machinery, now expanding to meet
                      growing demand with higher efficiency and scale.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="mb-3">
                    <img
                      src="/in-house-strength/2.jpg"
                      alt="in-house-strength"
                      className="w-100 rounded-2"
                      style={{ height: "auto", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h5 className="">Carpentry Team</h5>
                    <p>
                      A strong pool of skilled carpenters and craftsmen who
                      bring precision, detail, and artistry to every bespoke
                      piece.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="mb-3">
                    <img
                      src="/in-house-strength/3.jpg"
                      alt="in-house-strength"
                      className="w-100 rounded-2"
                      style={{ height: "auto", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h5 className="">Contractor Network</h5>
                    <p>
                      A reliable network of contractors and site supervisors
                      that ensures seamless execution of large-scale projects,
                      on time and to specification.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="leadership-section">
        <div className="d-flex justify-content-center flex-column container py-5">
          <div
            className="d-flex align-items-center justify-content-center mb-3"
            style={{ gap: "0.7em" }}
          >
            <div
              className="rounded-5 m-0"
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#E5AA00",
              }}
            ></div>
            <h6
              className="text-uppercase text-muted m-0 text-center"
              style={{ letterSpacing: "0.2em" }}
            >
              LOCATE US
            </h6>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d219.3300852592198!2d77.28308732096656!3d28.51929230998862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce14ba115d61b%3A0x3b032b8fffdcc574!2sDLF%20Prime%20Towers!5e0!3m2!1sen!2sin!4v1772173439056!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            style={{ borderRadius: "15px" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="leadership-section mb-md-5 py-5 px-md-5 px-3">
        <div className="d-flex justify-content-center w-100">
          <div className="w-100 leadership-container">
            <div className="mb-5 leadership-header">
              <div
                className="d-flex align-items-center justify-content-center mb-3"
                style={{ gap: "0.7em" }}
              >
                <div
                  className="rounded-5 m-0"
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#E5AA00",
                  }}
                ></div>
                <h6
                  className="text-uppercase text-muted m-0 text-center"
                  style={{ letterSpacing: "0.2em" }}
                >
                  OUR LEADERSHIP
                </h6>
              </div>
            </div>

            <div className="d-md-flex justify-content-center">
              <div className="col-md-9">
                <Swiper
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  spaceBetween={12}
                  allowTouchMove={true}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 35,
                      allowTouchMove: false,
                    },
                  }}
                  className="secondarySwiper pb-5 leadership-swiper"
                >
                  <SwiperSlide>
                    <div className="leader-card">
                      <div className="leader-media">
                        <img
                          src="/founders/Rajjat.jpg"
                          alt="founder"
                          className="leader-img"
                        />
                      </div>

                      <div className="leader-body">
                        <h5 className="leader-name">Mr. Rajjat Malhotraa</h5>
                        <div className="leader-role">
                          Founder & Managing Director
                        </div>
                        <p className="leader-bio">
                          With over 17 years of industry experience, Rajjat
                          Malhotraa has been the driving force behind Malbros’
                          growth. His strategic vision and hands-on leadership
                          have shaped the company into a trusted name in
                          hospitality and corporate interiors across India.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="leader-card">
                      <div className="leader-media">
                        <img
                          src="/founders/Aakshat.jpg"
                          alt="director"
                          className="leader-img"
                        />
                      </div>

                      <div className="leader-body">
                        <h5 className="leader-name">Mr. Akkshat Malhotraa</h5>
                        <div className="leader-role">Director</div>
                        <p className="leader-bio">
                          Akkshat Malhotraa brings fresh perspective and
                          operational expertise to Malbros. His focus on
                          innovation, efficiency, and client-centric delivery
                          continues to strengthen the company’s position as a
                          leader in design and execution.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-md-5 py-3 px-md-5 px-3">
        <div
          className="d-flex align-items-center justify-content-center mb-4"
          style={{ gap: "0.7em" }}
        >
          <div
            className="rounded-5 m-0"
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#E5AA00",
            }}
          ></div>
          <h6
            className="text-uppercase text-muted m-0 text-center"
            style={{ letterSpacing: "0.2em" }}
          >
            Testimonials
          </h6>
        </div>
        <div className="container">
          <Swiper
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            speed={1300}
            spaceBetween={24}
            allowTouchMove={true} // swiping enabled on mobile
            className="secondarySwiper pb-5 leadership-swiper"
          >
            <SwiperSlide>
              <div className="border rounded-3 position-relative p-3 p-md-5 text-center">
                <div
                  className="position-absolute"
                  style={{ top: "6%", left: "5%" }}
                >
                  <Icon
                    icon="fa-solid:quote-left"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-10">
                    <p className="my-2 d-flex justify-content-center mb-3">
                      Working with Malbros was seamless from start to finish.
                      Their team delivered our luxury hotel interiors with
                      unmatched precision and attention to detail. Guests still
                      compliment the ambience every day.
                    </p>
                    <div className="d-flex justify-content-md-end">
                      <small className="fw-bold">
                        — General Manager, Aurika Hotels
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border rounded-3 position-relative p-3 p-md-5 text-center">
                <div
                  className="position-absolute"
                  style={{ top: "6%", left: "5%" }}
                >
                  <Icon
                    icon="fa-solid:quote-left"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-10">
                    <p className="my-2 d-flex justify-content-center mb-3">
                      Working with Malbros was seamless from start to finish.
                      Their team delivered our luxury hotel interiors with
                      unmatched precision and attention to detail. Guests still
                      compliment the ambience every day.
                    </p>
                    <div className="d-flex justify-content-md-end">
                      <small className="fw-bold">
                        — General Manager, Aurika Hotels
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border rounded-3 position-relative p-3 p-md-5 text-center">
                <div
                  className="position-absolute"
                  style={{ top: "6%", left: "5%" }}
                >
                  <Icon
                    icon="fa-solid:quote-left"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="col-10">
                    <p className="my-2 d-flex justify-content-center mb-3">
                      Working with Malbros was seamless from start to finish.
                      Their team delivered our luxury hotel interiors with
                      unmatched precision and attention to detail. Guests still
                      compliment the ambience every day.
                    </p>
                    <div className="d-flex justify-content-md-end">
                      <small className="fw-bold">
                        — General Manager, Aurika Hotels
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={activeSlides}
        index={activeSlideIndex}
        on={{ view: ({ index }) => setActiveSlideIndex(index) }}
      ></Lightbox>
      <ContactFormModal modalData={modalData} />
      <Footer />
    </div>
  );
}
