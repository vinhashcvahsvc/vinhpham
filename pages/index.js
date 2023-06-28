import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Card = () => {
  return (
    <div className="2xl:w-[20%] w-[100%] p-2">
      <div className=" bg-white rounded p-[6px] cursor-pointer ease-in duration-300 hover:text-white hover:bg-pink-600 hover:translate-y-[-4px] hover:shadow-noibat">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU"
          alt="ádhgfkajhsd"
          className="rounded-[6px] w-[100%] "
        />
        <h3 className="font-semibold mt-4">Chim Quèn quẹt #11002</h3>
        <p className="font-bold text-base">1 ETH</p>
      </div>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className=" bg-white rounded p-[6px] cursor-pointer ease-in duration-300 hover:text-white hover:bg-pink-600 hover:translate-y-[-4px] hover:shadow-noibat">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU"
        alt="ádhgfkajhsd"
        className="rounded-[6px] w-[100%] "
      />
      <h3 className="font-semibold mt-4">Chim Quèn quẹt #11002</h3>
      <p className="font-bold text-base">1 ETH</p>
    </div>
  );
};

export default function Home() {
  return (
    <main
      className={` pt-[20px] flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <button className=" 2xl:bg-red-500 bg-main-pink text-white rounded-[8px] px-[16px] py-[10px] ease-in duration-300 hover:bg-pink-600 hover:translate-y-[-4px] hover:shadow-noibat ">
        Button 1
      </button>

      <h3>animation</h3>
      <img
        src="https://itxgear.com/messenger.ico"
        width={60}
        height={60}
        className="cursor-pointer animate-bounce"
      />
      <img
        src="https://itxgear.com/messenger.ico"
        width={60}
        height={60}
        className="cursor-pointer animate-giatgiat-animation"
      />

      <h3>2 cách với background</h3>
      <div className="bg-neon w-[500px] h-[300px] overflow-auto text-white p-[8px]">
        <h3>Côntent</h3>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
      </div>

      <h3>cách 2</h3>

      <div className="relative w-[500px] h-[300px]">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
          alt="sdsadsd"
          className="absolute w-[100%] h-[100%] z-[0]"
        />
        <div className="absolute w-[100%] h-[100%] z-[1] text-white overflow-auto">
          <h3>Côntent</h3>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
          <p>sádkfk</p>
        </div>
      </div>

      <h3>cách 3: background lặp lại</h3>
      <div className="bg-neon w-[500px] bg-contain bg-center bg-repeat-y  text-white p-[8px]">
        <h3>Côntent</h3>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
        <p>sádkfk</p>
      </div>

      <h3>flex box</h3>
      <div className="flex flex-wrap justify-center w-[100%] bg-slate-500 p-[16px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h3>using grid</h3>
      <div className="flex justify-center w-[100%] bg-slate-500 p-[16px]">
        <div className="w-[30%] grid  grid-cols-2 gap-[4px] bg-slate-500">
          <CardGrid />
          <CardGrid />
          <CardGrid />
          <CardGrid />
          <CardGrid />
        </div>
      </div>
    </main>
  );
}
