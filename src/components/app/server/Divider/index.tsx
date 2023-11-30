import { colors } from '@/styles/variables';

export function Divider() {
  return (
    <div
      className='border-b border-solid my-8'
      style={{ borderBottomColor: colors.color1 }}
    />
  );
}
