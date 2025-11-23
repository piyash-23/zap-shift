import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const About = () => {
  return (
    <>
      <div className="bg-white p-7 my-5 rounded-[20px]">
        <div>
          <h2 className="font-extrabold text-[32px] md:text-[40px] lg:text-[48px] text-primary">
            About Us
          </h2>
          <p className="text-primary">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages <br />
            to business shipments — we deliver on time, every time.
          </p>
        </div>
        {/* tabs section */}
        <div className="px-3 py-5">
          <Tabs>
            <TabList>
              <Tab>
                <h2 className="font-extrabold text-primary text-[28px]">
                  Story
                </h2>
              </Tab>
              <Tab>Title 2</Tab>
            </TabList>
            <TabPanel>
              <p>
                We started with a simple promise — to make parcel delivery fast,
                reliable, and stress-free. Over the years, our commitment to
                real-time tracking, efficient logistics, and customer-first
                service has made us a trusted partner for thousands. Whether
                it's a personal gift or a time-sensitive business delivery, we
                ensure it reaches its destination — on time, every time.
              </p>
              <br />
              <p>
                We started with a simple promise — to make parcel delivery fast,
                reliable, and stress-free. Over the years, our commitment to
                real-time tracking, efficient logistics, and customer-first
                service has made us a trusted partner for thousands. Whether
                it's a personal gift or a time-sensitive business delivery, we
                ensure it reaches its destination — on time, every time.
              </p>
              <br />
              <p>
                We started with a simple promise — to make parcel delivery fast,
                reliable, and stress-free. Over the years, our commitment to
                real-time tracking, efficient logistics, and customer-first
                service has made us a trusted partner for thousands. Whether
                it's a personal gift or a time-sensitive business delivery, we
                ensure it reaches its destination — on time, every time.
              </p>
            </TabPanel>
            <TabPanel>
              <h2>Content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default About;
