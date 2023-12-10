import { SkeletonDemo } from '@/components/skeleton-demo';
import { Button } from '@ui/button';
import { app } from '@/constants';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-4xl font-bold">{app.title}</h1>
      <p className="text-sm mb-4">{app.tagline}</p>
      <div className="flex flex-col gap-2">
        <Button size={`lg`} className="animate-bounce">
          Coming Soon
        </Button>
        <Button size={`sm`} variant={`link`} asChild>
          <Link href="/design">See Design In Progress</Link>
        </Button>
      </div>
      <SkeletonDemo />
      <SkeletonDemo />
    </main>
  );
}
