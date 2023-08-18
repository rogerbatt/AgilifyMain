import NetworkImage from "@/svg/networkImage"
import PokerImage from "@/svg/pokerImage"
import RestrospectiveImage from "@/svg/retrospectiveImage"

export default function ProductOffer() {
    return (
        <main>
            <div className="text-center">
                <h1 className="text-3xl text-teal-700">What do we help?</h1>
                <p>We help the agile manager to do the planning easily and quickly.</p>
            </div>
            <div className="flex justify-between my-12">
                <div className="w-80 h-96 bg-teal-100 shadow-md  rounded-xl text-center flex flex-col justify-center items-center">
                    <PokerImage/>
                    <h2 className="text-xl mt-5 font-medium text-teal-800">Poker Planning</h2>
                    <p> Made your poker planning with our system vote without worries.</p>
                </div>
                <div className="w-80 h-96 bg-teal-100 shadow-md  rounded-xl text-center flex flex-col justify-center items-center">
                    <RestrospectiveImage/>
                    <h2 className="text-xl mt-5 font-medium text-teal-800">Poker Planning</h2>
                    <p> Made your poker planning with our system vote without worries.</p>
                </div>
                <div className="w-80 h-96 bg-teal-100 shadow-md  rounded-xl text-center flex flex-col justify-center items-center">
                    <NetworkImage/>
                    <h2 className="text-xl mt-5 font-medium text-teal-800">Poker Planning</h2>
                    <p> Made your poker planning with our system vote without worries.</p>
                </div>
            </div>
        </main>
    )
  }
  