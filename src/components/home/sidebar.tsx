export default function sidebar() {
  return (
    <>
      <div class="  flex hidden lg:flex flex-col bg-purple-500 w-56 gap-3 pt-3 rounded-l-3xl ">
        <h1 class=" pt-10 pl-14 text-white font-extrabold cursor-pointer">ECourse</h1>
        <div class="  flex  flex-col grow gap-3  pt-28 pl-14">
        <div class=" h-12 w-52 text-white font-bold  cursor-pointer">Dashboard </div>
        <div class=" h-12 w-52  text-white font-bold cursor-pointer">All Courses</div>
        <div class=" h-12 w-52 text-white font-bold cursor-pointer">Messages</div>
        <div class=" h-12 w-52 text-white font-bold cursor-pointer">Friends</div>
        <div class=" h-12 w-52 text-white font-bold cursor-pointer">Schadules</div>

     </div>
     <div class="  w-full flex gap-4 flex-col  pb-3 pl-14 ">
        <div class=" h-12 w-52 text-white font-bold cursor-pointer">Settings</div>
        <div class="h-12 w-52 text-white font-bold cursor-pointer">Directory</div>
     </div>

</div>

    </>
  )
}
