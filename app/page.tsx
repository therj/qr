import { SkeletonDemo } from '@/components/skeleton-demo';
import { Button } from '@ui/button';
// eslint-disable-next-line import/extensions
import pkg from '../package.json';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-4xl font-bold">Mero QR</h1>
      <p className="text-sm mb-4">{pkg.description}</p>
      <Button variant={`default`} size={`lg`} className="animate-bounce">
        Coming Soon
      </Button>
      <SkeletonDemo />
      <SkeletonDemo />
    </main>
  );
}
