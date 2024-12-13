import Installations from "@/components/docs/installations";
import { DocumentationSidebar } from "@/components/DocumentationSidebar";
import { SidebarInset } from "@/components/ui/sidebar";

export default function DocumentationPage() {
  return (
    <div className="flex h-screen">
      <div className="lg:w-64">
        <DocumentationSidebar />
      </div>
      <SidebarInset className="flex-1 w-full rounded-lg">
        <div className="flex h-full">
          <main className="w-full p-6 overflow-y-auto">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              Getting Started
            </h1>
            <p className="mb-6">
              Welcome to our comprehensive documentation. Select a topic from
              the sidebar to get started.
            </p>
            <section id="getting-started" className="mb-8">
              <div className="space-y-4">
                <div>
                  <h3 className="docs-title">Introduction</h3>
                  <p>
                    Welcome to our platform. This guide will help you understand
                    the basics and get you up and running quickly.
                  </p>
                </div>
                <Installations />
                <div>
                  <h3 className="docs-title">Quick Start</h3>
                  <p>
                    Learn how to install and configure our tools for your
                    development environment.
                  </p>
                </div>
              </div>
            </section>

            <section id="core-concepts" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Core Concepts</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Architecture</h3>
                  <p>
                    Understand the fundamental architecture that powers our
                    platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Routing</h3>
                  <p>
                    Learn about our powerful routing system and how to structure
                    your application.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Data Fetching</h3>
                  <p>
                    Explore various methods to fetch and manage data in your
                    application.
                  </p>
                </div>
              </div>
            </section>

            <section id="advanced-guides" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Advanced Guides</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Deployment</h3>
                  <p>
                    Learn how to deploy your application to various environments
                    and platforms.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Authentication</h3>
                  <p>
                    Implement secure authentication and authorization in your
                    application.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Testing</h3>
                  <p>
                    Discover best practices for testing your application and
                    ensuring quality.
                  </p>
                </div>
              </div>
            </section>

            <section id="api-reference" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Components</h3>
                  <p>
                    Detailed documentation for all available components and
                    their props.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Hooks</h3>
                  <p>
                    Explore our custom hooks and learn how to use them
                    effectively.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Utilities</h3>
                  <p>
                    Discover utility functions that can help streamline your
                    development process.
                  </p>
                </div>
              </div>
            </section>

            <section id="tutorials" className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Tutorials</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Building a Blog</h3>
                  <p>
                    Follow this step-by-step guide to create a fully functional
                    blog using our platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Creating a Dashboard
                  </h3>
                  <p>
                    Learn how to build an interactive dashboard with real-time
                    data updates.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">E-commerce Store</h3>
                  <p>
                    Build a complete e-commerce store with product listings,
                    cart functionality, and checkout process.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </SidebarInset>
    </div>
  );
}
