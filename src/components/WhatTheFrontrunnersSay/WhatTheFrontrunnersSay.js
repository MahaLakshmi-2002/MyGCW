import React from "react";
import Box from "../Box/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles

import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/navigation";

import "swiper/css/autoplay";

const WhatTheFrontrunnersSay = () => {
  return (
    <div>
      <h1>What The Frontrunners Say</h1>
      <Box
        index={1}
        title="Leonardo DiCaprio about Climate Crisis"
        image={process.env.PUBLIC_URL + "/Leonardo DiCaprio.jpg"}
        shortContent="The Titanic hero and UN messenger of peace, at the opening of the climate summit, says that mankind has been treating the climate crisis like a fiction so far, as if pretending that climate change was not real, assuming it would somehow go away."
        expandedContent={
          <div>
            <p>
              The Titanic hero and UN messenger of peace, at the opening of the
              climate summit, says that mankind has been treating the climate
              crisis like a fiction so far, as if pretending that climate change
              was not real, assuming it would somehow go away. What he says is
              so real, we all think the climate change is affecting someone else
              on the other side of the planet. If you look at the travails of
              even one person who had been affected by an extreme weather
              condition, you will soon realize that it can happen to you too. He
              reiterates that the climate change is the single greatest security
              threat on the face of humanity. He says it is a difficult but
              achievable task. “You can make history or you will be vilified by
              it”.
            </p>
            <p>
              The Titanic hero and UN messenger of peace, at the opening of the
              climate summit, says that mankind has been treating the climate
              crisis like a fiction so far, as if pretending that climate change
              was not real, assuming it would somehow go away. What he says is
              so real, we all think the climate change is affecting someone else
              on the other side of the planet. If you look at the travails of
              even one person who had been affected by an extreme weather
              condition, you will soon realize that it can happen to you too. He
              reiterates that the climate change is the single greatest security
              threat on the face of humanity. He says it is a difficult but
              achievable task. “You can make history or you will be vilified by
              it”.
            </p>
            <p>
              The Titanic hero and UN messenger of peace, at the opening of the
              climate summit, says that mankind has been treating the climate
              crisis like a fiction so far, as if pretending that climate change
              was not real, assuming it would somehow go away. What he says is
              so real, we all think the climate change is affecting someone else
              on the other side of the planet. If you look at the travails of
              even one person who had been affected by an extreme weather
              condition, you will soon realize that it can happen to you too. He
              reiterates that the climate change is the single greatest security
              threat on the face of humanity. He says it is a difficult but
              achievable task. “You can make history or you will be vilified by
              it”.
            </p>
            <p>
              Follow the link to hear more:{" "}
              <a href="https://youtu.be/vTyLSr_VCcg">
                https://youtu.be/vTyLSr_VCcg
              </a>
            </p>
          </div>
        }
      />
      <Box
        index={2}
        title="Bill Gates about Climate Crisis"
        image={process.env.PUBLIC_URL + "/BillGates.jpg"}
        shortContent="Bill Gates is an American business magnate, software developer, and philanthropist. He is best known as the co-founder of Microsoft Corporation. In this video, Bill Gates talks about the importance of addressing climate change and the need for innovative solutions to combat the crisis."
        expandedContent={
          <div>
            <p>
              Bill Gates is an American business magnate, software developer,
              and philanthropist. He is best known as the co-founder of
              Microsoft Corporation. In this video, Bill Gates talks about the
              importance of addressing climate change and the need for
              innovative solutions to combat the crisis.
            </p>
            <p>
              In his speech, he emphasizes the need for global cooperation and
              increased investment in clean energy technologies. He believes
              that by working together, we can find practical solutions to
              mitigate the impact of climate change and create a more
              sustainable future for all.
            </p>
            <p>
              Follow the link to hear more:{" "}
              <a href="https://youtu.be/AnVglnVD9Mw">
                https://youtu.be/AnVglnVD9Mw
              </a>
            </p>
          </div>
        }
      />
      <Box
        index={3}
        title="Greta Thunberg about Climate Crisis"
        image={process.env.PUBLIC_URL + "/GretaThunberg.jpg"}
        shortContent="Greta Thunberg is a Swedish environmental activist who gained international recognition for her efforts to combat climate change. In this video, she addresses the United Nations Climate Action Summit and delivers a powerful speech urging world leaders to take immediate and bold actions to address the climate crisis."
        expandedContent={
          <div>
            <p>
              Greta Thunberg is a Swedish environmental activist who gained
              international recognition for her efforts to combat climate
              change. In this video, she addresses the United Nations Climate
              Action Summit and delivers a powerful speech urging world leaders
              to take immediate and bold actions to address the climate crisis.
            </p>
            <p>
              In her passionate speech, Greta criticizes world leaders for their
              inaction and lack of urgency in tackling the climate emergency.
              She emphasizes the need for drastic reductions in carbon emissions
              and highlights the severe consequences of climate change on
              current and future generations.
            </p>
            <p>
              Follow the link to hear more:{" "}
              <a href="https://youtu.be/VFkQSGyeCWg">
                https://youtu.be/VFkQSGyeCWg
              </a>
            </p>
          </div>
        }
      />
      <Box
        index={4}
        title="Elon Musk about Renewable Energy"
        image={process.env.PUBLIC_URL + "/ElonMusk.jpg"}
        shortContent="Elon Musk is a billionaire entrepreneur and the CEO of Tesla, SpaceX, and other technology companies. In this video, he discusses the importance of renewable energy and the transition to a sustainable future."
        expandedContent={
          <div>
            <p>
              Elon Musk is a billionaire entrepreneur and the CEO of Tesla,
              SpaceX, and other technology companies. In this video, he
              discusses the importance of renewable energy and the transition to
              a sustainable future.
            </p>
            <p>
              Musk emphasizes the need to accelerate the adoption of clean
              energy sources, such as solar and wind power, to reduce our
              reliance on fossil fuels and combat climate change. He believes
              that the widespread adoption of renewable energy is not only
              essential for environmental sustainability but also crucial for
              economic growth and global security.
            </p>
            <p>
              Follow the link to hear more:{" "}
              <a href="https://youtu.be/JVNJZND_0JM">
                https://youtu.be/JVNJZND_0JM
              </a>
            </p>
          </div>
        }
      />
      <Box
        index={5}
        title="Vinod Khosla, the inspiring angel investor"
        image={process.env.PUBLIC_URL + "/VinodKhosla.jpg"}
        shortContent="Vinod Khosla, the Co-Founder of Sun Micro Systems is an inspiring angel investor in cleantech and climate tech. Vinod Khosla is among the top one percent who appeared on the Forbes Fortune lists. With a few successful investments in cleantechs in the last decade, which are...."
        expandedContent={
          <div>
            <p>
              Vinod Khosla, the Co-Founder of Sun Micro Systems is an inspiring
              angel investor in cleantech and climate tech. Vinod Khosla is
              among the top one percent who appeared on the Forbes Fortune
              lists. With a few successful investments in cleantechs in the last
              decade, which are now unicorns, Vinod is bullish about
              opportunities in addressing the climate crisis. He shares an
              interesting insight that the world needs only a dozen or so real
              deep technical breakthroughs to handle the climate crisis. He
              states a few things like plant-based meats, Jet fuels, Electric
              planes, Hydrogen fuelled planes, Nuclear, Geothermal etc. which
              can make a difference for the transition. He says what we need is
              a true invention but not an extrapolation of the past. He gives
              confidence to the startups by saying there are no experts yet in
              this area and there is a lot that can be done and explored on our
              own.
            </p>
            <p>
              Follow the link to know more:{" "}
              <a href="https://youtu.be/8PO-A8X1_qY">
                https://youtu.be/8PO-A8X1_qY
              </a>
            </p>
          </div>
        }
      />
      <Box
        index={6}
        title="Sir David Attenborough"
        image={process.env.PUBLIC_URL + "/SirDavidAttenborough.jpg"}
        shortContent="   Sir David Atenborough, who is synonymous to Nature preservation, addressed the world leaders at a UN summit of COP26. He said we are already in trouble because we are releasing carbon a...."
        expandedContent={
          <div>
            <p>
              Sir David Atenborough, who is synonymous to Nature preservation,
              addressed the world leaders at a UN summit of COP26. He said we
              are already in trouble because we are releasing carbon at an
              unprecedented pace and scale. His speech is very simple and
              simplifies the grand goal of Carbon-Neutral and Net-Zero. Simply,
              it means we should bring down the carbon particles in the air,
              which is rising fast and is around 400+ ppm. He says no nation has
              completed its development because no advanced nation is yet
              sustainable. Let’s learn together how to achieve this ensuring
              none are left behind.
            </p>
            <p>
              Follow the link to know more:{" "}
              <a href="https://youtu.be/o7EpiXViSIQ">
                https://youtu.be/o7EpiXViSIQ
              </a>
            </p>
          </div>
        }
      />
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
    </div>
  );
};

export default WhatTheFrontrunnersSay;
