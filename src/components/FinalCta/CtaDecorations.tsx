export default function CtaDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden xl:block"
    >
      {/* Formas simples */}
      <span className="absolute left-[22px] top-4 h-[108px] w-[108px] rounded-full border-2 border-peach" />
      <span className="absolute left-[319px] top-11 h-[62px] w-[62px] rotate-[15deg] rounded-xl border-2 border-peach" />
      <span className="absolute right-[372px] top-11 h-[30px] w-[30px] rounded-full border-2 border-peach" />
      <span className="absolute -top-[15px] right-0 h-[130px] w-[130px] rotate-[10deg] rounded-[14px] bg-peach" />
      <span className="absolute -left-[17px] top-[235px] h-[58px] w-[50px] -rotate-[8deg] rounded-xl bg-peach" />
      <span className="absolute left-[56px] top-[370px] h-[120px] w-[120px] rounded-full bg-peach" />
      <span className="absolute right-[41px] top-[430px] h-[30px] w-[30px] rounded-full border-2 border-peach" />

      {/* Balão de fala */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="currentColor"
        className="absolute left-[143px] top-[216px] text-peach"
      >
        <circle cx="15" cy="13" r="13" />
        <path d="M4 22L2 30l9-5Z" />
      </svg>

      {/* Forma em "B" */}
      <svg
        width="38"
        height="52"
        viewBox="0 0 38 52"
        fill="currentColor"
        className="absolute left-[303px] top-[383px] rotate-[12deg] text-peach"
      >
        <rect x="2" y="2" width="14" height="46" rx="5" />
        <circle cx="23" cy="14" r="12" />
        <circle cx="23" cy="36" r="12" />
      </svg>

      {/* Gota com raios */}
      <svg
        width="56"
        height="42"
        viewBox="0 0 56 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="absolute right-[206px] top-[91px] text-peach"
      >
        <path d="M28 1v9M7 10l5 5M48 9l-5 5M2 34h12M42 34h13" />
        <path
          d="M28 20C28 20 21 29 21 34a7 7 0 0 0 14 0C35 29 28 20 28 20Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>

      {/* Cubo (contorno) */}
      <svg
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        className="absolute right-[89px] top-[230px] text-peach"
      >
        <path d="M31 1l29 16v28L31 61 2 45V17L31 1Z" />
        <path d="M2 17l29 16 29-16M31 33v28" />
      </svg>

      {/* Caixa (contorno) */}
      <svg
        width="42"
        height="30"
        viewBox="0 0 42 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="absolute right-[272px] top-[390px] text-peach"
      >
        <rect x="1" y="1" width="40" height="28" rx="3" />
        <path d="M14 1v28M28 1v28" />
      </svg>
    </div>
  );
}