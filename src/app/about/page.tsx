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
              Hi, I'm [Your Name], a [Your Profession] based in [Your Location].
              I have a passion for [Your Interests or Hobbies]. With [X years]
              of experience in [Your Field or Expertise], I specialize in [Your
              Specialization].
            </p>
            <p className="text-lg leading-relaxed">
              In my free time, I enjoy [Your Hobbies or Activities], and I'm
              always eager to learn and explore new things.
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
              <span className="font-semibold">[Year Range]</span> - [Position]
              at [Company]
            </li>
            <li className="text-lg">
              <span className="font-semibold">[Year Range]</span> - [Position]
              at [Company]
            </li>
            <li className="text-lg">
              <span className="font-semibold">[Year Range]</span> - [Position]
              at [Company]
            </li>
          </ul>
        </section>
       </AnimatedContainers>
      </Container>
      <Container bgColor="bg-gray-100">
      <AnimatedContainers>
        <section className="py-8">
          <h2 className="mb-8 text-3xl font-bold lg:text-4xl">Works</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/path/to/achievement-thumbnail1.jpg"
                alt="Achievement 1"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="mb-2 text-xl font-semibold">
                  Achievement Title 1
                </h3>
                <p className="text-gray-600">
                  A brief description of the achievement, highlighting the key
                  points and significance.
                </p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/path/to/achievement-thumbnail2.jpg"
                alt="Achievement 2"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="mb-2 text-xl font-semibold">
                  Achievement Title 2
                </h3>
                <p className="text-gray-600">
                  A brief description of the achievement, highlighting the key
                  points and significance.
                </p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="/path/to/achievement-thumbnail3.jpg"
                alt="Achievement 3"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="mb-2 text-xl font-semibold">
                  Achievement Title 3
                </h3>
                <p className="text-gray-600">
                  A brief description of the achievement, highlighting the key
                  points and significance.
                </p>
              </div>
            </div>
            {/* Add more cards as needed */}
          </div>
        </section>
        </AnimatedContainers>
      </Container>
    </main>
  );
}
