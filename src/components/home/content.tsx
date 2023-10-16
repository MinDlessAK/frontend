
import ImgComputer from '~/media/computer.png?jsx';

export default function content() {
  return (
    <>
    <div class="h-14 bg-white flex gap-4 mt-7  ">

      <div class="  grow text-purple-500 font-bold text-5xl">My Courses</div>
      <div class="flex  gap-3 ">
      <div class="bg-red-400  h-full lg:w-24 w-10 "></div>
      <div class="bg-red-400  h-full lg:w-24  w-10"></div>
      </div>
    </div>
    <div class="  bg-white flex   gap-4  items-center">

         <div class="   text-black font-medium  ">Filter by:</div>
             <button class="bg-gray-300 rounded-3xl  inline-block py-2 px-4 shrink-0" >Title</button>
             <button class="bg-gray-300 rounded-3xl inline-block py-2 px-4 shrink-0">Level</button>
               <button class="bg-gray-300 rounded-3xl inline-block py-2 px-4 shrink-0">Sort</button>
                <button  class="bg-gray-300 rounded-3xl inline-block py-2 px-4 shrink-0" >Language</button>

    </div>
    
    <div class="  lg:flex bg-purple-100 rounded-2xl  cursor-pointer p-6">
        <div class="flex flex-col items-center">
          <div class=" lg:h-full h-56  lg:w-72  w-72 ">
              <ImgComputer class="h-full w-full" />
          </div>
        </div>
        <div class="  rounded-3xl flex grow flex-col ">
           <div class="lg:h-14 w-full   text-black font-medium text-3xl ">Opreating System</div>
           <div class=" grow text-gray-400 text-2xl pt-4 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eos nesciunt consectetur numquam eligendi aperiam nam, veritatis reprehenderit expedita hic perspiciatis dolore velit iure exercitationem?</div>

           <div class="lg:h-10 w-full text-gray-400 font-medium text-2xl  flex gap-2 justify-center items-center pb-4">Checked By:
           <p class="inline text-black font-medium text-2xl  ">Akash Mishra</p>
           <button class="font-bold bg-purple-500 rounded-full w-10 h-10 text-white ml-auto">^</button>
           </div>

        </div>
      </div>

      <div class="  lg:flex bg-blue-100 rounded-2xl hover:shadow-3xl cursor-pointer p-6 ">
        <div class="flex flex-col items-center">
          <div class=" lg:h-full h-56  lg:w-72  w-72 ">
              <ImgComputer class="h-full w-full" />
          </div>
        </div>
        <div class="  rounded-3xl flex grow flex-col ">
           <div class="lg:h-14 w-full   text-black font-medium text-3xl ">Opreating System</div>
           <div class="  lg:grow text-gray-400 text-2xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eos nesciunt consectetur numquam eligendi aperiam nam, veritatis reprehenderit expedita hic perspiciatis dolore velit iure exercitationem?</div>
           <div class="lg:h-10 w-full text-gray-400 font-medium text-2xl    flex gap-2 justify-center items-center pb-4">Checked By:
           <p class="inline text-black font-medium text-2xl  ">Akash Mishra</p>
           <button class="font-bold bg-purple-500 rounded-full w-10 h-10 text-white ml-auto">^</button>
           </div>
        </div>
      </div>

      <div class="  lg:flex bg-red-200 rounded-2xl hover:shadow-3xl cursor-pointer p-6">
        <div class="flex flex-col items-center">
          <div class=" lg:h-full h-56  lg:w-72  w-72 ">
              <ImgComputer class="h-full w-full" />
          </div>
        </div>
        <div class="  rounded-3xl flex grow flex-col ">
           <div class="lg:h-14 w-full   text-black font-medium text-3xl ">Opreating System</div>
           <div class="  lg:grow text-gray-400 text-2xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eos nesciunt consectetur numquam eligendi aperiam nam, veritatis reprehenderit expedita hic perspiciatis dolore velit iure exercitationem?</div>
           <div class="lg:h-10 w-full text-gray-400 font-medium text-2xl    flex gap-2 justify-center items-center pb-4">Checked By:
           <p class="inline text-black font-medium text-2xl  ">Akash Mishra</p>
           <button class="font-bold bg-purple-500 rounded-full w-10 h-10 text-white ml-auto">^</button>
           </div>
        </div>
      </div>

      <div class="bg-gray-700  flex flex-row lg:hidden">
         <div class="bg-red-500  h-56 w-32"></div>
          <div class="bg-purple-500  h-56 w-32"></div>
         <div class="bg-black grow"></div>

       </div>
      
    </>
  )
}
