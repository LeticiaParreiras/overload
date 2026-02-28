import moment from 'moment';
import { getShows } from "../function/getShows";

export default async function Shows(){
 const showsList = await getShows();
    return(
        <div id="Shows" className='justify-start px-12 py-24 '>
            <div className="text-center justify-center">
                <h1 className="text-white text-8xl font-normal font-['Bakbak_One'] leading-[66.24px] tracking-[11.52px]">SHOWS</h1>
            </div>
            
        <div className='flex flex-col justify-start gap-0 text-left px-5 md:px-40 py-5'>
  {showsList.map((show) => (
    <div key={show._id} className='flex flex-col'>
      <div className='flex flex-col md:flex-row items-start justify-between py-5'>
        <div className='flex flex-col gap-1'>
          <p className="text-white text-[2.8rem] font-bold uppercase leading-none tracking-[4px] font-['Bakbak_One']">
            {show.local}
          </p>
          <p className="text-white text-2xl font-normal uppercase tracking-[4px] font-asap">
            {moment(show.date).format('DD MMM YY')}
          </p>
        </div>
        <div className="h-10 px-5 bg-red-700 rounded-lg inline-flex justify-center items-center hover:bg-white">
          <a className="text-white text-2xl uppercase tracking-[2px] font-asap hover:text-red-700" href={show.buyLink}>
            Tickets
          </a>
        </div>
      </div>
      <div className="self-stretch h-px bg-white opacity-40" />
    </div>
                
            ))}
        </div>
        </div>
    );
}