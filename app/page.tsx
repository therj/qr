import { SkeletonDemo } from '@/components/skeleton-demo';
import { Button } from '@ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-4xl font-bold mb-2">Mero QR</h1>
      <Button variant={`default`} size={`lg`} className="animate-bounce">
        Coming Soon
      </Button>
      <SkeletonDemo />
      <SkeletonDemo />
    </main>
  );
}
