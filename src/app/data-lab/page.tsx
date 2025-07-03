'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';


export default function Page() {
  return (
    <div>
      <div className="text-3xl mt-10 mb-10 subpixel-antialiased font-bold">データラボ</div>
      <div className='name'>著者      Haruki</div>
      <div className="mt-20 mb-10 text-xl">一覧</div>
      <div className='mb-5'>・</div>
      <div className='mb-5'>・</div>
      <div className='mb-5'>・</div>
      <div className='mb-5'>・</div>
      <div className='mb-5'>・</div>
      <div className='mb-5'>・</div>
      <div className='link-site mb-5 mt-10'>リンク</div>
      <div className='inline-block mb-6 text-blue-500 hover:text-blue-600'><Link href="https://share.streamlit.io/user/egaoichi-hrk">Streamlit Cloud</Link></div>
    </div>
  );
}