import TimelineImage from "../assets/Timeline/Date.png"; 

const RegistrationTimeline = () => {
  return (
    <div id="Schedule">
        <h1 className="bg-[#014EB6] text-center font-[Ghr4] text-4xl">Event Timeline</h1>
      <div className="flex justify-center items-center bg-[#014EB6] py-12 px-4">
      <img
        src={TimelineImage}
        alt="Registration Timeline"
        className="max-w-full h-auto px-5"
      />
    </div>
    </div>
  );
};

export default RegistrationTimeline;


