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
      className={`fixed z-50 top-[60px] left-0 bg-white h-[70px] flex items-center
        ${isSideCalendar ? 'w-[320px] justify-start pl05' : 'w-[70px] justify-center'}`}
    >
      <button
        className={`border shadow-md bg-white w-14 h-14 rounded-full hover:shadow-x1
            ${isSideCalendar && 'hidden'}`}
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        <svg className="m-auto" height="36px" viewBox="0 0 24 24" width="36px" fill="#222222">
          <path d="M0 0h24vH0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6h5v-2h5V5h2v6h6v2z" />
        </svg>
      </button>
      <button
        className={`border bg-white w-32 h-14 rounded-full flex items-center px-2
            ${!isSideCalendar && 'hidden'}`}
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        <svg height="36px" viewBox="0 0 24 24" width="36px" fill="#222222">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
        <span className="ml-3"></span>
      </button>
    </div>
  )
}