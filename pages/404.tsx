import { useRouter } from "next/router"
import { useEffect } from "react"

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])
  
  return (
    <div>404 Not Found</div>
  )
}

export default NotFound