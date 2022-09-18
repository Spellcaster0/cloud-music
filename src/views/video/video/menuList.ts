import { getVideoCategory } from '@/service/video'
import { onMounted } from 'vue'

onMounted(() => {
  getVideoCategory().then((res) => {
    console.log(res)
    
  })
})
