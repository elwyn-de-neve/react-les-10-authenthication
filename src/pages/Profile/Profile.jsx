import { ShieldAlert } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext.jsx";

function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <main className="flex-1  bg-gray-100">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid max-w-5xl mx-auto items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <ShieldAlert size={48} />
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                A Super Secret Profile Page
              </h2>
              {user && <p>Welkom {user.username}</p>}
            </div>
            <div className="flex flex-col items-start"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
