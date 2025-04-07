import Image from "next/image";
import user from '../assets/user.png'
export function User(){
  return(
    <div className='bg-withe-200 rounded-[25px] w-[804px] h-[257px]'>
                <div className='flex justify-center items-center max-w-[700px] px-[33px] gap-8 my-[18px]'>
                  <Image src={user} height={220} width={220} alt=''/>
                  <div className='flex flex-col w-[448px]'>
                    <p className='text-blue-500 font-nunito font-bold text-xl'>Lucas Mendes</p>
                    <p className='font-nunito font-[300px] text-[15px] mt-[16px]'>Desenvolvedor front-end apaixonado por criar interfaces intuitivas e acessíveis. Especialista em UX/UI e e-commerces, transformando design em código eficiente. Sempre explorando novas tecnologias para melhorar a experiência do usuário. </p>
                  </div>
                </div>
            </div>
  )
}