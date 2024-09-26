import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server:{
//     port:3000
    
//   }

// })
export default defineConfig(({command})=>{
  if(command == 'serve'){
   return{
    plugins:[react()],
    envPrefix:'APP',
    server:{
      port:3001
    }
   }
  }else{
    return{
      server:{
        port:3000
      }
    }
  }
})
