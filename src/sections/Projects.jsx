
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import { projects } from '../data'
import { Icon } from '@iconify/react'

const Projects = () => {
  return (
    <section id="about" className='min-h-screen flex flex-col'>
      <AnimatedHeaderSection title={"Projects"} subtitle={"Crafted with passion, built to perform"} text={"Explore my latest projects, where innovation meets execution."} withScrollTrigger={true} />

      <div className='relative flex flex-col font-light'>
        {projects.map((project, i) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
          >

            {/* title */}
            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>
            )}
          </div>
    </section>
  )
}

export default Projects