import Image from 'next/image'
import HeroImg from 'public/hero.png'
import Styles from './page.module.scss';
import { Roboto ,Montserrat} from "@next/font/google";
import { Buttons } from '@/components';


const roboto = Roboto({
  subsets:['latin'],
  weight:['400','700'],
})

const montserrat =Montserrat({
   subsets:['latin'],
  
   
})



export default function Home() {
  
  return (
    <main className={`${Styles.main__container} ${roboto.className}`}>

      <div className={Styles.main__sectionlead}>
           <h2 className={Styles.text}>better design for your digital products </h2>
           <p className={`${Styles.lead} ${montserrat.className}`}>turining your idea into reality . we bring together the teams from the global tech industry</p>
          
           <Buttons title={"see our teams"} url={"/portfolia"} styleName={""} />
      </div>

      <div className={Styles.main__imgContainer}>
      <Image  src={HeroImg}  
      className={Styles.herobg} 
      alt='backgrouund image' />
      </div>
      
    </main>
  )
}
