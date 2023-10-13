import React, { useState } from 'react';
import './ClimateChangeFacts.css';
import Box from '../Box/Box';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles

import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/navigation";

import "swiper/css/autoplay";

const ClimateChangeFacts = () => {
 

  return (
    <div className="climate-change-facts">
      <h1>Climate Change Facts</h1>
      <Box
        index={1}
        title="Global Temperature"
        image={process.env.PUBLIC_URL + '/climatechange1.png'}
        shortContent="Global temperature has risen by around 1.2 degrees Celsius and is short by around 0.3 degrees from the tipping point of 1.5 degrees Celsius. Crossing the tipping point is going to be catastrophic."
        expandedContent={
          <div>
              <p>
              
              Global temperature has risen by around 1.2 degrees Celsius and is short by around 0.3 degrees from the tipping point of 1.5 degrees Celsius. Crossing the tipping point is going to be catastrophic
            </p>
            <p>
            The average global temperature is generally supposed to be maintained around 15 °C (59 °F) ideally.  However, it has been rising more dramatically last few years and recording some of the world’s warmest years.

            </p>
          </div>
        }
      />
      <Box
        index={2}
        title="Greenhouse Gases (GHG) / Carbon Emission"
        image={process.env.PUBLIC_URL + '/climatechange2.jpg'}
        shortContent="Major greenhouse gases in Earth's atmosphere are water vapor (H2O), carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), ozone (O3), Chlorofluorocarbons (CFCs and HCFCs) and Hydrofluorocarbons (HFCs). Without greenhouse gases Earth’s temperature would have been sub-zero."
        expandedContent={
          <div>
                  <p>
              Major greenhouse gases in Earth's atmosphere are water vapor (H2O), carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), ozone (O3), Chlorofluorocarbons (CFCs and HCFCs) and Hydrofluorocarbons (HFCs). Without greenhouse gases Earth’s temperature would have been sub-zero.

              </p>
              <p>
              Carbon dioxide, on the other hand, is a long-lived greenhouse gas that can persist in the atmosphere for centuries, contributing to the major carbon emissions and thereby to overall warming of the planet.

              </p>
              <p>
              Carbon emissions are constantly on the rise due to several reasons, among which burning of fossil fuels remain the main reason. We still depend on fossil fuels for around 80% of energy needs.

              </p>
          </div>
        }
      />
      <Box
        index={3}
        title="Global Warming and Greenhouse Effect"
        image={process.env.PUBLIC_URL + '/climatechange3.jpg'}
        shortContent="Within a certain threshold, greenhouse gases can be beneficial because they trap heat radiation from the sun on the Earth's surface, thereby keeping it warm. However, if the temperature rises beyond a certain point, the rate of water evaporation from the surface increases. This results in a higher concentration of water vapor in the lower atmosphere, leading to an intensified greenhouse effect."
        expandedContent={
          <div>
                   <p>
              Within a certain threshold, greenhouse gases can be beneficial because they trap heat radiation from the sun on the Earth's surface, thereby keeping it warm. This effect is called greenhouse effect, without which Earth’s temperature would be below freezing point. 

              </p>
              <p>
              However, if the temperature rises beyond a certain point, the rate of water evaporation from the surface increases. This results in a higher concentration of water vapor in the lower atmosphere, which can absorb and emit infrared radiation back to the surface; this leading to an intensified greenhouse effect. Over the past several decades, the amount of carbon dioxide in the Earth's atmosphere has been steadily increasing, which traps extra heat near the surface and causes average global temperatures to rise, leading to global warming. This is why the greenhouse gases must be in check constantly.

              </p>
              <p>
              See what three degrees of global warming looks like: Our lives, fast forward: <a href=" https://youtu.be/6rdLu7wiZOE "> https://youtu.be/6rdLu7wiZOE </a> 

</p>
          </div>
        }
      />
      <Box
        index={4}
        title="GREENHOUSE GAS EMISSIONS BY CATEGORY/SECTOR"
        image={process.env.PUBLIC_URL + '/climatechange4.png'}
        
        shortContent=""
        expandedContent={
          <div>
            {/* Expanded content for Box 4 */}
          </div>
        }
      />
      <Box
        index={5}
        title="CLIMATE CHANGE EFFECTS"
        image={process.env.PUBLIC_URL + '/climatechange6.png'}
        shortContent=" Flash floods, wild fires, severe droughts, untimely rainfalls and storms, melting of polar ice....."
        expandedContent={
          <div>
                   <p>
              Flash floods, wild fires, severe droughts, untimely rainfalls and storms, melting of polar ice, rise in the sea levels etc. are all effects of the rise in global temperature. These extreme weather conditions are the first symptoms of the climate change effects in short term. The effects can be more devastating affecting human lives worldwide and the world economy  too, as the problem balloons further.

              </p>
              <p>
              To read about major climate change events:

              </p>
              <p>
              <a href="https://www.yaleclimateconnections.org/2021/12/the-top-10-global-weather-and-climate-change-events-of-2021/">click here</a>
              </p>
            </div>
          
        }
      />
      <Box
        index={6}
        title="WORLD DAMAGERS OF THE CLIMATE"
        image={process.env.PUBLIC_URL + '/climatechange7.png'}
        shortContent="     Historical data of world’s carbon emissions in 2022 stand at a historical high of around 36.8 billion metric Tons, which is growing...."
        expandedContent={
          <div>
                       <p>
                Historical data of world’s carbon emissions in 2022 stand at a historical high of around 36.8 billion metric Tons, which is growing rapidly year after year. These carbon emissions have tendency to stay in the atmosphere for long years. Major countries damaging the climate are as below. 

              <br />
              <br />
              The top 10 countries with the highest CO₂ emissions in the world (Unit: million tons CO₂) - 2020 EDGAR:
            </p>
            <ul className="country-list">
              <li>China - 11,680.42</li>
              <li>United States - 4,535.30</li>
              <li>India - 2,411.73</li>
              <li>Russia - 1,674.23</li>
              <li>Japan - 1,061.77</li>
              <li>Iran - 690.24</li>
              <li>Germany - 636.88</li>
              <li>South Korea - 621.47</li>
              <li>Saudi Arabia - 588.81</li>
              <li>Indonesia - 568.27</li>
            </ul>
          </div>
        }
      />
      <Box
        index={7}
        title="YOU TOO DAMAGE THE CLIMATE"
        image={process.env.PUBLIC_URL + '/climatechange8.png'}
        shortContent="Every individual too damages the climate significantly more than what we assume. We often think the troublemakers are...."
        expandedContent={
          <div>
                 <p>Every individual too damages the climate significantly more than what we assume. We often think the troublemakers are on the other side of the planet. You will realize you too add to it. You can calculate your carbon footprint of your family or of the enterprise you own. </p>
                  <p><a href="https://example.com/carbon-footprint-calculator">Link to the Carbon Footprint Calculator</a></p>
                  <p>Do you Know?
                    <ul>A human being exhales around 700 grams of Carbon dioxide per day, which equals to around 18.4 metric tons in an average life span of 72 years. </ul>
                    <ul>A cow burps or farts methane gas, a greenhouse gas which is equivalent to 25 times of Carbon dioxide. Added up, burps from cows account for 26 percent of the United States' total methane emissions. (National Geographic)</ul>
                    <ul>Even the food we eat cause the carbon emissions. Wonder how? Add up all the emissions of the electricity used for machinery in agriculture and also use of transportation to ship it from the farms to your nearby retail outlet.  </ul>
                    <ul>Time to become more sensitive to the climate, isn’t it?</ul>
                  </p>
          </div>
        }
      />
      <Box
        index={8}
        title="YOU TOO DAMAGE THE CLIMATE"
        image={process.env.PUBLIC_URL + '/climatechange9.png'}
        shortContent="Reduction of carbon emissions is the most needed climate action in the world. Replacing fossil fuels can have a significant impact on the present carbon emissions."
        expandedContent={
          <div>
                        <p>
    There are 170 different ways climate actions as per United Nations (<a href="https://example.com/un-climate-actions" target="_blank" rel="noopener noreferrer">170 actions to combat climate change - act now! (ungeneva.org)</a>) most of them are all important but smaller steps that we can take as part of lifestyle. If we want to address the elephant in the room, we must step up to see how we can make higher impact towards making the world carbon neutral and net zero.
  </p>
  <h3>Offset</h3>
  <p>
    Offsetting through the generation of power using renewable energies is one significant way of climate action. Many organizations have taken this route and making commendable progress. To make things easier, governments worldwide are coming up with strict compliances on emissions and regularizing the trading of carbon credits. These carbon credits are more a step to bring corporates into the fold of compliance and are a complex area; the more you try to understand this area, the more you see it has many loose ends and are yet to be tackled. However, offsetting still leaves the elephant in the room unaddressed. The issue of present emissions remains at the core.
  </p>
  <h3>Reduce</h3>
  <p>
    Reduction of carbon emissions is the most needed climate action in the world. In this climate action, replacing fossil fuels can have a significant impact on the present carbon emissions. Easier said than done though, this is the area where many startups are striving hard on innovations in clean technologies for achieving breakthroughs. These breakthroughs can have a direct impact on carbon emissions and can reduce them drastically.
  </p>
  <p>
    <a href="https://example.com/reduce-info" target="_blank" rel="noopener noreferrer">Learn more about joining the tribe</a>
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

export default ClimateChangeFacts;

