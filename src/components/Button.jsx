import React from 'react'

export default function Button({ btnContent }) {
    return (
        <button
            type="button"
            className="w-[261px] text-[18px] leading-[26px] tracking-[1px] rounded-full bg-primary-1 px-[18px] py-[12px] text-sm font-semibold text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 ">
            {btnContent}
        </button>
    )
}
