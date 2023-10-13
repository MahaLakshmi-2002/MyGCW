import React from 'react';
import Box from '../Box/Box';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles

import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/navigation";

import "swiper/css/autoplay";

const CostOfClimateChange = () => {
  return (
    <div>
      <h1>Cost of Climate Change</h1>
      <Box
        index={1}
        title="Cost of Climate In-action"
        image={process.env.PUBLIC_URL + '/costofclimate1.png'} 
        shortContent="Before we estimate the cost of climate action, it is interesting to see the cost....."
        expandedContent={
          <div>
                    <p>Before we estimate the cost of climate action, it is interesting to see the cost of climate change and climate inaction. Cost of climate inaction is about finding the damage in case we do not respond to climate change. The answers are very interesting. In normal rush of life, we do not get to read all this and hence we are trying to put the information available in the public domain for an easy read. </p>
              <p>First if we look at the cost of climate inaction, the damage is estimated to be a tune of 70 trillion dollars. </p>
              <p>
              That is because the GDP growth of the world is going to be crippled or even negative due the impact of climate change. However, we don’t need to be worried about this scenario because the world has made some encouraging progress in combating the climate change in last few years but it is not enough.  

              </p>
          </div>
        }
      />
      <Box
        index={2}
        title="The Cost of Climate Change"
        image={process.env.PUBLIC_URL + '/costofclimate2.png'}
        shortContent="Next, if we look at the cost of climate change or the damage due to ...."
        expandedContent={
          <div>
                <p>Next, if we look at the cost of climate change or the damage due to its impact, the statistics reveal that in the last decade alone the damage was close to a trillion dollars.</p>
              <p> The damage is mind-blowing because there are many countries whose GDP is not even a trillion dollars. </p>
              <p>Apart from the economic loss, thinking of the human suffering and loss of lives is heart-wrenching. </p>
          </div>
        }
      />
      <Box
        index={3}
        title="How should I calculate the cost of Climate action?"
        image={process.env.PUBLIC_URL + '/costofclimate3.png'}
        shortContent="Finally, we like to know what is the cost per carbon ton to ...."
        expandedContent={
          <div>
                <p>Finally, we like to know what is the cost per carbon ton to offset the carbon emissions.</p>
              <p>
              To arrest these devastating effects of climate change, we have to understand what it takes for the climate action to achieve carbon-neutral world. 

              </p>
              <p>
              There are various scholarly articles, several models and detailed reports on the web, which can consume our endless hours. It is very complex to look at all the scenarios of reducing GHG emissions and calculating the cost of abatement per ton. 

              </p>
              <p>
              There are various ways the cost of abatement is being calculated, which varies from $50 to $1000 per carbon ton; No one way can be accurate. 

              </p>
          </div>
        }
      />
      <Box
        index={4}
        title="How much should I Invest for my carbon footprint?"
        image={process.env.PUBLIC_URL + '/costofclimate4.png'}
        shortContent="Hence to benchmark something, we have considered the cost of abatement, as per work done by Our world in data in compiling the data...."
        expandedContent={
          <div>
             <p>Hence to benchmark something, we have considered the cost of abatement, as per work done by Our world in data in compiling the data including Mckinsey’s report. </p>
              <p>It estimates the cost to be at around 60 Euros or 66 USD per carbon tonne, which is a very conservative figure for calculating the cost of abatement. </p>
              <p>The estimated potential emissions savings from technologies above €60 per tonne is higher progressively and the methods of abatement are also more expensive, as we move to the right of the chart.</p>
              <p>Click below to read more: <a href="https://ourworldindata.org/how-much-will-it-cost-to-mitigate-climate-change">How much will it cost to mitigate climate change? - Our World in Data</a></p>
          </div>
        }
      />
      <Box
        index={5}
        title="Do Not Donate. Invest"
        image={process.env.PUBLIC_URL + '/costofclimate5.png'} 
        shortContent="Hence a base cost of 60 Euros per carbon ton can be used as...."
        expandedContent={
          <div>
              <p>Hence a base cost of 60 Euros per carbon ton can be used as yardstick for offsetting an individual’s carbon footprint. This cost is expected to be only on the rise as we go forward, depending on the method of abatement. </p>
              <p>Do not Donate; Do invest. If you donate, you do not know how well your money is working for the intended purpose, more often than not.</p>
              <p>Your investment into a cleantech that’s working on any alternative to the fossil fuels,  has a spiralling impact since it would help reduce carbon emissions recurringly year after year.</p>
              <p>As an investor in startups, you have a choice to ride piggyback on any angel investor who syndicates with retail investors. Such lead syndicate not only helps you with sharing the investment thesis of each deal before investment but also keeps a tab on the startup, post your investment till an exit. </p>
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

export default CostOfClimateChange;
