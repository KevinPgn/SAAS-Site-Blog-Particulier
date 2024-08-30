import { FormCreateArticle } from '@/components/dashboard/createArticle/FormCreateArticle'

interface CreateArticlePageProps {
  params: {
    siteId: string
  }
}

const CreateArticlePage = ({params}: CreateArticlePageProps) => {
  const siteId = params.siteId
    return (
    <section className='w-full overflow-auto p-7 flex-1'>
      <FormCreateArticle siteId={siteId} />
    </section>
  )
}

export default CreateArticlePage