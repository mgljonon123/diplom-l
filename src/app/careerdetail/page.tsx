'use client';

import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import Menu from '../components/Menu';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const professions = [
  {
    icon: '📷',
    title: 'Cinematographer',
    rating: 5,
  },
  {
    icon: '🎨',
    title: 'Graphic design',
    rating: 5,
  },
];

const professionDetails = {
  'Cinematographer': {
    title: 'Cinematographe Director of Photography / DOP',
    description: 'Кино зураглаачийн дүрд өөрийгөө бэлдэж буй бол, энэ чиглэлийн ажлын байр, шаардлагатай ур чадвар, анхаарах зүйлсийг эндээс олж мэдээрэй.',
    mainDuties: [
      'Кино зураг авалт, зураглаачийн үүрэг гүйцэтгэх',
      'Гэрэлтүүлэг, камерын тохиргоо хийх',
      'Зураг авалтын багтай хамтран ажиллах',
      'Зураг авалтын төлөвлөгөө боловсруулах',
      'Зураг авалтын явцад хяналт тавих'
    ],
    attentionPoints: [
      'Камер - техникийн мэдлэг',
      'Гэрэлтүүлэг - оновчтой сонголт',
      'Багаж хэрэгслийн зохистой хэрэглээ',
      'Багаар ажиллах чадвар'
    ],
    requiredSkills: [
      'Уран бүтээлийн мэдрэмж',
      'Техникийн ур чадвар',
      'Харилцааны чадвар',
      'Хариуцлагатай байдал',
      'Шинийг эрэлхийлэх сэтгэлгээ'
    ],
    learningPoints: [
      'Зураг авалтын орчин, техникүүд',
      'Кино зураглаачийн түүх',
      'Ажлын байрны дүрэм журам'
    ]
  },
  'Graphic design': {
    title: 'Graphic Designer',
    description: 'График дизайнер болж өөрийгөө бэлдэж буй бол, энэ чиглэлийн ажлын байр, шаардлагатай ур чадвар, анхаарах зүйлсийг эндээс олж мэдээрэй.',
    mainDuties: [
      'Бренд, логотип, урилга, байршуулалтын материал бэлтгэх',
      'Зураг засварлах, боловсруулах',
      'Хэрэглэгчийн хүсэлтийн дагуу дизайн хийх',
      'Хамтын ажиллагаатай ажиллах',
      'Төслийн цаг хугацааг удирдах'
    ],
    attentionPoints: [
      'Adobe Creative Suite мэдлэг',
      'Типографик, өнгөний онол',
      'Брендингийн зарчим',
      'Хэрэглэгчийн туршлага'
    ],
    requiredSkills: [
      'Бүтээлч сэтгэлгээ',
      'Техникийн ур чадвар',
      'Харилцааны чадвар',
      'Цагийн удирдлага',
      'Шинийг эрэлхийлэх сэтгэлгээ'
    ],
    learningPoints: [
      'Дизайны програм хангамж',
      'График дизайны түүх',
      'Брендингийн зарчим'
    ]
  }
};

export default function CareerDetailPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedProfession = searchParams.get('profession') || 'Cinematographer';
  const details = professionDetails[selectedProfession as keyof typeof professionDetails];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfessionClick = (title: string) => {
    router.push(`/careerdetail?profession=${encodeURIComponent(title)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#6b655a] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#181818] border-b border-gray-700">
        <Link href="/" className="text-2xl font-bold focus:outline-none">
        START UP
        </Link>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleMenu}
            className="text-2xl bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
          >
            ☰
          </button>
        </div>
      </header>

      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Title */}
      <div className="text-center mt-8 text-xl font-medium">{details.title}</div>

      {/* Main Card */}
      <div className="flex justify-center mt-8">
        <div className="bg-white text-black rounded-xl shadow-lg w-full max-w-xl">
          {/* Black Top Section */}
          <div className="bg-black text-white rounded-t-xl p-6 text-center">
            <div className="flex justify-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <div className="font-semibold mb-1">You are a 5.0 star moviem!</div>
            <div className="text-xs text-gray-300">
              {details.description}
            </div>
          </div>
          {/* Card Content */}
          <div className="p-6 space-y-6">
            {/* Үндсэн үүрэг */}
            <div>
              <div className="font-semibold mb-2">Үндсэн үүрэг:</div>
              <ul className="list-decimal list-inside text-sm space-y-1">
                {details.mainDuties.map((duty, index) => (
                  <li key={index}>{duty}</li>
                ))}
              </ul>
              <div className="flex justify-end mt-2">
                <img src="https://cdn-icons-png.flaticon.com/512/2922/2922017.png" alt="icon" className="w-12 h-12" />
              </div>
            </div>
            {/* Анхаарах зүйлс */}
            <div>
              <div className="font-semibold mb-2">Анхаарах зүйлс</div>
              <ul className="list-disc list-inside text-sm space-y-1">
                {details.attentionPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="border-b border-gray-300 mt-2" />
            </div>
            {/* Шаардлагатай чадварууд */}
            <div>
              <div className="font-semibold mb-2">Шаардлагатай чадварууд</div>
              <ul className="list-disc list-inside text-sm space-y-1">
                {details.requiredSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <div className="border-b border-gray-300 mt-2" />
            </div>
            {/* Суралцах зүйлс */}
            <div>
              <div className="font-semibold mb-2">Суралцах зүйлс:</div>
              <ul className="list-disc list-inside text-sm space-y-1">
                {details.learningPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="border-b border-gray-300 mt-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 