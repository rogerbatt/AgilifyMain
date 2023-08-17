import PokerImage from "@/pokerImage"

export default function ProductOffer() {
    return (
        <main>
            <div className="text-center">
                <h1 className="text-3xl text-teal-700">What do we help?</h1>
                <p>We help the agile manager to do the planning easily and quickly.</p>
            </div>
            <div className="flex justify-between my-12">
                <div className="w-80 h-80 bg-teal-100 shadow-md  rounded-xl text-center flex flex-col justify-center items-center">
                    <PokerImage/>
                    <h2 className="text-xl font-medium">Poker Planning</h2>
                    <p> Made your poker planning with our system vote without worries.</p>
                </div>
                <div className="w-80 h-80 bg-teal-100 shadow-md  rounded-xl text-center flex flex-col justify-center items-center">
                    <PokerImage/>
                    <h2 className="text-xl font-medium">Poker Planning</h2>
                    <p> Made your poker planning with our system vote without worries.</p>
                </div>
                <div className="w-80 h-80 bg-teal-100 shadow-md  rounded-xl text-center flex flex-col justify-center items-center">
                    <PokerImage/>
                    <h2 className="text-xl font-medium">Poker Planning</h2>
                    <p> Made your poker planning with our system vote without worries.</p>
                </div>
            </div>
        </main>
    )
  }
  