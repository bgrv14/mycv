'use client';

import Image from "next/image";
import { FaGithub, FaLinkedin, FaCheck } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit } from "react-icons/si";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main 
      className="min-h-screen w-full relative bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden"
      style={{
        backgroundImage: 'url("/background.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
        <LanguageSwitcher />
        
        <section className="mb-8 flex flex-col md:flex-row md:justify-between md:px-[2.1rem] space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center md:items-start">
            <div className="flex flex-row md:flex-col gap-4 flex-wrap justify-center">
              <p className="text-[rgb(214,223,244)] font-zen text-sm md:text-base">
                📧 <a 
                  href={`mailto:${t('contacts.email')}?subject=Front-End Developer CV`}
                  className="hover:text-[#33415C] transition-colors duration-300"
                >
                  {t('contacts.email')}
                </a>
              </p>
              <p className="text-[rgb(214,223,244)] font-zen text-sm md:text-base">
                📱 <a 
                  href={`tel:${t('contacts.phone')}`}
                  className="hover:text-[#33415C] transition-colors duration-300"
                >
                  {t('contacts.phone')}
                </a>
              </p>
              <p className="text-[rgb(214,223,244)] font-zen flex items-center gap-2 text-sm md:text-base">
                <a 
                  href="https://www.linkedin.com/in/bahirovserhii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#33415C] transition-colors duration-300"
                >
                  <FaLinkedin className="text-2xl md:text-3xl text-[#0A66C2]" />
                  LinkedIn
                </a>
              </p>
              <p className="text-[rgb(214,223,244)] font-zen flex items-center gap-2 text-sm md:text-base">
                <a 
                  href="https://github.com/bgrv14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#33415C] transition-colors duration-300"
                >
                  <FaGithub className="text-2xl md:text-3xl" />
                  GitHub
                </a>
              </p>
            </div>

            <div className="hidden md:flex items-center ml-0 md:ml-20">
              <a 
                href="https://t.me/bgrv_14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/qr-code.png"
                  alt="Telegram QR Code"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h1 className="text-4xl md:text-6xl mb-4 text-[rgb(214,223,244)] font-zen">{t('name')}</h1>
            <p className="text-xl md:text-2xl mb-2 text-[rgb(214,223,244)] font-zen">{t('position')}</p>
            <p className="text-sm md:text-base text-[rgb(214,223,244)] font-zen">{t('location')}</p>
          </div>
        </section>

        <section className="mb-12 flex flex-col md:flex-row gap-8 items-center md:justify-center">
          <div className="w-[60%] md:w-[33%] md:ml-10">
            <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-[#979DAC]">
              <Image
                src="/Photo4CV.jpg"
                alt={t('name')}
                width={384}
                height={384}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-[60%]">
            <p className="text-[rgb(214,223,244)] leading-relaxed text-base md:text-lg font-zen bg-[#001845]/55 rounded-lg p-6 md:p-8 backdrop-blur-md">
              {t('about')}
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex flex-col md:flex-row mb-4 md:mb-8 md:gap-6">
            <div className="w-full md:w-[60%] text-center mb-2 md:mb-0">
              <h2 className="text-2xl md:text-3xl text-[rgb(214,223,244)] font-zen uppercase mb-4 md:mb-4">{t('skills.hard')}</h2>
              <div className="bg-[#001845]/55 rounded-lg p-3 md:p-4 backdrop-blur-md flex items-center mt-2 md:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group relative">
                      <SiHtml5 className="text-[#E34F26] text-2xl md:text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        HTML
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group relative">
                      <SiCss3 className="text-[#1572B6] text-2xl md:text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        CSS
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group relative">
                      <SiJavascript className="text-[#F7DF1E] text-2xl md:text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        JavaScript
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group relative">
                      <SiReact className="text-[#61DAFB] text-2xl md:text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        React
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group relative">
                      <SiGit className="text-[#F05032] text-2xl md:text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        Git
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group relative">
                      <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#FF4081] to-[#7C4DFF] rounded-lg">
                        <span className="text-white font-bold text-base md:text-lg">AI</span>
                      </div>
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        Artificial Intelligence
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[40%] text-center">
              <h2 className="text-2xl md:text-3xl text-[rgb(214,223,244)] font-zen uppercase mb-4 md:mb-4">{t('skills.soft')}</h2>
              <div className="bg-[#001845]/55 rounded-lg p-3 md:p-4 backdrop-blur-md flex items-center justify-center mt-2 md:mt-0 md:h-[156px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-start">
                    <FaCheck className="text-[rgb(214,223,244)] text-lg md:text-xl min-w-[20px]" />
                    <span className="font-zen text-sm md:text-base">{t('softSkills.attention')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-start">
                    <FaCheck className="text-[rgb(214,223,244)] text-lg md:text-xl min-w-[20px]" />
                    <span className="font-zen text-sm md:text-base">{t('softSkills.teamwork')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-start">
                    <FaCheck className="text-[rgb(214,223,244)] text-lg md:text-xl min-w-[20px]" />
                    <span className="font-zen text-sm md:text-base">{t('softSkills.communication')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-start">
                    <FaCheck className="text-[rgb(214,223,244)] text-lg md:text-xl min-w-[20px]" />
                    <span className="font-zen text-sm md:text-base">{t('softSkills.adaptability')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-center col-span-2">
                    <FaCheck className="text-[rgb(214,223,244)] text-lg md:text-xl min-w-[20px]" />
                    <span className="font-zen text-sm md:text-base">{t('softSkills.multitasking')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl mb-4 text-[rgb(214,223,244)] font-zen text-center uppercase">{t('languages.title')}</h2>
          <div className="bg-[#001845]/55 rounded-lg p-4 backdrop-blur-md">
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
              <div className="flex-1">
                <span className="text-[rgb(214,223,244)] font-zen block mb-1 text-sm md:text-base">{t('languages.ukrainian')}</span>
                <div className="bg-[#0466C8] rounded-full">
                  <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-[rgb(214,223,244)] font-zen block mb-1 text-sm md:text-base">{t('languages.english')}</span>
                <div className="bg-[#0466C8] rounded-full">
                  <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-[rgb(214,223,244)] font-zen block mb-1 text-sm md:text-base">{t('languages.russian')}</span>
                <div className="bg-[#0466C8] rounded-full">
                  <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-center text-4xl md:text-6xl mb-8 md:mb-12 text-[rgb(214,223,244)] font-zen">{t('experience.title')}</h2>
          <div className="bg-[#001845]/55 rounded-lg p-6 md:p-8 backdrop-blur-md">
            <div className="space-y-8">
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">{t('experience.military.position')}</h3>
                  <div className="text-left md:text-right">
                    <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">{t('experience.military.period')}</p>
                    <p className="text-[rgb(214,223,244)] text-xs md:text-sm font-zen">{t('experience.military.location')}</p>
                  </div>
                </div>
                <p className="text-[rgb(214,223,244)] mb-2 text-sm md:text-base font-zen">{t('experience.military.company')}</p>
                <ul className="list-disc list-inside text-[rgb(214,223,244)] space-y-2 text-sm md:text-base font-zen">
                  {(t('experience.military.responsibilities', { returnObjects: true }) as string[]).map((responsibility: string, index: number) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">{t('experience.kyivstar.position')}</h3>
                  <div className="text-left md:text-right">
                    <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">{t('experience.kyivstar.period')}</p>
                    <p className="text-[rgb(214,223,244)] text-xs md:text-sm font-zen">{t('experience.kyivstar.location')}</p>
                  </div>
                </div>
                <p className="text-[rgb(214,223,244)] mb-2 text-sm md:text-base font-zen">{t('experience.kyivstar.company')}</p>
                <ul className="list-disc list-inside text-[rgb(214,223,244)] space-y-2 text-sm md:text-base font-zen">
                  {(t('experience.kyivstar.responsibilities', { returnObjects: true }) as string[]).map((responsibility: string, index: number) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">{t('experience.svtek.position')}</h3>
                  <div className="text-left md:text-right">
                    <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">{t('experience.svtek.period')}</p>
                    <p className="text-[rgb(214,223,244)] text-xs md:text-sm font-zen">{t('experience.svtek.location')}</p>
                  </div>
                </div>
                <p className="text-[rgb(214,223,244)] mb-2 text-sm md:text-base font-zen">{t('experience.svtek.company')}</p>
                <ul className="list-disc list-inside text-[rgb(214,223,244)] space-y-2 text-sm md:text-base font-zen">
                  {(t('experience.svtek.responsibilities', { returnObjects: true }) as string[]).map((responsibility: string, index: number) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">{t('experience.asgard.position')}</h3>
                  <div className="text-left md:text-right">
                    <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">{t('experience.asgard.period')}</p>
                    <p className="text-[rgb(214,223,244)] text-xs md:text-sm font-zen">{t('experience.asgard.location')}</p>
                  </div>
                </div>
                <p className="text-[rgb(214,223,244)] mb-2 text-sm md:text-base font-zen">{t('experience.asgard.company')}</p>
                <ul className="list-disc list-inside text-[rgb(214,223,244)] space-y-2 text-sm md:text-base font-zen">
                  {(t('experience.asgard.responsibilities', { returnObjects: true }) as string[]).map((responsibility: string, index: number) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-center text-4xl md:text-6xl mb-8 md:mb-12 text-[rgb(214,223,244)] font-zen">{t('education.title')}</h2>
          <div className="bg-[#001845]/55 rounded-lg p-6 md:p-8 backdrop-blur-md">
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">{t('education.frontend.degree')}</h3>
                  <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">{t('education.frontend.period')}</p>
                </div>
                <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">{t('education.frontend.institution')}</p>
              </div>
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">{t('education.english.degree')}</h3>
                  <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">{t('education.english.period')}</p>
                </div>
                <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">{t('education.english.institution')}</p>
              </div>
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">{t('education.master.degree')}</h3>
                  <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">{t('education.master.period')}</p>
                </div>
                <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">{t('education.master.institution')}</p>
              </div>
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">{t('education.bachelor.degree')}</h3>
                  <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">{t('education.bachelor.period')}</p>
                </div>
                <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">{t('education.bachelor.institution')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
