import Badge from "./Badge";

const Card = ({ company }) => {
  let img_container_style = `w-20 h-20 rounded-lg flex justify-center items-center font-bold border-4 border-${company.company_badge_color}-300`;
  let card_container = `p-6 shadow-xl  border-t-${company.company_badge_color}-300 border-t-4  xl:w-[48%]`;
  return (
    <div className={card_container} key={company.id}>
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-zinc-700 underline ">
            {company.company_name}
          </h3>
          <div className={img_container_style}>
            <img className="w-2/3" src={company.company_logo} />
          </div>
        </div>
        <Badge
          company_type={company.company_type}
          company_badge_color={company.company_badge_color}
        />
        <p className="text-sm text-zinc-500 mt-4 ">
          {company.company_short_description}
        </p>
        <div className="mt-4 flex flex-col md:flex-row gap-2">
          <a
            className="text-sm p-2 underline text-center bg-blue-900 text-white xl:w-2/5 "
            href={company.career_page_link}
          >
            Visit career page
          </a>
          {/* <a className="text-sm  p-2 bg-gray-200 md:w-2/5">
          Add To Track
        </a> */}
        </div>
      </div>
    </div>
  );
};

export default Card;

// Normal Theme :
// import Badge from "./Badge";

// const Card = ({ company }) => {
//   return (
//     <div
//       className="p-6 shadow-xl  border-t-blue-600 border-t-4  xl:w-[48%]"
//       key={company.id}
//     >
//       <div>
//         <div className="flex justify-between items-center">
//           <h3 className="text-lg font-bold text-zinc-700 underline ">
//             {company.company_name}
//           </h3>
//           <div className="w-20 h-20 rounded-lg flex justify-center items-center font-bold border-2">
//             <img className="w-2/3" src={company.company_logo} />
//           </div>
//         </div>
//         {/* <Badge company_type={company.company_type} company_badge_color={company.company_badge_color}/> */}
//         <p
//           className="
//        rounded-sm text-sm bg-blue-300 text-blue-900 shadow-md shadow-blue-200 w-1/4 p-1 px-2 text-center
//        "
//         >
//           {company.company_type}
//         </p>
//         <p className="text-sm text-zinc-500 mt-4 ">
//           {company.company_short_description}
//         </p>
//         <div className="mt-4 flex flex-col md:flex-row gap-2">
//           <a
//             className="text-sm p-2 underline text-center bg-blue-600 text-white xl:w-2/5 "
//             href={company.career_page_link}
//           >
//             Visit career page
//           </a>
//           {/* <a className="text-sm  p-2 bg-gray-200 md:w-2/5">
//           Add To Track
//         </a> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
