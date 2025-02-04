import Image from "next/image";
import { FaGithub, FaLinkedin, FaCheck } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit } from "react-icons/si";

export default function Home() {
  return (
    <main 
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <section className="mb-8 flex justify-between px-[2.1rem]">
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-[rgb(214,223,244)] font-zen">
                📧 <a 
                  href="mailto:serhii.bahirov@gmail.com?subject=Front-End Developer CV"
                  className="hover:text-[#33415C] transition-colors duration-300"
                >
                  serhii.bahirov@gmail.com
                </a>
              </p>
              <p className="text-[rgb(214,223,244)] font-zen">
                📱 <a 
                  href="tel:+380676328323"
                  className="hover:text-[#33415C] transition-colors duration-300"
                >
                  +380676328323
                </a>
              </p>
              <p className="text-[rgb(214,223,244)] font-zen flex items-center gap-2">
                <a 
                  href="https://www.linkedin.com/in/bahirovserhii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#33415C] transition-colors duration-300"
                >
                  <FaLinkedin className="text-3xl text-[#0A66C2]" />
                  LinkedIn
                </a>
              </p>
              <p className="text-[rgb(214,223,244)] font-zen flex items-center gap-2">
                <a 
                  href="https://github.com/bgrv14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#33415C] transition-colors duration-300"
                >
                  <FaGithub className="text-3xl" />
                  GitHub
                </a>
              </p>
            </div>

            <div className="flex items-center ml-20">
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

          <div className="text-right">
            <h1 className="text-6xl mb-4 text-[rgb(214,223,244)] font-zen">Сергій Багіров</h1>
            <p className="text-2xl mb-2 text-[rgb(214,223,244)] font-zen">Trainee/Junior Front-End Developer</p>
            <p className="text-base text-[rgb(214,223,244)] font-zen">Кривий Ріг, Україна</p>
          </div>
        </section>

        <section className="mb-12 flex gap-8 justify-center">
          <div className="w-[33%] ml-10">
            <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-[#979DAC]">
              <Image
                src="/Photo4CV.jpg"
                alt="Сергій Багіров"
                width={384}
                height={384}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-[60%] flex items-center">
            <p className="text-[rgb(214,223,244)] leading-relaxed text-lg font-zen bg-[#001845]/55 rounded-lg p-8 backdrop-blur-md">
              Я Trainee/Junior Front-End Developer з базовими знаннями в HTML, CSS, JavaScript та React. Готовий почати кар'єру в IT, швидко вчуся та відкритий до нових викликів. Маю понад 4 роки досвіду в логістиці, де керував перевезеннями вантажів і організовував складську роботу. Працював з бізнес-клієнтами, знаходячи варіанти вирішення їхніх проблем з продуктами нашої компанії. Вмію добре спілкуватися та швидко пристосовуватися до нових умов, що допоможе мені успішно розпочати роботу в IT.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex mb-4">
            <div className="flex-[0.6] text-center">
              <h2 className="text-3xl text-[rgb(214,223,244)] font-zen uppercase">HARD SKILLS</h2>
            </div>
            <div className="flex-[0.4] text-center">
              <h2 className="text-3xl text-[rgb(214,223,244)] font-zen uppercase">SOFT SKILLS</h2>
            </div>
          </div>
          <div className="flex gap-8 h-[180px]">
            <div className="flex-[0.6] h-full">
              <div className="bg-[#001845]/55 rounded-lg p-3 backdrop-blur-md h-full flex items-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group relative">
                      <SiHtml5 className="text-[#E34F26] text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        HTML
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group relative">
                      <SiCss3 className="text-[#1572B6] text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        CSS
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group relative">
                      <SiJavascript className="text-[#F7DF1E] text-3xl" />
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
                      <SiReact className="text-[#61DAFB] text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        React
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group relative">
                      <SiGit className="text-[#F05032] text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        Git
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group relative">
                      <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#FF4081] to-[#7C4DFF] rounded-lg">
                        <span className="text-white font-bold text-lg">AI</span>
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

            <div className="flex-[0.4] h-full">
              <div className="bg-[#001845]/55 rounded-lg p-3 backdrop-blur-md h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-start">
                    <FaCheck className="text-[rgb(214,223,244)] text-xl min-w-[20px]" />
                    <span className="font-zen">Увага до деталей</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-start">
                    <FaCheck className="text-[rgb(214,223,244)] text-xl min-w-[20px]" />
                    <span className="font-zen">Командна робота</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-start">
                    <FaCheck className="text-[rgb(214,223,244)] text-xl min-w-[20px]" />
                    <span className="font-zen">Комунікабельність</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-start">
                    <FaCheck className="text-[rgb(214,223,244)] text-xl min-w-[20px]" />
                    <span className="font-zen">Адаптивність</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-center col-span-2">
                    <FaCheck className="text-[rgb(214,223,244)] text-xl min-w-[20px]" />
                    <span className="font-zen">Уміння працювати в режимі багатозадачності</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-[rgb(214,223,244)] font-zen text-center uppercase">LANGUAGES</h2>
          <div className="bg-[#001845]/55 rounded-lg p-8 backdrop-blur-md">
            <div className="flex justify-between gap-8">
              <div className="flex-1">
                <span className="text-[rgb(214,223,244)] font-zen block mb-2">Ukrainian</span>
                <div className="bg-[#0466C8] rounded-full">
                  <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-[rgb(214,223,244)] font-zen block mb-2">English</span>
                <div className="bg-[#0466C8] rounded-full">
                  <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-[rgb(214,223,244)] font-zen block mb-2">Russian</span>
                <div className="bg-[#0466C8] rounded-full">
                  <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-center text-6xl mb-12 text-[rgb(214,223,244)] font-zen">Work Experience</h2>
          <div className="bg-[#001845]/55 rounded-lg p-8 backdrop-blur-md">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-2xl font-zen">Молодший сержант</h3>
                  <div className="text-right">
                    <p className="text-[rgb(214,223,244)] text-base font-zen">квітень 2024 - жовтень 2024</p>
                    <p className="text-[rgb(214,223,244)] text-sm font-zen">Краматорськ</p>
                  </div>
                </div>
                <p className="text-[rgb(214,223,244)] mb-2 text-base font-zen">Збройні Сили України</p>
                <ul className="list-disc list-inside text-[rgb(214,223,244)] space-y-2 text-base font-zen">
                  <li>Навчання на молодшого лейтенанта</li>
                  <li>Моніторинг та покращення системи взаємодії між підрозділами</li>
                  <li>Підтримання дисципліни та загальної організації підрозділу</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-2xl font-zen">Менеджер з організації консультативних послуг</h3>
                  <div className="text-right">
                    <p className="text-[rgb(214,223,244)] text-base font-zen">квітень 2023 - квітень 2024</p>
                    <p className="text-[rgb(214,223,244)] text-sm font-zen">Кривий Ріг</p>
                  </div>
                </div>
                <p className="text-[rgb(214,223,244)] mb-2 text-base font-zen">ПрАТ "Київстар"</p>
                <ul className="list-disc list-inside text-[rgb(214,223,244)] space-y-2 text-base font-zen">
                  <li>Надання професійної підтримки та допомоги у вирішенні проблем</li>
                  <li>Активна участь у продажах продуктів компанії</li>
                  <li>Систематичне ведення звітності з продажів</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-2xl font-zen">Менеджер з логістики</h3>
                  <div className="text-right">
                    <p className="text-[rgb(214,223,244)] text-base font-zen">березень 2019 - квітень 2023</p>
                    <p className="text-[rgb(214,223,244)] text-sm font-zen">Кривий Ріг</p>
                  </div>
                </div>
                <p className="text-[rgb(214,223,244)] mb-2 text-base font-zen">ТОВ "СВ ТЕК"</p>
                <ul className="list-disc list-inside text-[rgb(214,223,244)] space-y-2 text-base font-zen">
                  <li>Організація та контроль за перевезенням вантажів як за кордон, так і в межах України</li>
                  <li>Відповідальність за підготовку необхідних документів для проведення перевезень</li>
                  <li>Організація складської логістики для зберігання та ефективного розподілу вантажів</li>
                  <li>Координація перевезення вантажів до складів замовників для своєчасного отримання</li>
                  <li>Пошук та вибір надійних перевізників, організація їх роботи та забезпечення виконання умов договорів</li>
                  <li>Взаємодія з митницею, забезпечення контролю за вчасного розмитнення вантажів</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-2xl font-zen">Геодезист</h3>
                  <div className="text-right">
                    <p className="text-[rgb(214,223,244)] text-base font-zen">січень 2018 - березень 2018</p>
                    <p className="text-[rgb(214,223,244)] text-sm font-zen">Дніпро</p>
                  </div>
                </div>
                <p className="text-[rgb(214,223,244)] mb-2 text-base font-zen">ПП "Асгард"</p>
                <ul className="list-disc list-inside text-[rgb(214,223,244)] space-y-2 text-base font-zen">
                  <li>Виконання виїздів для топографічних зйомок та збору даних</li>
                  <li>Обробка зібраних даних з використанням комп'ютерних програм</li>
                  <li>Створення топографічних планів для будівництва</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-center text-6xl mb-12 text-[rgb(214,223,244)] font-zen">Education</h2>
          <div className="bg-[#001845]/55 rounded-lg p-8 backdrop-blur-md">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-2xl font-zen">Front-End розробник</h3>
                  <p className="text-[rgb(214,223,244)] text-base font-zen">жовтень 2024 - грудень 2024</p>
                </div>
                <p className="text-[rgb(214,223,244)] text-base font-zen">Robot_Dreams</p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-2xl font-zen">Курс з вивчення англійської мови</h3>
                  <p className="text-[rgb(214,223,244)] text-base font-zen">травень 2021 - січень 2022</p>
                </div>
                <p className="text-[rgb(214,223,244)] text-base font-zen">Школа з вивчення англійської мови "O'key english studio"</p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-2xl font-zen">Геодезія та землеустрій - Магістр</h3>
                  <p className="text-[rgb(214,223,244)] text-base font-zen">вересень 2017 - грудень 2018</p>
                </div>
                <p className="text-[rgb(214,223,244)] text-base font-zen">Криворізький національний університет</p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-2xl font-zen">Геодезія, картографія та землеустрій - Бакалавр</h3>
                  <p className="text-[rgb(214,223,244)] text-base font-zen">вересень 2013 - червень 2017</p>
                </div>
                <p className="text-[rgb(214,223,244)] text-base font-zen">Криворізький національний університет</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
