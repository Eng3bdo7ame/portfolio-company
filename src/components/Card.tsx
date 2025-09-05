import Image from "next/image";
import React from "react";
import { Service } from "../types/index";

export default function Card({
  image,
  icon,
  title,
  summary,
  discover,
}: Service) {
  return (
    <div className="  bg-white border border-[#EEEEEE] rounded-lg text-gray-900">
      <div className="rounded-t-lg ">
        {image && (
          <Image
            width={588}
            height={500}
            className="object-cover object-top w-full rounded-t-xl"
            src={image}
            alt={title}
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
            alt={`${title} icon`}
          />
        </div>
      )}

      <div className="mt-5 flex flex-col items-center">
        <div className="xl:px-20 lg:px-6 py-4 px-6">
          {title && <h2 className=" text-center">{title}</h2>}
          <p className="text-[#9E9E9E] text-center my-6 ">{summary}</p>
        </div>
      </div>
      {discover && (
        <div className="pb-7 mx-8 ">
          <a className="flex items-center justify-center gap-2" href="">
            <p className="font-bold">{discover}</p>
            <span className="text-white bg-primary-1 rounded-full p-2">→</span>
          </a>
        </div>
      )}
    </div>
  );
}
