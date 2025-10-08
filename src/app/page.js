"use client";

import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

const logos = [
  "/partnerLogos/shimano.png",
  "/partnerLogos/kmc.png",
  "/partnerLogos/maxxis.png",
  "/partnerLogos/wtb.png",
  "/partnerLogos/rockshox.png",
  "/partnerLogos/wtb.png",
  "/partnerLogos/rockshox.png",
];

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className={styles.page}>
      <Header />
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
                    <h1 className="fw-bold">
                      Creating Luxury. Crafting Perfection
                    </h1>
                    <p>
                      Turnkey interior execution for hospitality, corporate and
                      luxury residential projects
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
                      Creating Luxury. Crafting Perfection
                    </h1>
                    <p>
                      Turnkey interior execution for hospitality, corporate and
                      luxury residential projects
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
                    <h1 className="fw-bold">
                      Creating Luxury. Crafting Perfection
                    </h1>
                    <p>
                      Turnkey interior execution for hospitality, corporate and
                      luxury residential projects
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
              {inView && <CountUp end={17} duration={3} />}+
            </h4>
            <p className="m-0">years of experience</p>
          </div>
          <div className="divider"></div>
          <div className="p-md-5 p-4  w-100">
            <h4 className="counter">
              {inView && <CountUp end={100} duration={3} />}+
            </h4>
            <p className="m-0">projects delivered</p>
          </div>
          <div className="divider"></div>
          <div className="p-md-5 p-4 w-100">
            <h4 className="counter">
              {inView && <CountUp end={40} duration={3} />}K+
            </h4>
            <p className="m-0">sq. ft. facility</p>
          </div>
        </div>
      </div>
      <div className="my-5 py-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          centeredSlides={false}
          slidesPerView={3} // roughly 4 visible slides
          spaceBetween={40}
          speed={6000} // higher = slower continuous motion
          autoplay={{
            delay: 1, // continuous effect
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          grabCursor={false}
          className="brand-marquee"
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
          }}
        >
          {logos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center align-items-center">
                <img
                  src={src.src}
                  alt={`logo-${i}`}
                  className="img-fluid"
                  style={{ height: "50px", objectFit: "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="my-5 py-md-3">
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
                  Designing and Delivering<br></br>Spaces That Inspire
                </h3>
                <p>
                  With over 17 years of experience, we’ve built a strong
                  reputation for delivering high-quality solutions across
                  hospitality, corporate, and diverse commercial sectors. From
                  concept to completion, our team combines expertise, scale, and
                  precision to bring every project to life. Pan-India presence,
                  serving clients across multiple cities with consistency and
                  reliability
                </p>
              </div>
            </div>
            <div>
              <img src="/about-us.jpg" className="w-100"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 px-md-5 px-3 py-md-3">
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
            <h3 className="mb-4">Services Tailored for Lasting Impact</h3>
          </div>
        </div>
        <div>
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
                    src="/services/fall-ceiling.jpg"
                    alt="services"
                    className="w-100 rounded-2"
                    style={{ height: "auto", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="mb-2 primary-color">
                    False Ceilings, Partitions & Panelling
                  </p>
                  <p className="mb-0">
                    Structural elements that shape how a space looks and feels,
                    executed for durability and precision.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="mb-3">
                  <img
                    src="/services/furniture.jpg"
                    alt="services"
                    className="w-100 rounded-2"
                    style={{ height: "auto", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="mb-2 primary-color">Bespoke Loose Furniture</p>
                  <p className="mb-0">
                    Custom-built, high-quality furniture designed to fit luxury
                    spaces perfectly.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="mb-3">
                  <img
                    src="/services/interior-solutions.jpg"
                    alt="services"
                    className="w-100 rounded-2"
                    style={{ height: "auto", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="mb-2 primary-color">
                    Turnkey Interior Solutions
                  </p>
                  <p className="mb-0">
                    Project delivery from design to execution, ensuring a
                    seamless process and timely completion without compromising
                    on quality.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="my-5 px-md-5 px-3 py-md-3">
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
            <h3 className="mb-4">Projects That Inspire Confidence</h3>
          </div>
        </div>
        <div>
          <div>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              speed={1300}
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
              className="secondarySwiper"
            >
              <SwiperSlide className="pb-5">
                <div className="mb-3">
                  <img
                    src="/projects/LemonTreeHotelsDIALLounge&Banquet.jpg"
                    alt="projects"
                    className="w-100 rounded-2"
                    style={{ height: "auto", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="mb-2 primary-color">
                    Lemon Tree Hotels - DIAL Lounge & Banquet
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-5">
                <div className="mb-3">
                  <img
                    src="/projects/DLFCamelias.jpg"
                    alt="projects"
                    className="w-100 rounded-2"
                    style={{ height: "auto", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="mb-2 primary-color">DLF Camellias</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-5">
                <div className="mb-3">
                  <img
                    src="/projects/LemonTreeKolkata.jpg"
                    alt="projects"
                    className="w-100 rounded-2"
                    style={{ height: "auto", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="mb-2 primary-color">
                    Lemon Tree Premier, Kolkata
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-5">
                <div className="mb-3">
                  <img
                    src="/projects/KeysHotelDehradun.jpg"
                    alt="projects"
                    className="w-100 rounded-2"
                    style={{ height: "auto", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="mb-2 primary-color">
                    Keys Prima Hotels India, Dehradun
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-5">
                <div className="mb-3">
                  <img
                    src="/projects/AurikaUdaipur.jpg"
                    alt="projects"
                    className="w-100 rounded-2"
                    style={{ height: "auto", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="mb-2 primary-color">
                    Aurika, Udaipur – Luxury by Lemon Tree Hotels
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-5">
                <div className="mb-3">
                  <img
                    src="/projects/AristaAmbition.jpg"
                    alt="projects"
                    className="w-100 rounded-2"
                    style={{ height: "auto", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="mb-2 primary-color">Arista by Ambition</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pb-5">
                <div className="mb-3">
                  <img
                    src="/projects/LemonTreeMumbai.jpg"
                    alt="projects"
                    className="w-100 rounded-2"
                    style={{ height: "auto", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="mb-2 primary-color">
                    Lemon Tree Premier, Mumbai
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="my-5 py-md-3">
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
                  At the heart of our operations is a 40,000 sq.ft.
                  state-of-the-art facility equipped with advanced machinery and
                  a highly skilled workforce. By keeping manufacturing in-house,
                  we ensure complete quality control, faster turnaround times,
                  and precision in every detail.
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
                    slidesPerView: 4,
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
                </SwiperSlide>
                <SwiperSlide className="">
                  <div className="mb-3">
                    <img
                      src="/in-house-strength/4.jpg"
                      alt="in-house-strength"
                      className="w-100 rounded-2"
                      style={{ height: "auto", objectFit: "cover" }}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 py-md-3 px-md-5 px-3">
        <div className="d-flex justify-content-center w-100">
          <div className="w-100">
            <div className="mb-5">
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
              <div>
                <h3 className="text-center">The People Behind Malbros</h3>
              </div>
            </div>
            <div className="d-md-flex justify-content-center">
              <div className="col-md-9">
                <Swiper
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{ clickable: true }} // default for mobile
                  spaceBetween={12}
                  allowTouchMove={true} // swiping enabled on mobile
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 35,
                      allowTouchMove: false, // disable swiping on tablet/desktop
                    },
                  }}
                  className="secondarySwiper pb-5"
                >
                  <SwiperSlide>
                    <div className="mb-3 d-flex justify-content-center">
                      <img
                        src="/founders/Rajjat.jpg"
                        alt="founder"
                        className="w-75 rounded-2"
                      />
                    </div>
                    <div>
                      <h5 className="mb-2 primary-color fw-bold">
                        Mr. Rajjat Malhotra
                      </h5>
                      <small>
                        <em>Founder & Managing Director</em>
                      </small>
                      <p className="my-2">
                        With over 17 years of industry experience, Rajjat
                        Malhotra has been the driving force behind Malbros’
                        growth. His strategic vision and hands-on leadership
                        have shaped the company into a trusted name in
                        hospitality and corporate interiors across India.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="mb-3 d-flex justify-content-center">
                      <img
                        src="/founders/Aakshat.jpg"
                        alt="director"
                        className="w-75 rounded-2"
                      />
                    </div>
                    <div>
                      <h5 className="mb-2 primary-color fw-bold">
                        Mr. Aakshat Malhotra
                      </h5>
                      <small>
                        <em>Director</em>
                      </small>
                      <p className="my-2">
                        Aakshat Malhotra brings fresh perspective and
                        operational expertise to Malbros. His focus on
                        innovation, efficiency, and client-centric delivery
                        continues to strengthen the company’s position as a
                        leader in design and execution.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 py-md-3 px-md-5 px-3">
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
            className="secondarySwiper pb-5"
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
      <Footer />
    </div>
  );
}
