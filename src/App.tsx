/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Program from './components/Program';
import UseCases from './components/UseCases';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Program />
        <UseCases />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

