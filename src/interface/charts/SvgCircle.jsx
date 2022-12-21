const SvgCircle = ({ ri, ro, value, className }) => {
  let ci = Math.PI * (ri * 2);
  let co = Math.PI * (ro * 2);
  let pct = ((100 - value) / 100) * co;

  return (
    <svg
      viewport='0 0 50% 50%'
      xmlns='http://www.w3.org/2000/svg'
      className='min-h-16 h-full aspect-square drop-shadow-md -rotate-90'>
      <circle
        stroke='transparent'
        strokeWidth={5}
        fill='transparent'
        r={`${ri}%`}
        cx={"50%"}
        cy={"50%"}
        strokeDasharray={`${ci}%`}
        strokeLinecap='round'
        strokeDashoffset={0}
      />

      <circle
        className={className}
        strokeWidth={5}
        fill='transparent'
        r={`${ro}%`}
        cx={"50%"}
        cy={"50%"}
        strokeDasharray={`${co}%`}
        strokeLinecap='round'
        strokeDashoffset={`${pct}%`}
      />
    </svg>
  );
};

export default SvgCircle;
