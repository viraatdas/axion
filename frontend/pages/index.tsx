import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Link from 'next/link';

// Dynamically import Monaco Editor to prevent SSR issues
const MonacoEditor = dynamic(
  () => import('@monaco-editor/react'),
  { ssr: false }
);

// Input types
type InputType = 'natural' | 'latex' | 'lean';

// Proof status
type ProofStatus = 'pending' | 'verified' | 'error';

export default function Home() {
  // State for input type and content
  const [inputType, setInputType] = useState<InputType>('natural');
  const [inputContent, setInputContent] = useState<string>('');
  
  // State for output tabs
  const [activeTab, setActiveTab] = useState<string>('theorem');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [proofStatus, setProofStatus] = useState<ProofStatus>('pending');
  
  // Result states
  const [formalTheorem, setFormalTheorem] = useState<string>('');
  const [leanProof, setLeanProof] = useState<string>('');
  const [explanation, setExplanation] = useState<string>('');
  const [similarTheorems, setSimilarTheorems] = useState<any[]>([]);
  
  // Handle input type change
  const handleInputTypeChange = (type: InputType) => {
    setInputType(type);
  };
  
  // Handle generate proof
  const handleGenerateProof = async () => {
    if (!inputContent.trim()) return;
    
    setIsGenerating(true);
    setProofStatus('pending');
    
    try {
      // This would be replaced with actual API call
      // Mock API response for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormalTheorem('theorem example_theorem (m : ℝ) (F : ℝ) : ∃ (x : ℝ → ℝ), ∀ t, x t = (F / (2 * m)) * t^2');
      setLeanProof(`
theorem example_theorem (m : ℝ) (F : ℝ) : ∃ (x : ℝ → ℝ), ∀ t, x t = (F / (2 * m)) * t^2 :=
begin
  -- Define the position function
  let x := λ t, (F / (2 * m)) * t^2,
  -- Show this function satisfies the equation
  use x,
  -- For all time t
  intro t,
  -- By definition of x
  refl,
end
      `);
      setExplanation(`
1. We start by defining a position function x(t) = (F/(2m)) * t².
2. This function represents the position of an object under constant force F.
3. We then show that this function satisfies our theorem statement.
4. The proof is complete by reflexivity, as the definition matches the claim.
      `);
      setSimilarTheorems([
        { id: 'thm1', statement: 'Constant acceleration motion' },
        { id: 'thm2', statement: 'Newton\'s second law of motion' },
      ]);
      setProofStatus('verified');
    } catch (error) {
      console.error('Error generating proof:', error);
      setProofStatus('error');
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Axion — Where Scientific Thought Meets Formal Proof</title>
        <meta name="description" content="Your personal theorem proving lab — a powerful, intuitive platform where scientists and engineers can write down what they want to prove, and instantly see how it can be proven." />
      </Head>
      
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Your personal</span>
            <span className="block text-primary-600">theorem proving lab</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Write down what you want to prove, and instantly see how it can be proven — in plain English, LaTeX, or pseudocode.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">What would you like to prove?</h2>
            
            {/* Input Type Toggle */}
            <div className="flex mb-4 space-x-2">
              <button 
                className={`btn ${inputType === 'natural' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => handleInputTypeChange('natural')}
              >
                Natural Language
              </button>
              <button 
                className={`btn ${inputType === 'latex' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => handleInputTypeChange('latex')}
              >
                LaTeX
              </button>
              <button 
                className={`btn ${inputType === 'lean' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => handleInputTypeChange('lean')}
              >
                Paste Lean
              </button>
            </div>
            
            {/* Editor */}
            <div className="h-80 border border-gray-300 rounded-md overflow-hidden">
              <MonacoEditor
                height="100%"
                language={inputType === 'lean' ? 'lean' : inputType === 'latex' ? 'latex' : 'markdown'}
                theme="vs-light"
                value={inputContent}
                onChange={(value) => setInputContent(value || '')}
                options={{
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  fontSize: 14,
                }}
              />
            </div>
            
            {/* Generate Button */}
            <div className="mt-4">
              <button 
                className="btn btn-primary"
                onClick={handleGenerateProof}
                disabled={isGenerating || !inputContent.trim()}
              >
                {isGenerating ? 'Generating...' : 'Generate Proof'}
              </button>
            </div>
          </div>
          
          {/* Output Panel */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Your formal proof</h2>
            
            {/* Status Indicator */}
            <div className="mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2">
                Status:
              </span>
              {proofStatus === 'pending' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              )}
              {proofStatus === 'verified' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Verified ✅
                </span>
              )}
              {proofStatus === 'error' && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Error ❌
                </span>
              )}
            </div>
            
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-4">
                <button
                  className={`px-3 py-2 font-medium text-sm flex items-center ${
                    activeTab === 'theorem'
                      ? 'border-b-2 border-primary-500 text-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('theorem')}
                >
                  <span className="mr-1">🧠</span> Formal Theorem
                </button>
                <button
                  className={`px-3 py-2 font-medium text-sm flex items-center ${
                    activeTab === 'proof'
                      ? 'border-b-2 border-primary-500 text-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('proof')}
                >
                  <span className="mr-1">⚙️</span> Lean Proof
                </button>
                <button
                  className={`px-3 py-2 font-medium text-sm flex items-center ${
                    activeTab === 'explanation'
                      ? 'border-b-2 border-primary-500 text-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('explanation')}
                >
                  <span className="mr-1">🧭</span> Explanation
                </button>
                <button
                  className={`px-3 py-2 font-medium text-sm flex items-center ${
                    activeTab === 'similar'
                      ? 'border-b-2 border-primary-500 text-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('similar')}
                >
                  <span className="mr-1">🕸</span> Similar Theorems
                </button>
                <button
                  className={`px-3 py-2 font-medium text-sm flex items-center ${
                    activeTab === 'export'
                      ? 'border-b-2 border-primary-500 text-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('export')}
                >
                  Export
                </button>
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="mt-4 h-80 overflow-auto">
              {activeTab === 'theorem' && (
                <div className="h-full">
                  {formalTheorem ? (
                    <MonacoEditor
                      height="100%"
                      language="lean"
                      theme="vs-light"
                      value={formalTheorem}
                      options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 14,
                      }}
                    />
                  ) : (
                    <div className="text-gray-500 h-full flex items-center justify-center">
                      {isGenerating ? 'Generating theorem...' : 'No theorem generated yet'}
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'proof' && (
                <div className="h-full">
                  {leanProof ? (
                    <MonacoEditor
                      height="100%"
                      language="lean"
                      theme="vs-light"
                      value={leanProof}
                      options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 14,
                      }}
                    />
                  ) : (
                    <div className="text-gray-500 h-full flex items-center justify-center">
                      {isGenerating ? 'Generating proof...' : 'No proof generated yet'}
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'explanation' && (
                <div className="prose max-w-none">
                  {explanation ? (
                    <div className="p-4">
                      {explanation.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  ) : (
                    <div className="text-gray-500 h-full flex items-center justify-center">
                      {isGenerating ? 'Generating explanation...' : 'No explanation generated yet'}
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'similar' && (
                <div>
                  {similarTheorems.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                      {similarTheorems.map((theorem) => (
                        <li key={theorem.id} className="py-4">
                          <div className="flex space-x-3">
                            <div className="flex-1 space-y-1">
                              <h3 className="text-sm font-medium">{theorem.statement}</h3>
                              <p className="text-sm text-gray-500">ID: {theorem.id}</p>
                            </div>
                            <button className="btn btn-outline text-sm">View</button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-gray-500 h-full flex items-center justify-center">
                      {isGenerating ? 'Finding similar theorems...' : 'No similar theorems found'}
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'export' && (
                <div className="space-y-4">
                  <h3 className="font-medium">Export Options</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="btn btn-outline" disabled={!formalTheorem}>
                      Export as .lean
                    </button>
                    <button className="btn btn-outline" disabled={!formalTheorem}>
                      Export as .tex
                    </button>
                    <button className="btn btn-outline" disabled={!formalTheorem}>
                      Export as .json
                    </button>
                    <button className="btn btn-outline" disabled={!formalTheorem}>
                      Export as PDF
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Feedback Controls */}
            {proofStatus === 'verified' && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium mb-2">Creative Assistance</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="btn btn-outline text-sm">
                    💡 Suggest Generalization
                  </button>
                  <button className="btn btn-outline text-sm">
                    🔍 Find Similar Theorems
                  </button>
                  <button className="btn btn-outline text-sm">
                    🛠️ Fix Errors
                  </button>
                  <button className="btn btn-primary text-sm">
                    🔄 Regenerate Proof
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-bold text-center mb-12">What makes Axion magical</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">Auto-Formalization</h3>
              <p className="text-gray-600">You describe the problem. Axion generates a Lean theorem.</p>
            </div>
            
            <div className="card">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Proof Synthesis</h3>
              <p className="text-gray-600">Axion constructs the proof, step by step, verified by Lean.</p>
            </div>
            
            <div className="card">
              <div className="text-3xl mb-4">🧭</div>
              <h3 className="text-xl font-semibold mb-2">Human-Readable Feedback</h3>
              <p className="text-gray-600">The platform explains every proof in clear, natural language.</p>
            </div>
            
            <div className="card">
              <div className="text-3xl mb-4">🕸</div>
              <h3 className="text-xl font-semibold mb-2">Growing Knowledge Graph</h3>
              <p className="text-gray-600">Every verified result is stored in an append-only, queryable theorem repository.</p>
            </div>
            
            <div className="card">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Creative Assistance</h3>
              <p className="text-gray-600">Get suggestions for generalizations, similar theorems, or fixes if something breaks.</p>
            </div>
            
            <div className="card">
              <div className="text-3xl mb-4">🔮</div>
              <h3 className="text-xl font-semibold mb-2">Beautiful Experience</h3>
              <p className="text-gray-600">It's like WolframAlpha for formal proof, but beautiful, extensible, and backed by a living mathematical brain.</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start proving?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            No more fighting obscure syntax or debugging logic rules — Axion removes the barriers between what you mean and what you can prove.
          </p>
          <Link href="/docs" className="btn btn-primary text-lg px-8 py-3">
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}
