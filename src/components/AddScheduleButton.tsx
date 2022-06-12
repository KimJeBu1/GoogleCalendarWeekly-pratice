import { Dispatch, SetStateAction } from 'react'

export default function AddScheduleButton({
  isSideCalendar,
  isOpenModal,
  setIsOpenModal,
}: {
  isSideCalendar: boolean
  isOpenModal: boolean
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div
      className={`fixed z-50 mt-1.5 left-0 bg-white flex items-center 
        ${isSideCalendar ? 'w-[320px] justify-start pl-4' : 'w-[70px] justify-center'}`}
    >
      <button
        className={`border shadow-md bg-white w-14 h-14 rounded-full 
        ${isSideCalendar && 'hidden'}`}
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        <svg
          className="m-auto"
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 0 24 24"
          width="36px"
          fill="#222222"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
      <button
        className={`border  bg-white w-32
          h-12 rounded-full  flex items-center px-2
          ${!isSideCalendar && 'hidden'}`}
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 0 24 24"
          width="36px"
          fill="#222222"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
        <span className="ml-3">만들기</span>
      </button>
    </div>
  )
}
