import app from "./app.js"
import { connected } from './config/db.js'

const PORT=process.env.PORT || 1200;
const host = app.listen(PORT, ()=>{
    connected();
    console.log(`Server is running at port ${PORT}`) 
})