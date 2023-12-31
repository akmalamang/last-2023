import Particles from 'react-particles';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import Countdown from 'react-countdown';

function App() {
  const [newYearMessage, setNewYearMessage] = useState(['Bye 2023 !']);

  const particleInitialixation = async (engine) => {
    await loadFireworksPreset(engine);
  };

  const timeLeft = () => {
    const newYearDate = new Date('Januari ,2024 00:00:00').getTime();
    const nowDate = new Date().getTime();
    const remaningTime = newYearDate - nowDate;
    return remaningTime;
  };

  return (
    <>
      <div className="object-fit min-[529px]:object-none">
        <Particles init={particleInitialixation} options={{ preset: 'fireworks' }} />{' '}
        <div className="flex flex-col  justify-center items-center min-h-screen gap-4 ">
          {' '}
          <span className="text-white text-4xl font-bold z-50">
            <Typewriter words={newYearMessage} loop={false} cursorStyle={'✨'} cursor />{' '}
          </span>{' '}
          <div className="z-50 text-white font-bold text-2xl ">
            <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage(['Selamat', 'Tahun', 'Baru', 'HNY 2024'])} />{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </>
  );
}

export default App;
