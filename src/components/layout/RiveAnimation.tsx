'use client' // Add this if using App Router

import { useRive } from '@rive-app/react-canvas';

export default function RiveAnimation() {
  const { RiveComponent } = useRive({
    src: './rive-animation.riv',
    stateMachines: 'State Machine 1', // optional
    autoplay: true,
  });

  return (
    <div className='w-full h-[50px] fleCenter'>
      <RiveComponent />
    </div>
  );
}