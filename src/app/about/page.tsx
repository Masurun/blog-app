import Container from "@/app/_components/container";
import AnimatedContainers from "@/app/_components/animated-containers";
import { ASSETS_PATH } from "@/lib/constants";

export default function About() {
  return (
    <main>
      <Container bgColor="bg-gray-100">
        <AnimatedContainers>
          <section className="flex flex-col-reverse lg:flex-row items-center lg:items-start py-8">
            <div className="lg:w-1/2">
              <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Profile</h2>
              <p className="mb-4 text-lg leading-relaxed">
                神奈川県在住のWebエンジニアのらんです。
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                主にPHP、JavaScript、Flutterでの開発に従事しています。
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                AWS SAP、英検準一級の取得に向けて勉強中です。
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                趣味はサウナです。ホームサウナは湘南RESORT SPA 竜泉寺の湯 湘南茅ヶ崎店です。
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                保有資格: TOEIC815点 / 基本情報技術者 / AWS SAA / 簿記3級
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
              <div className="w-48 h-48 lg:w-96 lg:h-96 overflow-hidden rounded-full">
                <img
                  src={`${ASSETS_PATH}profile.jpg`}
                  alt="Your Name"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>
        </AnimatedContainers>
      </Container>
      <Container>
        <AnimatedContainers>
          <section className="py-8">
            <h2 className="mb-8 text-3xl font-bold lg:text-4xl">Career</h2>
            <ul className="space-y-4">
              <li className="text-lg">
                <span className="font-semibold">2020年3月</span> -
                獨協大学法学部法律学科を卒業
              </li>
              <li className="text-lg">
                <span className="font-semibold">2020年4月</span> -
                新卒で小売業の会社に入社
              </li>
              <li className="text-lg">
                <span className="font-semibold">2020年10月</span> -
                小売業の会社を退社
              </li>
              <li className="text-lg">
                <span className="font-semibold">2020年11月</span> -
                プログラミングスクールにてRuby on Railsでのアプリ開発を学ぶ
              </li>
              <li className="text-lg">
                <span className="font-semibold">2021年5月</span> -
                Web制作会社に入社
              </li>
            </ul>
          </section>
        </AnimatedContainers>
      </Container>
    </main>
  );
}
