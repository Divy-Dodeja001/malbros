"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CountUp from "react-countup";

const logos = [
  "/partnerLogos/shimano.png",
  "/partnerLogos/kmc.png",
  "/partnerLogos/maxxis.png",
  "/partnerLogos/wtb.png",
  "/partnerLogos/rockshox.png",
  "/partnerLogos/neco.png",
  "/partnerLogos/ralson.png",
  "/partnerLogos/sunrace.png",
  "/partnerLogos/microshift.png",
  "/partnerLogos/sram.png",
  "/partnerLogos/schwalbe.png",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className="">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
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
      <div className="my-5">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          freeModeMomentum={false}
          slidesPerView={6}
          spaceBetween={40}
          autoplay={{
            delay: 0, // important: no delay
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={4000} // higher = slower continuous motion
          allowTouchMove={false}
          grabCursor={false}
          className="brand-marquee"
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 6, spaceBetween: 40 },
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
            <h3>Services Tailored for Lasting Impact</h3>
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
                    alt="hero-fold"
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
                    alt="hero-fold"
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
                    alt="hero-fold"
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
            <h3>Projects That Inspire Confidence</h3>
          </div>
        </div>
        <div>
          <div>
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={1.2}
              spaceBetween={16}
              breakpoints={{
                768: {
                  slidesPerView: 2.7,
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
                    src="/services/fall-ceiling.jpg"
                    alt="hero-fold"
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
              <SwiperSlide className="pb-5">
                <div className="mb-3">
                  <img
                    src="/services/furniture.jpg"
                    alt="hero-fold"
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
              <SwiperSlide className="pb-5">
                <div className="mb-3">
                  <img
                    src="/services/interior-solutions.jpg"
                    alt="hero-fold"
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
                <h3>Our In-House Strength</h3>
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
            <div className="d-flex justify-content-center">
              <div className="col-md-9">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={12}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 35,
                      allowTouchMove: false, // disable dragging/swiping on desktop
                    },
                  }}
                  allowTouchMove={true} // enabled for mobile by default
                  className="secondarySwiper"
                >
                  <SwiperSlide className="">
                    <div className="mb-3">
                      <img
                        src="/founders/Rajjat.jpg"
                        alt="in-house-strength"
                        className="img-fluid rounded-2"
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
                  <SwiperSlide className="">
                    <div className="mb-3">
                      <img
                        src="/founders/Aakshat.jpg"
                        alt="in-house-strength"
                        className="img-fluid rounded-2"
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
      <Footer />
    </div>
  );
}
