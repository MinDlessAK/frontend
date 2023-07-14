import Sidebar from "~/components/home/sidebar";
import Content from "~/components/home/content";
// import Aside from "~/components/home/aside";



export default() => {
  return (
    <>
      <div class="flex bg-purple-500 min-h-screen w-full rounded-l-3xl ">
           <Sidebar></Sidebar>
         <div class="bg-white flex flex-col px-10 gap-7  grow   lg:border-purple-500 lg:border-y-8 lg:rounded-l-3xl">
             <Content></Content>
        </div>
         {/* <div class="bg-gray-700 w-72 lg:flex flex-col hidden ">
               <Aside></Aside>
        </div> */}
    </div>

    </>
  );
};


