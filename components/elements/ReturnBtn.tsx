import { useRouter } from 'next/router'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const ReturnBtn = () => {
  const router = useRouter()
  return (
    <button 
      className="hidden items-center self-start bg-btnGray pr-6 py-2 rounded-lg mb-40 xl:flex"
      onClick={() => router.push('/')}
    >
      <MdKeyboardArrowLeft className="text-arrowGray text-3xl" />
      <p className="uppercase text-arrowGray font-proxima font-[600] text-xs">Return to Job Board</p>
    </button>
  )
}

export default ReturnBtn