// import { Button } from "@/components/ui/button";
// import { INotice } from "@/types/notice";
// import Image from "next/image";

// interface ItemProps {
//   item: INotice;
// }

// const NoticesItem = ({ item }: ItemProps) => {
//   return (
//     <div className="flex flex-col bg-white p-6 rounded-2xl">
//       <Image
//         src={item.imgURL}
//         alt={item.title}
//         width={287}
//         height={178}
//         className="mb-6 w-[287px] h-[178px] object-cover md:w-[294px] lg:w-[315px] rounded-2xl"
//       />
//       <div className="flex justify-between mb-2 items-center">
//         <h3 className="text-xl text-[#2B2B2A] font-bold">{item.title}</h3>
//         <div className="flex items-center">
//           <svg className="w-[16px] h-[16px] fill-[#FFC531]">
//             <use xlinkHref="/sprite.svg#icon-star"></use>
//           </svg>
//           <span className="text-sm text-[#2B2B2A]">{item.popularity}</span>
//         </div>
//       </div>
//       <div className="flex flex-col mb-4 md:h-[30px] w-full overflow-hidden">
//         <ul className="flex gap-[14px]">
//           <li>
//             <p className="text-[10px] text-[rgba(38,38,38,0.5)]">Name</p>
//             <p className="text-xs text-[#262626]">{item.name}</p>
//           </li>

//           <li>
//             <p className="text-[10px] text-[rgba(38,38,38,0.5)]">Birthday</p>
//             <p className="text-xs text-[#262626]">{item.birthday}</p>
//           </li>
//           <li>
//             <p className="text-[10px] text-[rgba(38,38,38,0.5)]">Sex</p>
//             <p className="text-xs text-[#262626]">{item.sex}</p>
//           </li>
//           <li>
//             <p className="text-[10px] text-[rgba(38,38,38,0.5)]">Species</p>
//             <p className="text-xs text-[#262626]">{item.species}</p>
//           </li>
//           <li>
//             <p className="text-[10px] text-[rgba(38,38,38,0.5)]">Category</p>
//             <p className="text-xs text-[#262626]">{item.category}</p>
//           </li>
//         </ul>
//       </div>
//       <p className="text-sm text-[#2B2B2A] font-medium mb-6 md-8 md:h-[36px]">
//         {item.comment}
//       </p>
//       <div>
//         <Button className="py-[14px] text-sm font-inherit font-medium w-[231px] mr-[10px]">
//           Learn more
//         </Button>

//         <Button className="w-[46px] h-[46px] bg-[#FFF4DF]">
//           <svg className="w-[18px] h-[18px] stroke-[#F6B83D] fill-transparent">
//             <use xlinkHref="/sprite.svg#icon-heart"></use>
//           </svg>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default NoticesItem;
