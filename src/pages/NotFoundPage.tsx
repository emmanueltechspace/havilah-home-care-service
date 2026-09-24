import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center bg-cream-100">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-7xl font-bold text-gradient-gold">404</p>
          <h1 className="mt-4 text-2xl font-bold text-havilah-900">Page Not Found</h1>
          <p className="mt-4 text-charcoal-600">
            The page you are looking for may have been moved or no longer exists. Let us
 help you find what you need.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/" variant="primary">Return Home</Button>
            <Button to="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
