'use client'
import { BsPeople, BsCalendarCheck } from 'react-icons/bs';
import { HiOutlineCash } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { Rectangle } from '@/components/Rectangle';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Card, CardBody } from "@nextui-org/react";
import React from 'react';

export default function Dashboard() {

  const rectangles = [
    {
      icon: BsPeople,
      colorIcon: 'primary',
      label: 'Patients',
      value: '832'
    },
    {
      icon: HiOutlineCash,
      colorIcon: 'green-600',
      label: 'Earns',
      value: '$80,647'
    },
    {
      icon: BsCalendarCheck,
      colorIcon: 'blue-500',
      label: 'Appointments',
      value: '22'
    },
    {
      icon: AiOutlineHeart,
      colorIcon: 'pink-300',
      label: 'Treatments',
      value: '22'
    }
  ]

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'hour', label: 'Hour' },
  ];

  const rows = [
    {
      id: 1,
      name: 'John Doe',
      hour: '10:30 AM',
    },
    {
      id: 2,
      name: 'Tesco Market',
      hour: '12:30 PM',
    },
    {
      id: 3,
      name: 'John Mathew Kayne',
      hour: '2:00 PM',
    },
    {
      id: 4,
      name: "Fiorgio Restaurant",
      hour: '4:00 PM',
    },
    {
      id: 5,
      name: 'Ann Marlin',
      hour: '5:00 PM',
    },
    {
      id: 1,
      name: 'John Doe',
      hour: '10:30 AM',
    },
    {
      id: 2,
      name: 'Tesco Market',
      hour: '12:30 PM',
    },
    {
      id: 3,
      name: 'John Mathew Kayne',
      hour: '2:00 PM',
    },
    {
      id: 4,
      name: "Fiorgio Restaurant",
      hour: '4:00 PM',
    },
    {
      id: 5,
      name: 'Ann Marlin',
      hour: '5:00 PM',
    }
  ];

  const [date, setDate] = React.useState<Date | undefined>(new Date())


  return (
    <div className="flex p-8 gap-4 h-auto w-full flex-col">
      <div className='flex gap-4 h-auto w-full'>
        <section className='flex gap-6 h-auto w-1/2'>
          <div className='w-full flex flex-wrap gap-6'>
            {
              rectangles.map((rectangle, index) => (
                <Rectangle key={index} {...rectangle} />
              ))
            }
          </div>
        </section>
        <section className='w-1/2 h-[300px] shadow-md overflow-hidden'>
          <Card>
            <CardBody>
              
              <Table className='overflow-auto h-full bg-white' aria-label="Appointments list">
                <TableHeader>
                  {columns.map((column) =>
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                  )}
                </TableHeader>
                <TableBody>
                  {rows.map((row) =>
                    <TableRow key={row.id}>
                      {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </section>
      </div>

      <section className='bg-white flex'>
      </section>
    </div>
  )
}
