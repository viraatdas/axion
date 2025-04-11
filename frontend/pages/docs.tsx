import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Documentation() {
  const [activeSection, setActiveSection] = useState<string>('introduction');
  
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Documentation - Axion</title>
        <meta name="description" content="Learn how to use Axion - your personal theorem proving lab" />
      </Head>
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-6 space-y-1">
              <button
                onClick={() => scrollToSection('introduction')}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'introduction'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Introduction
              </button>
              <button
                onClick={() => scrollToSection('getting-started')}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'getting-started'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Getting Started
              </button>
              <button
                onClick={() => scrollToSection('input-formats')}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'input-formats'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Input Formats
              </button>
              <button
                onClick={() => scrollToSection('proof-generation')}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'proof-generation'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Proof Generation
              </button>
              <button
                onClick={() => scrollToSection('verification')}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'verification'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Verification Process
              </button>
              <button
                onClick={() => scrollToSection('export')}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'export'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Export Options
              </button>
              <button
                onClick={() => scrollToSection('api')}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'api'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                API Reference
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === 'faq'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                FAQ
              </button>
            </nav>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-9">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h1 className="text-2xl font-bold text-gray-900">Axion Documentation</h1>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Your guide to using Axion - where scientific thought meets formal proof
                </p>
              </div>
              
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <div className="prose max-w-none">
                  {/* Introduction */}
                  <section id="introduction" className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Introduction</h2>
                    <p>
                      Axion is your personal theorem proving lab — a powerful, intuitive platform where scientists and engineers can write down what they want to prove, and instantly see how it can be proven.
                    </p>
                    <p className="mt-4">
                      Whether you're deriving a formula in physics, sketching a mathematical conjecture, or trying to formalize intuition, Axion takes your ideas — in plain English, LaTeX, or even pseudocode — and translates them into rigorously verified theorems using Lean 4.
                    </p>
                    <p className="mt-4">
                      What makes Axion magical:
                    </p>
                    <ul className="list-disc pl-5 mt-2">
                      <li><strong>🧠 Auto-Formalization</strong> — You describe the problem. Axion generates a Lean theorem.</li>
                      <li><strong>⚙️ Proof Synthesis</strong> — Axion constructs the proof, step by step, verified by Lean.</li>
                      <li><strong>🧭 Human-Readable Feedback</strong> — The platform explains every proof in clear, natural language.</li>
                      <li><strong>🕸 Growing Knowledge Graph</strong> — Every verified result is stored in an append-only, queryable theorem repository.</li>
                      <li><strong>💡 Creative Assistance</strong> — Get suggestions for generalizations, similar theorems, or fixes if something breaks.</li>
                    </ul>
                    <p className="mt-4">
                      It's like WolframAlpha for formal proof, but beautiful, extensible, and backed by a living mathematical brain.
                    </p>
                  </section>
                  
                  {/* Getting Started */}
                  <section id="getting-started" className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Getting Started</h2>
                    <p>
                      To get started with Axion, follow these simple steps:
                    </p>
                    <ol className="list-decimal pl-5 mt-2">
                      <li className="mt-2">
                        <strong>Create an account</strong> - Sign up for a free account to access the basic features of Axion.
                      </li>
                      <li className="mt-2">
                        <strong>Choose an input method</strong> - Select whether you want to use natural language, LaTeX, or direct Lean code.
                      </li>
                      <li className="mt-2">
                        <strong>Enter your derivation</strong> - Type or paste your mathematical derivation into the editor.
                      </li>
                      <li className="mt-2">
                        <strong>Generate proof</strong> - Click the "Generate Proof" button to start the formalization process.
                      </li>
                      <li className="mt-2">
                        <strong>Review results</strong> - Examine the formal theorem, proof, and explanation.
                      </li>
                      <li className="mt-2">
                        <strong>Export or save</strong> - Save your work or export it in your preferred format.
                      </li>
                    </ol>
                  </section>
                  
                  {/* Input Formats */}
                  <section id="input-formats" className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Input Formats</h2>
                    <p>
                      Axion supports three different input formats:
                    </p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-2">Natural Language</h3>
                    <p>
                      You can describe your mathematical derivation in plain English. Be as clear and precise as possible, including all relevant assumptions and steps.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-md mt-2">
                      <pre className="text-sm">
                        A mass m is under a constant force F. Derive the position over time.
                      </pre>
                    </div>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-2">LaTeX</h3>
                    <p>
                      For more precise mathematical notation, you can use LaTeX format. This is especially useful for complex equations and formal statements.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-md mt-2">
                      <pre className="text-sm">
                        {`\\begin{align}
F &= m \\cdot a \\\\
a &= \\frac{d^2x}{dt^2} \\\\
\\therefore \\frac{d^2x}{dt^2} &= \\frac{F}{m} \\\\
\\end{align}

Integrating twice with initial conditions $x(0) = 0$ and $v(0) = 0$:

\\begin{align}
x(t) = \\frac{F}{2m}t^2
\\end{align}`}
                      </pre>
                    </div>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-2">Lean Code</h3>
                    <p>
                      If you're already familiar with Lean, you can paste Lean code directly. This is useful for modifying existing proofs or when you want precise control over the formalization.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-md mt-2">
                      <pre className="text-sm">
                        {`theorem constant_force_motion (m : ℝ) (F : ℝ) (h₁ : m > 0) :
  ∃ (x : ℝ → ℝ), ∀ t, x t = (F / (2 * m)) * t^2 :=
begin
  -- Define the position function
  let x := λ t, (F / (2 * m)) * t^2,
  -- Show this function satisfies the equation
  use x,
  -- For all time t
  intro t,
  -- By definition of x
  refl,
end`}
                      </pre>
                    </div>
                  </section>
                  
                  {/* Proof Generation */}
                  <section id="proof-generation" className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Proof Generation</h2>
                    <p>
                      When you submit your input, Axion processes it through several stages:
                    </p>
                    <ol className="list-decimal pl-5 mt-2">
                      <li className="mt-2">
                        <strong>Formalization</strong> - Your natural language or LaTeX input is translated into a formal Lean theorem statement.
                      </li>
                      <li className="mt-2">
                        <strong>Proof Generation</strong> - Axion generates a tactic-style Lean proof for the theorem.
                      </li>
                      <li className="mt-2">
                        <strong>Verification</strong> - The proof is checked by the Lean theorem prover to ensure it's correct.
                      </li>
                      <li className="mt-2">
                        <strong>Explanation</strong> - A step-by-step explanation of the proof is generated in plain English.
                      </li>
                      <li className="mt-2">
                        <strong>Similar Theorem Search</strong> - Axion searches for related theorems in its database.
                      </li>
                    </ol>
                    <p className="mt-4">
                      The entire process typically takes a few seconds to complete, depending on the complexity of the input.
                    </p>
                  </section>
                  
                  {/* Verification Process */}
                  <section id="verification" className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Verification Process</h2>
                    <p>
                      Axion uses Lean 4, a powerful theorem prover, to verify the correctness of generated proofs. This ensures that all proofs are mathematically sound and free from logical errors.
                    </p>
                    <p className="mt-4">
                      If a proof is successfully verified, you'll see a "Verified ✅" status. If there are any errors, Axion will display the error message and the current proof goal, which can help identify where the proof went wrong.
                    </p>
                    <p className="mt-4">
                      In case of errors, you can use the "Try Fix" button to attempt an automatic correction, or you can modify the input and try again.
                    </p>
                  </section>
                  
                  {/* Export Options */}
                  <section id="export" className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Export Options</h2>
                    <p>
                      Axion allows you to export your proofs in various formats:
                    </p>
                    <ul className="list-disc pl-5 mt-2">
                      <li className="mt-2">
                        <strong>.lean</strong> - Export as a Lean source file that can be imported into other Lean projects.
                      </li>
                      <li className="mt-2">
                        <strong>.tex</strong> - Export as a LaTeX document, suitable for inclusion in academic papers.
                      </li>
                      <li className="mt-2">
                        <strong>.json</strong> - Export as a JSON file containing all proof data, useful for programmatic access.
                      </li>
                      <li className="mt-2">
                        <strong>PDF</strong> - Export as a formatted PDF document with theorem statement, proof, and explanation.
                      </li>
                    </ul>
                  </section>
                  
                  {/* API Reference */}
                  <section id="api" className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">API Reference</h2>
                    <p>
                      Axion provides a RESTful API for programmatic access to its functionality. API access is available on Pro and Team plans.
                    </p>
                    <h3 className="text-lg font-semibold mt-6 mb-2">Authentication</h3>
                    <p>
                      All API requests require an API key, which you can generate in your profile settings.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-md mt-2">
                      <pre className="text-sm">
                        {`curl -X POST https://api.axion.ai/v1/submit \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input_type": "natural",
    "input": "A mass m is under a constant force F. Derive the position over time."
  }'`}
                      </pre>
                    </div>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-2">Endpoints</h3>
                    <table className="min-w-full divide-y divide-gray-200 mt-2">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Endpoint
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Method
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            /api/submit
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            POST
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            Submit a new derivation for formalization and proof generation
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            /api/theorems
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            GET
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            Retrieve a list of theorems in the database
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            /api/theorems/{'{id}'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            GET
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            Retrieve a specific theorem by ID
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            /api/similar
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            POST
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            Find theorems similar to a given input
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                  
                  {/* FAQ */}
                  <section id="faq" className="mb-12">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold">What is formal verification?</h3>
                        <p className="mt-2">
                          Formal verification is the process of using mathematical methods to prove the correctness of algorithms, systems, or mathematical statements. It provides a higher level of assurance than traditional testing methods.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold">What is Lean?</h3>
                        <p className="mt-2">
                          Lean is an open-source theorem prover and programming language developed by Microsoft Research. It allows for the formalization of mathematical proofs and has a growing library of formalized mathematics called mathlib.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold">How accurate are the generated proofs?</h3>
                        <p className="mt-2">
                          All proofs generated by Axion are verified by the Lean theorem prover, ensuring they are mathematically sound. However, the formalization of natural language or LaTeX input may not always capture the exact intent of the original statement. We recommend reviewing the generated theorem statement to ensure it matches your intent.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold">Can I edit the generated proofs?</h3>
                        <p className="mt-2">
                          Yes, you can edit the generated Lean code directly in the editor. After making changes, you can click "Verify" to check if your modified proof is still correct.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold">What are the limitations of Axion?</h3>
                        <p className="mt-2">
                          While Axion is powerful, it has some limitations:
                        </p>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Very complex or novel mathematical proofs may require manual refinement</li>
                          <li>Domain-specific terminology might not always be correctly interpreted</li>
                          <li>Proofs requiring specialized libraries beyond mathlib may not be fully supported</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold">How do I report issues or suggest improvements?</h3>
                        <p className="mt-2">
                          You can use the feedback controls on the output panel to flag incorrect translations or proofs. For general suggestions or issues, please contact our support team at support@axion.ai.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
