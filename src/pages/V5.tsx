import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CustomCursor from '@/components/CustomCursor';
import HamburgerMenu from '@/components/HamburgerMenu';

// Portfolio data with premium projects
const portfolioProjects = [
  {
    id: 1,
    title: "Desert Mirage Villa",
    category: "Luxury Residential",
    description: "A contemporary desert retreat that blends modern architecture with traditional Middle Eastern elements.",
    image: "/api/placeholder/800/600",
    year: "2024",
    location: "Dubai Hills"
  },
  {
    id: 2,
    title: "Skyline Tower",
    category: "Commercial",
    description: "A 40-story mixed-use development featuring premium offices and luxury residences.",
    image: "/api/placeholder/800/600",
    year: "2023",
    location: "Business Bay"
  },
  {
    id: 3,
    title: "Cultural Nexus",
    category: "Cultural",
    description: "An innovative cultural center celebrating Emirati heritage through contemporary design.",
    image: "/api/placeholder/800/600",
    year: "2024",
    location: "Saadiyat Island"
  },
  {
    id: 4,
    title: "Palm Sanctuary",
    category: "Hospitality",
    description: "A luxury resort that harmonizes with the natural coastline of the Arabian Gulf.",
    image: "/api/placeholder/800/600",
    year: "2023",
    location: "Dubai Marina"
  },
  {
    id: 5,
    title: "Innovation District",
    category: "Mixed-Use",
    description: "A forward-thinking urban development fostering technology and sustainability.",
    image: "/api/placeholder/800/600",
    year: "2024",
    location: "Downtown Dubai"
  },
  {
    id: 6,
    title: "Heritage Towers",
    category: "Residential",
    description: "Twin towers that reinterpret traditional Arabian architecture for modern living.",
    image: "/api/placeholder/800/600",
    year: "2023",
    location: "Old Dubai"
  }
];

const ProjectCard = ({ project, index }: { project: typeof portfolioProjects[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ 
          y: -20,
          rotateX: 5,
          rotateY: 5,
          scale: 1.02
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className="relative bg-gradient-to-br from-v4-charcoal to-black rounded-lg overflow-hidden shadow-2xl transform-gpu"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full bg-gradient-to-r from-v4-accent/20 to-v4-accent/40"
          />
          
          {/* Overlay gradient */}
          <motion.div
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
          />
          
          {/* Project number */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="absolute top-6 right-6 w-12 h-12 bg-v4-accent text-white rounded-full flex items-center justify-center font-bold text-lg"
          >
            {String(index + 1).padStart(2, '0')}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            className="text-v4-accent text-sm font-semibold tracking-wider uppercase mb-2"
          >
            {project.category}
          </motion.div>
          
          <motion.h3
            whileHover={{ x: 10 }}
            className="text-2xl font-serif text-white mb-3 group-hover:text-v4-accent transition-colors duration-300"
          >
            {project.title}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            className="text-gray-300 mb-4 leading-relaxed"
          >
            {project.description}
          </motion.p>
          
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ y: -2 }}
              className="text-sm text-gray-400"
            >
              <div>{project.year}</div>
              <div>{project.location}</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="w-8 h-8 border border-v4-accent rounded-full flex items-center justify-center"
            >
              <div className="w-3 h-3 border-t-2 border-r-2 border-v4-accent transform rotate-45"></div>
            </motion.div>
          </div>
        </div>

        {/* Hover effect overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-v4-accent/5 to-transparent pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
};

const V5 = () => {
  const { scrollY } = useScroll();
  const [isLoading, setIsLoading] = useState(true);

  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
  const textY = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-v4-accent border-t-transparent rounded-full mx-auto mb-6"
          />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-serif text-white"
          >
            AKKAD V5
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-v4-accent mt-2"
          >
            Crafting Excellence
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      
      {/* Fixed Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 p-6"
      >
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-serif text-white"
          >
            AKKAD
          </motion.div>
          <HamburgerMenu />
        </div>
      </motion.header>

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-v4-charcoal via-black to-v4-charcoal"
        />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{ 
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-v4-accent rounded-full"
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ y: textY }}
          className="text-center z-10 max-w-4xl mx-auto px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-7xl md:text-9xl font-serif mb-6 text-white"
          >
            Premium
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-6xl font-serif mb-8 text-v4-accent"
          >
            Architecture
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Redefining luxury through innovative design and meticulous craftsmanship. 
            Experience architecture that transcends expectations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-v4-accent hover:bg-v4-accent/90 text-white px-12 py-6 text-lg font-semibold tracking-wider uppercase"
            >
              Explore Works
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-v4-accent rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-v4-accent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-serif text-white mb-6">Selected Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A curated collection of our most prestigious projects, 
              each representing our commitment to architectural excellence and innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-32 bg-gradient-to-t from-v4-charcoal to-black"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl font-serif text-white mb-8"
          >
            Ready to Create Something Extraordinary?
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Let's collaborate to bring your vision to life with our expertise in luxury architecture.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/about">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-v4-accent hover:bg-v4-accent/90 text-white px-8 py-4 text-lg">
                  Learn More
                </Button>
              </motion.div>
            </Link>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                className="border-v4-accent text-v4-accent hover:bg-v4-accent hover:text-white px-8 py-4 text-lg"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default V5;