import ImageMain from '@/imageMain'
import { Merriweather } from 'next/font/google'
const merriweather = Merriweather({ subsets: ['latin'] , weight: ["400","700"]})


export default function MainSection() {
    return (
        <main className={merriweather.className}>
            <div className='flex justify-between py-36'>
                <div className='flex flex-col space-y-12 text-teal-700'>
                    <span className='text-6xl'>Be <span className='text-red-500'>Agile</span> in Your Planning Too</span>
                    <span className='w-96'>Lorem ipsum dolor sit amet. Vel laudantium temporibus At labore blanditiis aut tempore labore! Qui accusantium pariatur 33 nisi omnis ea sapiente minima ut veniam iusto sit dicta minima 33 repellat eveniet sed pariatur illo. In quia dolorum ea tempore voluptatibus aut inventore aspernatur?</span>
                    <button className='w-64 h-16 font-bold bg-red-500 rounded-xl text-white text-xl'>Enjoy Now!</button>
                </div>
                <div>
                    <ImageMain/>
                </div>
            </div>
        </main>
    )
  }
  