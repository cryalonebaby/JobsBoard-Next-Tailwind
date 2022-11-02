import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import { useRouter } from "next/router"
import ApplyBtn from "../../components/elements/ApplyBtn"
import SectionTitle from "../../components/elements/SectionTitle"
import DetailHead from "../../components/sections/DetailHead"
import AdditionalInfo from "../../components/sections/AdditionalInfo"
import AttachedImages from "../../components/sections/AttachedImages"
import ListBlock from "../../components/sections/ListBlock"
import MobilePrice from "../../components/sections/MobilePrice"
import JobTitle from "../../components/sections/JobTitle"
import TopicBlock from "../../components/sections/TopicBlock"
import ReturnBtn from "../../components/elements/ReturnBtn"
import { IJob } from "../../models/job"
import Map from "../../components/elements/Map"

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

const Details: NextPage = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()
  const { id } = router.query

  const currJob = data.filter((job: IJob) => job.id === id)
  const job: IJob = currJob[0]
  
  return (
    <div className="flex justify-center mt-14 min-w-[400px]">
      <div className="flex flex-col gap-[90px] items-end">
        <div className="flex flex-col gap-[21px] items-center xl:flex-row xl:gap-[130px] xl:items-start">
          <div className="flex flex-col px-[15px] xl:px-0 xl:w-[723px] xl:ml-[70px]">
            <div className="xl:ml-[20px]">
              <DetailHead/>
              <div className="hidden xl:flex">
                <ApplyBtn />
              </div>
              <div className="flex flex-col gap-2 mt-8">
                <JobTitle
                  title={job.title}
                  salary={job.salary}
                />
                <MobilePrice
                  createdAt={job.createdAt}
                  salary={job.salary}
                />
                <p className="text-darkGray text-lg mt-[10px]">
                  {job.description}
                </p>
              </div>
              <TopicBlock
                description={job.description}
              />
            </div>
            <div className="flex flex-col gap-10 items-start">
              {/* List with STATIC INFORMATION FOR DESIGN */}
              <ListBlock/>
              <div className="flex self-center xl:self-start xl:ml-[20px]">
                <ApplyBtn />
              </div>
            </div>
            <div className="xl:ml-[20px]">
              <div className="flex flex-col-reverse xl:flex-col">
                <AdditionalInfo
                  types={job.employment_type}
                  benefits={job.benefits}
                />
                <AttachedImages
                  images={job.pictures}
                />
              </div>
              <div className="flex xl:hidden mt-20">
                <SectionTitle title="Contacts"/>
              </div>
            </div>
          </div>
          <Map
            name={job.name}
            address={job.address}
            email={job.email}
            phone={job.phone}
            location={job.location}
          />
        </div>
        <ReturnBtn/>
      </div>
    </div>
  )
}

export default Details