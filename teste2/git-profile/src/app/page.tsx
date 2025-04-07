import Image from 'next/image';
import logo from '../assets/logo.svg'
import gitname from '../assets/gitname.svg'
import user from '../assets/user.png'
import {Search} from 'lucide-react'
import { User } from '@/components/user';
import { UserNotFound } from '@/components/user-not-found';

export default function Home() {
  return (
      <main className="container mx-auto ">
        <div className= " bg-back-900 flex flex-col items-center h-[537px] mt-[137px]" >
          <div className='flex gap-[11px] mt-[39px]'  >
            <Image  src={logo} alt='git' width={58} height={58} />
            <h1 className="text-6xl font-semibold text-white">Perfil</h1>
            <Image src={gitname} alt='name' width={160} height={45} />
          </div>


            <form className='mt-[27] mb-[33]' 
            action="">
              <div className='bg-white flex flex-row w-[503px] h-[62px] justify-between items-center rounded-[10px]'>
                <input  className='w-full h-full font-semibold text-xl px-4 outline-none ' type="text" name="text" id="text" placeholder='Digite um usuário do Github'/>
              <div className='bg-blue-500 size-[62px] rounded-[10px] flex items-center justify-center'>
              <Search   className='text-white'width={25} height={25}/>
              </div>
              </div>
            </form>
            <User/>
        </div>
      </main>

  );
}
