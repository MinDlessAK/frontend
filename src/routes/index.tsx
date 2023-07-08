import Sidebar from "~/components/home/sidebar";
import Content from "~/components/home/content";
import Aside from "~/components/home/aside";



export default() => {
  return (
    <>
      <div class="flex bg-green-500 min-h-screen w-full ">
           <Sidebar></Sidebar>
         <div class="bg-white flex flex-col px-10 gap-7  grow">
             <Content></Content>
        </div>
         <div class="bg-gray-700 w-72 lg:flex flex-col hidden">
               <Aside></Aside>
            </div>



      </div>

    </>
  );
};


