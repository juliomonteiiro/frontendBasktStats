import Card from "../../components/Card"
import LastGameCard from "../../components/LastGameCard"
import statsPlayer from "../../assets/images/stats-player.png"
import playbookImg from "../../assets/images/playbook.png"
import teamPlayer from "../../assets/images/team-player.png"
import calendarImg from "../../assets/images/calendar.png"

const Home = () => {
    return (
    <div className="bg-gray-100 dark:bg-[#0a192f] min-h-screen flex flex-col transition-colors duration-300">
      <div className="flex-grow w-full px-4 py-6">
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 h-full">
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 lg:col-span-3">
              <Card
                to="/stats"
                title="Stats"
                bgClass="bg-emerald-500"
                textClass="text-white"
                borderClass="border-emerald-500"
                darkBgClass="dark:bg-[#00994d]"
                darkTextClass="dark:text-white"
                darkBorderClass="dark:border-[#00994d]"
                imageSrc={statsPlayer}
                imagePosition="left"
                className="h-full"
              />
            </div>
            
            <LastGameCard className="col-span-12 lg:col-span-6" />

            <div className="col-span-12 lg:col-span-3">
              <Card
                to="/playbook"
                title="PlayBook"
                bgClass="bg-orange-500"
                textClass="text-white"
                borderClass="border-orange-500"
                darkBgClass="dark:bg-[#ff6600]"
                darkTextClass="dark:text-white"
                darkBorderClass="dark:border-[#ff6600]"
                imageSrc={playbookImg}
                imagePosition="right"
                className="h-full"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Card
                to="/team"
                title="The Team"
                bgClass="bg-red-500"
                textClass="text-white"
                borderClass="border-red-500"
                darkBgClass="dark:bg-[#cc0000]"
                darkTextClass="dark:text-white"
                darkBorderClass="dark:border-[#cc0000]"
                imageSrc={teamPlayer}
                imagePosition="right"
                className="h-full"
              />
            </div>

            <div className="col-span-12 lg:col-span-6">
              <Card
                to="/schedule"
                title="Schedule"
                bgClass="bg-purple-500"
                textClass="text-white"
                borderClass="border-purple-500"
                darkBgClass="dark:bg-[#9900cc]"
                darkTextClass="dark:text-white"
                darkBorderClass="dark:border-[#9900cc]"
                imageSrc={calendarImg}
                imagePosition="right"
                className="h-full"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
