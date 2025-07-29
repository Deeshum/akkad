const BrandGuideline = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#26282D] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider text-[#E95F32] mb-4">
            BRAND GUIDELINES
          </h1>
          <p className="text-xl font-light text-gray-300">
            AKKAD Architecture - Design Standards & Visual Identity
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 space-y-16">
        {/* Brand Overview */}
        <section className="space-y-6">
          <h2 className="text-3xl font-light text-[#26282D] border-b border-[#E95F32] pb-4">
            Brand Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-[#E95F32] mb-4">Mission</h3>
              <p className="text-[#26282D] leading-relaxed">
                AKKAD bridges Abu Dhabi and Baghdad, creating innovative architectural designs 
                across the Middle East. We believe beauty, functionality, and feasibility are 
                the foundation of good design.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#E95F32] mb-4">Vision</h3>
              <p className="text-[#26282D] leading-relaxed">
                Design-led architecture that balances creative intelligence with engineering 
                precision, creating spaces that are built to inspire and designed to perform.
              </p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-3xl font-light text-[#26282D] border-b border-[#E95F32] pb-4">
            Color Palette
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-[#E95F32] mx-auto mb-4 rounded-lg shadow-lg"></div>
              <h3 className="font-medium text-[#26282D] mb-2">Primary - Terracotta</h3>
              <p className="text-sm text-gray-600">#E95F32</p>
              <p className="text-xs text-gray-500 mt-2">
                Used for headings, accents, and brand highlights
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-[#26282D] mx-auto mb-4 rounded-lg shadow-lg"></div>
              <h3 className="font-medium text-[#26282D] mb-2">Secondary - Charcoal</h3>
              <p className="text-sm text-gray-600">#26282D</p>
              <p className="text-xs text-gray-500 mt-2">
                Used for body text, backgrounds, and professional elements
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-white border-2 border-gray-200 mx-auto mb-4 rounded-lg shadow-lg"></div>
              <h3 className="font-medium text-[#26282D] mb-2">Neutral - White</h3>
              <p className="text-sm text-gray-600">#FFFFFF</p>
              <p className="text-xs text-gray-500 mt-2">
                Used for backgrounds, text on dark surfaces, and clean spaces
              </p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <h2 className="text-3xl font-light text-[#26282D] border-b border-[#E95F32] pb-4">
            Typography
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-[#E95F32] mb-4">Primary Typeface - Sans Serif</h3>
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-4xl font-light text-[#26282D] mb-2">AKKAD</h4>
                  <p className="text-sm text-gray-600">Font Weight: Light (300) - Brand Name</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-2xl font-medium text-[#26282D] mb-2">Section Headers</h4>
                  <p className="text-sm text-gray-600">Font Weight: Medium (500) - Section Titles</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <p className="text-lg text-[#26282D] mb-2">Body text and paragraphs use regular weight for optimal readability across all devices and platforms.</p>
                  <p className="text-sm text-gray-600">Font Weight: Regular (400) - Body Text</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Usage */}
        <section className="space-y-6">
          <h2 className="text-3xl font-light text-[#26282D] border-b border-[#E95F32] pb-4">
            Logo & Brand Mark
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-[#E95F32]">Primary Logo</h3>
              <div className="p-8 bg-[#26282D] rounded-lg text-center">
                <h1 className="text-4xl font-light tracking-wider text-[#E95F32]">AKKAD</h1>
              </div>
              <p className="text-sm text-gray-600">
                Use on dark backgrounds. Maintain generous white space around the logo.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-[#E95F32]">Alternative Logo</h3>
              <div className="p-8 bg-gray-100 rounded-lg text-center border">
                <h1 className="text-4xl font-light tracking-wider text-[#26282D]">AKKAD</h1>
              </div>
              <p className="text-sm text-gray-600">
                Use on light backgrounds. Ensure sufficient contrast for readability.
              </p>
            </div>
          </div>
        </section>

        {/* Spacing & Layout */}
        <section className="space-y-6">
          <h2 className="text-3xl font-light text-[#26282D] border-b border-[#E95F32] pb-4">
            Spacing & Layout
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-[#E95F32] mb-4">Grid System</h3>
              <ul className="space-y-2 text-[#26282D]">
                <li>• Maximum content width: 6xl (1152px)</li>
                <li>• Section padding: 8 (2rem) on mobile, 16 (4rem) on desktop</li>
                <li>• Grid columns: 1 on mobile, 2-3 on tablet/desktop</li>
                <li>• Gap between elements: 6-8 (1.5-2rem)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#E95F32] mb-4">Vertical Rhythm</h3>
              <ul className="space-y-2 text-[#26282D]">
                <li>• Section spacing: 16 (4rem)</li>
                <li>• Heading margins: 4-12 (1-3rem)</li>
                <li>• Paragraph spacing: 4-6 (1-1.5rem)</li>
                <li>• Button padding: 3-6 (0.75-1.5rem)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Visual Style */}
        <section className="space-y-6">
          <h2 className="text-3xl font-light text-[#26282D] border-b border-[#E95F32] pb-4">
            Visual Style
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-[#E95F32]">Photography</h3>
              <p className="text-sm text-[#26282D]">
                Clean, architectural photography with strong geometric lines. 
                Prefer natural lighting and minimal post-processing.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-[#E95F32]">Tone of Voice</h3>
              <p className="text-sm text-[#26282D]">
                Professional yet approachable. Confident and knowledgeable. 
                Focus on craftsmanship and precision.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-[#E95F32]">Interactions</h3>
              <p className="text-sm text-[#26282D]">
                Smooth transitions (300ms). Subtle hover effects. 
                Minimal animations that enhance rather than distract.
              </p>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="space-y-6">
          <h2 className="text-3xl font-light text-[#26282D] border-b border-[#E95F32] pb-4">
            Usage Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-[#E95F32]">Do</h3>
              <ul className="space-y-2 text-[#26282D] text-sm">
                <li>✓ Use ample white space for clean, modern layouts</li>
                <li>✓ Maintain consistent color ratios across pages</li>
                <li>✓ Use font-light for large headings and brand elements</li>
                <li>✓ Ensure high contrast for accessibility</li>
                <li>✓ Keep animations subtle and purposeful</li>
                <li>✓ Use geometric, architectural imagery</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-[#E95F32]">Don't</h3>
              <ul className="space-y-2 text-[#26282D] text-sm">
                <li>✗ Use bright, saturated colors outside the palette</li>
                <li>✗ Overcrowd layouts with too many elements</li>
                <li>✗ Use decorative or script fonts</li>
                <li>✗ Apply drop shadows or heavy effects</li>
                <li>✗ Use stock photography that looks generic</li>
                <li>✗ Create cluttered navigation or interfaces</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-[#26282D] text-white p-8 rounded-lg">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-light text-[#E95F32]">Questions about Brand Guidelines?</h2>
            <p className="text-gray-300">
              Contact our team for additional brand assets or clarification on usage guidelines.
            </p>
            <a 
              href="mailto:info@akkadconsultants.com" 
              className="inline-block text-[#E95F32] hover:text-white transition-colors font-medium"
            >
              info@akkadconsultants.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandGuideline;