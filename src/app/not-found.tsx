import { Boundary } from '@/components/ui/boundary';
import "@/styles/globals.css";

export default function NotFound() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Boundary labels={['Not Found']} color="pink">
        <div className="text-vercel-pink space-y-4">
          <h2 className="text-lg font-bold">Not Found</h2>
          <p className="text-sm">Could not find requested resource</p>
        </div>
      </Boundary>
    </section>
  );
}
