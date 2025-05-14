import Image from 'next/image';
import { Container } from '@/components/layout/container';

export const metadata = {
  title: 'About Us | Alfred Holdings',
  description: 'Learn about Alfred Holdings, our values, and our approach to investments.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary-600 py-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-white">About Us</h1>
            <p className="text-lg text-primary-100">
              Learn about Alfred Holdings, our mission, values, and the team behind our success.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-secondary-900">Our Mission</h2>
              <p className="mb-6 text-secondary-600">
                At Alfred Holdings, our mission is to provide our clients with exceptional investment opportunities that deliver consistent returns and long-term financial security.
              </p>
              <p className="mb-6 text-secondary-600">
                We believe in responsible investing, transparency, and building lasting relationships with our clients. Our approach is centered around understanding your unique financial goals and creating tailored strategies to help you achieve them.
              </p>
              <h3 className="mb-4 text-xl font-semibold text-secondary-900">Our Values</h3>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <span className="mr-2 text-primary-600">✓</span> Integrity in all our dealings
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary-600">✓</span> Excellence in service and performance
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary-600">✓</span> Innovation in investment approaches
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary-600">✓</span> Client-focused strategies
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                alt="Our team at work"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary-900">Our Leadership</h2>
            <p className="mx-auto max-w-2xl text-secondary-600">
              Meet the experienced professionals leading Alfred Holdings.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Alexander Bradford',
                title: 'Chief Executive Officer',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              },
              {
                name: 'Emily Chen',
                title: 'Chief Investment Officer',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
              },
              {
                name: 'Michael Rodriguez',
                title: 'Chief Financial Officer',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="mb-1 text-xl font-semibold text-secondary-900">{member.name}</h3>
                <p className="text-secondary-600">{member.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
} 