import Container from "@/app/_components/container";

export default function Contact() {
  return (
    <main className="py-16">
      <Container>
        <section>
          <h2 className="mb-16 font-bold text-center text-4xl lg:text-5xl">
            Contact
          </h2>
          <div className="flex justify-center">
            <iframe
              src="https://forms.gle/ByrgJQb6XnuqHg3c6"
              width="100%"
              height="900px"
              className="border-2 border-gray-300 rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </Container>
    </main>
  );
}