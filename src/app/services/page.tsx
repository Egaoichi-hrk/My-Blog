'use client';

import { ServiceCard } from '@/components/ServiceCard';

// サービスの型定義
interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

// サンプルデータ（後で実際のデータに置き換えることができます）
const services: Service[] = [
  {
    id: 1,
    title: "StepMeter",
    description: "年間、月間、週間、日間別にやることをリストアップできるToDoアプリです。",
    imageUrl: "/logo.png",
    link: "#"
  },
  {
    id: 2,
    title: "サービス2",
    description: "サービス2の説明文がここに入ります。ユーザーにとってのメリットや主な機能について説明します。",
    imageUrl: "https://placehold.co/600x600/e5e7eb/a3a3a3?text=Service+2",
    link: "#"
  },
  {
    id: 3,
    title: "サービス3",
    description: "サービス3の説明文がここに入ります。開発の背景や解決する課題について説明します。",
    imageUrl: "https://placehold.co/600x600/e5e7eb/a3a3a3?text=Service+3",
    link: "#"
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
} 