import { Clock, Users } from "lucide-react"
import { Button } from "../ui/button"
import ContainerSection from "./container-section"
import Image from "next/image"

const HeroSection = () => {
  return (
    <ContainerSection
      id='home'
      className='bg-gradient-to-b from-slate-200 to-white h-[100vh] flex justify-center items-center '
    >
      <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2'>
        <div className='flex flex-col justify-center space-y-4'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
              Vaše zdraví je naší prioritou
            </h1>
            <p className='relative w-full text-muted-foreground md:text-xl break-words mt-6'>
              Poskytovujeme výjimečné zdravotnické služeb se soucitem a odborností. Náš tým
              specialistů se postará o vaše problémy.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Button className='px-8'>Rezervujte si žádanku</Button>
            <Button variant='outline' className='px-8'>
              Kontaktujte nás
            </Button>
          </div>
          <div className='flex items-center gap-4 text-sm text-muted-foreground'>
            <div className='flex items-center gap-1'>
              <Clock className='h-4 w-4 text-primary' />
              <span>Špičkový systém</span>
            </div>
            <div className='flex items-center gap-1'>
              <Users className='h-4 w-4 text-primary' />
              <span>Odborníci</span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center relative'>
          <Image
            src='/Caduceus-Red-And-Blue.svg'
            width={100}
            height={20}
            alt='Hospital building'
            className='rounded-lg object-cover shadow-xl lg:w-92 md:w-72 w-52 p-2'
          />
        </div>
      </div>
    </ContainerSection>
  )
}

export default HeroSection
