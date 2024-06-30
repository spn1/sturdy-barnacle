

export default function Index() {
    return (
        <div className='h-full flex-col flex justify-stretch'>
          <article className="container mx-auto" >
            <h1 className="text-6xl text-center my-10">Curriculum Vitae</h1>
            <section className="grid grid-cols-4 auto-cols-max auto-rows-max gap-8">
              <div className="flex flex-col gap-2">
                <img src="/self-cafe.jpg" alt="me!"/>
                <h2 className="text-4xl">Spencer Newton</h2>
                <p className="text-lg">🐱‍💻 Senior Software Engineer</p>
                <p className="text-lg">👨‍🎓 M.Phys Space Science and Robotics</p>
              </div>
              <div className="flex flex-col gap-4 p-4 col-span-3 drop-shadow-2xl">
                <h2 className="text-4xl border-b-2 pb-2 border-solid dark:border-zinc-800 border-stone-300">Profile</h2>
                <p className="text-xl">
                  A highly focused and dedicated Software Engineer, with a Masters Degree in Physics and Computer Science and 5+ years experience working in software engineering teams. Has an analytical and logical way of thinking, enjoys the aspect of problem-solving with others using modern technology, and is keen to apply modern technology in real-world applications.
                </p>
                <p className="text-xl">
                  Experienced in working on a variety of application domains, including maintaining complex financial software to handle accounts and loans for UHNWI at Credit Suisse, and developing web applications to help customers troubleshoot their issues digitally instead of through call centers at Sky. Later moved into a Senior Software Engineering role to lead the delivery of product settings journeys for Sky&apos;s commercial products and to help develop a new billing page for Sky Mobile.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl border-b-2 pb-4 border-solid dark:border-zinc-800 border-stone-300">Skills & Experience</h2>
                <ul className="border-b-2 pb-2 border-solid dark:border-zinc-800 border-stone-300">
                  <li>HTML, Javascript, CSS</li>
                  <li>React, Node, Typescript</li>
                  <li>GraphQL, REST, SQL, Docker</li>
                  <li>CMS Systems (Contentstack)</li>
                  <li>CI/CD Systems (Teamcity, Concourse, Octopus)</li>
                  <li>PaaS Systems (Cloudfoundry)</li>
                  <li>Test Driven Development, Project Planning</li>
                  <li>Technical Leadership, Software Design</li>
                </ul>
                <ul>
                  <li>C#, .Net, C, C++</li>
                  <li>Java, Python, Unity</li>
                  <li>Fortran, Matlab, OpenCV</li>
                  <li>Bash, Unix, Ditto</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 p-4 col-span-3 ">
                <h2 className="text-4xl border-b-2 pb-2 border-solid dark:border-zinc-800 border-stone-300">Experience</h2>
                <section>
                  <h3 className="text-2xl"><span className="font-bold">Sky, Leeds</span> - <span className="italic">Senior Software Engineer</span></h3>
                  <div className="text-lg">
                    <p>
                      Moved into a senior position to lead a different team that worked on various product settings journeys for sky.com
                    </p>
                    <ul className="list-inside list-disc">
                      <li>Led the development of a series of product settings journeys for a brand new Sky product, working with teams in America and India.</li>
                      <li>Collaborated with engineers in other teams in setting up a stubbing framework to facilitate API mocking for this new product, as the external APIs couldt be utilized in </li>a <li>development environment.</li>
                      <li>Organized the implementation of automation testing into the team.</li>
                      <li>Collaborated with business analysts and product owners to analyze requirements, refine tickets, and deliver frequent application updates.</li>
                      <li>Mentored other junior engineers in the team on software development best practices.</li>
                      <li>Assisted in developing a new billing page for Sky mobile customers.</li>
                    </ul>
                  </div>
                </section>
              </div>
            </section>
          </article>
        </div>
    );
}
