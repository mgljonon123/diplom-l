"use client";

import React, { useEffect, useState } from "react";
import Menu from "./components/Menu";
import { FaBars } from "react-icons/fa";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./styles/buttons.css";


export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "ЯМАР МЭРГЭЖИЛ",
    "Та ямар мэргэжил, карьерын зам сонгох ёстойгоо шийдэхэд бэрхшээлтэй байна уу?",
  ];

  const navigateToProfile = () => {
    router.push('/profile');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <> 
      <header className="top-8 py-10 bg-[#f1f1f1] left-12 w-full z-10 transition-all duration-300" id="header">
        <nav className="flex items-center justify-between container px-20 py-4">
          <a href="#" className="text-black text-4xl font-semibold uppercase">Start Up</a>
         
          <button onClick={() => router.push("/auth/login")} className="ml-auto mr-[-1350px] font-bold w-30 text-black py-2 px-5 rounded-full relative after:content-[''] after:absolute after:bottom-0 after:left-[18px] after:right-[15px] after:h-[1px] after:bg-black text-sm">LET'S TALK</button>
          
          <a  onClick={navigateToProfile} href="#" className="ml-auto font-bolds mr-[-365px] w-20 bg-black  text-white py-2 px-4.5 rounded-full">Profile</a>
        </nav>
      </header>
      

 
      
      <main className="relative overflow-x-hidden w-full">
        <section className="py-55 bg-[#f1f1f1] text-white relative">
          <div className="container    grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center  lg:pr-32 w-full">
              <div className="flex  flex-col items-end w-full    ">
                <h1 className="text-right font-bold text-black leading-tight pt-2 max-w-3xl text-3xl md:text-6xl ml-auto md:mr-[-238px]">
                Ирээдүйд хүрэх таны
                </h1>
                <h1 className="text-right font-bold text-black leading-tight pt-2 max-w-3xl text-3xl md:text-6xl ml-auto md:mr-[-150px]">
                 зам эндээс эхлэнэ.
                </h1>

                <p className="text-lg pt-10 text-black max-w-3xl ml-auto md:mr-[-38px] mt-0 text-justify">
                   Карьерийн зөвлөгөө өгч, өөрийгөө илүү сайн <br /> таньж, ирээдүйгээ төлөвлө" гэх нь таны амжилттай<br /> ирээдүйг бүтээх, өөрийн мэргэжлийн замыг <br /> тодорхойлж, хүсэл мөрөөдлөө биелүүлэхэд туслан.
                </p>
              </div>

              <button className="learn-more ml-auto mr-[-38px] mt-10" onClick={() => router.push("/auth/login")}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Хариултаа олох</span>
              </button>
            </div>

            
            <div className="absolute top-40 left-310 w-130 h-120">
              <div className="relative w-full h-full">
                {/* Removed SplineViewer */}
              </div>
            </div>
          </div>
        </section>


        <section  id="section2" className="relative h-screen bg-[#ffffff] flex items-center justify-center px-4 md:px-32">
         <div className="absolute top-10 left-10 w-10 h-10 border-2 border-black rounded-full flex items-center justify-center text-2xl font-semibold text-black cursor-pointer hover:bg-black hover:text-white transition" onClick={scrollToTop}>
            Λ
          </div>
          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[60px] md:text-[220px] font-bold text-gray-300 opacity-20 select-none animate-letter-spacing z-0 pointer-events-none whitespace-nowrap">
            МЭРГЭЖИЛ
          </h2>
          <div className="absolute top-70 left-10 md:left-75 z-10">
            <h4 className="text-base md:text-lg font-medium md:text-[20px] text-black">ЯМАР МЭРГЭЖИЛ</h4>
          </div>
          <div className="flex flex-row items-center w-full z-10">



            <div className="flex-1 flex justify-center">
              <img
                src="/top-view-career-written-note-with-stickers-notepad-white-background-job-office-copybook-salary-college-business-color.jpg"
                alt="career card"
                className="w-72 md:w-[400px] md:h-[550px] rounded-xl shadow-xl rotate-[20deg] mx-auto"
              />
            </div>


            
            <div className="absolute top-120 left-310 flex-1 flex flex-col items-center ml-0 md:ml-10">
              <p className="text-[20px] max-w-lg text-gray-600 leading-relaxed mb-10 text-justify mt-32">
                Та ямар мэргэжил, карьерын<br /> замыг сонгохыг хүсэж байна вэ?
              </p>


              <button onClick={() => router.push("/auth/login")}
                className="px-8 py-3  md:mr-[130px]  border border-gray-400 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-black hover:text-white transition flex items-center ml-4 text-black">
                Route Map
                <span className="ml-2">+</span>
              </button>



              
            </div>
          </div>
          <div className="absolute bottom-10 right-10 flex flex-col items-center text-gray-600">
            <div className="w-px h-10 bg-gray-600"></div>
            <span className="mt-2 text-xs tracking-widest transform rotate-90">
              SCROLL
            </span>
          </div>
        </section>

        {/* Marquee Animation Between Section2 and Section3 */}
        <div className="relative w-full bg-[#f8f8f8] overflow-hidden py-2 border-y border-gray-200">
          <div className="marquee whitespace-nowrap flex items-center">
            <span className="font-semibold text-black mx-4">The Creative Pass</span>
            <span className="mx-2 text-xl">🙂</span>
            <span className="text-gray-700 mx-4">Watch all courses for just $12/month</span>
            <span className="font-semibold text-black mx-4">The Creative Pass</span>
            <span className="mx-2 text-xl">🙂</span>
            <span className="text-gray-700 mx-4">Watch all courses for just $12/month</span>
            <span className="font-semibold text-black mx-4">The Creative Pass</span>
            <span className="mx-2 text-xl">🙂</span>
            <span className="text-gray-700 mx-4">Watch all courses for just $12/month</span>
            <span className="font-semibold text-black mx-4">The Creative Pass</span>
            <span className="mx-2 text-xl">🙂</span>
            <span className="text-gray-700 mx-4">Watch all courses for just $12/month</span>
          </div>
          <style jsx>{`
            .marquee {
              display: inline-block;
              min-width: 100%;
              animation: marquee 10s linear infinite;
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>



        <section id="section3" className="h-screen bg-white flex items-center justify-center px-2 md:px-0 text-center relative">
          <div className="w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-20 border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-14 text-center">Түгээмэл асуулт, хариулт</h2>
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <details className="group bg-transparent rounded-xl border border-gray-200 transition">
                <summary className="flex items-center min-h-[56px] gap-4 cursor-pointer py-0 px-6 text-lg font-medium text-black group-open:text-[#222] justify-between">
                  <span className="flex items-center gap-4">
                    <span className="inline-block w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 text-2xl">🎓</span>
                    Тэтгэлгээр сурч болох уу?
                  </span>
                  <svg className="w-6 h-6 text-gray-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-14 pb-4 text-left text-gray-600">Тийм, манай сургууль тэтгэлэг олгодог. Дэлгэрэнгүй мэдээллийг элсэлтийн албанаас лавлана уу.</div>
              </details>
              {/* FAQ Item 2 */}

              <details className="group bg-transparent rounded-xl border border-gray-200 transition">
                <summary className="flex items-center min-h-[56px] gap-4 cursor-pointer py-0 px-6 text-lg font-medium text-black group-open:text-[#222] justify-between">
                  <span className="flex items-center gap-4">
                    <span className="inline-block w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 text-2xl">📈</span>
                    MBTI (Myers-Briggs Type Indicator)
                  </span>
                  <svg className="w-6 h-6 text-gray-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-14 pb-4 text-left text-gray-600">Хувь хүний сэтгэлзүйн төрөл, мэдээлэл боловсруулах, шийдвэр гаргах хэв маягийг тодорхойлдог. 16 төрлийн зан чанарын ангилалтай.  <br /> Жишээ: ENFP – урам зоригтой, бүтээлч сэтгэлгээтэй хүн.</div>
              </details>
              {/* FAQ Item 3 */}
              <details className="group bg-transparent rounded-xl border border-gray-200 transition">
                <summary className="flex items-center min-h-[56px] gap-4 cursor-pointer py-0 px-6 text-lg font-medium text-black group-open:text-[#222] justify-between">
                  <span className="flex items-center gap-4">
                    <span className="inline-block w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 text-2xl">🖥️</span>
                    Holland Code (RIASEC)
                  </span>
                  <svg className="w-6 h-6 text-gray-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-14 pb-4 text-left text-gray-600">Мэргэжлийн сонирхол, ажлын орчинтой хэр нийцэж байгааг хэмждэг. 6 үндсэн төрөлтэй: Realistic, Investigative, Artistic, Social, Enterprising, Conventional. <br /> Жишээ: Artistic – бүтээлч, уран сайхны мэргэжилд тохиромжтой.</div>
              </details>
              {/* FAQ Item 4 */}
              <details className="group bg-transparent rounded-xl border border-gray-200 transition">
                <summary className="flex items-center min-h-[56px] gap-4 cursor-pointer py-0 px-6 text-lg font-medium text-black group-open:text-[#222] justify-between">
                  <span className="flex items-center gap-4">
                    <span className="inline-block w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 text-2xl">📜</span>
                    Big Five Personality Test
                  </span>
                  <svg className="w-6 h-6 text-gray-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-14 pb-4 text-left text-gray-600">Хүний зан төлөвийг 5 гол хэмжүүрээр үнэлдэг: нээлттэй байдал, хариуцлагатай байдал, гадагш чиглэсэн байдал, эв найртай байдал, мэдрэмжийн тогтвортой байдал.  <br />
                 Илүү гүн гүнзгий зан чанарын дүн шинжилгээ.</div>
              </details>
              {/* FAQ Item 5 */}
              <details className="group bg-transparent rounded-xl border border-gray-200 transition">
                <summary className="flex items-center min-h-[56px] gap-4 cursor-pointer py-0 px-6 text-lg font-medium text-black group-open:text-[#222] justify-between">
                  <span className="flex items-center gap-4">
                    <span className="inline-block w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 text-2xl">👨‍🏫</span>
                    EQ Test (Emotional Intelligence)
                  </span>
                  <svg className="w-6 h-6 text-gray-400 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-14 pb-4 text-left text-gray-600">EQ Test (Emotional Intelligence)
                       Өөрийн болон бусдын сэтгэл хөдлөлийг ойлгож, удирдах чадварыг үнэлдэг. <br/>
                              Харилцаа, багийн ажил, стрессийн менежментэд чухал үүрэгтэй.</div>
              </details>
          </div>
          </div>
        </section>



        <section id="section4" className="h-screen bg-white flex flex-col items-center justify-center px-6 md:px-32 relative">
          <div className="absolute top-10 left-10 w-10 h-10 border-2 border-black rounded-full flex items-center justify-center text-2xl font-semibold text-black cursor-pointer hover:bg-black hover:text-white transition" onClick={scrollToTop}>
            Λ
          </div>
          <h2 className="text-3xl text-black md:text-5xl font-extrabold mb-18">Багцын Үнийн Санал</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
            <div className="bg-[#1A1A1A] text-white p-10 rounded-3xl shadow-lg flex flex-col items-center w-full max-w-sm cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-[#2A2A2A]">
              <h3 className="text-2xl font-bold tracking-wide">Free</h3>
              <p className="text-4xl font-semibold mt-4">$0/mo</p>
              <ul className="text-base mt-8 space-y-4 text-gray-300">
                <li className="flex items-center"><span className="w-6 h-6 mr-2 border-2 border-white rounded-full flex items-center justify-center">✓</span>Хязгаарлагдмал тест</li>
                <li className="flex items-center"><span className="w-6 h-6 mr-2 border-2 border-white rounded-full flex items-center justify-center">✓</span>MBTI, BigFive, Holland Code тест</li>
                <li className="flex items-center"><span className="w-6 h-6 mr-2 border-2 border-white rounded-full flex items-center justify-center">✓</span>Карьерын зөвлөмж</li>
              </ul>
              <button className="button-free mt-[160px]">GET STARTED</button>
            </div>
            <div className="bg-[#1A1A1A] text-white p-10 rounded-3xl shadow-lg flex flex-col items-center w-full max-w-sm cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-[#2A2A2A]">
              <h3 className="text-2xl font-bold tracking-wide">Pro</h3>
              <p className="text-4xl font-semibold mt-4">$5/mo</p>
              <ul className="text-base mt-8 space-y-4 text-gray-300">
                <li className="flex items-center"><span className="w-6 h-6 mr-2 border-2 border-white rounded-full flex items-center justify-center">✓</span>Карьерын зөвлөгөө</li>
                <li className="flex items-center"><span className="w-6 h-6 mr-2 border-2 border-white rounded-full flex items-center justify-center">✓</span>Авьяас даалбар, Priorities</li>
                <li className="flex items-center"><span className="w-6 h-6 mr-2 border-2 border-white rounded-full flex items-center justify-center">✓</span>10 тест</li>
                <li className="flex items-center"><span className="w-6 h-6 mr-2 border-2 border-white rounded-full flex items-center justify-center">✓</span>Бүтээмжин зөвлөмж</li>
              </ul>
              <button className="button-pro mt-[120px]">GET STARTED</button>
            </div>
            <div className="bg-[#1A1A1A] text-white p-10 rounded-3xl shadow-lg flex flex-col items-center w-full max-w-sm cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-[#2A2A2A]">
              <h3 className="text-2xl font-bold tracking-wide">Plas</h3>
              <p className="text-4xl font-semibold mt-4">$10/mo</p>
              <ul className="text-base mt-8 space-y-4 text-gray-300">
                <li className="flex items-center"><span className="w-6 h-6 mr-2 border-2 border-white rounded-full flex items-center justify-center">✓</span>Хязгааргүй тест</li>
                <li className="flex items-center"><span className="w-6 h-6 mr-2 border-2 border-white rounded-full flex items-center justify-center">✓</span>Roadmap зам</li>
                <li className="flex items-center"><span className="w-6 h-6 mr-2 border-2 border-white rounded-full flex items-center justify-center">✓</span>Voice messages anywhere</li>
              </ul>
              <button className="button-plas mt-[160px]">GET STARTED</button>
            </div>
          </div>
          <div className="absolute bottom-10 right-10 flex flex-col items-center text-gray-600">
            <div className="w-px h-10 bg-gray-600"></div>
            <span className="mt-2 text-xs tracking-widest transform rotate-90">SCROLL</span>
          </div>
        </section>
      </main>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Footer />
    </>
  );
}
