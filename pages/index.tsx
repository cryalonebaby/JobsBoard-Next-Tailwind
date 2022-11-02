import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { IJob } from '../models/job'
import Card from '../components/elements/Card'
import Pagination from '../components/elements/Pagination'
import usePagination from '../hooks/usePagination'

export const getServerSideProps: GetServerSideProps = async () => {
  const link = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
  const res = await fetch(link)
  const data: IJob[] = await res.json()
  return {
    props: {
      data
    }
  }
}

const Home: NextPage = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const {
    currPage, 
    pages, 
    firstSlice, 
    secondSlice, 
    setCurrPage, 
    nextPage, 
    prevPage
  } = usePagination(data, 5) // initial array of data and items per page
  
  return (
    <div className='px-2 pt-7 pb-16 min-w-[414px] flex flex-col gap-8 items-center'>
      <div className='flex flex-col items-center gap-2 max-w-[1400px] min-w-[396px]'>
        {data.slice(firstSlice, secondSlice).map((job: IJob) => (
          <Card
            key={job.id}
            id={job.id}
            img={job.pictures[0]}
            title={job.title}
            name={job.name}
            createdAt={job.createdAt}
            address={job.address}
            benefits={job.benefits}
            employment_type={job.employment_type}
          />
        ))}
      </div>
      <Pagination
        pages={pages}
        currPage={currPage}
        setCurrPage={setCurrPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  )
}

export default Home
