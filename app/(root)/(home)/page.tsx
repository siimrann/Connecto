import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const istOffset = 5 * 60 + 30; // Total offset in minutes
const sgtOffset = now.getTimezoneOffset(); // Current offset in minutes from UTC for server time
const adjustedTime = new Date(now.getTime() + (istOffset - sgtOffset) * 60000);

// Format time and date for India
const time = adjustedTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
const date = new Intl.DateTimeFormat('en-IN', { dateStyle: 'full' }).format(adjustedTime);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Video Call made easy
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
