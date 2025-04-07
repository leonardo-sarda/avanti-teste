export function UserNotFound(){
  return(
    <div className='bg-withe-200 rounded-[10px] w-[710px] h-[88px]'>
      <div className='flex justify-center flex-col items-center my-[17px] '>
          <p className='font-nunito font-normal text-xl text-red-500'>Nenhum perfil foi encontrado com ese nome de usuário.</p>
          <p className='font-nunito text-xl font-normal text-red-500 '>Tente Novamento.</p>
      </div>
    </div>
  )
}