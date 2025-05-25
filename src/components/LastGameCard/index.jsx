import { Link } from "react-router-dom"

const LastGameCard = ({ className }) => {
  return (
    <Link
      to="/games"
      className={`bg-gray-800 dark:bg-[#1a1a1a] text-white border-none rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] h-full min-h-[200px] md:min-h-[250px] transition-colors ${className}`}
    >
      <div className="h-full flex flex-col justify-center items-center p-4">
        <div className="flex items-center mb-6">
          <span className="text-xs px-2 py-1 bg-green-500 text-white rounded-full mr-2">FINAL</span>
          <h2 className="text-2xl font-bold text-center">Last Game</h2>
        </div>

        <div className="flex justify-center w-full items-center">
          <div className="flex flex-col items-center mx-8">
            <div className="w-20 h-20 rounded-full bg-white p-1 shadow-md">
              <img src="/assets/images/team1.png" alt="Team A" className="w-full h-full object-contain" />
            </div>
            <span className="text-base font-bold mt-2">CELTICS</span>
            <span className="text-sm mt-1 opacity-80">(64-18)</span>
          </div>

          <div className="text-center mx-12 flex flex-col">
            <div className="text-4xl font-bold mb-2">145 - 99</div>
            <div className="text-xs opacity-70">May 15, 2025</div>
          </div>

          <div className="flex flex-col items-center mx-8">
            <div className="w-20 h-20 rounded-full bg-white p-1 shadow-md">
              <img src="/assets/images/team2.png" alt="Team B" className="w-full h-full object-contain" />
            </div>
            <span className="text-base font-bold mt-2">LAKERS</span>
            <span className="text-sm mt-1 opacity-80">(49-37)</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default LastGameCard
