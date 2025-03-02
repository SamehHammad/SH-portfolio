import dynamic from 'next/dynamic';
import { memo } from 'react';

// Dynamically import the Next.js Image component
const Image = dynamic(() => import('next/image'), { ssr: false });

const Bulb = memo(() => {
  return (
    <div className='absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]'>
      <Image
        src={'/bulb.png'}
        width={260}
        height={200}
        quality={1}
        className='w-full h-full'
        alt=''
        aria-label='Bulb'
        loading='lazy'
        placeholder='blur' 
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/0z6RwAAAABJRU5ErkJggg==' // Low-quality placeholder
      />
    </div>
  );
});

Bulb.displayName = 'Bulb';
export default Bulb;