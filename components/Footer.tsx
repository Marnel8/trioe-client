import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-[40px]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Left Column - Logo and Contact Info */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4">
              <Image
                src="/images/BSU_LOGO.png"
                alt="Shield Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <Image
                src="/images/LOGO_WITH_TEXT.png"
                alt="RIOE Logo"
                width={100}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <div className="space-y-4 text-sm text-muted-foreground text-center md:text-left">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <p>
                  BatStateU-TNEU Alangilan, Batangas City,
                  <br />
                  Batangas 4200, Philippines
                </p>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <p>devops.batstateu@gmail.com</p>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <p>+63 908-266-5764</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-4">
              <Link
                href="#"
                className="rounded-full border p-2 text-muted-foreground hover:bg-gray-200"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="rounded-full border p-2 text-muted-foreground hover:bg-gray-200"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="rounded-full border p-2 text-muted-foreground hover:bg-gray-200"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="rounded-full border p-2 text-muted-foreground hover:bg-gray-200"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Middle Column - Navigation */}
          <div className="w-full flex justify-center md:justify-start">
            <nav className="space-y-4 w-full flex flex-col items-center">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Kits
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Courses
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Events
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Community
              </Link>
            </nav>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-semibold">
                Subscribe to our Newsletter!
              </h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our Newsletter and stay updated.
              </p>
            </div>
            <div className="space-y-2 w-full">
              <Input
                type="email"
                placeholder="example@email.com"
                className="bg-white"
              />
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 TRIOE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
