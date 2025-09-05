import Image from "next/image";
import React from "react";

export default function Card({ imge, icon, title, description, Discover }) {
  return (
    <div className="  bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg ">
        {imge && (
          <Image
            width={588}
            height={500}
            className="object-cover object-top w-full rounded-t-xl"
            src={imge}
            alt="Mountain"
          />
        )}
      </div>
      {icon && (
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <Image
            width={500}
            height={500}
            className="object-cover object-center "
            src={icon}
            alt="Woman looking front"
          />
        </div>
      )}

      <div className="mt-5 flex flex-col items-center">
        <div className="xl:px-20 lg:px-6 py-4 px-6">
          {title && <h2 className=" text-center">{title}</h2>}
          <p className="text-[#9E9E9E] text-center my-6 ">{description}</p>
        </div>
      </div>
      {Discover && (
        <div className="pb-7 mx-8 ">
          <a className="flex items-center justify-center gap-2" href="">
            <p className="font-bold">{Discover}</p>
            <span className="text-white bg-primary-1 rounded-full p-2">→</span>
          </a>
        </div>
      )}
    </div>
  );
}
