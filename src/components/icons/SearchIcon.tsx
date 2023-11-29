export function SearchIcon(props: { fill?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.672 16.641L21 21m-2-10a8 8 0 11-16 0 8 8 0 0116 0z'
        stroke='#000'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
