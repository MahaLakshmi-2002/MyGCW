import React from "react";
import "./ForInvestor";
import Box from "../Box/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles

import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/navigation";

import "swiper/css/autoplay";

const ForInvestor = () => {
  return (
    <>
      <div>
        <h1>For Investor</h1>
        <Box
          index={1}
          title="Angel Investors"
          image={process.env.PUBLIC_URL + "/Leonardo DiCaprio.jpg"}
          shortContent=" As an Angel Investor, if you are looking for investing in Startups in clean-tech and climate tech space, you clicked the right button
          Clean-tech and Climate tech Industry is expected to be a trillion dollar opportunity in coming years
          There are many cleantech startups who proved they can be Unicorns, already"
          expandedContent={
            <div>
              <p>
                As an Angel Investor, if you are looking for investing in
                Startups in clean-tech and climate tech space, you clicked the
                right button Clean-tech and Climate tech Industry is expected to
                be a trillion dollar opportunity in coming years There are many
                cleantech startups who proved they can be Unicorns, already At
                GCW, we curate startups right from Ideation stage till they get
                Investor-ready
              </p>
              <p>
                You can review the curated startups at GCW and choose the
                startups to Invest You can decide to be a Lead-Investor and
                choose other angel Investors to co-invest You can be a
                Lead-syndicate and syndicate with Retail Investors at GCW If you
                want to promote your own curated startups, you can syndicate
                with retail Investors here at GCW, for fundraise Everything
                works digitally for you. Looks cool. Isn’t it?
              </p>
              {/* <p>
              Follow the link to hear more:{" "}
              <a href="https://youtu.be/vTyLSr_VCcg">
                https://youtu.be/vTyLSr_VCcg
              </a>
            </p> */}
            </div>
          }
        />
        <Box
          index={2}
          title="Retail Investors"
          image={process.env.PUBLIC_URL + "/BillGates.jpg"}
          shortContent=" As a Retail Investor, if you are looking for investing in Startups in clean-tech and climate tech space, you are at a right place
          Yes, Investing in Startups can give multi-X returns but need to do it right way
          Spreading your risk makes sense; If you invest in 10 Startups"
          expandedContent={
            <div>
              <p>
                As a Retail Investor, if you are looking for investing in
                Startups in clean-tech and climate tech space, you are at a
                right place Yes, Investing in Startups can give multi-X returns
                but need to do it right way Spreading your risk makes sense; If
                you invest in 10 Startups, one of them can be a star investment
                and a few of them turn out to be mediocre while some may bomb
                Overall, chances are high to make a multi-X return in a span of
                3 to 5 years, some even 7 years on an average
              </p>
              <p>
                Yes, Retail Investors are increasing world over Clean-tech and
                Climate tech Industry is expected to be a trillion dollar
                opportunity in coming years Catching them young is the key You
                don’t need to waste your time in due diligence of startups You
                can syndicate with Angel Investors here Such Lead syndicates
                share the Investment Thesis of each deal with you You also get
                updates of progress from Lead Syndicates, after your investment
                in a startup All that works digitally for you. Looks cool. Isn’t
                it?
              </p>
              {/* <p>
              Follow the link to hear more:{" "}
              <a href="https://youtu.be/AnVglnVD9Mw">
                https://youtu.be/AnVglnVD9Mw
              </a>
            </p> */}
            </div>
          }
        />
      </div>

      <div className="profile-view-container swiper">
        <div className="profile-content">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={true}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/recentposts.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/investorupdates.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/hotroles.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/cleantechupdates.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/recentposts.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/cleantechupdates.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/hotroles.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/recentposts.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                      <img
                        src={process.env.PUBLIC_URL + "/cleantechupdates.png"}
                        alt=""
                        className="card-img"
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h2 className="name">John campbell</h2>

                    <p className="description">Lorem Ipsum....</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="carbon-calculator-container">
        <div className="carbon-image">
          <img
            src={process.env.PUBLIC_URL + "/carbon-calculator.png"}
            alt="Carbon Calculator"
          />
        </div>
        <div className="carbon-content">
          <h2>Carbon Footprint Calculator</h2>
          <p>You will realize,You too are the damager.</p>
          <p>Calculate Your Carbon Footprint.</p>
          <button> Click To Start</button>
        </div>
      </div>
    </>
  );
};

export default ForInvestor;
