import waveform from '../assets/Waveform.gif';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={waveform} alt="loader" className="w-32 h-32 object-contain animate-ping" />
    <h1 className="font-bold text-xl text-white mt-2">{title || 'Loading...'}</h1>
  </div>
);

export default Loader;
