import { chelseaMarket } from '@/app/fonts';
import { ComponentProps } from 'react';

export interface ServicePrice {
  service: string;
  price: number;
}

interface PriceTableProps extends ComponentProps<'table'> {
  title: string;
  servicePrices: ServicePrice[];
}

export default function PriceTable({
  title,
  servicePrices,
  ...all
}: PriceTableProps) {
  return (
    <table {...all}>
      <thead className={`text-left text-3xl ${chelseaMarket.className}`}>
        <tr>
          <th className='py-2'>{title}</th>
        </tr>
      </thead>
      <tbody className='text-lg'>
        {servicePrices.map((servicePrice) => (
          <tr className='border-y border-zinc-500' key={servicePrice.service}>
            <td className='py-2 text-left'>{servicePrice.service}</td>
            <td className='py-2 text-right'>
              £{servicePrice.price.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
