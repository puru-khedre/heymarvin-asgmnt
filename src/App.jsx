import "./App.css";
import { ChevronDown, ArrowDownRight } from "lucide-react";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="bg-[url(/images/bg.png)] bg-cover bg-no-repeat p-8">
        <nav className="flex justify-between flex-row items-start">
          <div>
            <p className="font-bold text-2xl">AIPatrn</p>
          </div>
          <div className="flex gap-12 flex-row">
            <div className="hidden md:grid grid-cols-2 gap-x-12 ">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-lg"
              >
                Home page
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-lg"
              >
                About Us
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-lg"
              >
                Generator
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-lg"
              >
                Features
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-lg"
              >
                Pricing-plan
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-lg"
              >
                Collection-2023
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-lg"
              >
                Blog - News
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-lg"
              >
                Career
              </a>
            </div>
            <div className="">
              <button className="py-2 px-5 rounded-full border border-gray-400 whitespace-nowrap min-w-max">
                <span>Menu</span>
                <ChevronDown size={16} className="inline ml-1" />
              </button>
            </div>
          </div>
        </nav>
        <div>
          <p className="text-xl text-gray-600 mt-12 md:mt-8 mb-4 text-center md:text-left">
            Revolutionize Your
          </p>
          <div className="inline-block w-full md:w-4/5">
            <p className="hero-text text-3xl md:text-8xl text-center md:text-left">
              Creative Projects with the ultimate AI-Powered Pattern{" "}
              <span className="inline-flex flex-col-reverse md:flex-row mt-6 gap-6 align-top">
                <button className="bg-black text-white px-8 py-4 mx-6 rounded-full text-lg md:text-xl align-middle">
                  START GENERATING
                </button>
                <p className="text-xl md:text-2xl text-gray-500 inline-block w-72 align-middle">
                  The Next generation{" "}
                  <strong className="text-black">Production</strong> for
                  Designers
                </p>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-3 grid-cols-1 md:grid-cols-4 md:grid-rows-1 md:h-96 gap-y-2 md:gap-2">
        <Card src="/images/card1-resize.jpg" label="01">
          <div className="flex flex-col gap-1.5">
            <div>
              <img
                src="/images/avatar.jpg"
                className="rounded-full border-2 border-white w-10 aspect-square inline"
              />
              <img
                src="/images/avatar.jpg"
                className="rounded-full border-2 border-white w-10 aspect-square inline -ml-3.5"
              />
              <img
                src="/images/avatar.jpg"
                className="rounded-full border-2 border-white w-10 aspect-square inline -ml-3.5"
              />
            </div>
            <p className="text-2xl">Learn from best mentors</p>
            <button className="rounded-full border border-white/70 px-3 py-1 w-max">
              <span>START LEARNING</span>
              <ArrowDownRight className="inline ml-1" />
            </button>
          </div>
        </Card>
        <Card src="/images/card2-resize.png" label="02">
          <div className="flex flex-col">
            <div className="flex justify-between items-center py-2 border-b border-white/40">
              <p>Free Edit</p>
              <ArrowDownRight />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center py-2 border-b border-white/40">
              <p>Interactive</p>
              <ArrowDownRight />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center py-2 border-b border-white/40">
              <p>Easy interface</p>
              <ArrowDownRight />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center py-2 border-b border-white/40">
              <p>Compare to other</p>
              <ArrowDownRight />
            </div>
          </div>
        </Card>
        <Card
          src="/images/card3-resize.png"
          className={"md:col-span-2"}
          label="03"
        >
          <div className="w-full flex flex-col md:flex-row justify-center gap-3 items-start md:items-center px-4">
            <p className="text-6xl">+20K</p>
            <p className="hero-text text-base">
              Glass Pattern generated this week in the first release
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
