import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import createSelectTimes from '../util/createSelectTimes'
import { useDispatch } from 'react-redux'
import { tRangeColor, tScheduleDetail } from '../../index'
import { addSchedule } from '../store/modules/schedule'

export default function AddScheduleModal({
    defaultDate,
    timeIndex,
    isOpen,
    setIsOpen,
}: {
        defaultDate: string
        timeIndex: number
        isOpen: boolean
        setIsOpen: Dispatch<SetStateAction<boolean>
    }) {
        const dispatch = useDispatch()
        const [isSelectStartTime, setIsSelectStartTime] = useState<boolean>(false)
        const [isSelectEndTime, setIsSelectEndTime] = useState<boolean>(false)

        const [title,setTitle] = useState<string>('')
        const [date, setDate] = useState<string>('YYYY-MM-DD')
        const [color, setColor] = useState<tRangeColor>('red')
        const [starHour, setStartHour] = useState<number>(12)
        const [startMinute, setStartMinute] = useState<number>(12)
    }
