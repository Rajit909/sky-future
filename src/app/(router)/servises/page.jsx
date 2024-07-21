import React from "react";
import GridItem from "./_components/GridItem";
import { Bell, FireExtinguisher, Handshake, Hospital, Navigation, PlaneTakeoff, SquareUser, TramFront } from "lucide-react";

const Services = () => {
  return (
    <>
      <div className="bg-black" data-aos="fade-right">
        <section
          id="features"
          className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
              WHAT WE DO
            </span>
            <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-xl sm:text-2xl">
              OUR SERVICES
            </h2>
            <p
            className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            BEST INSTITUTE TO BUILD CAREER IN
        </p>
          </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <GridItem url={<Hospital/>} title="Hospitality" desc="Hospitality management involves all the tasks and aspects associated with managing a hospitality business. These businesses focus on welcoming customers and providing them with pleasant experiences, whether through dining, lodging, events, entertainment, or travel. Hospitality is the relationship of a host towards a guest, wherein the host receives the guest with some amount of goodwill and welcome. This includes the reception and entertainment of guests, visitors, or strangers."/>
            <GridItem url={<Bell />} title="MOCK DRILLS" desc="Hospitality management involves all the tasks and aspects associated with managing a hospitality business. These businesses focus on welcoming customers and providing them with pleasant experiences, whether through dining, lodging, events, entertainment, or travel. Hospitality is the relationship of a host towards a guest, wherein the host receives the guest with some amount of goodwill and welcome. This includes the reception and entertainment of guests, visitors, or strangers."/>
            <GridItem url={<PlaneTakeoff />} title="MOCK AIRCRAFT PRACTICALS" desc="Hospitality management involves all the tasks and aspects associated with managing a hospitality business. These businesses focus on welcoming customers and providing them with pleasant experiences, whether through dining, lodging, events, entertainment, or travel. Hospitality is the relationship of a host towards a guest, wherein the host receives the guest with some amount of goodwill and welcome. This includes the reception and entertainment of guests, visitors, or strangers."/>
            <GridItem url={<TramFront />} title="TOUR & TRAVEL" desc="Hospitality management involves all the tasks and aspects associated with managing a hospitality business. These businesses focus on welcoming customers and providing them with pleasant experiences, whether through dining, lodging, events, entertainment, or travel. Hospitality is the relationship of a host towards a guest, wherein the host receives the guest with some amount of goodwill and welcome. This includes the reception and entertainment of guests, visitors, or strangers."/>
            <GridItem url={<FireExtinguisher />} title="FIRE, SAFETY and DISASTER MANAGEMENT DRILLS" desc="Hospitality management involves all the tasks and aspects associated with managing a hospitality business. These businesses focus on welcoming customers and providing them with pleasant experiences, whether through dining, lodging, events, entertainment, or travel. Hospitality is the relationship of a host towards a guest, wherein the host receives the guest with some amount of goodwill and welcome. This includes the reception and entertainment of guests, visitors, or strangers."/>
            <GridItem url={<SquareUser />} title="EXPERIENCED PROFFESIONAL AVIATION INSTRUCTOR" desc="Hospitality management involves all the tasks and aspects associated with managing a hospitality business. These businesses focus on welcoming customers and providing them with pleasant experiences, whether through dining, lodging, events, entertainment, or travel. Hospitality is the relationship of a host towards a guest, wherein the host receives the guest with some amount of goodwill and welcome. This includes the reception and entertainment of guests, visitors, or strangers."/>
            <GridItem url={<Handshake />} title="VIVAs" desc="Hospitality management involves all the tasks and aspects associated with managing a hospitality business. These businesses focus on welcoming customers and providing them with pleasant experiences, whether through dining, lodging, events, entertainment, or travel. Hospitality is the relationship of a host towards a guest, wherein the host receives the guest with some amount of goodwill and welcome. This includes the reception and entertainment of guests, visitors, or strangers."/>
            <GridItem url={<Navigation />} title="100% PLACEMENT ASSISTECE" desc="Hospitality management involves all the tasks and aspects associated with managing a hospitality business. These businesses focus on welcoming customers and providing them with pleasant experiences, whether through dining, lodging, events, entertainment, or travel. Hospitality is the relationship of a host towards a guest, wherein the host receives the guest with some amount of goodwill and welcome. This includes the reception and entertainment of guests, visitors, or strangers."/>
          </div>

          <div
            className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
            style={{
              backgroundImage:
                "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
              borderColor: "rgba(92, 79, 240, 0.2)",
            }}
          ></div>
          <div
            className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
            style={{
              backgroundImage:
                "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
              borderColor: "rgba(92, 79, 240, 0.2)",
            }}
          ></div>
        </section>
      </div>
    </>
  );
};

export default Services;
