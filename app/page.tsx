import { SkeletonDemo } from '@/components/skeleton-demo';
import { Button } from '@ui/button';
import { app } from '@/constants';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-4xl font-bold">{app.title}</h1>
      <p className="text-sm mb-4">{app.tagline}</p>
      <Button size={`lg`} className="animate-bounce">
        Coming Soon
      </Button>
      <SkeletonDemo />
      <SkeletonDemo />
    </main>
  );
}
